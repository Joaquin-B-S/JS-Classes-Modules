import Cliente from "./classes/Cliente.js";
import Impuesto from "./classes/Impuestos.js";

const impuestoCliente = new Impuesto(50000, 10000);

const cliente1 = new Cliente("Juan", impuestoCliente);

console.log(
    `El impuesto anual de ${
        cliente1.nombre
    } es: $${cliente1.calcularImpuesto()}`
);
