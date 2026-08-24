import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createNodeResource } from "@/resources/node";

describe("Node.get", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the matching node", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      node: { id: "VXNlci0y" },
    });

    const node = createNodeResource(client);
    const result = await node.get("VXNlci0y");

    expect(result).toEqual({ id: "VXNlci0y" });
  });

  it("returns null when the node does not exist", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({ node: null });

    const node = createNodeResource(client);
    const result = await node.get("invalid");

    expect(result).toBeNull();
  });
});

describe("Node.getMany", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns matching nodes, with null for missing IDs", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      nodes: [{ id: "VXNlci0y" }, null],
    });

    const node = createNodeResource(client);
    const result = await node.getMany(["VXNlci0y", "invalid"]);

    expect(result).toEqual([{ id: "VXNlci0y" }, null]);
  });
});
