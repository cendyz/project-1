import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useBankStore, _ as _export_sfc } from './server.mjs';
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

const sun = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Material%20Symbols%20by%20Google%20-%20https://github.com/google/material-design-icons/blob/master/LICENSE%20--%3e%3cpath%20fill='currentColor'%20d='M12%205q-.425%200-.712-.288T11%204V2q0-.425.288-.712T12%201t.713.288T13%202v2q0%20.425-.288.713T12%205m4.95%202.05q-.275-.275-.275-.7t.275-.7l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35%207.05q-.275.275-.7.275t-.7-.275M20%2013q-.425%200-.713-.288T19%2012t.288-.712T20%2011h2q.425%200%20.713.288T23%2012t-.288.713T22%2013zm-1.65%206.775l-1.4-1.425q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.425%201.4q.3.3.3.712t-.3.713t-.712.3t-.713-.3M5.65%207.05L4.225%205.625q-.275-.275-.275-.7t.275-.7q.3-.3.713-.3t.712.3l1.4%201.425q.275.275.275.7t-.275.7t-.7.275t-.7-.275M6%2019h4.5q.625%200%201.063-.437T12%2017.5t-.425-1.062t-1.05-.438H9.25l-.5-1.2q-.35-.825-1.1-1.312T6%2013q-1.25%200-2.125.875T3%2016t.875%202.125T6%2019m0%202q-2.075%200-3.537-1.463T1%2016t1.463-3.537T6%2011q1.5%200%202.738.813T10.575%2014q1.45%200%202.438%201.075T14%2017.65q-.05%201.425-1.062%202.388T10.5%2021zm8-3.35q-.125-.5-.25-.975t-.25-.975q1.125-.475%201.813-1.475T16%2012q0-1.65-1.175-2.825T12%208q-1.5%200-2.625.975T8.05%2011.45q-.5-.125-1.025-.225T6%2011q.35-2.2%202.063-3.6T12%206q2.5%200%204.25%201.75T18%2012q0%201.925-1.1%203.463T14%2017.65M12.025%2012'/%3e%3c/svg%3e";

const moon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Material%20Symbols%20by%20Google%20-%20https://github.com/google/material-design-icons/blob/master/LICENSE%20--%3e%3cpath%20fill='currentColor'%20d='M12%2021q-3.775%200-6.387-2.613T3%2012q0-3.45%202.25-5.988T11%203.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638%201.375T11.1%207.5q0%202.25%201.575%203.825T16.5%2012.9q.775%200%201.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35%203.45-2.937%205.725T12%2021m0-2q2.2%200%203.95-1.213t2.55-3.162q-.5.125-1%20.2t-1%20.075q-3.075%200-5.238-2.163T9.1%207.5q0-.5.075-1t.2-1q-1.95.8-3.163%202.55T5%2012q0%202.9%202.05%204.95T12%2019m-.25-6.75'/%3e%3c/svg%3e";

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
        class: "py-[2rem] bg-neutral-4 dark:bg-neutral-40 dark:border-b-[2px] w-full z-[1000] fixed lg:w-full",
        ref_key: "navMenu",
        ref: navMenu
      }, _attrs))} data-v-cda5bf8e><div class="px-[3rem] md:px-[5rem] flex justify-between lg:container relative lg:items-center lg:justify-between lg:px-[3.5rem] xl:px-[7rem]" data-v-cda5bf8e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-x-[1rem] select-none z-[50] hover:cursor-pointer",
        onClick: ($event) => unref(store).isOpenMenu = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logo))} class="w-[5rem] h-[5rem]" alt="logo easybank" data-v-cda5bf8e${_scopeId}><p class="${ssrRenderClass([unref(store).isOpenMenu ? "text-neutral-4" : "text-primary-1 dark:text-neutral-4", "font-w700 text-[2rem] hidden sm:block"])}" data-v-cda5bf8e${_scopeId}> mWallet </p>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logo),
                class: "w-[5rem] h-[5rem]",
                alt: "logo easybank"
              }, null, 8, ["src"]),
              createVNode("p", {
                class: ["font-w700 text-[2rem] hidden sm:block", unref(store).isOpenMenu ? "text-neutral-4" : "text-primary-1 dark:text-neutral-4"]
              }, " mWallet ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" aria-label="open close nav menu" class="lg:hidden" data-v-cda5bf8e><img${ssrRenderAttr("src", unref(store).isOpenMenu ? unref(closeMenu) : unref(hamburger))}${ssrRenderAttr("alt", unref(store).isOpenMenu ? "close menu" : "open menu")} class="${ssrRenderClass([!unref(store).isLight && "light_burger", "h-[3rem] z-[100]"])}" data-v-cda5bf8e></button>`);
      if (unref(store).isOpenMenu) {
        _push(`<div class="absolute top-[-3rem] md:px-[5rem] h-[103vh] w-full left-0 bg-primary-1 bg-opacity-90 p-[3rem] rounded-md lg:none text-white" data-v-cda5bf8e><div class="flex items-center justify-between w-full" data-v-cda5bf8e><button class="p-[1rem] pr-0 ml-auto" data-v-cda5bf8e><img${ssrRenderAttr("src", unref(closeMenu))} alt="close menu" class="invert" data-v-cda5bf8e></button></div><div class="mt-[5rem] grid gap-y-[1.5rem] justify-items-center max-w-[50rem] mx-auto" data-v-cda5bf8e><!--[-->`);
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
        _push(`<!--]--></div><div class="flex justify-center gap-x-[2rem] my-[3.5rem] mt-[7rem]" data-v-cda5bf8e><!--[-->`);
        ssrRenderList(socialsData.value, (item, index) => {
          _push(`<a href="#" data-v-cda5bf8e><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", `${item.alt} icon`)} class="w-[3rem] lg:brightness-15" data-v-cda5bf8e></a>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hidden lg:flex gap-x-[3.5rem]" data-v-cda5bf8e><!--[-->`);
      ssrRenderList(linksData.value, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          "active-class": unref(store).pages[index] ? "styleLink text-primary-1 dark:text-neutral-4" : "",
          to: unref(store).pages[index],
          key: index,
          class: "first-letter:uppercase text-[1.5rem] text-neutral-1 lg:hover:text-primary-1 dark:lg:hover:text-neutral-4 lg:transition-colors lg:relative lineHover lg:cursor-pointer"
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
      _push(`<!--]--></div><div class="flex items-center gap-x-[2rem]" data-v-cda5bf8e><button aria-label="change theme" data-v-cda5bf8e><img${ssrRenderAttr("src", unref(store).isLight ? unref(moon) : unref(sun))}${ssrRenderAttr("alt", unref(store).isLight ? "moon" : "sun")} class="${ssrRenderClass([unref(store).isLight && "white_moon", "w-[2.5rem] h-[2.5rem]"])}" data-v-cda5bf8e></button><button type="button" class="hidden lg:block capitalize bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] lg:hover:opacity-60 lg:dark:hover:opacity-100 lg:dark:hover:text-primary-1 lg:dark:transition-colors lg:transition-opacity" data-v-cda5bf8e> request invite </button></div></div></nav>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cda5bf8e"]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
