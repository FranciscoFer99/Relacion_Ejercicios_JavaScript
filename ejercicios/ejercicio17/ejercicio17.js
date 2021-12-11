class Fraccion {
  constructor(numerador, denominador) {
      this.numerador = numerador;
      this.denominador = denominador;
  }

  imprimirFraccion() {
      return (this.numerador + "/" + this.denominador);
  }

  simplificar(){
      let maxD = this.mcd(this.numerador, this.denominador);
      let num = this.numerador / maxD;
      let den = this.denominador / maxD;
      return (num + "/" + den);
  }

  mcd(a, b) {
      if (a % b == 0) {
          //console.log(b);
          return b;
      } else {
          return this.mcd(b, a % b);
      }
  }

  multiplicarF(fraccion) {
      let numeradorN =  fraccion.numerador * this.numerador;
      let denominadorN = fraccion.denominador * this.denominador;

      let nueva = new Fraccion(numeradorN,denominadorN);
      return nueva.simplificar();       
  }

  dividirF(fraccion){
      let numeradorN =  fraccion.numerador * this.denominador;
      let denominadorN = fraccion.denominador * this.numerador;

      let nueva = new Fraccion(numeradorN,denominadorN);
      return nueva.simplificar();
  }

  //Getters & setters
  getNumerador() {
      return this.numerador;
  }

  setNumerador(numerador) {
      this.numerador = numerador;
  }

  getDenominador() {
      return this.denominador;
  }

  setDenominador(denominador) {
      this.denominador = denominador;
  }
}