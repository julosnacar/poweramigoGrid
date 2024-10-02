import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "error"
declare module "../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@18.11.11_ioredis@5.4.1_magicast@0.3.5_rollup@4._7bnozvsa3rzpo6slnv67g3cazu/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}