import { _ as __nuxt_component_0 } from './nuxt-link-Cn6CZfW3.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-heading" }, _attrs))}><div class="page-title"><div class="row"><div class="col-12 col-md-6 order-md-1 order-last"><h3>Alert</h3><p class="text-subtitle text-muted">A pretty helpful component for give message to user</p></div><div class="col-12 col-md-6 order-md-2 order-first"><nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end"><ol class="breadcrumb"><li class="breadcrumb-item">`);
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
  _push(`</li><li class="breadcrumb-item active" aria-current="page">Alert</li></ol></nav></div></div></div><section class="section"><div class="row"><div class="col-12 col-md-6"><div class="card"><div class="card-header"><h4>Default</h4></div><div class="card-body"><div class="alert alert-primary">This is primary alert.</div><div class="alert alert-success">This is success alert.</div><div class="alert alert-warning">This is warning alert.</div><div class="alert alert-danger">This is danger alert.</div><div class="alert alert-dark">This is dark alert.</div><div class="alert alert-secondary">This is secondary alert.</div><div class="alert alert-light">This is light alert.</div><div class="alert alert-info">This is info alert.</div></div></div><div class="card"><div class="card-header"><h4>With Icon</h4></div><div class="card-body"><div class="alert alert-primary"><i class="bi bi-star"></i> This is primary alert.</div><div class="alert alert-success"><i class="bi bi-check-circle"></i> This is success alert.</div><div class="alert alert-warning"><i class="bi bi-exclamation-triangle"></i> This is warning alert.</div><div class="alert alert-danger"><i class="bi bi-file-excel"></i> This is danger alert.</div><div class="alert alert-secondary"><i class="bi bi-star"></i> This is secondary alert.</div><div class="alert alert-info"><i class="bi bi-star"></i> This is info alert.</div></div></div><div class="card"><div class="card-header"><h4>Light</h4></div><div class="card-body"><div class="alert alert-light-primary color-primary"><i class="bi bi-star"></i> This is primary alert.</div><div class="alert alert-light-success color-success"><i class="bi bi-check-circle"></i> This is success alert.</div><div class="alert alert-light-warning color-warning"><i class="bi bi-exclamation-triangle"></i> This is warning alert.</div><div class="alert alert-light-danger color-danger"><i class="bi bi-exclamation-circle"></i> This is danger alert.</div><div class="alert alert-light-secondary color-secondary"><i class="bi bi-star"></i> This is secondary alert.</div><div class="alert alert-light-info color-info"><i class="bi bi-star"></i> This is info alert. </div></div></div></div><div class="col-12 col-md-6"><div class="card"><div class="card-header"><h4>Heading</h4></div><div class="card-body"><div class="alert alert-primary"><h4 class="alert-heading">Primary</h4><p>This is a primary alert.</p></div><div class="alert alert-secondary"><h4 class="alert-heading">Secondary</h4><p>This is a secondary alert.</p></div><div class="alert alert-success"><h4 class="alert-heading">Success</h4><p>This is a success alert.</p></div><div class="alert alert-danger"><h4 class="alert-heading">Danger</h4><p>This is a danger alert.</p></div><div class="alert alert-warning"><h4 class="alert-heading">Warning</h4><p>This is a warning alert.</p></div><div class="alert alert-info"><h4 class="alert-heading">Info</h4><p>This is a info alert.</p></div><div class="alert alert-light"><h4 class="alert-heading">Light</h4><p>This is a light alert.</p></div><div class="alert alert-dark"><h4 class="alert-heading">Dark</h4><p>This is a dark alert.</p></div></div></div><div class="card"><div class="card-header"><h4>Dismissable</h4></div><div class="card-body"><div class="alert alert-primary alert-dismissible fade show" role="alert"> This is primary alert. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><div class="alert alert-secondary alert-dismissible show fade"> This is a secondary alert. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><div class="alert alert-success alert-dismissible show fade"> This is a success alert. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><div class="alert alert-danger alert-dismissible show fade"> This is a danger alert. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><div class="alert alert-warning alert-dismissible fade show" role="alert"> This is a warning alert. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><div class="alert alert-info alert-dismissible show fade"> This is a info alert. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><div class="alert alert-light alert-dismissible show fade"> This is a light alert. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><div class="alert alert-dark alert-dismissible show fade"> This is a dark alert <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { alert as default };
//# sourceMappingURL=alert-B9PTLPhX.mjs.map
