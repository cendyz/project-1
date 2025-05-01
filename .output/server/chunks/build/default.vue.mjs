import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as useBankStore, _ as _export_sfc } from './server.mjs';
import { f as fb, y as yt, x, p as pt, i as insta, l as logo } from './icon-instagram.svg.mjs';
import { c as closeMenu } from './close_x.svg.mjs';
import { u as useWindowSize } from './index.mjs';
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

const hamburger = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2016%2016'%3e%3c!--%20Icon%20from%20Charm%20Icons%20by%20Jay%20Newey%20-%20https://github.com/jaynewey/charm-icons/blob/main/LICENSE%20--%3e%3cpath%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%20d='M2.75%2012.25h10.5m-10.5-4h10.5m-10.5-4h10.5'/%3e%3c/svg%3e";

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = useWindowSize();
    const store = useBankStore();
    const navMenu = ref();
    const linksData = ref(["home", "news", "about", "faq", "contact"]);
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
    watch(
      () => store.isOpenMenu,
      (newValue) => {
        if (newValue) {
          (void 0).body.style.overflow = "hidden";
        } else {
          (void 0).body.style.overflow = "visible";
        }
      }
    );
    watch(width, (newValue) => {
      if (newValue >= 1024) {
        store.isOpenMenu = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "py-[2rem] bg-neutral-4 w-full z-[1000] fixed lg:w-full",
        ref_key: "navMenu",
        ref: navMenu
      }, _attrs))} data-v-6786f67c><div class="px-[3rem] md:px-[5rem] flex justify-between lg:container relative lg:items-center lg:justify-between lg:px-[3.5rem] xl:px-[7rem]" data-v-6786f67c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-x-[1rem] select-none z-[50] hover:cursor-pointer",
        onClick: ($event) => unref(store).isOpenMenu = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logo))} class="w-[5rem] h-[5rem]" alt="logo easybank" data-v-6786f67c${_scopeId}><p class="${ssrRenderClass([unref(store).isOpenMenu ? "text-neutral-4" : "text-primary-1", "font-w700 text-[2rem] hidden sm:block"])}" data-v-6786f67c${_scopeId}> mWallet </p>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logo),
                class: "w-[5rem] h-[5rem]",
                alt: "logo easybank"
              }, null, 8, ["src"]),
              createVNode("p", {
                class: ["font-w700 text-[2rem] hidden sm:block", unref(store).isOpenMenu ? "text-neutral-4" : "text-primary-1"]
              }, " mWallet ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" aria-label="open close nav menu" class="lg:hidden" data-v-6786f67c><img${ssrRenderAttr("src", unref(store).isOpenMenu ? unref(closeMenu) : unref(hamburger))}${ssrRenderAttr("alt", unref(store).isOpenMenu ? "close menu" : "open menu")} class="h-[3rem] z-[100]" data-v-6786f67c></button>`);
      if (unref(store).isOpenMenu) {
        _push(`<div class="absolute top-[-3rem] md:px-[5rem] h-[103vh] w-full left-0 bg-primary-1 bg-opacity-90 p-[3rem] rounded-md lg:none text-white" data-v-6786f67c><div class="flex items-center justify-between w-full" data-v-6786f67c><button class="p-[1rem] pr-0 ml-auto" data-v-6786f67c><img${ssrRenderAttr("src", unref(closeMenu))} alt="close menu" class="invert" data-v-6786f67c></button></div><div class="mt-[5rem] grid gap-y-[1.5rem] justify-items-center max-w-[50rem] mx-auto" data-v-6786f67c><!--[-->`);
        ssrRenderList(linksData.value, (item, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(store).pages[index],
            onClick: ($event) => unref(store).isOpenMenu = false,
            key: index,
            class: "first-letter:uppercase uppercase font-w400 text-[2.3rem] border-t pt-[2rem] text-center w-full last:border-[3px] last:pb-[1rem] last:pt-[1.2rem] last:rounded-xl"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><div class="flex justify-center gap-x-[2rem] my-[3.5rem] mt-[7rem]" data-v-6786f67c><!--[-->`);
        ssrRenderList(socialsData.value, (item, index) => {
          _push(`<a href="#" data-v-6786f67c><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", `${item.alt} icon`)} class="w-[3rem] lg:brightness-15" data-v-6786f67c></a>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hidden lg:flex gap-x-[3.5rem]" data-v-6786f67c><!--[-->`);
      ssrRenderList(linksData.value, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          "active-class": unref(store).pages[index] ? "styleLink" : "",
          to: unref(store).pages[index],
          key: index,
          class: "first-letter:uppercase text-[1.5rem] text-neutral-1 lg:hover:text-black lg:transition-colors lg:relative lineHover lg:hover:cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><button type="button" class="hidden lg:block capitalize bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] lg:hover:opacity-60 lg:transition-opacity" data-v-6786f67c> request invite </button></div></nav>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6786f67c"]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
