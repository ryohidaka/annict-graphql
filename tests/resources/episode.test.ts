import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createEpisodeResource } from "@/resources/episode";

describe("Episode.search", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a flat list of episodes", async () => {
    const mockEpisode = {
      id: "RXBpc29kZS0x",
      annictId: 1,
      title: "伝統ある古典部の再生",
      number: 1,
      numberText: "第1話",
      sortNumber: 1,
      recordsCount: 520,
      recordCommentsCount: 23,
      satisfactionRate: 93.94,
      viewerDidTrack: true,
      viewerRecordsCount: 1,
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchEpisodes: { edges: [{ node: mockEpisode }] },
    });

    const episode = createEpisodeResource(client);
    const result = await episode.search({ annictIds: [1] });

    expect(result).toEqual([mockEpisode]);
  });

  it("returns an empty array when no episodes match", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchEpisodes: { edges: [{ node: null }] },
    });

    const episode = createEpisodeResource(client);
    const result = await episode.search({ annictIds: [999999] });

    expect(result).toEqual([]);
  });

  it("returns an empty array when the connection is null", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({ searchEpisodes: null });
    expect(await createEpisodeResource(client).search()).toEqual([]);
  });
});
