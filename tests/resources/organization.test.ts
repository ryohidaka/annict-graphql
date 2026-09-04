import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createOrganizationResource } from "@/resources/organization";

describe("Organization.search", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a flat list of organizations", async () => {
    const mockOrg = {
      id: "T3JnYW5pemF0aW9uLTc0",
      annictId: 74,
      name: "京都アニメーション",
      nameEn: "Kyoto Animation",
      nameKana: "きょうとあにめーしょん",
      url: "http://www.kyotoanimation.co.jp/",
      urlEn: "",
      wikipediaUrl:
        "https://ja.wikipedia.org/wiki/%E4%BA%AC%E9%83%BD%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3",
      wikipediaUrlEn: "",
      twitterUsername: "kyoani",
      twitterUsernameEn: "",
      staffsCount: 95,
      favoriteOrganizationsCount: 545,
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchOrganizations: { edges: [{ node: mockOrg }] },
    });

    const organization = createOrganizationResource(client);
    const result = await organization.search({ names: ["京都アニメーション"] });

    expect(result).toEqual([mockOrg]);
  });

  it("returns an empty array when no organizations match", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchOrganizations: { edges: [{ node: null }] },
    });

    const organization = createOrganizationResource(client);
    const result = await organization.search({ names: ["nonexistent"] });

    expect(result).toEqual([]);
  });

  it("returns an empty array when the connection is null", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({ searchOrganizations: null });
    expect(await createOrganizationResource(client).search()).toEqual([]);
  });
});
