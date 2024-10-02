import { _ as __nuxt_component_0 } from "./nuxt-link-Cn6CZfW3.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "destr";
import "klona";
const _imports_0 = "" + __buildAssetsURL("error-404.BGlOzxqo.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-page container" }, _attrs))}><div class="col-md-8 col-12 offset-md-2"><div class="text-center"><img class="img-error"${ssrRenderAttr("src", _imports_0)} alt="Not Found"><h1 class="error-title">NOT FOUND</h1><p class="fs-5 text-gray-600">The page you are looking not found.</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "btn btn-lg btn-outline-primary mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Go Home`);
          } else {
            return [
              createTextVNode("Go Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-CPjfJiHz.js.map
