const ANNICT_OAUTH_BASE = "https://api.annict.com/oauth";
const ANNICT_AUTHORIZE_URL = "https://annict.com/oauth/authorize";

export interface AnnictOAuthOptions {
  /** Client ID of the registered Annict application */
  clientId: string;
  /** Client secret of the registered Annict application */
  clientSecret: string;
  /**
   * Redirect URI configured for the application. Use
   * `"urn:ietf:wg:oauth:2.0:oob"` to display the code instead of
   * redirecting.
   */
  redirectUri: string;
}

export interface AuthorizeUrlParams {
  /** Requested scopes. Defaults to `"read"` if omitted. */
  scope?: "read" | "read write";
}

export interface ExchangeCodeParams {
  /** Authorization code obtained from the authorize step */
  code: string;
}

export interface AnnictAccessToken {
  accessToken: string;
  tokenType: string;
  scope: string;
  createdAt: number;
}

export interface AnnictTokenInfo {
  resourceOwnerId: number;
  scopes: string[];
  expiresInSeconds: number | null;
  application: {
    uid: string;
  };
  createdAt: number;
}

/**
 * Client for the Annict OAuth 2.0 flow.
 *
 * This targets Annict's REST-based OAuth endpoints
 * (`https://annict.com/oauth/*`, `https://api.annict.com/oauth/*`),
 * which are separate from the GraphQL API used by `AnnictClient`.
 *
 * @see https://developers.annict.com/docs/authentication/oauth
 */
export class AnnictOAuth {
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly redirectUri: string;

  constructor(options: AnnictOAuthOptions) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.redirectUri = options.redirectUri;
  }

  /**
   * Builds the URL to redirect the user to for authorization.
   *
   * @param params - Authorization request options
   * @returns The full authorize URL
   * @see https://developers.annict.com/docs/authentication/oauth#get-oauthauthorize
   */
  getAuthorizeUrl(params: AuthorizeUrlParams = {}): string {
    const url = new URL(ANNICT_AUTHORIZE_URL);
    url.searchParams.set("client_id", this.clientId);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("redirect_uri", this.redirectUri);
    url.searchParams.set("scope", params.scope ?? "read");
    return url.toString();
  }

  /**
   * Exchanges an authorization code for an access token.
   *
   * @param params - The authorization code obtained from the redirect
   * @returns The issued access token
   * @see https://developers.annict.com/docs/authentication/oauth#post-oauthtoken
   */
  async token(params: ExchangeCodeParams): Promise<AnnictAccessToken> {
    const body = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: "authorization_code",
      redirect_uri: this.redirectUri,
      code: params.code,
    });

    const response = await fetch(`${ANNICT_OAUTH_BASE}/token`, {
      method: "POST",
      body,
    });

    if (!response.ok) {
      throw new Error(`Failed to exchange code for token: ${response.status}`);
    }

    const data = (await response.json()) as {
      access_token: string;
      token_type: string;
      scope: string;
      created_at: number;
    };

    return {
      accessToken: data.access_token,
      tokenType: data.token_type,
      scope: data.scope,
      createdAt: data.created_at,
    };
  }

  /**
   * Fetches information about an access token.
   *
   * @param accessToken - The access token to inspect
   * @returns Token metadata
   * @see https://developers.annict.com/docs/authentication/oauth#get-oauthtokeninfo
   */
  async tokenInfo(accessToken: string): Promise<AnnictTokenInfo> {
    const response = await fetch(`${ANNICT_OAUTH_BASE}/token/info`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch token info: ${response.status}`);
    }

    const data = (await response.json()) as {
      resource_owner_id: number;
      scopes: string[];
      expires_in_seconds: number | null;
      application: { uid: string };
      created_at: number;
    };

    return {
      resourceOwnerId: data.resource_owner_id,
      scopes: data.scopes,
      expiresInSeconds: data.expires_in_seconds,
      application: data.application,
      createdAt: data.created_at,
    };
  }

  /**
   * Revokes an access token.
   *
   * @param accessToken - The access token to revoke
   * @see https://developers.annict.com/docs/authentication/oauth#post-oauthrevoke
   */
  async revoke(accessToken: string): Promise<void> {
    const body = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      token: accessToken,
    });

    const response = await fetch(`${ANNICT_OAUTH_BASE}/revoke`, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
      body,
    });

    if (!response.ok) {
      throw new Error(`Failed to revoke token: ${response.status}`);
    }
  }
}
