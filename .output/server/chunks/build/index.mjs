import { defineComponent, ref, mergeProps, unref, useSSRContext, nextTick, getCurrentInstance, watch, getCurrentScope, onScopeDispose, hasInjectionContext, inject, shallowRef, computed, toValue, watchEffect } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { l as logo } from './logo.png.mjs';
import { _ as _export_sfc } from './server.mjs';

const fb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20fill='%23FFF'%20d='M18.896%200H1.104C.494%200%200%20.494%200%201.104v17.793C0%2019.506.494%2020%201.104%2020h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583%201.578-3.99%203.883-3.99%201.104%200%202.052.082%202.329.119v2.7h-1.598c-1.254%200-1.496.597-1.496%201.47v1.928h2.989l-.39%203.018h-2.6V20h5.098c.608%200%201.102-.494%201.102-1.104V1.104C20%20.494%2019.506%200%2018.896%200z'/%3e%3c/svg%3e";

const yt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='20'%3e%3cpath%20fill='%23FFF'%20d='M10.333%200c-5.522%200-10%204.478-10%2010%200%205.523%204.478%2010%2010%2010%205.523%200%2010-4.477%2010-10%200-5.522-4.477-10-10-10zm3.701%2014.077c-1.752.12-5.653.12-7.402%200C4.735%2013.947%204.514%2013.018%204.5%2010c.014-3.024.237-3.947%202.132-4.077%201.749-.12%205.651-.12%207.402%200%201.898.13%202.118%201.059%202.133%204.077-.015%203.024-.238%203.947-2.133%204.077zM8.667%208.048l4.097%201.949-4.097%201.955V8.048z'/%3e%3c/svg%3e";

const x = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='18'%3e%3cpath%20fill='%23FFF'%20d='M20.667%202.797a8.192%208.192%200%2001-2.357.646%204.11%204.11%200%20001.804-2.27%208.22%208.22%200%2001-2.606.996A4.096%204.096%200%200014.513.873c-2.649%200-4.595%202.472-3.997%205.038a11.648%2011.648%200%2001-8.457-4.287%204.109%204.109%200%20001.27%205.478A4.086%204.086%200%20011.47%206.59c-.045%201.901%201.317%203.68%203.29%204.075a4.113%204.113%200%2001-1.853.07%204.106%204.106%200%20003.834%202.85%208.25%208.25%200%2001-6.075%201.7%2011.616%2011.616%200%20006.29%201.843c7.618%200%2011.922-6.434%2011.662-12.205a8.354%208.354%200%20002.048-2.124z'/%3e%3c/svg%3e";

const pt = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20fill='%23FFF'%20d='M10%200C4.478%200%200%204.477%200%2010c0%204.237%202.636%207.855%206.356%209.312-.088-.791-.167-2.005.035-2.868.182-.78%201.172-4.97%201.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428%201.81-2.428.852%200%201.264.64%201.264%201.408%200%20.858-.545%202.14-.828%203.33-.236.995.5%201.807%201.48%201.807%201.778%200%203.144-1.874%203.144-4.58%200-2.393-1.72-4.068-4.177-4.068-2.845%200-4.515%202.135-4.515%204.34%200%20.859.331%201.781.745%202.281a.3.3%200%2001.069.288l-.278%201.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874%200-3.154%202.292-6.052%206.608-6.052%203.469%200%206.165%202.473%206.165%205.776%200%203.447-2.173%206.22-5.19%206.22-1.013%200-1.965-.525-2.291-1.148l-.623%202.378c-.226.869-.835%201.958-1.244%202.621.937.29%201.931.446%202.962.446%205.522%200%2010-4.477%2010-10S15.522%200%2010%200z'/%3e%3c/svg%3e";

const insta = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='20'%3e%3cpath%20fill='%23FFF'%20d='M10.333%201.802c2.67%200%202.987.01%204.042.059%202.71.123%203.976%201.409%204.1%204.099.048%201.054.057%201.37.057%204.04%200%202.672-.01%202.988-.058%204.042-.124%202.687-1.386%203.975-4.099%204.099-1.055.048-1.37.058-4.042.058-2.67%200-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041%200-2.67.01-2.986.058-4.04.124-2.69%201.387-3.977%204.1-4.1%201.054-.048%201.37-.058%204.04-.058zm0-1.802C7.618%200%207.278.012%206.211.06%202.579.227.56%202.242.394%205.877.345%206.944.334%207.284.334%2010s.011%203.057.06%204.123c.166%203.632%202.181%205.65%205.816%205.817%201.068.048%201.408.06%204.123.06%202.716%200%203.057-.012%204.124-.06%203.628-.167%205.651-2.182%205.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11%202.249%2018.093.228%2014.458.06%2013.39.01%2013.049%200%2010.333%200zm0%204.865a5.135%205.135%200%20100%2010.27%205.135%205.135%200%20000-10.27zm0%208.468a3.333%203.333%200%20110-6.666%203.333%203.333%200%20010%206.666zm5.339-9.87a1.2%201.2%200%2010-.001%202.4%201.2%201.2%200%20000-2.4z'/%3e%3c/svg%3e";

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
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29f001e9"]]);

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance == null && !hasInjectionContext())
    throw new Error("injectLocal must be called in setup");
  if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject(...args);
};
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}

const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function useMounted() {
  const isMounted = shallowRef(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = useSSRWidth() } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (type === "visual" && window2.visualViewport) {
        const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
        width.value = Math.round(visualViewportWidth * scale);
        height.value = Math.round(visualViewportHeight * scale);
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window2 && type === "visual" && window2.visualViewport) {
    useEventListener(window2.visualViewport, "resize", update, listenerOptions);
  }
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}

export { __nuxt_component_2 as _, useWindowSize as u };
//# sourceMappingURL=index.mjs.map
