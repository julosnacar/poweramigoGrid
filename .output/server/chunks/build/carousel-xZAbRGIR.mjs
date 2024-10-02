import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Cn6CZfW3.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { a as _imports_1, c as _imports_2, d as _imports_3, _ as _imports_4, b as _imports_5, e as _imports_6 } from './3-1bxs6Iez.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("building.DTTc_v3J.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-heading" }, _attrs))}><div class="page-title"><div class="row"><div class="col-12 col-md-6 order-md-1 order-last"><h3>Carousel</h3><p class="text-subtitle text-muted"> A slideshow component for cycling through elements\u2014images or slides of text\u2014like a carousel. </p></div><div class="col-12 col-md-6 order-md-2 order-first"><nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end"><ol class="breadcrumb"><li class="breadcrumb-item">`);
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
  _push(`</li><li class="breadcrumb-item active" aria-current="page">Carousel</li></ol></nav></div></div></div><section class="section"><div class="row"><div class="col-md-6"><div class="card"><div class="card-header"><h4>Slides only</h4><p>A carousel without slide control</p></div><div class="card-body"><div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img${ssrRenderAttr("src", _imports_0)} class="d-block w-100" alt="..."></div><div class="carousel-item"><img${ssrRenderAttr("src", _imports_1)} class="d-block w-100" alt="..."></div></div></div></div></div><div class="card"><div class="card-header"><h4>With Captions</h4><p>A carousel with captions over the top</p></div><div class="card-body"><div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"><ol class="carousel-indicators"><li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li><li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li><li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img${ssrRenderAttr("src", _imports_2)} class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>First slide label</h5><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div></div><div class="carousel-item"><img${ssrRenderAttr("src", _imports_3)} class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Second slide label</h5><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div></div></div><a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div></div></div></div><div class="col-md-6"><div class="card"><div class="card-header"><h4>With controls</h4><p>A carousel with previous and next control</p></div><div class="card-body"><div id="carouselExampleControls" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img${ssrRenderAttr("src", _imports_4)} class="d-block w-100" alt="..."></div><div class="carousel-item"><img${ssrRenderAttr("src", _imports_5)} class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div></div></div><div class="card"><div class="card-header"><h4>Crossfade Transition</h4><p>A carousel crossfade transition</p></div><div class="card-body"><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carouselfade"><ol class="carousel-indicators"><li data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active"></li><li data-bs-target="#carouselExampleFade" data-bs-slide-to="1"></li><li data-bs-target="#carouselExampleFade" data-bs-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img${ssrRenderAttr("src", _imports_2)} class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>First slide label</h5><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div></div><div class="carousel-item"><img${ssrRenderAttr("src", _imports_3)} class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Second slide label</h5><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div></div><div class="carousel-item"><img${ssrRenderAttr("src", _imports_6)} class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Third slide label</h5><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div></div></div><a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { carousel as default };
//# sourceMappingURL=carousel-xZAbRGIR.mjs.map
