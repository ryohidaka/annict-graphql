import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createUserResource } from "@/resources/user";

describe("User.get", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the matching user", async () => {
    const mockUser = {
      id: "VXNlci0x",
      annictId: 1,
      name: "Test User",
      username: "testuser",
      avatarUrl: null,
      backgroundImageUrl: null,
      description: "",
      url: null,
      email: null,
      createdAt: "2020-01-01T00:00:00Z",
      followersCount: 10,
      followingsCount: 5,
      notificationsCount: null,
      recordsCount: 10,
      wannaWatchCount: 3,
      watchingCount: 2,
      watchedCount: 5,
      onHoldCount: 0,
      stopWatchingCount: 0,
      viewerCanFollow: true,
      viewerIsFollowing: false,
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({ user: mockUser });

    const user = createUserResource(client);
    const result = await user.get({ username: "testuser" });

    expect(result).toEqual(mockUser);
  });

  it("returns null when the user is not found", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({ user: null });

    const user = createUserResource(client);
    const result = await user.get({ username: "nonexistent" });

    expect(result).toBeNull();
  });
});

describe("User.library", () => {
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
      user: { libraryEntries: { edges: [{ node: mockEntry }] } },
    });

    const result = await createUserResource(client).library({ username: "testuser" });

    expect(result).toEqual([mockEntry]);
  });
});

describe("User.records", () => {
  it("returns a flat list of records", async () => {
    const mockRecord = { id: "UmVjb3JkLTE=", comment: "Great episode", ratingState: "GREAT" };
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      user: { records: { edges: [{ node: mockRecord }] } },
    });

    const result = await createUserResource(client).records({ username: "testuser", first: 1 });

    expect(result).toEqual([mockRecord]);
  });
});

describe("User.works", () => {
  it("returns works", async () => {
    const mockWork = { id: "V29yay0x", annictId: 1, title: "Test Work" };
    const client = new GraphQLClient("https://api.annict.com/graphql");
    const requestSpy = vi.spyOn(client, "request");
    const user = createUserResource(client);

    requestSpy.mockResolvedValueOnce({ user: { works: { edges: [{ node: mockWork }] } } });
    expect(await user.works({ username: "testuser", first: 1 })).toEqual([mockWork]);
  });
});
