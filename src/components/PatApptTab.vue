<script setup>
	const props = defineProps(['appt'])
</script>


<template>
	<div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-6">
		<p class="font-extrabold tracking-tight p-4">
			<span> Appointment Start Time : {{appt.datetime}}</span>
			<span class="text-blue-600 pl-5"></span>
		</p>
		<p class="font-extrabold tracking-tight p-4 flex grow">
			<span class=""> Doctor : </span>
			<span class="text-red-500 pl-3"> {{appt.doc_name}}</span>

			<span class="text-gray-500 ml-auto pt-6">
				<a :href="appt.zoom_link" target="_blank" class="underline text-blue-500 pr-10">Zoom Link</a>
				{{appt.status}}
			</span>
		</p>
	</div>
</template>