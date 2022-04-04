<script setup>
	import NavbarVue from "../components/Navbar.vue";
	import PatApptTabVue from "../components/PatApptTab.vue";
	import PatMrTab from "../components/PatMrTab.vue";
	import Footer from "../components/Footer.vue";

	import { useStore } from "vuex";
	import { ref, computed } from "vue";
	import axios from "axios";

	const store = useStore();
	const authIsReady = computed(() => store.state.authIsReady);
	
	const patName = computed(() => store.state.user.displayName);

	let appts = ref(null);
	let medRecords = ref(null);

	const id = computed(() => store.state.id)
	

	axios
		.get("http://localhost:5004/appointment/patient/" + id.value)
		.then((response) => {
			appts.value = response.data.data.appointments.reverse();
		});

	axios
		.get("http://localhost:5003/record/patient_id=" + id.value)
		.then((response) => {
			medRecords.value = response.data.data.reverse();
		});
	
	
</script>

<template>
	<NavbarVue />

	<h1
		class="text-xl sm:text-4xl text-center font-extrabold tracking-tight p-12"
	>
		Welcome, {{ patName }}
	</h1>
	<div class="container max-w-3xl mb-12 mx-auto" id="#appt">
		<h3 class="text-xl sm:text-2xl font-extrabold tracking-tight p-4 mt-5">
			Appointments
		</h3>
		<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6 space-y-4">
			<p class="font-extrabold tracking-tight text-center" v-if="appts == null">No Appointments</p>
			<PatApptTabVue v-for="appt in appts" :appt="appt" />
		</div>
	</div>
	<div class="container max-w-3xl mb-12 mx-auto" id="#appt">
		<h3 class="text-xl sm:text-2xl font-extrabold tracking-tight p-4 mt-5">
			Medical Records
		</h3>
		<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6 space-y-4">
			<p class="font-extrabold tracking-tight text-center" v-if="medRecords == null">No Medical Records</p>
			<PatMrTab v-for="mr in medRecords" :mr="mr" />
		</div>
	</div>
	<Footer />
</template>
