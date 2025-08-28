/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly OAUTH_GITHUB_CLIENT_ID: string;
  readonly OAUTH_GITHUB_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}