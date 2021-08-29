import { createRouter, createWebHistory } from "vue-router";
import ManagementStructure from "@/views/managementStructure/ManagementStructure.vue";
import Potential from "@/views/potential/Potential.vue";
import Reports from "@/views/reports/Reports.vue";
import Search from "@/views/search/Search.vue";

const routes = [
  {
    path: "/",
    name: "ManagementStructure",
    component: ManagementStructure,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
  {
    path: "/Reports",
    name: "Reports",
    component: Reports,
  },
  {
    path: "/Potential",
    name: "Potential",
    component: Potential,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
