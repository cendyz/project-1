import { _ as __nuxt_component_2 } from './Footer.vue.mjs';
import { defineComponent, reactive, ref, unref, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { c as closeMenu } from './close_x.svg.mjs';
import { u as useBankStore } from './server.mjs';
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

const labelStyles = "block font-w700 mb-[.3rem]";
const inputStyles = "border rounded-md p-[.5rem] w-full text-[1.3rem] text-primary-1 lg:text-[1.4rem]";
const errorStyles = "mt-[.3rem] text-[1.2rem] text-[#EF4444]";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useBankStore();
    const input_data = reactive({
      name: "",
      email: "",
      message: ""
    });
    const name_error = ref("");
    const email_error = ref("");
    const message_error = ref("");
    const is_sended = ref(false);
    ref(100);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[--><main class="h-[95rem] lg:py-[5rem] flex justify-center items-center"><form class="bg-neutral-4 p-[3rem] border-dashed border-[3px] dark:bg-neutral-40 dark:text-primary-11 border-primary-3 w-[calc(100%-6rem)] mx-auto my-auto max-w-[540px] lg:p-[5rem] lg:max-w-[580px] z-[100]"><h1 class="text-[2.5rem] font-w700 mb-[1rem] lg:text-[3rem]">Contact us</h1><p class="text-[1.4rem] mb-[2rem] lg:text-[1.5rem]"> Got any questions or suggestions? <br class="sm:hidden"> Fill out this form to reach out. </p><div><div><label for="name" class="${ssrRenderClass(labelStyles)}">Name</label><input type="text" id="name" class="${ssrRenderClass([inputStyles, unref(name_error) && "border-primary-red"])}" placeholder="Enter your name"${ssrRenderAttr("value", unref(input_data).name)}>`);
      if (unref(name_error)) {
        _push(`<p class="${ssrRenderClass(errorStyles)}">${ssrInterpolate(unref(name_error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-[2rem]"><label for="email" class="${ssrRenderClass(labelStyles)}">Email</label><input type="email" id="email" class="${ssrRenderClass([inputStyles, unref(email_error) && "border-primary-red"])}" placeholder="Enter your email"${ssrRenderAttr("value", unref(input_data).email)}>`);
      if (unref(email_error)) {
        _push(`<p class="${ssrRenderClass(errorStyles)}">${ssrInterpolate(unref(email_error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-[2rem]"><label for="message" class="${ssrRenderClass(labelStyles)}">Message</label><textarea id="message" placeholder="Enter your message" class="${ssrRenderClass([[inputStyles, unref(message_error) && "border-primary-red"], "min-h-[13rem] min-w-full"])}">${ssrInterpolate(unref(input_data).message)}</textarea><p class="${ssrRenderClass(errorStyles)}">${ssrInterpolate(unref(message_error))}</p></div><div class="mt-[5rem]"><button type="submit" class="uppercase border-[3px] rounded-lg border-primary-1 dark:border-primary-10 w-full py-[.5rem] font-w700 lg:hover:bg-primary-1 lg:hover:text-neutral-4 transition-colors duration-300"> send </button><p class="text-[1.3rem] text-primary-gray2 mt-[3rem]"> You can email us directly at <span class="underline">contact@mWallet.com</span></p></div></form><div class="${ssrRenderClass([unref(store).isLight ? "dark_pattern" : "bg_pattern", "absolute top-0 left-0 w-full h-[115%]"])}"></div>`);
      if (unref(is_sended)) {
        _push(`<div class="absolute z-[1000] w-[30rem] bg-primary-1 top-[5%] h-[15rem] rounded-xl my_shadow flex flex-col justify-between overflow-hidden lg:right-[7rem] xl:right-[9rem]"><button aria-label="close pop up" class="ml-auto block p-[1rem]"><img${ssrRenderAttr("src", unref(closeMenu))} alt="x" class="invert-[100]"></button><h2 class="text-[2rem] text-center font-w700 mb-[5rem] text-neutral-4">Message successfully sent!</h2><div class="my_line bg-primary-3"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, { class: "z-[99] relative" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact.vue.mjs.map
