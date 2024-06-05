// Cliente.js
export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    calcularImpuesto() {
        return (
            (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21
        );
    }

    // Getters y Setters
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get impuesto() {
        return this._impuesto;
    }

    set impuesto(impuesto) {
        this._impuesto = impuesto;
    }
}
