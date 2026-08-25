import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createStatusResource } from "@/resources/me/status";

describe("Me.Status.update", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the updated work", async () => {
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
      watchersCount: 14129,
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
      viewerStatusState: "WATCHING",
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      updateStatus: { work: mockWork },
    });

    const status = createStatusResource(client);
    const result = await status.update({ workId: "V29yay0xODA4", state: "WATCHING" });

    expect(result).toEqual(mockWork);
  });

  it("returns null when the update fails", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      updateStatus: { work: null },
    });

    const status = createStatusResource(client);
    const result = await status.update({ workId: "invalid", state: "WATCHED" });

    expect(result).toBeNull();
  });
});
