import { h, useSSRContext, ref, withCtx, unref, createBlock, openBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString } from 'vue';
import { Marquee } from 'vue-fast-marquee';
import { _ as __nuxt_component_1 } from './Footer.vue.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { b as useRouter, c as useBankStore } from './server.mjs';
import './icon-instagram.svg.mjs';
import './nuxt-link.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';

/* empty css                                           */
const _sfc_main$1 = {
  name: "NuxtMarquee",
  emits: ["finish", "cycleComplete"],
  props: [
    "style",
    "class",
    "autoFill",
    "play",
    "pauseOnHover",
    "pauseOnClick",
    "direction",
    "speed",
    "delay",
    "loop",
    "gradient",
    "gradientColor",
    "gradientWidth"
  ],
  setup(props, { slots, emit }) {
    return () => h(
      Marquee,
      {
        ...props,
        onCycleComplete: () => emit("cycleComplete"),
        onFinish: () => emit("finish")
      },
      slots
    );
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const store = useBankStore();
    const scroll_data = ref([
      {
        title: "✅ New Feature:",
        desc: "Link multiple bank accounts with one click!"
      },
      {
        title: "🔐 Security Update:",
        desc: "Your data is now protected with enhanced encryption."
      },
      {
        title: "📱 Sync Across Devices:",
        desc: "Access mWallet from phone, tablet or desktop."
      },
      {
        title: "🌍 Multi-Currency Support:",
        desc: "Now supporting 10+ currencies!"
      },
      {
        title: "📊 Dashboard Update:",
        desc: "Cleaner, faster, more intuitive layout."
      },
      {
        title: "💬 Need Help?",
        desc: "Chat with support directly in the app!"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtMarquee = _sfc_main$1;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[--><header class="pb-[5rem] pt-[11rem]"><h1 class="uppercase text-primary-1 text-[5rem] px-[2rem] text-center font-w700">latest news</h1><div class="py-[1rem] border-t-[2px] border-b-[2px] border-primary-2 bg-neutral-4 overflow-hidden mt-[2rem]">`);
      _push(ssrRenderComponent(_component_NuxtMarquee, { class: "px-[3rem] flex items-center justify-between min-w-full select-none" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(scroll_data), (item, index) => {
              _push2(`<p class="flex-shrink-0 ml-[2rem]"${_scopeId}><span class="font-w700"${_scopeId}>${ssrInterpolate(item.title)}</span> ${ssrInterpolate(item.desc)}</p>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(scroll_data), (item, index) => {
                return openBlock(), createBlock("p", {
                  key: index,
                  class: "flex-shrink-0 ml-[2rem]"
                }, [
                  createVNode("span", { class: "font-w700" }, toDisplayString(item.title), 1),
                  createTextVNode(" " + toDisplayString(item.desc), 1)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><main class="bg-neutral-3 pt-[3rem] pb-[7rem] px-[3rem] grid gap-y-[3rem] lg:gap-y-[7rem] place-items-center"><!--[-->`);
      ssrRenderList(unref(store).articles_data, (item, index) => {
        _push(`<div class="rounded-lg overflow-hidden bg-neutral-4 max-w-[40rem] lg:flex lg:max-w-[110rem] lg:cursor-pointer"><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.alt)} class="lg:w-[40rem] lg:h-[30rem]"><div class="p-[2rem]"><h2 class="font-w700 text-[2rem] lg:text-[3rem] lg:w-[40rem]">${ssrInterpolate(item.title)}</h2><p class="text-[1.4rem] mt-[1rem] lg:text-[1.6rem]">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
