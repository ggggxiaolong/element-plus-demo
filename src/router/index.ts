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
      ],
    },
  ],
});

export default router;
