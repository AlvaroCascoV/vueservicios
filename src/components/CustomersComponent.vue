<template>
	<h1>Customers</h1>
	<form>
		<label>Introduzca ID:</label>
		<input type="text" v-model="idCustomer" placeholder="ID customer" />
		<button v-on:click.prevent="findCustomer(idCustomer)">Buscar</button>
		<div v-html="detalles"></div>
	</form>
	<table class="table table-danger">
		<thead>
			<tr>
				<th>ID</th>
				<th>Nombre</th>
				<th>Empresa</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="customer in clientes" :key="customer">
				<td style="color: blue">{{ customer.CustomerID }}</td>
				<td>{{ customer.ContactName }}</td>
				<td>{{ customer.CompanyName }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import Global from "./../Global";
	import axios from "axios";
	let urlApi = Global.urlApiCustomers;
	export default {
		name: "CustomersComponent",
		data() {
			return {
				clientes: [],
				idCustomer: "",
				detalles: "",
			};
		},
		mounted() {
			let request = "customers";
			axios.get(urlApi + request).then((response) => {
				this.clientes = response.data.value;
			});
		},
		methods: {
			findCustomer(id) {
				console.log(id);
				id = id.toUpperCase();
				let aux = "";
				for (let i = 0; i < this.clientes.length; i++) {
					if (id == this.clientes[i].CustomerID) {
						console.log("encontrado " + this.clientes[i].ContactName);
						aux +=
							"<span>Titulo: " + this.clientes[i].ContactTitle + "</span><br/>";
						aux += "<span>Pais: " + this.clientes[i].Country + "</span><br/>";
						aux += "<span>Direccion: " + this.clientes[i].Address + "</span>";
					}
				}
				this.detalles = aux;
			},
		},
	};
</script>
