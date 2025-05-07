import { _ as __nuxt_component_1 } from './Footer.vue.mjs';
import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useBankStore, _ as _export_sfc } from './server.mjs';
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

const minus = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20IconaMoon%20by%20Dariush%20Habibpour%20-%20https://creativecommons.org/licenses/by/4.0/%20--%3e%3cpath%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.5'%20d='M6%2012h12'/%3e%3c/svg%3e";

const plus = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20IconaMoon%20by%20Dariush%20Habibpour%20-%20https://creativecommons.org/licenses/by/4.0/%20--%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M13%206a1%201%200%201%200-2%200v5H6a1%201%200%201%200%200%202h5v5a1%201%200%201%200%202%200v-5h5a1%201%200%201%200%200-2h-5z'%20clip-rule='evenodd'/%3e%3c/svg%3e";

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useBankStore();
    const is_hidden = ref(null);
    const input_data = ref({
      user_print: ""
    });
    const new_faq_data = computed(() => {
      return faq_data.value.filter((item) => item.question.toLowerCase().includes(input_data.value.user_print.toLowerCase()));
    });
    const faq_data = ref([
      {
        question: "1. Is mWallet free to use?",
        answer: "Yes! We offer a free version of mWallet with all essential features. For users who need more advanced tools, we also provide a Premium version."
      },
      {
        question: "2. Is my financial data secure with mWallet?",
        answer: "Absolutely. We use bank-level encryption and perform regular security audits to keep your data safe."
      },
      {
        question: "3. Can I connect mWallet to my bank account?",
        answer: "Yes, mWallet allows you to securely link your bank accounts to automatically import transactions and update your balance."
      },
      {
        question: "4. Can I use mWallet on multiple devices?",
        answer: "Yes, you can access mWallet through our mobile app (available for iOS and Android) and via the web on your desktop."
      },
      {
        question: "5. Can I set custom budgets and goals?",
        answer: "Of course! mWallet lets you create personalized budgets and set financial goals, helping you track your progress over time."
      },
      {
        question: "6. What happens if I forget my password?",
        answer: "No worries — simply click “Forgot Password” on the login screen, and we'll send instructions to your email to reset it."
      },
      {
        question: "7. Does mWallet support multiple currencies?",
        answer: "Yes, mWallet supports multiple currencies and automatically converts values based on real-time exchange rates."
      },
      {
        question: "8. Can I categorize my expenses?",
        answer: "Yes, you can easily assign transactions to different categories, making it simple to understand where your money goes."
      },
      {
        question: "9. Is there a limit to the number of accounts I can add?",
        answer: "No, with mWallet you can add as many bank accounts, credit cards, and wallets as you need."
      },
      {
        question: "10. Does mWallet offer reminders for upcoming bills?",
        answer: "Yes! You can set up bill reminders so you never miss a due date again."
      },
      {
        question: "11. How do I upgrade to mWallet Premium?",
        answer: "You can upgrade anytime through the app settings or on our website. Premium unlocks additional features like advanced analytics and priority support."
      },
      {
        question: "12. How can I contact mWallet support?",
        answer: "You can reach our support team via the contact form on our website or by emailing us directly at support@mwallet.com."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[--><header class="relative" data-v-18a320f3><div class="container pt-[15rem] py-[7rem] lg:pt-[11rem] lg:h-[50rem] p-[3rem] lg:px-[3.5rem] xl:px-[7rem] lg:text-center lg:flex lg:justify-center lg:items-center" data-v-18a320f3><p class="px-[1.2rem] lg:mt-[5rem] py-[.5rem] border-primary-3 border rounded-3xl w-fit lg:hidden" data-v-18a320f3>FAQs</p><div class="mt-[2rem]" data-v-18a320f3><label for="question" class="text-[4rem] text-primary-1 dark:text-primary-10 lg:text-[5rem] z-[100] relative" data-v-18a320f3>What can we help you find?</label><input type="text" id="question" class="block mt-[3rem] w-full p-[1rem] rounded-md border border-primary-3 bg-neutral-4 z-[100] relative lg:w-[40rem] lg:mx-auto"${ssrRenderAttr("value", unref(input_data).user_print)} data-v-18a320f3></div></div><div class="${ssrRenderClass([unref(store).isLight ? "dark_bg" : "light_bg", "bg"])}" data-v-18a320f3></div></header><main class="px-[3rem] py-[10rem] sm:w-[70rem] lg:w-auto lg:px-[3.5rem] xl:px-[7rem] dark:bg-neutral-21" data-v-18a320f3><!--[-->`);
      ssrRenderList(unref(new_faq_data), (item, index) => {
        _push(`<div class="pt-[2rem] mt-[2.8rem] border-t container border-primary-2 text-primary-1 lg:first:mt-0 lg:w-[50%] lg:mx-auto dark:text-primary-11" data-v-18a320f3><div class="flex justify-between items-center" data-v-18a320f3><p data-v-18a320f3>${ssrInterpolate(item.question)}</p><button aria-label="show question" data-v-18a320f3><img${ssrRenderAttr("src", unref(is_hidden) == index ? unref(minus) : unref(plus))}${ssrRenderAttr("alt", unref(is_hidden) == index ? "hide answer" : "show answer")} class="${ssrRenderClass(unref(store).isLight && "dark_img")}" data-v-18a320f3></button></div>`);
        if (unref(is_hidden) == index) {
          _push(`<p class="text-primary-2 dark:text-primary-3 mt-[2rem]" data-v-18a320f3>${ssrInterpolate(item.answer)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18a320f3"]]);

export { faq as default };
//# sourceMappingURL=faq.vue.mjs.map
