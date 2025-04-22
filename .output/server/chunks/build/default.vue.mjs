import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { b as useBankStore, _ as _export_sfc } from './server.mjs';
import { l as logo } from './logo.png.mjs';
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

const hamburger = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='11'%3e%3cg%20fill='%232D314D'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h24v1H0zM0%205h24v1H0zM0%2010h24v1H0z'/%3e%3c/g%3e%3c/svg%3e";

const closeMenu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='19'%3e%3cg%20fill='%232D314D'%20fill-rule='evenodd'%3e%3cpath%20d='M.868.661l16.97%2016.97-.706.708L.162%201.369z'/%3e%3cpath%20d='M.161%2017.632L17.131.662l.708.706-16.97%2016.97z'/%3e%3c/g%3e%3c/svg%3e";

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useBankStore();
    const navMenu = ref();
    const linksData = ref(["home", "about", "contact", "careers", "articles"]);
    const handleCloseOutside = (e) => {
      if (navMenu.value && !navMenu.value.contains(e.target)) {
        store.isOpenMenu = false;
      }
    };
    watch(
      () => store.isOpenMenu,
      (newValue) => {
        if (newValue) {
          (void 0).addEventListener("click", handleCloseOutside);
        } else {
          (void 0).removeEventListener("click", handleCloseOutside);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "py-[2rem] bg-white w-full relative z-[1000] lg:fixed lg:top-0 lg:left-0 lg:w-full",
        ref_key: "navMenu",
        ref: navMenu
      }, _attrs))} data-v-37c07a3c><div class="px-[3rem] flex justify-between relative container lg:items-center lg:justify-between lg:px-[3.5rem] xl:px-[7rem]" data-v-37c07a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-x-[1rem] select-none hover:cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logo))} class="w-[5rem] h-[5rem] z-[50]" alt="logo easybank" data-v-37c07a3c${_scopeId}><p class="font-w700 text-[2rem] hidden sm:block text-[#2d314d]" data-v-37c07a3c${_scopeId}>mWallet</p>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logo),
                class: "w-[5rem] h-[5rem] z-[50]",
                alt: "logo easybank"
              }, null, 8, ["src"]),
              createVNode("p", { class: "font-w700 text-[2rem] hidden sm:block text-[#2d314d]" }, "mWallet")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" aria-label="open close nav menu" class="lg:hidden" data-v-37c07a3c><img${ssrRenderAttr("src", unref(store).isOpenMenu ? unref(closeMenu) : unref(hamburger))}${ssrRenderAttr("alt", unref(store).isOpenMenu ? "close menu" : "open menu")} class="${ssrRenderClass([unref(store).isOpenMenu ? "w-[2rem] h-[2.1rem]" : "w-[2.8rem]", "h-[1.8rem] z-[100]"])}" data-v-37c07a3c></button>`);
      if (unref(store).isOpenMenu) {
        _push(`<div class="absolute top-[9.5rem] w-[calc(100%-4.4rem)] left-1/2 translate-x-[-50%] justify-items-center bg-neutral-4 grid gap-y-[1.5rem] py-[3rem] rounded-md lg:none" data-v-37c07a3c><!--[-->`);
        ssrRenderList(linksData.value, (item, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(store).pages[index],
            onClick: ($event) => unref(store).isOpenMenu = false,
            key: index,
            class: "first-letter:uppercase text-[1.8rem] w-fit"
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
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hidden lg:flex gap-x-[3.5rem]" data-v-37c07a3c><!--[-->`);
      ssrRenderList(linksData.value, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => console.log(unref(store).pages[index]),
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
      _push(`<!--]--></div><button type="button" class="hidden lg:block capitalize bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] lg:hover:opacity-60 lg:transition-opacity" data-v-37c07a3c> request invite </button></div></nav>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37c07a3c"]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
