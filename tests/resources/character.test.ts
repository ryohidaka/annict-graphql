import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createCharacterResource } from "@/resources/character";

describe("Character.search", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a flat list of characters", async () => {
    const mockCharacter = {
      id: "Q2hhcmFjdGVyLTE1NDk0",
      annictId: 15494,
      name: "千反田える",
      nameEn: "",
      nameKana: "",
      nickname: "",
      nicknameEn: "",
      age: "",
      ageEn: "",
      birthday: "",
      birthdayEn: "",
      bloodType: "",
      bloodTypeEn: "",
      height: "",
      heightEn: "",
      weight: "",
      weightEn: "",
      nationality: "",
      nationalityEn: "",
      occupation: "",
      occupationEn: "",
      description: "",
      descriptionEn: "",
      descriptionSource: "",
      descriptionSourceEn: "",
      favoriteCharactersCount: 65,
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchCharacters: { edges: [{ node: mockCharacter }] },
    });

    const character = createCharacterResource(client);
    const result = await character.search({ names: ["千反田える"] });

    expect(result).toEqual([mockCharacter]);
  });

  it("returns an empty array when no characters match", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      searchCharacters: { edges: [{ node: null }] },
    });

    const character = createCharacterResource(client);
    const result = await character.search({ names: ["nonexistent"] });

    expect(result).toEqual([]);
  });

  it("returns an empty array when the connection is null", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({ searchCharacters: null });
    expect(await createCharacterResource(client).search()).toEqual([]);
  });
});
