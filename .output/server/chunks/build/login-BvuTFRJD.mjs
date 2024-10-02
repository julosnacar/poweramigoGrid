import { mergeProps, useSSRContext, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, s as storeToRefs, b as useRouter } from './server.mjs';
import { u as useAuthStore } from './auth-DblS5Fe7.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "UserName",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    storeToRefs(useAuthStore());
    useRouter();
    const user = ref({ email: "", password: "" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="form-body"><div class="form-group"><label for="feedback2" class="sr-only">Email</label><input type="text" id="txtEmail" class="form-control" placeholder="Email" name="email"${ssrRenderAttr("value", unref(user).email)}></div><div class="form-group"><label for="feedback2" class="sr-only">Password</label><input type="password" id="txtPassword" class="form-control" placeholder="password" name="email"${ssrRenderAttr("value", unref(user).password)}></div></div><div class="form-actions d-flex justify-content-end"><button class="btn btn-primary me-1">Login</button></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserName.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UserName = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="row"><div class="col-xl-4 col-md-6 col-sm-12"><div class="card"><div class="card-content"><div class="card-body"><h4 class="card-title">Login</h4><form class="form" method="post">`);
  _push(ssrRenderComponent(_component_UserName, null, null, _parent));
  _push(`</form></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-BvuTFRJD.mjs.map
