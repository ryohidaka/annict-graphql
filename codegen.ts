import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const scalars = {
  DateTime: "string",
  ID: "string",
};

const config: CodegenConfig = {
  schema: {
    "https://api.annict.com/graphql": {
      headers: {
        Authorization: `Bearer ${process.env.ANNICT_ACCESS_TOKEN}`,
      },
    },
  },
  documents: ["src/resources/**/*.ts"],
  generates: {
    "src/generated/types.ts": {
      plugins: ["typescript"],
      config: {
        scalars,
        enumsAsTypes: true,
        strictScalars: true,
      },
    },
    "src/generated/graphql.ts": {
      preset: "import-types",
      presetConfig: {
        typesPath: "./types",
      },
      plugins: ["typescript-operations"],
      config: {
        scalars,
        enumsAsTypes: true,
        strictScalars: true,
      },
    },
  },
  ignoreNoDocuments: true,
  hooks: {
    afterOneFileWrite: "vp check --fix",
  },
};

export default config;
