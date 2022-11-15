import { createRouter, createWebHistory } from "vue-router";
import { PATH, _BASIC, _CONFIG, _FORM } from "./path";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("@/components/basic/Button.vue"),
    },
    {
      path: PATH.BASIC,
      name: "basic",
      redirect: PATH.BASIC_BUTTON,
      children: [
        {
          path: "/",
          component: () => import("@/components/basic/Button.vue"),
        },
        {
          path: _BASIC.BUTTON,
          component: () => import("@/components/basic/Button.vue"),
        },
        {
          path: _BASIC.BORDER,
          component: () => import("@/components/basic/Border.vue"),
        },
        {
          path: _BASIC.COLOR,
          component: () => import("@/components/basic/Color.vue"),
        },
        {
          path: _BASIC.CONTAINER,
          component: () => import("@/components/basic/Container.vue"),
        },
        {
          path: _BASIC.ICON,
          component: () => import("@/components/basic/Icon.vue"),
        },
        {
          path: _BASIC.LAYOUT,
          component: () => import("@/components/basic/Layout.vue"),
        },
        {
          path: _BASIC.LINK,
          component: () => import("@/components/basic/Link.vue"),
        },
        {
          path: _BASIC.SCROLLBAR,
          component: () => import("@/components/basic/Scrollbar.vue"),
        },
        {
          path: _BASIC.SPACE,
          component: () => import("@/components/basic/Space.vue"),
        },
        {
          path: _BASIC.TYPOGRAPHY,
          component: () => import("@/components/basic/Typography.vue"),
        },
      ],
    },
    {
      path: PATH.CONFIG,
      redirect: PATH.CONFIG_CONFIG,
      children: [
        {
          path: _CONFIG.CONFIG,
          component: () => import("@/components/config/Config.vue"),
        },
      ],
    },
    {
      path: PATH.FORM,
      redirect: PATH.FORM_AUTOCOMPLETE,
      children: [
        {
          path: _FORM.AUTOCOMPLETE,
          component: () => import("@/components/form/Autocomplete.vue"),
        },
      ],
    },
  ],
});

export default router;
