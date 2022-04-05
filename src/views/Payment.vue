<script setup>
	import axios from "axios";
	const props = defineProps(["appt_id", "patient_email"]);

	let input_json = {
		data: {
			"appt_id": props.appt_id,
			"patient_email": props.patient_email,
		},
	};

	console.log(input_json)

	axios.post("http://localhost:5200/make_payment", input_json).then((res) => {
		let url = res.data.paying_link;
		window.location.replace(url)
	});
</script>

<template>
	<h3 class="text-md sm:text-xl text-center font-extrabold tracking-tight p-12">
		Processing Payment Now, Please do not exit ...
	</h3>
</template>
