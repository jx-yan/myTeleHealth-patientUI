import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "PatientLogin",
		component: () => import("../views/PatLogin.vue"),
	},
	{
		path: "/patview",
		name: "PatientView",
		component: () => import("../views/PatView.vue"),
	},
	{
		path: "/book",
		name: "BookAppt",
		component: () => import("../views/BookAppt.vue"),
	},
	{
		path: "/payment",
		name: "PayFee",
		component: () => import("../views/Payment.vue"),
		props: true
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
