import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createViewerResource } from "@/resources/viewer";

describe("Viewer.get", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the authenticated user", async () => {
    const mockViewer = {
      id: "VXNlci0x",
      annictId: 1,
      name: "Test User",
      username: "testuser",
      avatarUrl: null,
      backgroundImageUrl: null,
      description: "",
      url: null,
      email: "test@example.com",
      createdAt: "2020-01-01T00:00:00Z",
      followersCount: 10,
      followingsCount: 5,
      notificationsCount: 0,
      recordsCount: 10,
      wannaWatchCount: 3,
      watchingCount: 2,
      watchedCount: 5,
      onHoldCount: 0,
      stopWatchingCount: 0,
      viewerCanFollow: false,
      viewerIsFollowing: false,
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    const requestSpy = vi.spyOn(client, "request").mockResolvedValue({ viewer: mockViewer });

    const viewer = createViewerResource(client);
    const result = await viewer.get();

    expect(result).toEqual(mockViewer);
    expect(requestSpy).toHaveBeenCalledOnce();
  });

  it("throws when the viewer is not returned", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({ viewer: null });

    const viewer = createViewerResource(client);

    await expect(viewer.get()).rejects.toThrow("Failed to fetch viewer");
  });
});

describe("Viewer.library", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a flat list of library entries", async () => {
    const mockEntry = {
      id: "TGlbrYXJ5RW50cnktMQ==",
      note: "Watching this season",
      status: { state: "WATCHING" },
      user: { id: "VXNlci0x", username: "testuser" },
      work: { id: "V29yay0x", annictId: 1, title: "Test Work" },
      nextEpisode: null,
      nextProgram: null,
    };
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      viewer: { libraryEntries: { edges: [{ node: mockEntry }] } },
    });

    const result = await createViewerResource(client).library({ first: 1 });

    expect(result).toEqual([mockEntry]);
  });
});

describe("Viewer.records", () => {
  it("returns a flat list of records", async () => {
    const mockRecord = { id: "UmVjb3JkLTE=", comment: "Great episode", ratingState: "GREAT" };
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      viewer: { records: { edges: [{ node: mockRecord }] } },
    });

    const result = await createViewerResource(client).records({ first: 1 });

    expect(result).toEqual([mockRecord]);
  });
});

describe("Viewer.works", () => {
  it("returns works", async () => {
    const mockWork = { id: "V29yay0x", annictId: 1, title: "Test Work" };
    const client = new GraphQLClient("https://api.annict.com/graphql");
    const requestSpy = vi.spyOn(client, "request");
    const viewer = createViewerResource(client);

    requestSpy.mockResolvedValueOnce({ viewer: { works: { edges: [{ node: mockWork }] } } });
    expect(await viewer.works({ first: 1 })).toEqual([mockWork]);
  });
});

describe("Viewer.programs", () => {
  it("returns works and programs", async () => {
    const mockProgram = {
      id: "UHJvZ3JhbS0x",
      annictId: 1,
      startedAt: "2020-01-01T00:00:00Z",
      state: "PUBLISHED",
      rebroadcast: false,
      episode: {
        id: "RXBpc29kZS0x",
        annictId: 1,
        title: "Episode 1",
        number: 1,
        numberText: "第1話",
      },
      work: { id: "V29yay0x", annictId: 1, title: "Test Work" },
      channel: { id: "Q2hhbm5lbC0x", annictId: 1, name: "Test Channel" },
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    const requestSpy = vi.spyOn(client, "request");
    const viewer = createViewerResource(client);

    requestSpy.mockResolvedValueOnce({ viewer: { programs: { edges: [{ node: mockProgram }] } } });
    expect(await viewer.programs({ first: 1 })).toEqual([mockProgram]);
  });
});

describe("Viewer connection fallbacks", () => {
  it("returns empty arrays for null connections and nodes", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      viewer: {
        libraryEntries: null,
        records: null,
        works: null,
        programs: { edges: [null] },
      },
    });
    const viewer = createViewerResource(client);
    expect(await viewer.library()).toEqual([]);
    expect(await viewer.records()).toEqual([]);
    expect(await viewer.works()).toEqual([]);
    expect(await viewer.programs()).toEqual([]);
  });
});
