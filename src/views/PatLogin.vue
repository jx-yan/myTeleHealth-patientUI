<script setup>
	import { reactive } from "vue";
	import router from "../router";
	import store from "../store";
	
	const loginState = reactive({
		email: null,
		password: null,
		error: null,
	});

	const pLogin = async() => {
		try {
			await store.dispatch('login', {
				email: loginState.email,
				password: loginState.password,	
			})
			router.push('/patview')
		} catch (err) {
			loginState.error = err.message
			window.alert(loginState.error)
		}
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
			@submit.prevent = 'pLogin'
		>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="email">
					Email Address
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="text"
					v-model="loginState.email"
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
					v-model="loginState.password"
					required
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
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
		</form>
	</div>
</template>
