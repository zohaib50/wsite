import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const guest = (to, from, next) => {
    document.title = to.meta.title || 'Sauna Material Kit'
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
    document.title = to.meta.title || 'Sauna Material Kit'
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/login");
  }
};
const title = (to, from, next) => {
    document.title = to.meta.title || 'Sauna Material Kit'
    return next();
}

const routes = [
    {
        path: "/",
        name: "index",
        beforeEnter: title,
        meta: { title: 'Home | Sauna Material Kit' },
        component: () => import("../components/index.vue")
    },
    {
        path: "/about",
        name: "about",
        beforeEnter: title,
        meta: { title: 'About | Sauna Material Kit' },
        component: () => import("../components/about.vue")
    },
    {
        path: "/contractors",
        name: "contractors",
        beforeEnter: title,
        meta: { title: 'Contractors | Sauna Material Kit' },
        component: () => import("../components/contractors.vue")
    },
    {
        path: "/become-contractor",
        name: "become-contractor",
        beforeEnter: title,
        meta: { title: 'Become Contractor | Sauna Material Kit' },
        component: () => import("../components/become-contractor.vue")
    },
    {
        path: "/faq",
        name: "faq",
        beforeEnter: title,
        meta: { title: 'FAQ | Sauna Material Kit' },
        component: () => import("../components/faq.vue")
    },
    {
        path: "/contact",
        name: "contact",
        beforeEnter: title,
        meta: { title: 'Contact Us | Sauna Material Kit' },
        component: () => import("../components/contact.vue")
    },
    {
        path: "/material-kit",
        name: "material-kit",
        beforeEnter: title,
        meta: { title: 'Material Kit | Sauna Material Kit' },
        component: () => import("../components/material-kit.vue")
    },
    {
        path: "/login",
        name: "login",
        beforeEnter: guest,
        meta: { title: 'Login | Sauna Material Kit' },
        component: () =>
          import("../components/Auth/Login.vue")
    },
    {
        path: "/register",
        name: "register",
        beforeEnter: guest,
        meta: { title: 'Register | Sauna Material Kit' },
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
        component: () => import("../components/Auth/dashboard.vue"),
        children: [{
            path: 'profile',
            name: 'profile',
            meta: { title: 'Profile | Sauna Material Kit' },
            component: () => import("../components/Auth/child/profile.vue"),
        },{
            path: 'contractors',
            name: 'jobs',
            meta: { title: 'Jobs | Sauna Material Kit' },
            component: () => import("../components/Auth/child/contractors.vue"),
        }]
    },
    {
        path: "/job/:id",
        name: "job",
        beforeEnter: auth,
        meta: { title: 'Rating | Sauna Material Kit' },
        props: true,
        component: () => import("../components/job.vue")
    },
    {
        path: "/contractor/:id",
        name: "contractor",
        beforeEnter: auth,
        props: true,
        component: () => import("../components/contractor.vue")
    },
    {
        path: '/404',
        beforeEnter: title,
        meta: { title: '404 | Sauna Material Kit' },
        component: () => import("../components/404.vue")
    },
    {
        path: '*',
        redirect: '/404'
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
