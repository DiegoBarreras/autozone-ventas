let codigosar = [];
let descripcionar = [];
let piezasvendar = [];
let precioventaar = [];
let stock = [];
let numart = 0;

function buscar(event) {
  event.preventDefault();
  const ibuscar = document.getElementById('input_buscar').value.toUpperCase();
  
  stock = [];
  for (let i = 0; i < descripcionar.length; i++) {
      if (ibuscar === descripcionar[i]) {
          stock.push(i);
      }
  }

  if (stock.length === 0) {
      alert("El producto buscado no está en existencia.");
  } else {
      alert("El producto buscado se encuentra en existencia en los siguientes renglones: ");
      for (let i = 0; i < stock.length; i++) {
          alert((stock[i] + 1));
      }
  }
}

function ordenarpreciodes(codigosar, descripcionar, piezasvendar, precioventaar, event) {
  for (let j = 1; j < precioventaar.length; j++) {
    let keyCodigo = codigosar[j];
    let keyDesc = descripcionar[j];
    let keyPiezas = piezasvendar[j];
    let keyPrecio = precioventaar[j];
    let i = j - 1;
        
    while (i >= 0 && precioventaar[i] < keyPrecio) {
      codigosar[i + 1] = codigosar[i];
      descripcionar[i + 1] = descripcionar[i];
      piezasvendar[i + 1] = piezasvendar[i];
      precioventaar[i + 1] = precioventaar[i];
      i = i - 1;
    }
    codigosar[i + 1] = keyCodigo;
    descripcionar[i + 1] = keyDesc;
    piezasvendar[i + 1] = keyPiezas;
    precioventaar[i + 1] = keyPrecio;
  }
  llenarTabla(codigosar, descripcionar, piezasvendar, precioventaar);
  event.preventDefault(); 
}

function ordenarprecioasc(codigosar, descripcionar, piezasvendar, precioventaar, event) {
  for (let j = 1; j < precioventaar.length; j++) {
    let keyCodigo = codigosar[j];
    let keyDesc = descripcionar[j];
    let keyPiezas = piezasvendar[j];
    let keyPrecio = precioventaar[j];
    let i = j - 1;
        
    while (i >= 0 && precioventaar[i] > keyPrecio) {
      codigosar[i + 1] = codigosar[i];
      descripcionar[i + 1] = descripcionar[i];
      piezasvendar[i + 1] = piezasvendar[i];
      precioventaar[i + 1] = precioventaar[i];
      i = i - 1;
    }
    codigosar[i + 1] = keyCodigo;
    descripcionar[i + 1] = keyDesc;
    piezasvendar[i + 1] = keyPiezas;
    precioventaar[i + 1] = keyPrecio;
  }
  llenarTabla(codigosar, descripcionar, piezasvendar, precioventaar);
  event.preventDefault(); 
}

function ordenardesc(codigosar, descripcionar, piezasvendar, precioventaar, event) {
  for (let j = 1; j < descripcionar.length; j++) {
    let keyCodigo = codigosar[j];
    let keyDesc = descripcionar[j];
    let keyPiezas = piezasvendar[j];
    let keyPrecio = precioventaar[j];
    let i = j - 1;
        
    while (i >= 0 && descripcionar[i] > keyDesc) {
      codigosar[i + 1] = codigosar[i];
      descripcionar[i + 1] = descripcionar[i];
      piezasvendar[i + 1] = piezasvendar[i];
      precioventaar[i + 1] = precioventaar[i];
      i = i - 1;
    }
    codigosar[i + 1] = keyCodigo;
    descripcionar[i + 1] = keyDesc;
    piezasvendar[i + 1] = keyPiezas;
    precioventaar[i + 1] = keyPrecio;
  }
  llenarTabla(codigosar, descripcionar, piezasvendar, precioventaar);
  event.preventDefault(); 
}

