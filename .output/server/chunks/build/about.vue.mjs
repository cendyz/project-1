import { _ as __nuxt_component_2 } from './Footer.vue.mjs';
import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useBankStore } from './server.mjs';
import { u as useWindowSize } from './index.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
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
import './_plugin-vue_export-helper.mjs';
import 'pinia';
import 'vue-router';
import './v3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const textStyles = "text-justify text-[1.7rem] mt-[2rem]";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useBankStore();
    const is_width = ref(false);
    const { width } = useWindowSize();
    const actualInfo = ref(0);
    ref(["5.7%", "25%", "44.3%", "63.2%", "82.3%"]);
    const dataYears = ["1982 - 1990", "1991 - 2000", "2001 - 2010", "2011 - 2020", "2011 - 2024"];
    const dataInfo = [
      [
        "The groundwork for digital finance is laid.",
        "Early experiments in electronic payments and secure data exchange take place.",
        "Foundations of what will become mobile banking begin to form."
      ],
      [
        "The internet reshapes access to financial services.",
        "Online banking becomes widely available.",
        "First mobile devices with basic financial apps appear on the market.",
        "Concepts like e-wallets and digital currencies gain early traction."
      ],
      [
        "Smartphones accelerate the shift toward mobile financial tools.",
        "Contactless payments and digital transfers become more mainstream.",
        "Security and encryption protocols improve dramatically.",
        "User expectations shift toward speed, accessibility, and control."
      ],
      [
        "The fintech revolution transforms how people interact with money.",
        "In 2018, mWallet is founded to simplify and humanize digital finance.",
        "In 2019, the first version of mWallet launches with seamless payments and real-time insights."
      ],
      [
        "mWallet introduces AI-powered budgeting and personalized financial insights.",
        "Biometric login and blockchain-based verification enhance user security.",
        "In 2023, mWallet reaches over a million active users.",
        "In 2024, features like smart subscriptions management and community-driven savings goals are launched."
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[--><header class="${ssrRenderClass([unref(store).isLight ? "pattern_light" : "pattern_bg", "p-[3rem] py-[5rem] pt-[10rem] lg:h-[65rem] lg:pt-[11rem] bg-primary-1 dark:bg-primary-10 text-neutral-4 xl:px-[7rem]"])}"><div class="container lg:bg-primary-1 lg:dark:dark:bg-primary-10 dark:text-primary-1 lg:bg-opacity-90 lg:dark:dark:bg-opacity-75 rounded-3xl lg:mt-[4rem] lg:w-[954px] xl:w-[1140px] lg:mx-auto 2xl:w-[1396px]"><div class="md:w-[50rem] md:mx-auto lg:flex lg:items-center lg:justify-center lg:w-auto">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/dollar.png",
        alt: "dollar",
        class: "bounce w-[35rem] mx-auto lg:mx-0 lg:w-[43rem] xl:mr-[8rem]",
        format: "webp"
      }, null, _parent));
      _push(`<div class="lg:w-[50rem]"><h1 class="font-w700 text-[3rem] text-center text-shadow-lg leading-[1.3] md:text-[3.3rem] lg:w-auto"> Transforming <span class="${ssrRenderClass([unref(store).isLight ? "niceDark" : "niceLight", "niceColor"])}">everyday</span> finances through personalized digital experiences. </h1><div class="lg:w-[48rem] xl:w-auto"><p class="${ssrRenderClass(textStyles)}"> mWallet empowers everyone — from students and freelancers to small businesses and organizations — to manage money in a simple, fast, and secure way. Our platform lets users pay, save, plan, and grow from anywhere. </p><p class="${ssrRenderClass(textStyles)}"> People choose mWallet to take full control of their finances and create modern, seamless experiences every day. </p></div></div></div></div></header><main><section class="pt-[5rem] bg-neutral-4 dark:bg-neutral-40 dark:text-primary-10"><div class="px-[3rem] md:w-[50rem] md:mx-auto lg:w-[70rem]"><h2 class="text-[2.8rem] font-w700 md:text-[3rem] text-center">Redefining finance for the digital age.</h2><p class="text-[1.7rem] mt-[2rem] text-justify"> Explore the milestones that shaped mWallet — from launching our first seamless payment solution to introducing smart budgeting tools, advanced security features, and the innovations that continue to transform how people manage money every day. </p></div><div class="mt-[4rem] border-primary-gray border-b-[2px] sm:px-[10rem] sm:mx-auto lg:mt-[8rem]"><div class="${ssrRenderClass([unref(is_width) && unref(width) >= 1024 ? "line" : "", "flex flex-wrap gap-[3rem] lg:w-[80rem] lg:mx-auto items-center justify-center pb-[2rem]"])}"><!--[-->`);
      ssrRenderList(dataYears, (item, index) => {
        _push(`<button class="${ssrRenderClass([unref(actualInfo) == index ? "bg-primary-2 text-neutral-4" : "text-primary-1 dark:text-primary-10", "px-[2rem] rounded-xl border-primary-2 py-[.5rem] sm:px-[2rem] border lg:hover:text-neutral-4 lg:hover:bg-primary-2 transition-colors duration-300"])}">${ssrInterpolate(item)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(actualInfo) != null) {
        _push(`<div class="px-[4rem] pb-[4rem]"><ul class="text-left list-disc mt-[5rem] grid gap-y-[1rem] md:w-[50rem] md:mx-auto px-[3rem]"><!--[-->`);
        ssrRenderList(dataInfo[unref(actualInfo)], (item, index) => {
          _push(`<li>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about.vue.mjs.map
