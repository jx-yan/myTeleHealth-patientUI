<script setup>
	import router from '../router'
	import { useStore } from "vuex";
	import { computed } from 'vue';

	const props = defineProps(['appt'])
	const store = useStore();

	const payFee = () => {
		let patient_email = computed(() => store.state.user.email);
		router.push({
			name: "PayFee",
			path: "/payment",
			params: {
				appt_id: props.appt.appt_id,
				patient_email: patient_email.value,
			},
		});
	}

	const statusColor = computed(() => {
		if (props.appt.status == "Unpaid") {
			return "text-red-900"
		} else if (props.appt.status == "Upcoming") {
			return "text-yellow-700"
		} else if (props.appt.status == "Completed") {
			return "text-green-800"
		} else {return ""}
	})

</script>


<template>
	<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6">
		<p class="font-extrabold tracking-tight p-4">
			<span> Appointment Start Time : {{appt.datetime}}</span>
			<span class="text-blue-600 pl-5"></span>
		</p>
		<p class="font-extrabold tracking-tight p-4 flex grow">
			<p class=""> Doctor : <span class="text-indigo-700 pl-3"> {{appt.doc_name}}</span></p>
		</p>
		<p class="font-extrabold tracking-tight p-4 flex">
			<a :href="appt.join_url" target="_blank" class="underline text-blue-500 pr-10">Join Zoom Meeting</a>
			<span class="ml-auto" :class="statusColor">
				{{appt.status}}
			</span>
			<button
				v-if="appt.status == 'Unpaid'"
				class="text-dark hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center ml-10"
				@click="payFee"
			>
				Pay Now
			</button>
		</p>
	</div>
</template>