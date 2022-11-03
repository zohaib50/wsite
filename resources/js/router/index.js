import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const guest = (to, from, next) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/login");
  }
};

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("../components/index.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../components/about.vue")
    },
    {
        path: "/contractors",
        name: "contractors",
        component: () => import("../components/contractors.vue")
    },
    {
        path: "/become-contractor",
        name: "become-contractor",
        component: () => import("../components/become-contractor.vue")
    },
    {
        path: "/faq",
        name: "faq",
        component: () => import("../components/faq.vue")
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../components/contact.vue")
    },
    {
        path: "/material-kit",
        name: "material-kit",
        component: () => import("../components/material-kit.vue")
    },
    {
        path: "/login",
        name: "login",
        beforeEnter: guest,
        component: () =>
          import("../components/Auth/Login.vue")
    },
    {
        path: "/register",
        name: "register",
        beforeEnter: guest,
        component: () =>
          import("../components/Auth/Register.vue")
    },
    {
        path: "/verify/:hash",
        name: "Verify",
        beforeEnter: auth,
        props: true,
        component: () =>
          import("../components/Auth/Verify.vue")
    },
    {
        path: "/dashboard",
        name: "dashboard",
        beforeEnter: auth,
        props: true,
        component: () =>
            import("../components/Auth/dashboard.vue")
    },
    {
        path: "/contractor/:id",
        name: "contractor",
        beforeEnter: auth,
        props: true,
        component: () => import("../components/contractor.vue")
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
