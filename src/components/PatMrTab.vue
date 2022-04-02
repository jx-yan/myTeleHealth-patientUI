<script setup>
	const props = defineProps(["mr"]);
</script>

<template>
	<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6">
		<p class="font-extrabold tracking-tight">
			For Appointment on:
			<span class="text-cyan-700">{{ mr.datetime }}</span>
		</p>
		<p class="p-4">
			<span class="font-extrabold tracking-tight"> Medical Conditions : </span><br />
			<span class="font-medium pl-3">{{ mr.medical_condition }}</span>
		</p>
		<p class="p-4">
			<span class="font-extrabold tracking-tight"> Recommendations : </span><br />
			<span class="font-medium pl-3">{{ mr.recommendations }}</span>
		</p>
	</div>
</template>
