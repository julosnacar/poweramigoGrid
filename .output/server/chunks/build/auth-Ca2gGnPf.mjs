import { d as defineNuxtRouteMiddleware, s as storeToRefs, n as navigateTo } from './server.mjs';
import { u as useAuthStore, b as useCookie } from './auth-DblS5Fe7.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const auth = defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const token = useCookie("token");
  if (token.value) {
    authenticated.value = true;
  }
  if (token.value && (to == null ? void 0 : to.name) === "login") {
    return navigateTo("/");
  }
  if (!token.value && (to == null ? void 0 : to.name) !== "login") {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-Ca2gGnPf.mjs.map
