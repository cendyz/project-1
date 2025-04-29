import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { f as fb, y as yt, x, p as pt, i as insta, l as logo } from './icon-instagram.svg.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const linksData = ref(["about us", "contact", "blog", "careers", "support", "privacy policy"]);
    const socialsData = ref([
      {
        img: fb,
        alt: "facebook"
      },
      {
        img: yt,
        alt: "youtube"
      },
      {
        img: x,
        alt: "twitter"
      },
      {
        img: pt,
        alt: "pinterest"
      },
      {
        img: insta,
        alt: "instagram"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-[4rem] bg-primary-1 xl:py-[6rem]" }, _attrs))} data-v-29f001e9><div class="text-center lg:grid lg:grid-cols-3 lg:items-center container xl:px-[7rem]" data-v-29f001e9><div class="flex flex-col items-center lg:items-start" data-v-29f001e9><div class="flex items-center gap-x-[2rem]" data-v-29f001e9><img${ssrRenderAttr("src", unref(logo))} alt="wallet" class="wallet w-[5rem] h-[5rem]" data-v-29f001e9><p class="font-w700 text-[2rem] sm:block text-white" data-v-29f001e9>mWallet</p></div><div class="xl:flex xl:flex-col xl:gap-y-[2rem] xl:items-start lg:mr-auto" data-v-29f001e9><div class="flex justify-center gap-x-[1.5rem] my-[3.5rem] lg:mb-0" data-v-29f001e9><!--[-->`);
      ssrRenderList(socialsData.value, (item, index) => {
        _push(`<a href="#" class="hoverIcon" data-v-29f001e9><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", `${item.alt} icon`)} class="w-[2.3rem] lg:brightness-15" data-v-29f001e9></a>`);
      });
      _push(`<!--]--></div></div></div><div class="grid gap-y-[1rem] capitalize text-neutral-3 lg:grid-cols-2 lg:text-left lg:gap-y-[2rem] xl:translate-x-[-8rem]" data-v-29f001e9><!--[-->`);
      ssrRenderList(linksData.value, (item, index) => {
        _push(`<a href="#" class="lg:hover:text-primary-3 lg:transition-colors lg:w-fit" data-v-29f001e9>${ssrInterpolate(item)}</a>`);
      });
      _push(`<!--]--></div><div class="xl:flex xl:flex-col xl:justify-between" data-v-29f001e9><p class="text-neutral-1 text-[1.4rem] mt-[3rem] xl:ml-auto" data-v-29f001e9> © mWallet. All Rights Reserved ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</p></div></div></footer>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29f001e9"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=Footer.vue.mjs.map
