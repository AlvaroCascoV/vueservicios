<template>
	<h1>Empleado Details</h1>
	<form style="width: 50%; justify-self: center">
		<label>Seleccione un empleado</label>
		<select class="form-control" v-model="idEmpleado">
			<option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">
				{{ emp.apellido }}
			</option>
		</select>
		<button class="btn btn-primary" v-on:click.prevent="findEmpleado">
			Detalles
		</button>
		<ul class="list-group" v-if="empleado != null">
			<li class="list-group-item">
				<b>{{ empleado.apellido }}</b>
			</li>
			<li class="list-group-item">Oficio: {{ empleado.oficio }}</li>
			<li class="list-group-item">Salario: {{ empleado.salario }} €</li>
			<li class="list-group-item">Departamento: {{ empleado.departamento }}</li>
		</ul>
	</form>
</template>

<script>
	import ServiceEmpleados from "@/services/ServiceEmpleados";
	let service = new ServiceEmpleados();
	export default {
		name: "EmpleadoDetails",
		data() {
			return {
				empleados: [],
				idEmpleado: 0,
				empleado: null,
			};
		},
		mounted() {
			// let request = "api/empleados";
			// axios.get(urlApi + request).then((response) => {
			// 	this.empleados = response.data;
			// });
			service.getEmpleados().then((result) => {
				this.empleados = result;
			});
		},
		methods: {
			findEmpleado() {
				// let request = "api/empleados/" + this.idEmpleado;
				// axios.get(urlApi + request).then((response) => {
				// 	this.empleado = response.data;
				// });
				service.findEmpleado(this.idEmpleado).then((result) => {
					this.empleado = result;
				});
			},
		},
	};
</script>
