"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class carrito {
    constructor(modelo) {
        this.modelo = modelo;
    }
    meuModelo(modelo) {
        console.log(`seu modelo é ${modelo}`);
    }
}
let carrao = class carrao extends carrito {
    constructor(modelo, engine) {
        super(modelo);
        super.modelo = modelo;
        this.engine = engine;
    }
};
carrao = __decorate([
    baseParameters()
], carrao);
const ex = new carrao("Gol", 20);
console.log(ex);
//valor impresso: 
// {
//   "modelo": "Gol",
//   "engine": 20,
//   "id": 0.26675021410184163,
//   "creatAt": "2022-09-21T13:41:26.681Z"
// }
//decorators
function baseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.creatAt = new Date();
            }
        };
    };
}
