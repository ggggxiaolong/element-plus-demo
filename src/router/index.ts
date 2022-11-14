import { createRouter, createWebHistory } from "vue-router";
import { PATH, _BASIC } from "./path";

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
      component: () => import("@/components/basic/Index.vue"),
      children: [
        {
          path: "",
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
          component: () => import("@/components/basic/Color.vue")
        },
        {
          path: _BASIC.CONTAINER,
          component: () => import("@/components/basic/Container.vue")
        },
        {
          path: _BASIC.ICON,
          component: () => import("@/components/basic/Icon.vue")
        },
        {
          path: _BASIC.LAYOUT,
          component: () => import("@/components/basic/Layout.vue")
        },
        {
          path: _BASIC.LINK,
          component: () => import("@/components/basic/Link.vue")
        },
        {
          path: _BASIC.SCROLLBAR,
          component: () => import("@/components/basic/Scrollbar.vue")
        },
      ],
    },
  ],
});

export default router;
