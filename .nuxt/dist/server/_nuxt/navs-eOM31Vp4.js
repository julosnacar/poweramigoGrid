import { _ as __nuxt_component_0 } from "./nuxt-link-Cn6CZfW3.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-heading" }, _attrs))}><div class="page-title"><div class="row"><div class="col-12 col-md-6 order-md-1 order-last"><h3>Navs</h3><p class="text-subtitle text-muted">Examples for how to use Bootstrap’s included navigation components. </p></div><div class="col-12 col-md-6 order-md-2 order-first"><nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end"><ol class="breadcrumb"><li class="breadcrumb-item">`);
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
  _push(`</li><li class="breadcrumb-item active" aria-current="page">Navs</li></ol></nav></div></div></div><section class="section"><div class="card"><div class="card-header"><h4 class="card-title">Default</h4></div><div class="card-body"><ul class="nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li><li class="nav-item"><a class="nav-link" href="#">Link</a></li><li class="nav-item"><a class="nav-link" href="#">Link</a></li><li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li></ul></div></div></section><section class="section"><div class="row"><div class="col-md-6"><div class="card"><div class="card-header"><h5 class="card-title">Horizontal Navs</h5></div><div class="card-body"><ul class="nav nav-tabs" id="myTab" role="tablist"><li class="nav-item" role="presentation"><a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a></li><li class="nav-item" role="presentation"><a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a></li><li class="nav-item" role="presentation"><a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a></li></ul><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><p class="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nulla neque. Ut hendrerit nulla a euismod pretium. Fusce venenatis sagittis ex efficitur suscipit. In tempor mattis fringilla. Sed id tincidunt orci, et volutpat ligula. Aliquam sollicitudin sagittis ex, a rhoncus nisl feugiat quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies ligula a tempor vulputate. Suspendisse pretium mollis ultrices.</p></div><div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> Integer interdum diam eleifend metus lacinia, quis gravida eros mollis. Fusce non sapien sit amet magna dapibus ultrices. Morbi tincidunt magna ex, eget faucibus sapien bibendum non. Duis a mauris ex. Ut finibus risus sed massa mattis porta. Aliquam sagittis massa et purus efficitur ultricies. Integer pretium dolor at sapien laoreet ultricies. Fusce congue et lorem id convallis. Nulla volutpat tellus nec molestie finibus. In nec odio tincidunt eros finibus ullamcorper. Ut sodales, dui nec posuere finibus, nisl sem aliquam metus, eu accumsan lacus felis at odio. Sed lacus quam, convallis quis condimentum ut, accumsan congue massa. Pellentesque et quam vel massa pretium ullamcorper vitae eu tortor. </div><div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><p class="mt-2">Duis ultrices purus non eros fermentum hendrerit. Aenean ornare interdum viverra. Sed ut odio velit. Aenean eu diam dictum nibh rhoncus mattis quis ac risus. Vivamus eu congue ipsum. Maecenas id sollicitudin ex. Cras in ex vestibulum, posuere orci at, sollicitudin purus. Morbi mollis elementum enim, in cursus sem placerat ut.</p></div></div></div></div></div><div class="col-md-6"><div class="card"><div class="card-header"><h4 class="card-title">Javascript Behavior</h4></div><div class="card-body"><div class="row"><div class="col-3"><div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical"><a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a><a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a><a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a><a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a></div></div><div class="col-9"><div class="tab-content" id="v-pills-tabContent"><div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nulla neque. Ut hendrerit nulla a euismod pretium. Fusce venenatis sagittis ex efficitur suscipit. In tempor mattis fringilla. Sed id tincidunt orci, et volutpat ligula. Aliquam sollicitudin sagittis ex, a rhoncus nisl feugiat quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies ligula a tempor vulputate. Suspendisse pretium mollis ultrices </div><div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> Integer interdum diam eleifend metus lacinia, quis gravida eros mollis. Fusce non sapien sit amet magna dapibus ultrices. Morbi tincidunt magna ex, eget faucibus sapien bibendum non. Duis a mauris ex. Ut finibus risus sed massa mattis porta. Aliquam sagittis massa et purus efficitur ultricies. </div><div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"> Integer pretium dolor at sapien laoreet ultricies. Fusce congue et lorem id convallis. Nulla volutpat tellus nec molestie finibus. In nec odio tincidunt eros finibus ullamcorper. Ut sodales, dui nec posuere finibus, nisl sem aliquam metus, eu accumsan lacus felis at odio. </div><div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"> Sed lacus quam, convallis quis condimentum ut, accumsan congue massa. Pellentesque et quam vel massa pretium ullamcorper vitae eu tortor. </div></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/navs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const navs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  navs as default
};
//# sourceMappingURL=navs-eOM31Vp4.js.map