function ordenarcod(codigosar, descripcionar, piezasvendar, precioventaar, event) {
  for (let j = 1; j < codigosar.length; j++) {
    let keyCodigo = codigosar[j];
    let keyDesc = descripcionar[j];
    let keyPiezas = piezasvendar[j];
    let keyPrecio = precioventaar[j];
    let i = j - 1;
        
    while (i >= 0 && codigosar[i] > keyCodigo) {
      codigosar[i + 1] = codigosar[i];
      descripcionar[i + 1] = descripcionar[i];
      piezasvendar[i + 1] = piezasvendar[i];
      precioventaar[i + 1] = precioventaar[i];
      i = i - 1;
    }
    codigosar[i + 1] = keyCodigo;
    descripcionar[i + 1] = keyDesc;
    piezasvendar[i + 1] = keyPiezas;
    precioventaar[i + 1] = keyPrecio;
  }
  llenarTabla(codigosar, descripcionar, piezasvendar, precioventaar);
  event.preventDefault(); 
}

function llenarTabla(codigosar, descripcionar, piezasvendar, precioventaar) {
  let tbody = document.querySelector("#tabla tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < codigosar.length; i++) {
      let tr = document.createElement("tr");
    
      let td1 = document.createElement("td");
      td1.textContent = codigosar[i];
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.textContent = descripcionar[i]; 
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.textContent = piezasvendar[i]; 
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.textContent = "$" + precioventaar[i];
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.textContent = "$" + (precioventaar[i] * piezasvendar[i]);
      tr.appendChild(td5);

      tbody.appendChild(tr);
  }
}

function insertar(codigostam, descprod, piezasnum, preciopieza) {
  codigosar.push(codigostam);
  descripcionar.push(descprod);
  piezasvendar.push(piezasnum);
  precioventaar.push(preciopieza);
  llenarTabla(codigosar, descripcionar, piezasvendar, precioventaar);
}

function validar(event) {
  numart++;
  const codigostam = document.getElementById('input_codnum').value.padStart(8, '0');
  const descprod1 = document.getElementById('input_desc').value;
  const descprod = descprod1.toUpperCase(); 
  const piezasnum = parseInt(document.getElementById('input_piezas').value, 10); 
  const preciopieza = parseFloat(document.getElementById('input_precio').value); 

  for (let i = 0; i < codigosar.length; i++) {
    if (codigosar[i] == codigostam) {
      numart--;
      break;
    }
  }

  if (codigostam === "" || piezasnum === "" || preciopieza === "" || descprod === "") {
    alert('Inserta contenido en todos los espacios');
    event.preventDefault(); 
  } else if (codigostam.length > 8) {
    alert('Inserta sólo ocho dígitos o menos en el código');
    event.preventDefault(); 
  } else if (piezasnum < 1) {
    alert('Inserta al menos un artículo de este tipo');
    event.preventDefault(); 
  } else if (preciopieza < 0) {
    alert('Inserta un precio válido');
    event.preventDefault(); 
  } else if (numart > 16) {
    alert('El número de artículos ha llegado a su límite');
    event.preventDefault(); 
  } else {
    insertar(codigostam, descprod, piezasnum, preciopieza);
    event.preventDefault(); 
  }
}

boton_buscar.addEventListener("click", function(event) {
  buscar(event);
})

boton_ordcodigo.addEventListener("click", function(event) {
  ordenarcod(codigosar, descripcionar, piezasvendar, precioventaar, event);
})

boton_orddesc.addEventListener("click", function(event) {
  ordenardesc(codigosar, descripcionar, piezasvendar, precioventaar, event);
})

boton_ordprecioasc.addEventListener("click", function(event) {
  ordenarprecioasc(codigosar, descripcionar, piezasvendar, precioventaar, event);
})

boton_ordpreciodes.addEventListener("click", function(event) {
  ordenarpreciodes(codigosar, descripcionar, piezasvendar, precioventaar, event);
})

boton_capturar.addEventListener("click", function(event) {
  validar(event);
})