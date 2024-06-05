"use strict";

var _Cliente = _interopRequireDefault(require("./classes/Cliente.js"));
var _Impuestos = _interopRequireDefault(require("./classes/Impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuestoCliente = new _Impuestos["default"](50000, 10000);
var cliente1 = new _Cliente["default"]("Juan", impuestoCliente);
console.log("El impuesto anual de ".concat(cliente1.nombre, " es: $").concat(cliente1.calcularImpuesto()));