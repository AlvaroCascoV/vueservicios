import axios from "axios";
import Global from "@/Global";

export default class ServiceCoches {
    getCoches() {
        return new Promise(function (resolve) {
            let coches = []
            let request = "webresources/coches"
            let url = Global.urlApiCoches + request
            axios.get(url).then(response => {
                console.log("coches servicio")
                coches = response.data
                resolve(coches);
            })
        })
    }

}