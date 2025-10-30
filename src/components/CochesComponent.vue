<template>
	<h1>Api Coches</h1>
	<div v-for="car in coches" :key="car">
		<h3 style="color: blue">{{ car.marca }} {{ car.modelo }}</h3>
		<p>Driver; {{ car.conductor }}</p>
		<img :src="car.imagen" style="width: 150px; height: 150px" />
	</div>
</template>

<script>
	import Global from "./../Global";
	import axios from "axios";
	//SI NECESITAMOS VARIABLES PARA TODO EL COMPONENTE Y SUS METODOS
	//SE DECLARAN AQUI
	// let urlApi = "https://apicochespaco.azurewebsites.net/";
	let urlApi = Global.urlApiCoches;
	export default {
		name: "CochesComponent",
		data() {
			return {
				coches: [],
			};
		},
		mounted() {
			let request = "webresources/coches";
			//LAS VARIABLES DECLARADAS FUERA DEL EXPORT NO UTILIZAN "this"
			axios.get(urlApi + request).then((response) => {
				this.coches = response.data;
			});
		},
	};
</script>
