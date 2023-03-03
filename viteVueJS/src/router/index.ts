import Create from "../modules/create/Create.vue";
import Home from "../modules/home/home.vue";

const routerPath = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/create/:lang",
    component: Create,
  },
];

export default routerPath;
