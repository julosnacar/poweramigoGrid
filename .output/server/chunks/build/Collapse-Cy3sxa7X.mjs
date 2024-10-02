import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-heading" }, _attrs))}><div class="page-title"><div class="row"><div class="col-12 col-md-6 order-md-1 order-last"><h3>Collapse</h3><p class="text-subtitle text-muted">Collapse your content and control its visibility with buttons.</p></div><div class="col-12 col-md-6 order-md-2 order-first"><nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Dashboard</a></li><li class="breadcrumb-item active" aria-current="page">Collapse</li></ol></nav></div></div></div><section id="basic-list-group"><div class="row match-height"><div class="col-lg-6 col-md-12"><div class="card"><div class="card-header"><h4 class="card-title">Simple Collapse</h4></div><div class="card-body"><p class="card-text"> Click the buttons below to show and hide another element via class changes: </p><p><a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> Link with href </a><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Button with data-bs-target </button></p><div class="collapse" id="collapseExample"> Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. </div></div></div></div><div class="col-lg-6 col-md-12"><div class="card"><div class="card-header"><h4 class="card-title">Multiple Targets</h4></div><div class="card-body"><p class="card-text"> Click the buttons below to show and hide another element via class changes: </p><p><a class="btn btn-primary mb-2" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a><button class="btn btn-primary mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button><button class="btn btn-primary mb-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button></p><div class="row"><div class="col"><div class="collapse multi-collapse" id="multiCollapseExample1"><div class="card card-body"> Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. </div></div></div><div class="col"><div class="collapse multi-collapse" id="multiCollapseExample2"><div class="card card-body"> Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. </div></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/Collapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Collapse as default };
//# sourceMappingURL=Collapse-Cy3sxa7X.mjs.map
