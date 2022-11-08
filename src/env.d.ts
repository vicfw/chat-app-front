/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly HOST_URI: string;
  readonly MULTIAVATAR_APIKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
