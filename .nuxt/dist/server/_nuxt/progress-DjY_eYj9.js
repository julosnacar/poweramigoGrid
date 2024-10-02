import { _ as __nuxt_component_0 } from "./nuxt-link-Cn6CZfW3.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-heading" }, _attrs))}><div class="page-title"><div class="row"><div class="col-12 col-md-6 order-md-1 order-last"><h3>Progress</h3><p class="text-subtitle text-muted">Examples for how to use Bootstrap’s included navigation components. </p></div><div class="col-12 col-md-6 order-md-2 order-first"><nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end"><ol class="breadcrumb"><li class="breadcrumb-item">`);
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
  _push(`</li><li class="breadcrumb-item active" aria-current="page">Progress</li></ol></nav></div></div></div><section class="section"><div class="card"><div class="card-header"><h4>Default</h4></div><div class="card-body"><p>Use class <code>.progress-bar-{color-name}</code> to add different colors to progressbar.</p><div class="progress progress-primary mb-3"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "35%" })}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-secondary mb-3"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "25%" })}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-warning mb-3"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "50%" })}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-danger mb-3"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "40%" })}" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-dark mb-3"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "75%" })}" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-info mb-3"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "88%" })}" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></section><section class="section"><div class="card"><div class="card-header"><h4>Progress Label</h4></div><div class="card-body"><p>Use class <code>.progress-bar-{color-name}</code> to add different colors to progressbar.</p><div class="progress progress-primary mb-4"><div class="progress-bar progress-label" role="progressbar" style="${ssrRenderStyle({ "width": "35%" })}" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-secondary mb-4"><div class="progress-bar progress-label" role="progressbar" style="${ssrRenderStyle({ "width": "25%" })}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-warning mb-4"><div class="progress-bar progress-label" role="progressbar" style="${ssrRenderStyle({ "width": "50%" })}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-danger mb-4"><div class="progress-bar progress-label" role="progressbar" style="${ssrRenderStyle({ "width": "40%" })}" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-dark mb-4"><div class="progress-bar progress-label" role="progressbar" style="${ssrRenderStyle({ "width": "75%" })}" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-info mb-4"><div class="progress-bar progress-label" role="progressbar" style="${ssrRenderStyle({ "width": "88%" })}" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></section><section class="section"><div class="card"><div class="card-header"><h4>Progress Striped</h4></div><div class="card-body"><p>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p><div class="progress progress-primary mb-4"><div class="progress-bar progress-bar-striped" role="progressbar" style="${ssrRenderStyle({ "width": "35%" })}" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-secondary mb-4"><div class="progress-bar progress-bar-striped" role="progressbar" style="${ssrRenderStyle({ "width": "25%" })}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-warning mb-4"><div class="progress-bar progress-bar-striped" role="progressbar" style="${ssrRenderStyle({ "width": "50%" })}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-danger mb-4"><div class="progress-bar progress-bar-striped" role="progressbar" style="${ssrRenderStyle({ "width": "40%" })}" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-dark mb-4"><div class="progress-bar progress-bar-striped" role="progressbar" style="${ssrRenderStyle({ "width": "75%" })}" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-info mb-4"><div class="progress-bar progress-bar-striped" role="progressbar" style="${ssrRenderStyle({ "width": "88%" })}" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></section><section class="section"><div class="card"><div class="card-header"><h4>Progress Sizes</h4></div><div class="card-body"><p>For Default progress, No size class needed. you can use class <code>.progress-sm</code> or <code>.progress-lg</code> with <code>.progress</code> to change size of your progress bar.</p><div class="progress progress-success progress-sm mb-4"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "35%" })}" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-primary mb-4"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "25%" })}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div><div class="progress progress-warning progress-lg mb-4"><div class="progress-bar" role="progressbar" style="${ssrRenderStyle({ "width": "25%" })}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/progress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const progress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  progress as default
};
//# sourceMappingURL=progress-DjY_eYj9.js.map
