import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createRecordResource } from "@/resources/me/record";

describe("Me.Record.create", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the created record", async () => {
    const mockRecord = {
      id: "UmVjb3JkLTE=",
      annictId: 1,
      comment: "Great episode",
      commentsCount: 0,
      rating: null,
      ratingState: "GREAT",
      likesCount: 0,
      facebookClickCount: 0,
      twitterClickCount: 0,
      modified: false,
      createdAt: "2026-08-13T00:00:00Z",
      updatedAt: "2026-08-13T00:00:00Z",
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    const requestSpy = vi.spyOn(client, "request").mockResolvedValue({
      createRecord: { record: mockRecord },
    });

    const record = createRecordResource(client);
    const result = await record.create({
      episodeId: "RXBpc29kZS0x",
      comment: "Great episode",
      ratingState: "GREAT",
    });

    expect(result).toEqual(mockRecord);
    expect(requestSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ episodeId: "RXBpc29kZS0x" }),
    );
  });

  it("returns null when creation fails", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      createRecord: { record: null },
    });

    const record = createRecordResource(client);
    const result = await record.create({ episodeId: "invalid" });

    expect(result).toBeNull();
  });
});

describe("Me.Record.update", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the updated record", async () => {
    const mockRecord = {
      id: "UmVjb3JkLTE=",
      annictId: 1,
      comment: "Updated comment",
      commentsCount: 0,
      rating: null,
      ratingState: "GOOD",
      likesCount: 0,
      facebookClickCount: 0,
      twitterClickCount: 0,
      modified: true,
      createdAt: "2026-08-13T00:00:00Z",
      updatedAt: "2026-08-13T00:01:00Z",
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      updateRecord: { record: mockRecord },
    });

    const record = createRecordResource(client);
    const result = await record.update({
      recordId: "UmVjb3JkLTE=",
      comment: "Updated comment",
      ratingState: "GOOD",
    });

    expect(result).toEqual(mockRecord);
  });

  it("returns null when the update fails", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({ updateRecord: { record: null } });
    const record = createRecordResource(client);
    expect(await record.update({ recordId: "invalid" })).toBeNull();
  });
});

describe("Me.Record.delete", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the parent episode", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      deleteRecord: { episode: { id: "RXBpc29kZS0x" } },
    });

    const record = createRecordResource(client);
    const result = await record.delete("UmVjb3JkLTE=");

    expect(result).toEqual({ id: "RXBpc29kZS0x" });
  });

  it("returns null when deletion fails", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      deleteRecord: { episode: null },
    });

    const record = createRecordResource(client);
    const result = await record.delete("invalid");

    expect(result).toBeNull();
  });
});
