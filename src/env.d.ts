/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOST_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
