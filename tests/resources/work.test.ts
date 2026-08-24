import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createWorkResource } from "@/resources/work";

describe("Work.search", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a flat list of works", async () => {
    const mockWork = {
      id: "V29yay0xODA4",
      annictId: 1808,
      title: "氷菓",
      titleEn: "Hyouka",
      titleKana: "ひょうか",
      titleRo: "Hyouka",
      media: "TV",
      seasonName: "SPRING",
      seasonYear: 2012,
      episodesCount: 24,
      noEpisodes: false,
      watchersCount: 14122,
      reviewsCount: 125,
      satisfactionRate: 92.93,
      malAnimeId: "12189",
      syobocalTid: 2495,
      officialSiteUrl: "http://www.kotenbu.com/",
      officialSiteUrlEn: "",
      wikipediaUrl: "https://ja.wikipedia.org/wiki/〈古典部〉シリーズ",
      wikipediaUrlEn: "",
      twitterUsername: "",
      twitterHashtag: "",
      viewerStatusState: "WATCHED",
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    const requestSpy = vi.spyOn(client, "request").mockResolvedValue({
      searchWorks: { edges: [{ node: mockWork }] },
    });

    const work = createWorkResource(client);
    const result = await work.search({ titles: ["Hyouka"] });

    expect(result).toEqual([mockWork]);
    expect(requestSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ titles: ["Hyouka"] }),
    );
  });

  it("returns an empty array when no works match", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchWorks: { edges: [] },
    });

    const work = createWorkResource(client);
    const result = await work.search({ titles: ["nonexistent"] });

    expect(result).toEqual([]);
  });
});
