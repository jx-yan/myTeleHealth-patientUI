<script setup>
	const props = defineProps(['mr'])
</script>


<template>
	<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6">
		<p class="font-extrabold tracking-tight p-4">
			<span> Medical Conditions : </span><br>
			<span class="text-blue-800 pl-3">{{mr.medical_condition}}</span>
		</p>
		<p class="font-extrabold tracking-tight p-4">
			<span class=""> Recommendations : </span><br>
			<span class="text-yellow-800 pl-3">{{mr.recommendations}}</span>
		</p>
	</div>
</template>