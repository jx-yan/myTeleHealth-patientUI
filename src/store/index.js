import { createStore } from "vuex";

import { auth } from "../firebase/config";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";

const store = createStore({
	state: {
		user: null,
		id: null,
		authIsReady: false,
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
			// console.log('user state changed:', state.user)
		},
		setAuthIsReady(state, payload) {
			state.authIsReady = payload;
		},
		setUserID(state, payload) {
			state.id = payload;
		},
	},
	actions: {
		async login(context, { email, password }) {
			const res = await signInWithEmailAndPassword(auth, email, password);
			if (res) {
				context.commit("setUser", res.user);
				context.commit("setUserID", res.user.uid);
			} else {
				throw new Error("Login Failed");
			}
		},
		async logout(context) {
			await signOut(auth);
			context.commit("setUser", null);
			context.commit("setUserID", null);
		}
	},
});

const unsub = onAuthStateChanged(auth, (user) => {
	store.commit("setAuthIsReady", true);
	store.commit("setUser", user);
	store.commit("setUserID", user.uid);
	unsub();
});

export default store;
