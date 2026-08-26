import { AnnictOAuth, AnnictClient } from "annict-graphql";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const oauth = new AnnictOAuth({
  clientId: process.env.ANNICT_CLIENT_ID!,
  clientSecret: process.env.ANNICT_CLIENT_SECRET!,
  redirectUri: "urn:ietf:wg:oauth:2.0:oob",
});

// 1. Direct the user to this URL to authorize the application.
const authorizeUrl = oauth.getAuthorizeUrl({ scope: "read write" });
console.log(`Visit this URL to authorize: ${authorizeUrl}`);

// 2. After authorizing, enter the code shown by Annict.
const readline = createInterface({ input, output });
const code = await readline.question("Enter the authorization code: ");
readline.close();
const token = await oauth.token({ code });
console.log(`Access token: ${token.accessToken}`);
console.log(`Scope: ${token.scope}`);

// 3. Use the access token with AnnictClient as usual.
const annict = new AnnictClient(token.accessToken);
const viewer = await annict.Viewer.get();
console.log(`Authenticated as ${viewer.name}`);

// Output:
// Visit this URL to authorize: https://annict.com/oauth/authorize?client_id=...
// Access token: 58468586b6f4c29e88a8d9b7f3babb8364fec9991f2681081cbfd849d7c11a91
// Scope: read write
// Authenticated as Shimba, Koji
