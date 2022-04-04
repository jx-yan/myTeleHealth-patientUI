<script setup>
    import router from "../router";
    import { onUpdated } from "vue";

    onUpdated(() => {
        router.push('/patview')
    })
    
</script>

<template>
	<h3 class="text-md sm:text-xl text-center font-extrabold tracking-tight p-12">
		Payment Successful
	</h3>
</template>