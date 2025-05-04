import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { _ as __nuxt_component_1 } from './Footer.vue.mjs';
import { withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { d as useRoute, c as useBankStore } from './server.mjs';
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
import './icon-instagram.svg.mjs';
import 'pinia';
import 'vue-router';

const back = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3c!--%20Icon%20from%20Material%20Symbols%20by%20Google%20-%20https://github.com/google/material-design-icons/blob/master/LICENSE%20--%3e%3cpath%20fill='currentColor'%20d='m7.825%2013l4.9%204.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426%2012t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825%2011H19q.425%200%20.713.288T20%2012t-.288.713T19%2013z'/%3e%3c/svg%3e";

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const store = useBankStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[--><header class="pt-[13rem] pb-[5rem] px-[3rem] md:max-w-[77rem] md:mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/news" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(back))} alt="back to news" class="mb-[2rem] inline"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(back),
                alt: "back to news",
                class: "mb-[2rem] inline"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-[3.3rem] font-w700 sm:text-center">${ssrInterpolate(unref(store).articles_data[unref(store).news.indexOf(unref(route).params.slug)].title)}</h1></header><main><img${ssrRenderAttr("src", unref(store).articles_data[unref(store).news.indexOf(unref(route).params.slug)].img)}${ssrRenderAttr("alt", unref(store).articles_data[unref(store).news.indexOf(unref(route).params.slug)].alt)} class="md:max-w-[80rem] md:mx-auto rounded-xl"><div class="px-[3rem] py-[6rem] grid gap-y-[4rem] md:max-w-[75rem] md:mx-auto"><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus libero a arcu tincidunt, nec fermentum velit vehicula. Aenean sit amet semper nulla. Etiam in diam sed lacus fermentum malesuada. Nulla eget urna ut ligula sagittis fermentum. Vestibulum eget orci sed lectus convallis malesuada. Aliquam erat volutpat. Quisque rhoncus feugiat turpis, nec euismod orci tristique ut. Aenean vehicula, sapien non accumsan vehicula, lacus risus scelerisque orci, nec pulvinar nulla felis at elit. </p><p> Mauris dapibus ex non lacus ultricies, vel malesuada tortor dictum. Nullam non ante nec erat ultrices suscipit. Integer sodales porttitor vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur scelerisque justo vel diam ultrices, at aliquam ligula efficitur. Fusce rhoncus ac est vel malesuada. Duis nec sapien purus. Cras non diam ac elit aliquam fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p><p> Donec vestibulum libero ut nisi tincidunt convallis. Sed rhoncus diam vitae nunc euismod, vel dignissim tortor feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sit amet risus vitae velit pretium tristique. Vivamus sed eros blandit, sollicitudin eros vitae, luctus risus. Nunc in semper ante. Nulla sollicitudin magna libero, sed faucibus risus fermentum vel. Phasellus id justo convallis, malesuada leo sit amet, fermentum enim. Aliquam erat volutpat. Sed volutpat nisi in neque hendrerit, sed euismod nulla malesuada. </p><p> Curabitur lacinia purus eu dolor viverra, non fermentum nunc congue. Pellentesque fermentum velit ut neque gravida feugiat. Fusce vel odio id ante malesuada consequat. Integer facilisis, nunc et porttitor volutpat, libero magna congue sapien, nec mattis orci odio vitae libero. Maecenas pharetra laoreet felis, sed fermentum diam placerat et. Vestibulum vehicula purus in leo elementum laoreet. Mauris porttitor condimentum elit, vitae scelerisque eros vulputate non. Proin convallis felis id mauris malesuada, ut feugiat ex imperdiet. </p><p> Etiam eu velit nec erat bibendum posuere. Integer rhoncus nunc nec malesuada commodo. Cras eget lectus purus. Integer laoreet neque id lorem mattis, ut tincidunt diam sodales. Cras sed nulla in lacus fermentum luctus. Sed ornare sem non metus suscipit lacinia. Nulla a velit vel odio commodo varius non at est. Mauris vulputate nunc ac risus aliquam rutrum. Etiam congue massa justo, nec dictum velit tincidunt vel. Fusce viverra purus sed ante dictum, nec vestibulum nisi feugiat. Nunc imperdiet facilisis tortor sed dictum. </p><p> Vestibulum vehicula luctus metus, a egestas nisi gravida in. Suspendisse potenti. Nullam at magna odio. Pellentesque nec orci purus. Pellentesque in risus tincidunt, vehicula nunc et, posuere diam. Donec fermentum metus nec lacus sagittis, ac fermentum mi fermentum. Sed posuere erat non arcu scelerisque, sed fringilla eros tempor. Pellentesque in lorem enim. Morbi hendrerit magna et augue varius, sed hendrerit ex congue. </p><p> Proin placerat lectus at nisi finibus finibus. Pellentesque nec tempor risus, ac commodo nulla. Suspendisse ac malesuada tortor. Maecenas dignissim justo sed bibendum commodo. Quisque accumsan sem sed ex tincidunt, at sollicitudin neque efficitur. Integer nec ante erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p><p> Nunc fermentum, neque ac fermentum elementum, turpis elit malesuada mauris, sed euismod nisi orci non metus. Aliquam erat volutpat. Vivamus placerat libero eget dolor hendrerit, nec bibendum sapien consequat. Integer tempor tempor ligula, vel fringilla lacus lobortis vel. Quisque sed eros massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras id feugiat sapien, at gravida erat. Sed posuere faucibus dapibus. Duis a neque eget neque dictum malesuada. </p></div></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue.mjs.map
