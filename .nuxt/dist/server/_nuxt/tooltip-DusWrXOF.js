import { _ as __nuxt_component_0 } from "./nuxt-link-Cn6CZfW3.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { a as useNuxtApp } from "../server.mjs";
import "ufo";
import "hookable";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tooltip",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-heading" }, _attrs))}><div class="page-title"><div class="row"><div class="col-12 col-md-6 order-md-1 order-last"><h3>Tooltip</h3><p class="text-subtitle text-muted">The tooltip, also known as infotip or hint, is a common graphical user interface element in which.</p></div><div class="col-12 col-md-6 order-md-2 order-first"><nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end"><ol class="breadcrumb"><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dashboard`);
          } else {
            return [
              createTextVNode("Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page">Tooltip</li></ol></nav></div></div></div><section class="section"><div class="row"><div class="col-md-6 col-12"><div class="card"><div class="card-header"><h5>Basic Tooltip</h5></div><div class="card-body"><button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"> Tooltip on top </button><button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right"> Tooltip on right </button><button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom"> Tooltip on bottom </button><button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left"> Tooltip on left </button></div></div></div><div class="col-md-6 col-12"><div class="card"><div class="card-header"><h5>Tooltip in Text</h5></div><div class="card-body"> Tight pants next level keffiyeh <a href="#" data-bs-toggle="tooltip" title="Some tooltip text!">you probably</a> haven&#39;t heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney&#39;s fixie sustainable quinoa 8-bit american apparel <a href="#" data-bs-toggle="tooltip" title="Another tooltip text!">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney&#39;s cleanse vegan chambray. A really ironic artisan <a href="#" data-bs-toggle="tooltip" title="Another here too!">whatever keytar</a>, scenester farm-to-table banksy Austin twitter handle freegan cred raw denim single-origin coffee viral. </div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=tooltip-DusWrXOF.js.map
