<script setup>
	import axios from "axios";
	import Navbar from "../components/Navbar.vue";
	import Footer from "../components/Footer.vue";

	import { ref } from "vue";
	import router from "../router";

	let doc = ref({});

	axios.get("http://localhost:5001/doctor").then((res) => {
		for (const [key, value] of Object.entries(res.data)) {
			doc.value[key] = value.Name;
		}
	});

	let today = new Date();
	let currDate =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 1)).slice(-2) +
		"-" +
		today.getDate();
	let time = today.getHours() + ":" + today.getMinutes();
	let currDateTime = ref(currDate + "T" + time);

	let maxDate =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 2)).slice(-2) +
		"-" +
		today.getDate();

	let maxDateTime = ref(maxDate + "T" + time);

	let dateTime = ref(null);
	let selected = ref(null);

	const bookAppt = async () => {
		// call function in book appointment to check and update appointment
		let bookRes = null;
		await axios
			.post("/bookApptUrl" + docid.value + dateTime.value)
			.then((res) => {
				if (res.status === 200) {
					router.push('/payment')
				}
			})
			.catch((err) => {

			})
	};
</script>

<template v-if="authIsReady">
	<Navbar />
	<h1
		class="text-xl sm:text-4xl text-center font-extrabold tracking-tight p-12"
	>
		Book Appointment
	</h1>
	<form @submit.prevent="bookAppt">
		<div
			class="container max-w-2xl mx-auto w-full bg-white shadow-md rounded px-8 pt-6 pb-6 space-y-4 mb-10"
		>
			<label for="doctors" class="block mb-2 text-sm font-medium text-dark"
				>Select your doctor</label
			>
			<select
				id="doctors"
				class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				v-model="selected"
			>
				<option v-for="(name, index) in doc" v-html="name" :id="index"></option>
			</select>
			<label
				for="appt_datetime"
				class="pt-3 mb-2 block text-sm font-medium text-dark"
				>Choose a Time for Your Appointment</label
			>
			<input
				type="datetime-local"
				id="appt_datetime"
				name="appt_datetime"
				:min="currDateTime"
				:max="maxDateTime"
				class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				v-model="dateTime"
			/>
		</div>
		<div class="flex mb-10 place-content-center">
			<button
				type="submit"
				class="text-dark hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>
				Book Appointment
			</button>
		</div>
	</form>
	<Footer />
</template>
