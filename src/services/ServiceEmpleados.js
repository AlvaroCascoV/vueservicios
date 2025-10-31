import axios from "axios";
import Global from "@/Global";

export default class ServiceEmpleados {
    getEmpleados() {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados
            let request = "api/empleados"
            let empleados = []
            axios.get(url + request).then(response => {
                empleados = response.data
                resolve(empleados)
            })
        })
    }
    findEmpleado(id) {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados
            let request = "api/empleados/" + id
            let empleado = []
            axios.get(url + request).then(response => {
                empleado = response.data
                resolve(empleado)
            })
        })
    }
    getOficios() {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados
            let request = "api/Empleados/oficios";
            let oficios = []
            axios.get(url + request).then(response => {
                oficios = response.data
                resolve(oficios)
            })
        })
    }
    getEmpleadosOficio(oficio) {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados
            let request = "api/empleados/empleadosoficio/" + oficio;
            let empleados = []
            axios.get(url + request).then(response => {
                empleados = response.data
                resolve(empleados)
            })

        })
    }
}
