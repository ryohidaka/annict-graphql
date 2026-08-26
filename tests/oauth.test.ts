import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { AnnictOAuth } from "@/oauth";

describe("AnnictOAuth.getAuthorizeUrl", () => {
  it("builds the authorize URL with default scope", () => {
    const oauth = new AnnictOAuth({
      clientId: "client-id",
      clientSecret: "client-secret",
      redirectUri: "urn:ietf:wg:oauth:2.0:oob",
    });

    const url = oauth.getAuthorizeUrl();

    expect(url).toBe(
      "https://annict.com/oauth/authorize?client_id=client-id&response_type=code&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&scope=read",
    );
  });

  it("builds the authorize URL with read write scope", () => {
    const oauth = new AnnictOAuth({
      clientId: "client-id",
      clientSecret: "client-secret",
      redirectUri: "http://example.com",
    });

    const url = oauth.getAuthorizeUrl({ scope: "read write" });

    expect(url).toContain("scope=read+write");
  });
});

describe("AnnictOAuth.token", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the access token", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          access_token: "token-abc",
          token_type: "bearer",
          scope: "read write",
          created_at: 1465718311,
        }),
        { status: 200 },
      ),
    );

    const oauth = new AnnictOAuth({
      clientId: "client-id",
      clientSecret: "client-secret",
      redirectUri: "http://example.com",
    });

    const result = await oauth.token({ code: "auth-code" });

    expect(result).toEqual({
      accessToken: "token-abc",
      tokenType: "bearer",
      scope: "read write",
      createdAt: 1465718311,
    });
  });

  it("throws when the exchange fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 400 }));

    const oauth = new AnnictOAuth({
      clientId: "client-id",
      clientSecret: "client-secret",
      redirectUri: "http://example.com",
    });

    await expect(oauth.token({ code: "invalid" })).rejects.toThrow(
      "Failed to exchange code for token: 400",
    );
  });
});

describe("AnnictOAuth.tokenInfo", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns token info", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          resource_owner_id: 2,
          scopes: ["read", "write"],
          expires_in_seconds: null,
          application: { uid: "app-uid" },
          created_at: 1461949248,
        }),
        { status: 200 },
      ),
    );

    const oauth = new AnnictOAuth({
      clientId: "client-id",
      clientSecret: "client-secret",
      redirectUri: "http://example.com",
    });

    const result = await oauth.tokenInfo("token-abc");

    expect(result).toEqual({
      resourceOwnerId: 2,
      scopes: ["read", "write"],
      expiresInSeconds: null,
      application: { uid: "app-uid" },
      createdAt: 1461949248,
    });
  });

  it("throws when fetching token info fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 401 }));

    const oauth = new AnnictOAuth({
      clientId: "client-id",
      clientSecret: "client-secret",
      redirectUri: "http://example.com",
    });

    await expect(oauth.tokenInfo("invalid-token")).rejects.toThrow(
      "Failed to fetch token info: 401",
    );
  });
});

describe("AnnictOAuth.revoke", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("resolves when revocation succeeds", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("{}", { status: 200 }));

    const oauth = new AnnictOAuth({
      clientId: "client-id",
      clientSecret: "client-secret",
      redirectUri: "http://example.com",
    });

    await expect(oauth.revoke("token-abc")).resolves.toBeUndefined();
  });

  it("throws when revocation fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 401 }));

    const oauth = new AnnictOAuth({
      clientId: "client-id",
      clientSecret: "client-secret",
      redirectUri: "http://example.com",
    });

    await expect(oauth.revoke("token-abc")).rejects.toThrow("Failed to revoke token: 401");
  });
});
