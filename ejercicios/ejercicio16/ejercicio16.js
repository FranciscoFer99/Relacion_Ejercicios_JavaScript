class Coordenadas {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    cambiar(nx, ny) {
      this.x = nx;
      this.y = ny;
    }
  
    iguales(x2, y2) {
      if (this.x == x2 && this.y == y2) {
        return "Los puntos introducidos son iguales";
      } else {
        return "Los puntos introducidos son distintos";
      }
    }
  
    sumar(x2, y2) {
      let x3 = parseInt(this.x) + parseInt(x2);
      let y3 = parseInt(this.y) + parseInt(y2);
      console.log("hola");
      return [x3, y3];
    }
  
    distancia(x2, y2) {
      let dist = Math.sqrt(Math.pow(x2 - this.x, 2) + Math.pow(y2 - this.y, 2));
      return dist.toFixed(2);
    }
  }