const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "onas", component: () => import("pages/About.vue") },
      { path: "kontakt", component: () => import("pages/Contact.vue") },
      { path: "schody", component: () => import("pages/Stairs.vue") },
      { path: "altany", component: () => import("pages/Arbours.vue") },
      { path: "inne", component: () => import("pages/Others.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
