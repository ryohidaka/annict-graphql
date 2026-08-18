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
