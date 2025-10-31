<template>
	<div>
		<h1>Servicios Api Vue</h1>
		<h2 style="color: blue">{{ mensaje }}</h2>
	</div>
</template>

<script>
	import ServiceEjemplo from "@/services/ServiceEjemplo";
	//PARA PODER UTILIZAR EL SERVICIO NECESITAMOS UNA INSTANCIA (VARIABLE/OBJETO)
	//DE LA CLASE SERVICIO
	const service = new ServiceEjemplo();
	export default {
		name: "HomeComponent",
		data() {
			return {
				mensaje: "",
			};
		},
		mounted() {
			this.mensaje = service.getSaludo("Álvaro");
		},
	};
</script>
