import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { a as useNuxtApp } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Toasts",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-heading" }, _attrs))}><div class="page-title"><div class="row"><div class="col-12 col-md-6 order-md-1 order-last"><h3>Toast</h3><p class="text-subtitle text-muted">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p></div><div class="col-12 col-md-6 order-md-2 order-first"><nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Dashboard</a></li><li class="breadcrumb-item active" aria-current="page">Toasts</li></ol></nav></div></div></div><section class="section"><div class="row"><div class="col-md-6 col-12"><div class="card"><div class="card-header"><h5>Basic Toasts</h5></div><div class="card-body"><div class="toast show" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg><strong class="me-auto">Bootstrap</strong><small>11 mins ago</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body"> Hello, world! This is a toast message. </div></div></div></div></div><div class="col-md-6 col-12"><div class="card"><div class="card-header"><h5>Open Toast Buttons</h5></div><div class="card-body"><p>Click the button to show toasts.</p><button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button><div class="toast-container position-fixed bottom-0 end-0 p-3"><div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg><strong class="me-auto">Bootstrap</strong><small>11 mins ago</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body"> Hello, world! This is a toast message. </div></div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/Toasts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Toasts-uJpl1DMW.mjs.map
