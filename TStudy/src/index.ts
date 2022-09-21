interface car {
  modelo: string;
  meuModelo(modelo: string): void;
}

class carrito implements car {
  modelo;
  constructor(modelo: string) {
    this.modelo = modelo;
  }
  meuModelo(modelo: string): void {
    console.log(`seu modelo é ${modelo}`);
  }
}
@baseParameters()
class carrao extends carrito {
  engine;

  constructor(modelo: string, engine: number) {
    super(modelo);
    super.modelo = modelo;
    this.engine = engine;
  }
}

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
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      creatAt = new Date();
    };
  };
}
