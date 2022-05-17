import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import AboutView from "../views/AboutView.vue";
import MangaView from "../views/MangaView.vue";
import CardView from "../views/CardView.vue";
import WishlistView from "../views/WishlistView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/manga",
    name: "manga",
    component: MangaView,
  },
  {
    path: "/card",
    name: "card",
    component: CardView,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishlistView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
