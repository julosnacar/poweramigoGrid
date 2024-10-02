import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, watch, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-Cn6CZfW3.mjs';
import { j as useRoute, _ as _export_sfc, b as useRouter, s as storeToRefs, i as defineStore } from './server.mjs';
import { u as useAuthStore } from './auth-DblS5Fe7.mjs';
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

const _imports_0$1 = "" + buildAssetsURL("Logo_Taira.CJQh5PvC.png");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const sidebarItem = ref();
    ref();
    ref(0);
    const submenuHeight = ref("auto");
    const isSubActive = ref(true);
    const isActive = computed(() => {
      return route.path == props.item.url || props.item.submenu && props.item.submenu.some((sub) => sub.url == route.path);
    });
    const hasSub = computed(() => {
      if (props.item.hasOwnProperty("submenu")) {
        if (props.item.submenu.length > 0) {
          return true;
        }
      }
      return false;
    });
    const isUrlActive = (url) => url == route.path;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["sidebar-item", { "active": unref(isActive), "has-sub": unref(hasSub) }],
        ref_key: "sidebarItem",
        ref: sidebarItem
      }, _attrs))}>`);
      if (unref(hasSub)) {
        _push(`<!--[--><a class="sidebar-link" href="#"><i class="${ssrRenderClass(`bi bi-${_ctx.item.icon}`)}"></i><span>${ssrInterpolate(_ctx.item.name)}</span></a><ul class="${ssrRenderClass([{ "active": unref(isSubActive) }, "submenu"])}" style="${ssrRenderStyle({ height: unref(submenuHeight) })}"><!--[-->`);
        ssrRenderList(_ctx.item.submenu, (sub, i) => {
          _push(`<li class="${ssrRenderClass([{ "active": isUrlActive(sub.url) }, "submenu-item"])}">`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: sub.url
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sub.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(sub.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul><!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "sidebar-link",
          to: _ctx.item.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="${ssrRenderClass(`bi bi-${_ctx.item.icon}`)}"${_scopeId}></i><span${_scopeId}>${ssrInterpolate(_ctx.item.name)}</span>`);
            } else {
              return [
                createVNode("i", {
                  class: `bi bi-${_ctx.item.icon}`
                }, null, 2),
                createVNode("span", null, toDisplayString(_ctx.item.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layouts/Sidebar/SidebarItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const sideBarItems = [
  {
    "active": false,
    "name": "Menu",
    "isTitle": false
  },
  {
    "active": true,
    "name": "Dashboard",
    "url": "/",
    "icon": "grid-fill"
  },
  {
    "active": false,
    "name": "Components",
    "key": "components",
    "icon": "stack",
    "submenu": [
      {
        "name": "Accordion",
        "url": "/components/Accordion"
      },
      {
        "name": "Alert",
        "url": "/components/Alert"
      },
      {
        "name": "Badge",
        "url": "/components/Badge"
      },
      {
        "name": "Breadcrumb",
        "url": "/components/Breadcrumb"
      },
      {
        "name": "Button",
        "url": "/components/Button"
      },
      {
        "name": "Card",
        "url": "/components/Card"
      },
      {
        "name": "Carousel",
        "url": "/components/Carousel"
      },
      {
        "name": "Collapse",
        "url": "/components/Collapse"
      },
      {
        "name": "Dropdown",
        "url": "/components/Dropdown"
      },
      {
        "name": "List Group",
        "url": "/components/ListGroup"
      },
      {
        "name": "Modal",
        "url": "/components/Modal"
      },
      {
        "name": "Navs",
        "url": "/components/Navs"
      },
      {
        "name": "Pagination",
        "url": "/components/Pagination"
      },
      {
        "name": "Progress",
        "url": "/components/Progress"
      },
      {
        "name": "Spinner",
        "url": "/components/Spinner"
      },
      {
        "name": "Toasts",
        "url": "/components/Toasts"
      },
      {
        "name": "Tooltip",
        "url": "/components/Tooltip"
      }
    ]
  },
  {
    "active": false,
    "name": "Layouts",
    "key": "layout",
    "icon": "grid-1x2-fill",
    "submenu": [
      {
        "name": "Default Layout",
        "url": "/layouts/default"
      },
      {
        "name": "1 Column",
        "url": "/layouts/1-column"
      },
      {
        "name": "Vertical with Navbar",
        "url": "/layouts/vertical"
      },
      {
        "name": "RTL Layout",
        "url": "/layouts/rtl"
      },
      {
        "name": "Horizontal Menu",
        "url": "/layouts/horizontal-menu"
      }
    ]
  }
];
const useStore = defineStore("main", () => {
  const sidebarItems = reactive(sideBarItems);
  const isSidebarActive = ref(true);
  const isDark = ref(true);
  const toggleSidebar = () => isSidebarActive.value = !isSidebarActive.value;
  const closeSidebar = () => isSidebarActive.value = false;
  const openSidebar = () => isSidebarActive.value = true;
  const toggleDark = () => isDark.value = !isDark.value;
  return {
    sidebarItems,
    isSidebarActive,
    isDark,
    toggleDark,
    toggleSidebar,
    closeSidebar,
    openSidebar
  };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LayoutSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isSidebarActive = computed(() => store.isSidebarActive);
    ref();
    const createBackdrop = () => {
      if ((void 0).innerWidth > 1200)
        return;
      deleteBackdrop();
      const backdrop = (void 0).createElement("div");
      backdrop.classList.add("sidebar-backdrop");
      backdrop.addEventListener("click", () => {
        store.closeSidebar();
        deleteBackdrop();
      });
      (void 0).body.appendChild(backdrop);
    };
    const deleteBackdrop = () => {
      const backdrop = (void 0).querySelector(".sidebar-backdrop");
      if (backdrop) {
        backdrop.remove();
      }
    };
    watch(() => store.isSidebarActive, (isSidebarActive2) => {
      if (isSidebarActive2) {
        createBackdrop();
      } else {
        deleteBackdrop();
      }
      const body = (void 0).querySelector("body");
      if (body && (void 0).innerWidth >= 1200) {
        body.style.overflowY = "auto";
      } else if (body) {
        body.style.overflowY = isSidebarActive2 ? "hidden" : "auto";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "sidebar",
        class: { "active": isSidebarActive.value }
      }, _attrs))} data-v-9a7d63de><div class="sidebar-wrapper active" data-v-9a7d63de><div class="sidebar-header" data-v-9a7d63de><div class="d-flex justify-content-between" data-v-9a7d63de><div class="logo" data-v-9a7d63de>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" style="${ssrRenderStyle({ "width": "50px", "height": "50px" })}" data-v-9a7d63de${_scopeId}> Taira `);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Logo",
                style: { "width": "50px", "height": "50px" }
              }),
              createTextVNode(" Taira ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="sidebar-toggler x" data-v-9a7d63de><a href="#" class="sidebar-hide d-xl-none d-block" data-v-9a7d63de><i class="bi bi-x bi-middle" data-v-9a7d63de></i></a></div></div></div><div class="sidebar-menu" data-v-9a7d63de><ul class="menu" data-v-9a7d63de><!--[-->`);
      ssrRenderList(unref(store).sidebarItems, (item) => {
        _push(`<!--[-->`);
        if (item.active) {
          _push(ssrRenderComponent(_sfc_main$4, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div><button class="sidebar-toggler btn x" data-v-9a7d63de><i data-feather="x" data-v-9a7d63de></i></button></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layouts/Sidebar/LayoutSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LayoutSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9a7d63de"]]);
const _imports_0 = "" + buildAssetsURL("1.BXkt6k_u.jpg");
const _sfc_main$2 = {
  __name: "VerticalHeader",
  __ssrInlineRender: true,
  props: { userName: String },
  setup(__props) {
    useStore();
    useRouter();
    useAuthStore();
    const { authenticated } = storeToRefs(useAuthStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(_attrs)}><nav class="navbar navbar-expand navbar-light navbar-top"><div class="container-fluid"><a href="#" class="burger-btn d-block"><i class="bi bi-justify fs-3"></i></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>`);
      if (unref(authenticated)) {
        _push(`<div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ms-auto mb-lg-0"><li class="nav-item dropdown me-1"><a class="nav-link active dropdown-toggle text-gray-600" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-envelope fs-4 text-gray-600"></i></a><ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton"><li><h6 class="dropdown-header">Messages</h6></li><li><a class="dropdown-item" href="#">No new messages</a></li></ul></li></ul><div class="dropdown"><a href="#" data-bs-toggle="dropdown" aria-expanded="false"><div class="user-menu d-flex"><div class="user-name text-end me-3"><h6 class="mb-0 text-gray-600">User Name: ${ssrInterpolate(__props.userName)}</h6><p class="mb-0 text-sm text-gray-600">Profile</p></div><div class="user-img d-flex align-items-center"><div class="avatar avatar-md"><img alt="avatar"${ssrRenderAttr("src", _imports_0)}></div></div></div></a><ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton"><li><h6 class="dropdown-header">Hello, User!</h6></li><li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-person me-2"></i> My Profile</a></li><li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-gear me-2"></i> Settings</a></li><hr class="dropdown-divider"><li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-box-arrow-left me-2"></i> Logout</a></li></ul></div></div>`);
      } else {
        _push(`<div class="float-end">`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="icon-mid bi bi-box-arrow-in-right"${_scopeId}></i> Login `);
            } else {
              return [
                createVNode("i", { class: "icon-mid bi bi-box-arrow-in-right" }),
                createTextVNode(" Login ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></nav></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layouts/VerticalHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer clearfix mb-0 text-muted"><div class="float-start"></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layouts/LayoutFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LayoutFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
      _push(ssrRenderComponent(LayoutSidebar, null, null, _parent));
      _push(`<div id="main" class="layout-navbar navbar-fixed">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div id="main-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(LayoutFooter, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-ROMOfyrX.mjs.map
