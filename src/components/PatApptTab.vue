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
			<p class=""> Doctor : <span class="text-indigo-700 pl-3"> {{appt.doc_name}}</span></p>
		</p>
		<p class="font-extrabold tracking-tight p-4 flex grow">
			<a :href="appt.join_url" target="_blank" class="underline text-blue-500 pr-10">Join Zoom Meeting</a>
			<span class="text-gray-500 ml-auto">
				{{appt.status}}
			</span>
		</p>
	</div>
</template>