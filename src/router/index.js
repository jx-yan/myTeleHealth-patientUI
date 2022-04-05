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
		props: true
	},
	{
		path: "/payment",
		name: "PayFee",
		component: () => import("../views/Payment.vue"),
		props: true
	},
	{
		path: "/paymentsuccess",
		name: "PaymentSuccess",
		component: () => import("../views/PaymentSuccess.vue"),
	},
	{
		path: "/paymentfail",
		name: "PaymentFail",
		component: () => import("../views/PaymentFail.vue"),
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
