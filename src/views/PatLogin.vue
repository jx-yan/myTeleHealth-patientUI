<script setup>
	import { reactive } from "vue";
	import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
	import router from "../router";

	const auth = getAuth();

	const state = reactive({
		email: "",
		password: "",
	});

	function pLogin() {
		const email = state.email;
		const password = state.password;

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				router.push({name: 'PatientView'});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	}
</script>

<template>
	<h1
		class="text-3xl sm:text-4xl text-center font-extrabold tracking-tight p-12"
	>
		Welcome to myTeleHealth
	</h1>

	<div class="container max-w-3xl grid mx-auto">
		<form
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			@submit.prevent
		>
			<div class="mb-4">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="email"
				>
					Email Address
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="text"
					v-model="state.email"
					required
				/>
			</div>
			<div class="mb-6">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="password"
				>
					Password
				</label>
				<input
					class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					v-model="state.password"
					required
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
					@click="pLogin"
				>
					Sign In
				</button>
				<router-link
					to="#"
					class="grid grid-rows-1 grid-flow-row justify-center"
				>
					<button
						class="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900"
					>
						Login as a Doctor
					</button>
				</router-link>
			</div>
			<div class="flex items-center justify-center pt-4">
				<button
					type="button"
					class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
				>
					<svg
						class="w-4 h-4 mr-2 -ml-1"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="google"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 488 512"
					>
						<path
							fill="currentColor"
							d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
						></path>
					</svg>
					Sign in with Google
				</button>
			</div>
		</form>
	</div>
</template>
