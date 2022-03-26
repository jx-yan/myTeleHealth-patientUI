<script setup>
	import PatientNavbar from "../components/PatNavbar.vue";
	import PatientApptTab from "../components/PatApptTab.vue";
	import Footer from "../components/Footer.vue";

    import { getAuth } from "firebase/auth";
    
    const auth = getAuth();
    const user = auth.currentUser;
    const userid = user.uid;

	// call API to retrieve all appointments by patient_id
    
</script>

<template>
	<PatientNavbar />
	<h1
		class="text-xl sm:text-4xl text-center font-extrabold tracking-tight p-12"
	>
		Welcome, {{userid}}
	</h1>
	<div class="container max-w-3xl mb-12 mx-auto" id="#appt">
		<h3 class="text-xl sm:text-2xl font-extrabold tracking-tight p-4 mt-5">
			Appointments
		</h3>
		<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6 space-y-4">
			<PatientApptTab />
		</div>
	</div>
	<Footer />
</template>
