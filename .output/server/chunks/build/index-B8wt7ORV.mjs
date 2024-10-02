import { defineComponent, createElementBlock, ref, provide, useSSRContext, watch, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, s as storeToRefs } from './server.mjs';
import { u as useAuthStore, a as useFetch } from './auth-DblS5Fe7.mjs';
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
  __name: "CardHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { authenticated, grid3 } = storeToRefs(useAuthStore());
    const picked = ref({ group: "" });
    watch(
      picked,
      (newValue) => {
        if (authenticated.value) {
          console.log(grid3);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(authenticated)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-header" }, _attrs))}><h4>Energy balance</h4><input type="radio" id="day" value="Diary"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(picked), "Diary")) ? " checked" : ""}><label for="day">Diary</label><input type="radio" id="month" value="Monthly"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(picked), "Monthly")) ? " checked" : ""}><label for="month">Monthly</label><input type="radio" id="year" value="Annual"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(picked), "Annual")) ? " checked" : ""}><label for="year">Annual</label></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useProfile = () => {
  const graph2 = async () => {
    const T = ["3", "132"];
    var datos = [];
    for (let x in T) {
      const { pending, data } = await useFetch(
        //estaciones, 3 y 132
        "https://poweramigo.com/smr/api/get/" + T[x] + "/data?date_start=2023-12-01&time_start=12:00:00&date_end=2023-12-02&units=P&interval=1hour&time_end=12:00:00",
        {
          method: "GET",
          headers: { Authorization: "Bearer " + (void 0).cookie.split("=")[1] }
        },
        "$aeNfF1ntZC"
      );
      datos.push(data);
    }
    return datos;
  };
  return { graph: graph2 };
};
const { graph } = useProfile();
const _sfc_main = {
  data() {
    return {
      grid3: storeToRefs(useAuthStore()),
      Tower_1: 0,
      Tower_2: 0,
      suma: 0,
      optionsProfileVisit: {
        dataLabels: { enabled: true },
        chart: { toolbar: { show: false }, type: "bar", stacked: true },
        series: [{ name: "Grid", data: [] }, { name: "Solar", data: [] }],
        colors: ["#004062", "#FDC015"],
        xaxis: { categories: ["Tower 3", "Tower 132"] }
      }
    };
  },
  computed: {
    graph_api() {
      return this.optionsProfileVisit.series;
    }
  },
  methods: {
    async grafica() {
      const datosMes = await graph();
      if (datosMes[0]._rawValue === null) {
        return this.optionsProfileVisit.series;
      } else {
        datosMes[0]._rawValue.grid.map((valor) => {
          this.suma += valor.value;
        });
        this.optionsProfileVisit.series[0].data.push(this.suma);
        this.Tower_1 = this.suma;
        this.suma = 0;
        datosMes[1]._rawValue.grid.map((valor) => {
          this.suma += valor.value / 1e3;
        });
        this.optionsProfileVisit.series[0].data.push(this.suma);
        this.Tower_2 += this.suma;
        this.suma = 0;
        datosMes[0]._rawValue.generation.map((valor) => {
          this.suma += valor.value;
        });
        this.optionsProfileVisit.series[1].data.push(this.suma);
        this.Tower_1 += this.suma;
        this.suma = 0;
        datosMes[1]._rawValue.generation.map((valor) => {
          this.suma += valor.value / 1e3;
        });
        this.optionsProfileVisit.series[1].data.push(this.suma);
        this.Tower_2 += this.suma;
        this.suma = 0;
      }
    }
  },
  mounted() {
    this.grafica();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardHeader = _sfc_main$1;
  const _component_client_only = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="page-heading"><h3>Energy Monitoring System</h3></div><div class="page-content"><section class="row"><div class="col-12"><div class="row"><div class="col-6 col-lg-6 col-md-6"><div class="card"><div class="card-body px-3 py-3"><div class="row"><div class="col-2"><div class="stats-icon"><span class="badge badge-pill badge-danger"><i class="bi bi-building"></i></span></div></div><div class="col-md-8"><h6 class="text-muted font-semibold">Tower 3</h6><h6 class="font-extrabold mb-0">${ssrInterpolate($data.Tower_1)}</h6></div></div></div></div></div><div class="col-6 col-lg-6 col-md-6"><div class="card"><div class="card-body px-3 py-3"><div class="row"><div class="col-2"><div class="stats-icon"><span class="badge badge-pill badge-danger"><i class="bi bi-building"></i></span></div></div><div class="col-md-8"><h6 class="text-muted font-semibold">Tower 132</h6><h6 class="font-extrabold mb-0">${ssrInterpolate($data.Tower_2)}</h6></div></div></div></div></div></div><div class="row"><div class="col-12"><div class="card">`);
  _push(ssrRenderComponent(_component_CardHeader, null, null, _parent));
  _push(`<div class="card-body">`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div></div></div></div></div></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B8wt7ORV.mjs.map
