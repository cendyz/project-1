import { defineComponent, mergeProps, unref, ref, watch, useSSRContext, provide, createElementBlock, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useBankStore, a as useRouter } from './server.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _sfc_main$7 } from './NuxtImg.vue2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { _ as __nuxt_component_2$1 } from './Footer.vue.mjs';
import { a as useStorage } from './index.mjs';
import 'pinia';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import './v3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import './icon-instagram.svg.mjs';
import './nuxt-link.mjs';

const mobileIntro = publicAssetsURL("/img/bg-intro-mobile.png");

const desktopIntro = publicAssetsURL("/img/bg-intro-desktop.png");

const wallet = publicAssetsURL("/img/mockup.png");

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-neutral-3 lg:overflow-x-clip lg:pb-0 dark:bg-neutral-30" }, _attrs))}><div class="container relative text-center pt-[9rem] sm:pt-[9rem] lg:pt-[11rem] lg:h-[65rem] lg:flex lg:px-[3.5rem] xl:px-[7rem]"><picture><source${ssrRenderAttr("srcset", unref(desktopIntro))} media="(min-width: 640px)">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        src: unref(mobileIntro),
        alt: "",
        "aria-hidden": "true",
        class: "block w-full absolute sm:top-[8rem] lg:left-[50rem] xl:left-[55rem] lg:top-[-20rem] xl:top-[-26rem] lg:z-[0]"
      }, null, _parent));
      _push(`</picture>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: unref(wallet),
        format: "webp",
        alt: "phone and wallet",
        class: "block w-[calc(100%-3rem)] mx-auto lg:absolute top-0 z-[30] relative md:w-[70%] md:top-[5rem] lg:w-[47rem] xl:w-[55rem] lg:left-[80.5rem] xl:left-[99.5rem] lg:top-[55%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:z-[20] 2xl:left-[126rem]"
      }, null, _parent));
      _push(`<div class="lg:py-[12rem] lg:text-left px-[2rem] lg:px-0 sm:w-[50rem] sm:mx-auto lg:mx-0 flex flex-col justify-center items-center h-[40rem] md:h-[70rem] lg:h-auto lg:items-start xl:px-0"><h1 class="text-[4rem] leading-[1.1] mt-[-3rem] sm:mt-0 mb-[3rem] text-primary-1 md:text-[5rem] md:mx-auto lg:mt-0 lg:mx-0 lg:text-[6.5rem] lg:w-[50rem] sm:px-[2rem] md:w-auto md:px-0 dark:text-neutral-10"> Next generation digital wallet </h1><p class="text-[1.5rem] px-[1rem] text-neutral-1 md:text-[1.7rem] md:w-[47rem] md:mx-auto lg:mx-0 lg:px-0 lg:text-[1.82rem] md:px-0 lg:w-[43rem] dark:text-neutral-10"> Take your finances to the next level. Your mWallet account is your all-in-one solution for managing payments, saving, tracking expenses, investing, and more. </p><button type="button" class="mt-[4rem] bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] md:text-[1.6rem] lg:hover:opacity-60 lg:transition-opacity lg:dark:hover:opacity-100 lg:dark:hover:text-primary-1 lg:dark:transition-colors"> Request Invite </button></div></div></header>`);
    };
  }
});

const img1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='72'%20height='72'%3e%3cdefs%3e%3clinearGradient%20gradientUnits='userSpaceOnUse'%20x1='36'%20y1='0'%20x2='36'%20y2='72'%20id='gradient-0'%20gradientTransform='matrix(0.949192,%20-0.314697,%200.30494,%200.919763,%20-20.126589,%2017.10617)'%3e%3cstop%20offset='0'%20style='stop-color:%20rgb(78,%20161,%20216);'/%3e%3cstop%20offset='1'%20style='stop-color:%20rgb(0%25%2026.418%25%2043.856%25)'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='36'%20cy='36'%20r='36'%20style='fill:%20url(&quot;%23gradient-0&quot;);'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M45.984%2016a3.336%203.336%200%20013.332%203.332v3.727l4.11%204.118a8.72%208.72%200%20012.553%206.141v21.994a.666.666%200%2001-.667.667H43.32a.666.666%200%2001-.667-.667V48.84l-.382-.612a9.632%209.632%200%2001-.83-8.553L25.799%2045.7a3.332%203.332%200%2001-4.307-1.91l-2.504-6.502A3.325%203.325%200%200116%2033.99V19.332A3.336%203.336%200%200119.332%2016zm8.662%2033.316h-10.66v5.33h10.66v-5.33zm-7.996%201.332v1.333h-1.332v-1.333h1.332zm3.675-24.69l2.255%205.855a3.332%203.332%200%2001-1.91%204.305l-.683.266%202.465%202.466-.942.942-10.618-10.615a2.222%202.222%200%2000-3.209%203.073l5.46%205.957c.196.213.232.53.088.78a8.309%208.309%200%2000.169%208.534l.289.462h10.957V33.318a7.379%207.379%200%2000-2.162-5.198l-2.159-2.163zm-9.798%2011.36H29.565v.004l-7.953%203.065%201.124%202.923a1.999%201.999%200%20002.584%201.147l16.073-6.195-.866-.944zm-14.658.004h-5.44l.702%201.824%204.738-1.824zm20.115-19.99H19.332a2%202%200%2000-2%202V33.99a2%202%200%20002%202h19.974l-2.602-2.843a3.555%203.555%200%20015.13-4.916l6.104%206.105c.025-.114.04-.23.045-.346V23.582l-.006-.015h.006v-4.235a2%202%200%2000-1.999-2zm3.332%209.712v6.946a3.332%203.332%200%2001-.282%201.333l1.156-.446a1.999%201.999%200%20001.148-2.584l-2.022-5.25zm-27.32%204.281v1.333h-2.664v-1.333h2.665zm11.994%200v1.333h-2.665v-1.333h2.665zm-11.993-3.998v1.333h-2.665v-1.333h2.665zm3.998%200v1.333h-2.666v-1.333h2.666zm3.998%200v1.333h-2.666v-1.333h2.666zm3.997%200v1.333h-2.665v-1.333h2.665zm-10.394-8.662c.957%200%201.732.776%201.732%201.733v3.198c0%20.957-.775%201.732-1.732%201.732h-3.198a1.732%201.732%200%2001-1.733-1.732v-3.198c0-.957.776-1.733%201.733-1.733zm0%201.333h-3.198a.4.4%200%2000-.4.4v.932h1.332v1.333h-1.332v.933c0%20.22.179.4.4.4h3.198a.4.4%200%2000.4-.4v-.933h-1.333V21.33h1.333v-.932a.4.4%200%2000-.4-.4zm21.722-.666v1.998h-1.333v-1.998h1.333zm-2.666%200v1.998H41.32v-1.998h1.332zm-2.665%200v1.998h-1.332v-1.998h1.332zm-2.665%200v1.998h-1.333v-1.998h1.333z'/%3e%3c/g%3e%3c/svg%3e";

const img2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='72'%20height='72'%3e%3cdefs%3e%3clinearGradient%20gradientUnits='userSpaceOnUse'%20x1='36'%20y1='0'%20x2='36'%20y2='72'%20id='gradient-0'%20gradientTransform='matrix(0.944904,%20-0.327347,%200.33315,%200.961656,%20-22.003384,%2014.545245)'%3e%3cstop%20offset='0'%20style='stop-color:%20rgb(78,%20161,%20216);'/%3e%3cstop%20offset='1'%20style='stop-color:%20rgb(0%25%2026.418%25%2043.856%25)'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='36'%20cy='36'%20r='36'%20style='fill:%20url(&quot;%23gradient-0&quot;);'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M44.633%2016a3.096%203.096%200%20013.092%203.092v7.57c5.23.286%209.393%204.365%209.393%209.338%200%204.973-4.162%209.052-9.393%209.338v7.57A3.095%203.095%200%200144.633%2056H27.099a3.095%203.095%200%2001-3.092-3.092v-7.24a.587.587%200%20111.174%200v3.522h21.37v-3.852a10.479%2010.479%200%2001-2.89-.568l-4.383%202.391c-.466.254-1.013-.22-.833-.716l1.308-3.596h-6.705a.592.592%200%2001-.415-.172l-4.697-4.696a.593.593%200%2001-.172-.415V24.728c0-.324.263-.587.587-.587h15.03c.324%200%20.587.263.587.587v2.402c.819-.258%201.685-.419%202.583-.468v-4.478H25.18v20.704a.587.587%200%2011-1.174%200V19.092A3.096%203.096%200%200127.099%2016zm1.918%2034.364H25.18v2.544a1.92%201.92%200%20001.918%201.918h17.534a1.92%201.92%200%20001.918-1.918v-2.544zm-9.433.705c.325%200%20.587.262.587.587v1.878a.587.587%200%2001-.587.587h-2.505a.587.587%200%2001-.587-.587v-1.878c0-.325.263-.587.587-.587zm-.587%201.174h-1.33v.704h1.33v-.704zM47.138%2027.82c-4.856%200-8.806%203.67-8.806%208.18%200%202.217.94%204.293%202.647%205.846.177.16.239.41.157.635l-1.056%202.905%203.251-1.773a.587.587%200%2001.49-.034%209.343%209.343%200%20003.317.601c4.856%200%208.806-3.67%208.806-8.18s-3.95-8.18-8.806-8.18zm0%201.33c.324%200%20.587.264.587.588v1.291h.04a2.469%202.469%200%20012.465%202.466v.626a.587.587%200%2011-1.174%200v-.626c0-.712-.58-1.291-1.292-1.291h-.94c-.884%200-1.604.72-1.604%201.604%200%20.885.72%201.605%201.605%201.605h.626a2.782%202.782%200%20012.779%202.779c0%201.44-1.1%202.627-2.505%202.765v1.305a.587.587%200%2011-1.174%200v-1.291h-.04a2.469%202.469%200%2001-2.465-2.466.587.587%200%20111.174%200c0%20.712.58%201.291%201.292%201.291h.939c.885%200%201.605-.72%201.605-1.604%200-.885-.72-1.605-1.605-1.605h-.626a2.782%202.782%200%2001-2.78-2.779c0-1.44%201.102-2.627%202.506-2.765v-1.305c0-.324.263-.587.587-.587zm-4.345-3.835H28.938v11.663h4.11c.324%200%20.587.263.587.588v4.11h5.567c-1.327-1.622-2.044-3.593-2.044-5.676%200-1.112.208-2.18.59-3.17h-6.266a.587.587%200%20110-1.174h6.82c.399-.711.893-1.369%201.466-1.957h-2.023a.587.587%200%20110-1.174h3.13c.076%200%20.148.014.214.04.53-.38%201.1-.71%201.704-.985v-2.265zM32.461%2038.153h-2.692l2.692%202.692v-2.692zm3.405-3.366a.587.587%200%20110%201.174h-4.384a.587.587%200%20110-1.174zm-.626-6.263a.587.587%200%20110%201.175h-3.758a.587.587%200%20110-1.175zm9.393-11.35H27.099a1.92%201.92%200%2000-1.918%201.918v1.918h21.37v-1.918a1.92%201.92%200%2000-1.918-1.918zm-7.515%201.33a.587.587%200%20110%201.175h-2.505a.587.587%200%20110-1.174z'/%3e%3c/g%3e%3c/svg%3e";

const img3 = "" + __buildAssetsURL("icon-onboarding.C4rFz3Qu.svg");

const img4 = "" + __buildAssetsURL("icon-api.BvJsa54J.svg");

const icon1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3c!--%20Icon%20from%20Carbon%20by%20IBM%20-%20undefined%20--%3e%3cpath%20fill='currentColor'%20d='M13%2011h7v2h-7z'/%3e%3cpath%20fill='currentColor'%20d='M29%2013h-2.02A5.78%205.78%200%200%200%2025%208.852V5a1%201%200%200%200-1.6-.8L19.667%207H15c-5.51%200-9.463%203.241-9.948%208H5a1%201%200%200%201-1-1v-2H2v2a3.003%203.003%200%200%200%203%203h.07A9.17%209.17%200%200%200%209%2023.557V27a1%201%200%200%200%201%201h4a1%201%200%200%200%201-1v-2h3v2a1%201%200%200%200%201%201h4a1%201%200%200%200%201-1v-3.363A5.1%205.1%200%200%200%2026.819%2020H29a1%201%200%200%200%201-1v-5a1%201%200%200%200-1-1m-1%205h-2.876c-.305%202.753-.823%203.485-3.124%204.315V26h-2v-3h-7v3h-2v-3.622A7.01%207.01%200%200%201%207%2016c0-4.835%204.018-7%208-7h5.334L23%207v2.776c2.418%201.86%201.913%203.186%202.018%205.224H28Z'/%3e%3c/svg%3e";

const icon2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Material%20Symbols%20by%20Google%20-%20https://github.com/google/material-design-icons/blob/master/LICENSE%20--%3e%3cpath%20fill='currentColor'%20d='M12%2021q-.425%200-.712-.288T11%2020v-7H4q-.425%200-.712-.288T3%2012t.288-.712T4%2011h7V4q0-.425.288-.712T12%203t.713.288T13%204v7h7q.425%200%20.713.288T21%2012t-.288.713T20%2013h-7v7q0%20.425-.288.713T12%2021'/%3e%3c/svg%3e";

const icon3 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Unicons%20by%20Iconscout%20-%20https://github.com/Iconscout/unicons/blob/master/LICENSE%20--%3e%3cpath%20fill='currentColor'%20d='M14%2011h-1V7h2a1%201%200%200%201%201%201a1%201%200%200%200%202%200a3%203%200%200%200-3-3h-2V3a1%201%200%200%200-2%200v2h-1a4%204%200%200%200%200%208h1v4H9a1%201%200%200%201-1-1a1%201%200%200%200-2%200a3%203%200%200%200%203%203h2v2a1%201%200%200%200%202%200v-2h1a4%204%200%200%200%200-8m-3%200h-1a2%202%200%200%201%200-4h1Zm3%206h-1v-4h1a2%202%200%200%201%200%204'/%3e%3c/svg%3e";

const triangle = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Tabler%20Icons%20by%20Paweł%20Kuna%20-%20https://github.com/tabler/tabler-icons/blob/master/LICENSE%20--%3e%3cpath%20fill='currentColor'%20d='M20.118%203H3.893A2.914%202.914%200%200%200%201.39%207.371L9.506%2020.92a2.917%202.917%200%200%200%204.987.005l8.11-13.539A2.914%202.914%200%200%200%2020.117%203z'/%3e%3c/svg%3e";

const iconStyles = "absolute opacity-[5%] w-[15rem] md:w-[20rem] z-[1] 2xl:w-[30rem]";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FirstSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useBankStore();
    ref(false);
    const is_law = ref(null);
    const law_refs = ref([]);
    const hide_law = (e) => {
      if (is_law.value !== null) {
        const current_law = law_refs.value[is_law.value];
        if (current_law && !current_law.contains(e.target)) {
          is_law.value = null;
        }
      }
    };
    watch(
      () => is_law.value,
      (newValue) => {
        (void 0).removeEventListener("click", hide_law);
        if (newValue || newValue == 0) {
          setTimeout(() => {
            (void 0).addEventListener("click", hide_law);
          }, 0);
        }
      }
    );
    const profitsData = ref([
      {
        img: img1,
        title: "All-in-one Banking"
      },
      {
        img: img2,
        title: "Smart Budgeting"
      },
      {
        img: img3,
        title: "Instant Setup"
      },
      {
        img: img4,
        title: "Connected Tools"
      }
    ]);
    watch(
      () => store.isLight,
      (newValue) => {
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-neutral-2 dark:bg-neutral-20 py-[11rem] px-[2.2rem] text-center text-neutral-1 dark:text-neutral-10 text-[1.5rem] md:text-[1.6rem] lg:z-[9] relative" }, _attrs))} data-v-78438e58><div class="container lg:px-[3.5rem] xl:px-0" data-v-78438e58><h2 class="text-[3rem] font-w700 leading-[1.2] mb-[2.2rem] px-[1rem] text-primary-1 dark:text-neutral-10 md:text-[3.5rem] lg:px-0" data-v-78438e58> Why choose mWallet? </h2><p class="sm:w-[38rem] text-primary-1 dark:text-primary-10 px-[2rem] mt-[2rem] leading-[2] sm:mx-auto lg:w-[55rem] lg:mx-auto" data-v-78438e58> With seamless digital integration, BlueWallet transforms your phone into a smart financial command center. Manage money intuitively and securely. </p><div class="mt-[7rem] grid gap-y-[3rem] lg:grid lg:grid-cols-2 lg:gap-y-[6rem] xl:flex xl:justify-items-center xl:flex-wrap lg:w-[90rem] lg:mx-auto" data-v-78438e58><!--[-->`);
      ssrRenderList(unref(profitsData), (item, index) => {
        _push(`<div data-aos="zoom-in-up"${ssrRenderAttr("data-aos-once", true)}${ssrRenderAttr("data-aos-duration", 400)}${ssrRenderAttr("delay", index * 200)} class="bg-neutral-3 dark:bg-neutral-30 bg-opacity-50 p-[2rem] border lg:border-[2px] rounded-xl lg:border-primary-2 dark:border-primary-1 max-w-[45rem] mx-auto lg:w-auto z-[10]" data-v-78438e58><div class="p-[2rem]" data-v-78438e58><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.title)} class="block mx-auto w-[7rem] h-[7rem] md:w-[8rem] md:h-[8rem]" data-v-78438e58><h3 class="text-primary-1 dark:text-primary-10 text-[2.5rem] font-w700 my-[2rem] md:text-[2.2rem]" data-v-78438e58>${ssrInterpolate(item.title)}</h3><ul class="text-left text-primary-1 dark:text-primary-10 sm:w-[35rem] sm:mx-auto lg:w-[30rem] lg:mx-0 list-disc grid gap-y-[2rem]" data-v-78438e58><li data-v-78438e58>Lorem ipsum dolor sit amet con se cte tur adi pisic ing elit. Eligendi, quae. Lorem, ipsum.</li><li data-v-78438e58>Lorem ipsum dolor sit amet con se cte tur adi pcs icing elit. Eligendi, quae. Lorem, ipsum.</li></ul><div class="flex justify-between items-center mt-[3rem] relative" data-v-78438e58><button type="button" class="bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] md:text-[1.6rem] lg:hover:opacity-60 lg:transition-opacity lg:dark:hover:opacity-100 lg:dark:hover:text-primary-1 lg:dark:transition-colors" data-v-78438e58> Check </button><button type="button" class="underline italic rounded-full font-w700 md:text-[1.6rem] text-[1.1rem]" data-v-78438e58> law note </button>`);
        if (unref(is_law) == index) {
          _push(`<div class="absolute w-[20rem] rounded-xl text-left h-[20rem] text-primary-1 bg-neutral-4 dark:bg-neutral40 p-[2rem] overflow-scroll lg:overflow-hidden right-[.6rem] bottom-[5rem] z-[10] md:w-[25rem] md:right-[1.7rem] md:bottom-[6rem] boxShadowLaw" data-v-78438e58><p class="text-[1.2rem] font-w700" data-v-78438e58> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi quibusdam sapiente pariatur, exercitationem doloremque nihil autem omnis laboriosam esse hic temporibus vel at veniam ut maxime totam necessitatibus minima. </p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(is_law) == index) {
          _push(`<div class="absolute bottom-[3rem] right-[.5rem] md:right-7 md:bottom-[4rem] z-[11]" data-v-78438e58><img${ssrRenderAttr("src", unref(triangle))} alt="" aria-hidden="true" class="w-[3rem] invert-[100%]" data-v-78438e58></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div><img${ssrRenderAttr("src", unref(icon1))} alt="" aria-hidden="true" class="${ssrRenderClass([[iconStyles, unref(store).isLight && "darkIconsBg"], "top-[35rem] left-[-2rem] md:top-[30rem] md:left-[5rem] lg:top-[20rem] 2xl:left-[35rem] rotate-12 animeSpin"])}" data-v-78438e58><img${ssrRenderAttr("src", unref(icon2))} alt="" aria-hidden="true" class="${ssrRenderClass([[iconStyles, unref(store).isLight && "darkIconsBg"], "right-[5rem] top-[130rem] md:top-[120rem] lg:top-[75rem] rotate-45 animeSpin 2xl:right-[30rem]"])}" data-v-78438e58><img${ssrRenderAttr("src", unref(icon3))} alt="" aria-hidden="true" class="${ssrRenderClass([[iconStyles, unref(store).isLight && "darkIconsBg"], "left-[2rem] bottom-[1rem] md:left-[4rem] rotate-6 animeSpinRight 2xl:left-[19rem] 2xl:bottom-[10rem]"])}" data-v-78438e58></section>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FirstSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-78438e58"]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SecondSection",
  __ssrInlineRender: true,
  setup(__props) {
    const grid_data = ref([
      {
        title: "Track Your Spending",
        desc: "Monitor daily expenses and gain full control over your financial habits — in real time.",
        my_class: "one text-neutral-4 dark:text-primary-1 bg-primary-1 dark:bg-neutral-2"
      },
      {
        title: "Set Smart Budgets",
        desc: "Create personalized budgets and receive insights that help you stay on track with your financial goals.",
        img: "/img/2.png",
        my_class: "two dark:text-neutral-4  dark:bg-primary-1"
      },
      {
        title: "Analyze Your Finances",
        desc: "Visualize your income, expenses, and trends with intuitive graphs and detailed reports.",
        img: "/img/3.png",
        my_class: "three dark:text-neutral-4  dark:bg-primary-1"
      },
      {
        title: "Connect Your Accounts",
        desc: "Link your bank accounts securely and manage all your finances from one simple dashboard.",
        my_class: "four text-neutral-4 dark:text-primary-1 bg-primary-1 dark:bg-neutral-2"
      },
      {
        title: "Plan Your Savings",
        desc: "Set savings goals and watch your progress grow with automatic tracking and smart recommendations.",
        my_class: "five text-neutral-4 dark:text-primary-1 bg-primary-1 dark:bg-neutral-2"
      },
      {
        title: "Stay Secure",
        desc: "Your data is protected with bank-level encryption and strict privacy controls — your security is our priority.",
        img: "/img/4.png",
        my_class: "six dark:text-neutral-4  dark:bg-primary-1"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid py-[10rem] px-[3rem] pb-[10rem] bg-neutral-3 dark:bg-neutral-21" }, _attrs))} data-v-bb19ba74><div data-v-bb19ba74><div class="lg:w-[50rem] lg:mx-auto lg:text-center" data-v-bb19ba74><h2 class="capitalize text-[2.8rem] md:text-[3.5rem] mb-[2rem] text-primary-1 dark:text-neutral-10" data-v-bb19ba74> Over 20 Tools to Manage Your Finances. Unlimited Control. </h2><p class="leading-[1.7] text-primary-1 dark:text-neutral-10" data-v-bb19ba74> Track your expenses in real time. Set smart budgets with just a few taps. Plan your savings goals and manage your money anywhere, anytime. With mWallet, your financial future is in your hands. </p></div><div class="grid gap-[3rem] mt-[5rem] sm:block sm:columns-2 lg:grid lg:grid-cols-2 grid_cols lg:w-[100rem] lg:mx-auto" data-v-bb19ba74><!--[-->`);
      ssrRenderList(unref(grid_data), (item, index) => {
        _push(`<div data-aos="zoom-in-up"${ssrRenderAttr("data-aos-once", true)}${ssrRenderAttr("delay", index * 200)} prefetch class="${ssrRenderClass([[item.my_class, item.img ? "lg:flex-row " : "lg:flex-col"], "border-[2px] border-primary-1 dark:border-primary-10 rounded-3xl lg:flex lg:items-center overflow-hidden mx-auto lg:max-w-[100%] lg:mx-0 max-w-[40rem] sm:mb-[3.5rem] lg:mb-0"])}" data-v-bb19ba74><div class="p-[2rem] lg:m-auto lg:text-left" data-v-bb19ba74><h3 class="font-w700 mb-[2rem] text-[2rem]" data-v-bb19ba74>${ssrInterpolate(item.title)}</h3><p data-v-bb19ba74>${ssrInterpolate(item.desc)}</p></div>`);
        if (item.img) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: item.img,
            alt: "phone",
            class: "block lg:h-[30rem] w-[30rem]",
            format: "webp"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SecondSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-bb19ba74"]]);

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
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

const right = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Material%20Symbols%20by%20Google%20-%20https://github.com/google/material-design-icons/blob/master/LICENSE%20--%3e%3cpath%20fill='currentColor'%20d='m12%2016l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12%208l-4%204zm0%206q-2.075%200-3.9-.788t-3.175-2.137T2.788%2015.9T2%2012t.788-3.9t2.137-3.175T8.1%202.788T12%202t3.9.788t3.175%202.137T21.213%208.1T22%2012t-.788%203.9t-2.137%203.175t-3.175%202.138T12%2022m0-2q3.35%200%205.675-2.325T20%2012t-2.325-5.675T12%204T6.325%206.325T4%2012t2.325%205.675T12%2020m0-8'/%3e%3c/svg%3e";

const left = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Material%20Symbols%20by%20Google%20-%20https://github.com/google/material-design-icons/blob/master/LICENSE%20--%3e%3cpath%20fill='currentColor'%20d='m12%2016l4-4l-4-4l-1.4%201.4l1.6%201.6H8v2h4.2l-1.6%201.6zm0%206q-2.075%200-3.9-.788t-3.175-2.137T2.788%2015.9T2%2012t.788-3.9t2.137-3.175T8.1%202.788T12%202t3.9.788t3.175%202.137T21.213%208.1T22%2012t-.788%203.9t-2.137%203.175t-3.175%202.138T12%2022m0-2q3.35%200%205.675-2.325T20%2012t-2.325-5.675T12%204T6.325%206.325T4%2012t2.325%205.675T12%2020m0-8'/%3e%3c/svg%3e";

function useSwiper(swiperContainerRef, options) {
  const swiper = computed(() => {
    var _a;
    return ((_a = swiperContainerRef == null ? void 0 : swiperContainerRef.value) == null ? void 0 : _a.swiper) ?? null;
  });
  const next = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideNext();
    else
      swiper.value.slideNext(...params);
  };
  const to = (...params) => {
    if (!swiper.value)
      return;
    swiper.value.slideTo(...params);
  };
  const reset = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideReset();
    else
      swiper.value.slideReset(...params);
  };
  const prev = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slidePrev();
    else
      swiper.value.slidePrev(...params);
  };
  const checkSwiperRef = () => {
    var _a;
    const isSwiperContainer = ((_a = swiperContainerRef.value) == null ? void 0 : _a.nodeName) === "SWIPER-CONTAINER";
    if (!isSwiperContainer && swiper.value !== null && true) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        "font-weight: bold;"
      );
    }
  };
  watch(swiper, () => checkSwiperRef());
  return {
    instance: swiper,
    next,
    prev,
    to,
    reset
  };
}

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ThirdSection",
  __ssrInlineRender: true,
  setup(__props) {
    const containerRef = ref(null);
    ref([
      {
        title: "Your Money. Your Rules.",
        desc: "Take control of your finances with real-time tracking and smart planning tools."
      },
      {
        title: "All Your Accounts in One Place",
        desc: "Securely connect your bank accounts and manage everything from a single dashboard."
      },
      {
        title: "Budget Better. Stress Less.",
        desc: "Set monthly budgets and stay on track with spending insights and notifications."
      },
      {
        title: "Safe. Simple. Powerful.",
        desc: "Your data is encrypted. Your experience is seamless. Your wallet, upgraded."
      }
    ]);
    useSwiper(containerRef);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative dark:bg-neutral-21 py-[3rem] bg-neutral-3" }, _attrs))} data-v-33e1fd28>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="absolute bottom-[15rem] left-1/2 translate-x-[-50%] flex gap-x-[2rem] z-[100]" data-v-33e1fd28><button aria-label="prev" data-v-33e1fd28><img${ssrRenderAttr("src", unref(right))} alt="" class="bright" data-v-33e1fd28></button><button aria-label="next" data-v-33e1fd28><img${ssrRenderAttr("src", unref(left))} alt="" class="bright" data-v-33e1fd28></button></div></section>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThirdSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-33e1fd28"]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FourthSection",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const store = useBankStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-neutral-2 py-[7rem] dark:bg-neutral-30" }, _attrs))}><div class="text-center container px-[2.2rem] lg:px-[3.5rem] xl:px-[7rem]"><h2 class="capitalize text-[3rem] md:text-[3.5rem] text-primary-1 dark:text-neutral-10">latest news</h2><div class="mt-[3rem] grid gap-y-[3rem] md:grid-cols-2 md:gap-[2rem] xl:grid-cols-4 lg:gap-[5rem] xl:gap-[2rem]"><!--[-->`);
      ssrRenderList(unref(store).articles_data.slice(0, 4), (item, index) => {
        _push(`<div class="rounded-lg overflow-hidden max-w-[45rem] mx-auto sm:mx-auto md:w-auto lg:h-[40.4rem] xl:h-auto hover:cursor-pointer lg:hover:scale-110 transition-transform duration-300 border-[3px] border-transparent dark:border-neutral-3">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: item.img,
          alt: item.alt,
          class: "block h-[27rem] w-[33rem] z-[10]"
        }, null, _parent));
        _push(`<div class="p-[3rem] pb-[3.9rem mt-[-2.5rem] bg-neutral-4 dark:bg-primary-1 z-[20] relative text-neutral-1 text-left grid gap-y-[1rem]"><p class="text-[1.1rem] xl:text-[1.2rem] dark:text-neutral-10">${ssrInterpolate(item.quote)}</p><h3 class="text-primary-1 xl:text-[1.8rem] dark:text-neutral-4 lg:hover:text-primary-2 lg:transition-colors lg:cursor-pointer lg:w-fit">${ssrInterpolate(item.title)}</h3><p class="text-[1.3rem] xl:text-[1.35rem] md:h-[11rem] dark:text-neutral-10">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    useStorage("cookie", true);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FirstSection = __nuxt_component_0$1;
      const _component_SecondSection = __nuxt_component_1;
      const _component_ThirdSection = __nuxt_component_2;
      const _component_FourthSection = _sfc_main$2;
      const _component_Footer = __nuxt_component_2$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FirstSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SecondSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ThirdSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FourthSection, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</main>`);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useBankStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$6;
      const _component_Main = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(ssrRenderComponent(_component_Main, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
