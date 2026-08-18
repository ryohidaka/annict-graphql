import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

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
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        scalars: {
          DateTime: "string",
          ID: "string",
        },
        enumsAsTypes: false,
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
