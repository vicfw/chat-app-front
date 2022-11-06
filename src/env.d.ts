/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly HOST_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
