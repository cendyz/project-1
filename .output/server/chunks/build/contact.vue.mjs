import { defineComponent, reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const x = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Material%20Line%20Icons%20by%20Vjacheslav%20Trushkin%20-%20https://github.com/cyberalien/line-md/blob/master/license.txt%20--%3e%3cpath%20fill='none'%20stroke='currentColor'%20stroke-dasharray='12'%20stroke-dashoffset='12'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M12%2012l7%207M12%2012l-7%20-7M12%2012l-7%207M12%2012l7%20-7'%3e%3canimate%20fill='freeze'%20attributeName='stroke-dashoffset'%20dur='0.3s'%20values='12;0'/%3e%3c/path%3e%3c/svg%3e";

const labelStyles = "block font-w700 mb-[.3rem]";
const inputStyles = "border rounded-md p-[.5rem] w-full text-[1.3rem] lg:text-[1.4rem]";
const errorStyles = "mt-[.3rem] text-[1.2rem] text-[#EF4444]";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
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
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "h-[95rem] lg:h-auto lg:py-[5rem] flex justify-center items-center",
        ref: "el"
      }, _attrs))}><form class="bg-white p-[3rem] border-dashed border-[3px] border-[#3790d0] w-[calc(100%-6rem)] mx-auto my-auto max-w-[540px] lg:p-[5rem] lg:max-w-[580px] z-[100]"><h1 class="text-[2.5rem] font-w700 mb-[1rem] lg:text-[3rem]">Contact us</h1><p class="text-[1.4rem] mb-[2rem] lg:text-[1.5rem]"> Got any questions or suggestions? <br class="sm:hidden"> Fill out this form to reach out. </p><div><div><label for="name" class="${ssrRenderClass(labelStyles)}">Name</label><input type="text" id="name" class="${ssrRenderClass([inputStyles, unref(name_error) && "border-[#EF4444]"])}" placeholder="Enter your name"${ssrRenderAttr("value", unref(input_data).name)}>`);
      if (unref(name_error)) {
        _push(`<p class="${ssrRenderClass(errorStyles)}">${ssrInterpolate(unref(name_error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-[2rem]"><label for="email" class="${ssrRenderClass(labelStyles)}">Email</label><input type="email" id="email" class="${ssrRenderClass([inputStyles, unref(email_error) && "border-[#EF4444]"])}" placeholder="Enter your email"${ssrRenderAttr("value", unref(input_data).email)}>`);
      if (unref(email_error)) {
        _push(`<p class="${ssrRenderClass(errorStyles)}">${ssrInterpolate(unref(email_error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-[2rem]"><label for="message" class="${ssrRenderClass(labelStyles)}">Message</label><textarea id="message" placeholder="Enter your message" class="${ssrRenderClass([[inputStyles, unref(message_error) && "border-[#EF4444]"], "min-h-[13rem] min-w-full"])}">${ssrInterpolate(unref(input_data).message)}</textarea><p class="${ssrRenderClass(errorStyles)}">${ssrInterpolate(unref(message_error))}</p></div><div class="mt-[5rem]"><button type="submit" class="uppercase border-[3px] border-primary-1 w-full py-[.5rem] font-w700 lg:hover:bg-primary-1 lg:hover:text-white transition-colors duration-300"> send </button><p class="text-[1.3rem] text-gray-500 mt-[3rem]"> You can email us directly at <span class="underline">contact@mWallet.com</span></p></div></form><div class="absolute top-0 left-0 w-full h-full bg_pattern"></div>`);
      if (unref(is_sended)) {
        _push(`<div class="absolute z-[1000] w-[30rem] bg-primary-1 top-[5%] h-[15rem] rounded-xl my_shadow flex flex-col justify-between overflow-hidden lg:right-[7rem] xl:right-[9rem]"><button aria-label="close pop up" class="ml-auto block p-[1rem]"><img${ssrRenderAttr("src", unref(x))} alt="x" class="invert-[100]"></button><h2 class="text-[2rem] text-center font-w700 mb-[5rem] text-white">Message successfully sent!</h2><div class="my_line"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
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
