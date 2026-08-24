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
