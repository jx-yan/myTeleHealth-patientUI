<script setup>
	import Navbar from "../components/Navbar.vue";
	import Footer from "../components/Footer.vue";

	import Datepicker from "@vuepic/vue-datepicker";
	import "@vuepic/vue-datepicker/dist/main.css";

	import axios from "axios";
	import { useStore } from "vuex";
	import { ref, computed } from "vue";
	import router from "../router";

	const store = useStore();

	let doc = ref({});
	axios.get("http://localhost:5001/doctor").then((res) => {
		for (const [key, value] of Object.entries(res.data.data)) {
			doc.value[key] = value.Name;
		}
	});
	let today = new Date();
	let minDate =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 1)).slice(-2) +
		"-" +
		(today.getDate() + 1);
	let maxDate =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 2)).slice(-2) +
		"-" +
		today.getDate();
	let startTime = ref({ hours: 11, minutes: 0 });

	let dateTime = ref(null);
	let selected = ref(null);

	const bookAppt = async () => {
		// prepare data for POST API
		let doc_id = selected.value.split("_")[0];
		let doc_name = selected.value.split("_")[1];
		let patName = computed(() => store.state.user.displayName);
		let patId = computed(() => store.state.id);
		let datetime = dateTime.value.toString();

		let json_obj = {
			datetime: datetime,
			doc_id: doc_id,
			doc_name: doc_name,
			patient_id: patId.value,
			patient_name: patName.value,
		};

		axios
			.post("http://localhost:5100/book_appointment", json_obj)
			.then((res) => {
				if (res.status == 201) {
					let appt_id = res.data.data.appt_id;
					let patient_email = computed(() => store.state.user.email);
					window.alert(res.data.message);
					router.push({
						name: "PayFee",
						path: "/payment",
						params: {
							appt_id: appt_id,
							patient_email: patient_email.value,
						},
					});
				}
			});
	};
</script>

<template>
	<Navbar />
	<h1
		class="text-xl sm:text-4xl text-center font-extrabold tracking-tight p-10"
	>
		Book Appointment
	</h1>
	<p
		class="block text-sm font-medium text-center pb-2"
	>
		You can only book appointment between <span class="font-extrabold tracking-tight">11:00 to 17:00</span>
	</p>
	<p
		class="block text-sm font-medium text-center pb-2"
	>
		Each consultation will last for <span class="font-extrabold tracking-tight">30 mins</span>
	</p>
	<p
		class="block text-sm font-medium text-center pb-5"
	>
		Consultation Fee is at flat rate: <span class="font-extrabold tracking-tight">SGD $20.00</span>
	</p>
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
				required
			>
				<option
					v-for="(name, index) in doc"
					v-html="'Dr. ' + name"
					:id="index"
					:value="index + '_' + name"
				></option>
			</select>
			<label class="pt-3 mb-2 block text-sm font-medium text-dark"
				>Choose a Date for Your Appointment
				<Datepicker
					class="py-3"
					:minDate="minDate"
					:maxDate="maxDate"
					:startTime="startTime"
					minutesIncrement="30"
					noMinutesOverlay
					noHoursOverlay
					:minTime="{ hours: 11, minutes: 0 }"
					:maxTime="{ hours: 17, minutes: 0 }"
					v-model="dateTime"
				></Datepicker
			></label>
		</div>
		<div class="flex place-content-center mb-10">
			<button
				type="submit"
				class="text-dark hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>
				Confirm Booking and Payment
			</button>
		</div>
	</form>

	<Footer />
</template>
