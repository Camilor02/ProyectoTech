function mostrarDato() {
  const datos = [
    "La Tierra recibe más energía del sol en una hora que toda la humanidad en un año.",
    "La energía solar no emite gases de efecto invernadero.",
    "Las placas solares pueden durar más de 25 años.",
    "Alemania, un país con poco sol, es líder en energía solar en Europa."
  ];

  const indice = Math.floor(Math.random() * datos.length);
  document.getElementById("dato").innerText = datos[indice];
}

// "Probar si toma JS" alert("Hola, el archivo JS se está cargando ✅");
