<script setup>

</script>

<template>
	<h1
		class="text-3xl sm:text-4xl text-center font-extrabold tracking-tight p-12"
	>
		Welcome, Doctor
	</h1>

	<div class="container max-w-3xl mx-auto">
		<form
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			@submit.prevent
		>
			<div class="mb-4">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="username"
				>
					Email Address
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="text"
					placeholder="doctor_name@gmail.com"
					v-model="email"
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
					v-model="password"
					required
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="grid grid-rows-1 grid-flow-row justify-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900"
					type="submit"
				>
					Sign In
				</button>

				<router-link to="/" class="ml-auto">
					<a
						class="font-bold text-sm text-blue-500 hover:text-blue-800 underline underline-offset-4"
					>
						Login as Patient
					</a>
				</router-link>
			</div>
		</form>
	</div>
</template>
