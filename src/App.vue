<template>
	<!-- <CochesComponent /> -->
	<!-- <CustomersComponent /> -->
	<EmpleadoDetails />
</template>

<script>
	import EmpleadoDetails from "./components/EmpleadoDetails.vue";

	// import CustomersComponent from "./components/CustomersComponent.vue";
	// import CochesComponent from "./components/CochesComponent.vue";

	export default {
		name: "App",
		components: {
			// CochesComponent,
			// CustomersComponent,
			EmpleadoDetails,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
