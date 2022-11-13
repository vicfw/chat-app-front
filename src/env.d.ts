/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOST_URI: string;
  readonly VITE_MULTI_AVATAR_APIKEY: string;
  readonly VITE_USER_LOCALSTORAGE_KEY: string;
  readonly VITE_BASE_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
