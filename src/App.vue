<template>
	<!-- <CochesComponent /> -->
	<!-- <CustomersComponent /> -->
	<!-- <EmpleadoDetails /> -->
	<MenuComponent />
	<router-view />
</template>

<script>
	import MenuComponent from "./components/MenuComponent.vue";

	// import EmpleadoDetails from "./components/EmpleadoDetails.vue";
	// import CustomersComponent from "./components/CustomersComponent.vue";
	// import CochesComponent from "./components/CochesComponent.vue";

	export default {
		name: "App",
		components: {
			// CochesComponent,
			// CustomersComponent,
			// EmpleadoDetails,
			MenuComponent,
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
	}
</style>
