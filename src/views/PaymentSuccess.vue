<script setup>
    import router from "../router";
    import { onMounted } from "vue";

    onMounted(() => {
        setTimeout(() => {router.push('/patview')}, 3000)
    })
    
</script>

<template>
	<h3 class="text-md sm:text-xl text-center font-extrabold tracking-tight p-12">
		Payment Successful
	</h3>
    <h3 class="text-sm sm:text-lg text-center font-extrabold tracking-tight">
		Thank you for using myTeleHealth!
	</h3>
</template>