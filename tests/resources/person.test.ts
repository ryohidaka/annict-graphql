import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createPersonResource } from "@/resources/person";

describe("Person.search", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a flat list of people", async () => {
    const mockPerson = {
      id: "UGVyc29uLTU1OQ==",
      annictId: 559,
      name: "花澤香菜",
      nameEn: "Hanazawa, Kana",
      nameKana: "はなざわかな",
      nickname: "かなちゃん",
      nicknameEn: "",
      birthday: "1989-02-25",
      bloodType: "ab",
      height: "156",
      genderText: "女性",
      castsCount: 368,
      staffsCount: 0,
      favoritePeopleCount: 379,
      url: "http://www.hanazawakana-music.net/",
      urlEn: "",
      wikipediaUrl: "https://ja.wikipedia.org/wiki/%E8%8A%B1%E6%BE%A4%E9%A6%99%E8%8F%9C",
      wikipediaUrlEn: "",
      twitterUsername: "hanazawa_staff",
      twitterUsernameEn: "",
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchPeople: { edges: [{ node: mockPerson }] },
    });

    const person = createPersonResource(client);
    const result = await person.search({ names: ["花澤香菜"] });

    expect(result).toEqual([mockPerson]);
  });

  it("returns an empty array when no people match", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchPeople: { edges: [] },
    });

    const person = createPersonResource(client);
    const result = await person.search({ names: ["nonexistent"] });

    expect(result).toEqual([]);
  });
});
