<template>
	<div>
		<h1>OFICIOS</h1>
		<table class="table table-primary">
			<thead>
				<tr>
					<th>Apellido</th>
					<th>Oficio</th>
					<th>Salario</th>
					<th>Departamento</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="emp in empleados" :key="emp">
					<td>{{ emp.apellido }}</td>
					<td>{{ emp.oficio }}</td>
					<td>{{ emp.salario }} €</td>
					<td>{{ emp.departamento }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import Global from "@/Global";
	import axios from "axios";
	export default {
		name: "EmpleadosOficios",
		data() {
			return {
				empleados: [],
			};
		},
		methods: {
			loadEmpleados() {
				let oficio = this.$route.params.oficio;
				let request = "api/empleados/empleadosoficio/" + oficio;
				let url = Global.urlApiEmpleados + request;
				axios.get(url).then((response) => {
					console.log("Leyendo empleados");
					this.empleados = response.data;
				});
			},
		},
		mounted() {
			this.loadEmpleados();
		},
		watch: {
			"$route.params.oficio"(nextVal, oldVal) {
				if (nextVal != oldVal) {
					this.loadEmpleados();
				}
			},
		},
	};
</script>
