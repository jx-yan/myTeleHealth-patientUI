<script setup>
    import router from "../router";
    import { onMounted } from "vue";

    onMounted(() => {
        setTimeout(() => {router.push('/patview')}, 3000)
    })
    
</script>

<template>
	<h3 class="text-md sm:text-xl text-center font-extrabold tracking-tight p-12">
		Payment Failed. Please try again on Homepage...
	</h3>
</template>