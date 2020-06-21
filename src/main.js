import DefaultLayout from "~/layouts/Default.vue";
import "~/styles/global.styl";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
}
