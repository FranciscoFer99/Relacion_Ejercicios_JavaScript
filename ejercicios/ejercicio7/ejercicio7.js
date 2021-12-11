function generarTablero() {
  generarMatriz();
  generarBarcos(1, 4);
  generarBarcos(2, 3);
  generarBarcos(3, 2);
  generarBarcos(2, 1);
  generarTabla();
}

var tamanioTablero = 10;
var matriz = new Array(tamanioTablero);

function generarMatriz() {
  for (let i = 0; i < tamanioTablero; i++) {
    matriz[i] = new Array(tamanioTablero);
    for (let j = 0; j < matriz[i].length; j++) {
      matriz[i][j] = 0;
    }
  }
}

function generarBarcos(barcos, tamanioBarco) {
  let barcosCreados = 0;

  while (barcosCreados < barcos) {
    let direccion = Math.round(Math.random() * (4 - 1) + 1);
    let fila = 0;
    let columna = 0;
    switch (direccion) {
      case 1:
        fila = Math.round(
          Math.random() * (9 - (tamanioBarco - 1)) + (tamanioBarco - 1)
        );
        columna = Math.round(Math.random() * 9);
        break;

      case 2:
        fila = Math.round(Math.random() * (10 - tamanioBarco));
        columna = Math.round(Math.random() * 9);
        break;

      case 3:
        fila = Math.round(Math.random() * 9);
        columna = Math.round(Math.random() * (10 - tamanioBarco));
        break;

      case 4:
        fila = Math.round(Math.random() * 9);
        columna = Math.round(
          Math.random() * (9 - (tamanioBarco - 1)) + (tamanioBarco - 1)
        );
        break;
    }
    let valido = true;
    switch (direccion) {
      case 1:
        for (let i = fila - tamanioBarco; i <= fila + 1; i++) {
          for (let j = columna - 1; j <= columna + 1; j++) {
            if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
              if (matriz[i][j] != 0) {
                valido = false;
              }
            }
          }
        }
        break;

      case 2:
        for (let i = fila - 1; i <= fila + tamanioBarco; i++) {
          for (let j = columna - 1; j <= columna + 1; j++) {
            if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
              if (matriz[i][j] != 0) {
                valido = false;
              }
            }
          }
        }
        break;

      case 3:
        for (let i = fila - 1; i <= fila + 1; i++) {
          for (let j = columna - 1; j <= columna + tamanioBarco; j++) {
            if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
              if (matriz[i][j] != 0) {
                valido = false;
              }
            }
          }
        }
        break;

      case 4:
        for (let i = fila - 1; i <= fila + 1; i++) {
          for (let j = columna - tamanioBarco; j <= columna + 1; j++) {
            if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
              if (matriz[i][j] != 0) {
                valido = false;
              }
            }
          }
        }
        break;
    }

    if (valido) {
      switch (direccion) {
        case 1:
          for (let i = fila; i > fila - tamanioBarco; i--) {
            matriz[i][columna] = tamanioBarco;
          }
          break;

        case 2:
          for (let i = fila; i < fila + tamanioBarco; i++) {
            matriz[i][columna] = tamanioBarco;
          }
          break;

        case 3:
          for (let i = columna; i < columna + tamanioBarco; i++) {
            matriz[fila][i] = tamanioBarco;
          }
          break;

        case 4:
          for (let i = columna; i > columna - tamanioBarco; i--) {
            matriz[fila][i] = tamanioBarco;
          }
          break;
      }
      barcosCreados++;
    }
  }
}

function generarTabla() {
  document.body.style.backgroundImage = "url(barcos.jpg) no-repeat";
  document.write("<table border=1>");
  for (let i = 0; i < matriz.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < matriz[i].length; j++) {
      switch (matriz[i][j]) {
        case 1:
          document.write(
            `<td style="background: url(fragata.jpg); width: 50px; height: 50px"></td>`
          );
          break;

        case 2:
          document.write(
            `<td style="background: url(destructor.jpg); width: 50px; height: 50px"></td>`
          );
          break;

        case 3:
          document.write(
            `<td style="background: url(acorazado.jpg); width: 50px; height: 50px"></td>`
          );
          break;

        case 4:
          document.write(
            `<td style="background: url(portaviones.jpg); width: 50px; height: 50px"></td>`
          );
          break;

        default:
          document.write(
            `<td style="background: url(ola.png); width: 50px; height: 50px"></td>`
          );
          break;
      }
    }
    document.write("</tr>");
    
  }
  document.write("</table><br>");
  document.write(" <a href='../../index.html'><button> Volver</button></a>");
}

