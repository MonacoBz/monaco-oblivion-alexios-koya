
let urlIn = document.getElementById("urlInput");
let boton = document.getElementById("checkButton");
let opcionSel = document.getElementById("select");
const urlRegex = /^(https?:\/\/)?([\w\-]+(\.[\w\-]+)+)([\w.,@?^=%&:/~+#\-]*[\w@?^=%&/~+#\-])?$/;
const apikey = "AIzaSyCaP31T_33xt-Lm-anddhSTHCruWnS368E";
let resultText = document.getElementById("resultText");
let resultContainer = document.getElementById("result");
let botonAnalizar = document.getElementById("b-analizar");


botonAnalizar.addEventListener('click', e => {   
    evaluarUrl(urlIn.value);
});

boton.addEventListener('click', e => {
    let url = urlIn.value;
    if (!urlRegex.test(url)) {
        alert("URL no válida");
        return;
    }
    let opcion = opcionSel.value;
    if(opcion === "default"){
        alert("Seleccione una opción");
        return;
    }
    else if (opcion === "Otros") {
      fetch("http://localhost:8080/api/consulta",{
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: url  
      })
      .then(response => response.json())
      .then(json => {
      console.log(json)
        const mensaje = json.Mensaje;
        const correcto = json.Correcto;
        if(correcto){
          fetch("http://localhost:8080/api/analiza", {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain'
            },
            body: url
          })
          .then(response => response.json())
          .then(json => {
            console.log(json)
            const mensajeIA = json.Mensaje;
            const correctoIA = json.Correcto;
  
            resultText.textContent = mensajeIA;
              resultContainer.style.backgroundColor = correctoIA ? "#ccffcc":"#ffcccc";
              resultText.style.color = correctoIA ? "#006600":"#b30000";
              resultText.style.fontWeight = "bold";
          })
        }else{
            resultText.textContent = mensaje;
            resultContainer.style.backgroundColor = correcto ? "#ccffcc":"#ffcccc";
            resultText.style.color = correcto ? "#006600":"#b30000";
            resultText.style.fontWeight = "bold";
        }
      })
    } else {
        fetch(`http://localhost:8080/bdc/busca/${opcion}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: url
        })
        .then(response => response.json())
        .then(json => {
            const esPeligroso = json.peligroso;
            const mensaje = json.mensaje;
        
            resultText.textContent = mensaje;
            resultContainer.style.backgroundColor = esPeligroso ? "#ffcccc" : "#ccffcc";
            resultText.style.color = esPeligroso ? "#b30000" : "#006600";
            resultText.style.fontWeight = "bold";
        
            let seleccionUsuario = document.querySelector('input[name="opcion"]:checked');
            let coincidenciaText = document.getElementById("coincidenciaText");
        
            if (!seleccionUsuario) {
                coincidenciaText.textContent = "No seleccionaste tu evaluación de la URL.";
                coincidenciaText.style.color = "orange";
                return;
            }
        
            let valorUsuario = seleccionUsuario.value === "phishing";
        
            if (valorUsuario === esPeligroso) {
              coincidenciaText.textContent = "❌ Tu evaluación no coincide con el sistema.";
              coincidenciaText.style.color = "red";
            } else {
                coincidenciaText.textContent = "✅ Tu evaluación coincide con el sistema.";
                coincidenciaText.style.color = "green";
            }
        })
        
        .catch(error => {
            console.error("Error:", error);
            alert("Error al procesar la solicitud.");
        });
    }
});

    function evaluarUrl(urlIn) {
        urlIn = urlIn.trim();
        if (!urlRegex.test(urlIn)) {
            alert("URL no válida");
            return;
        }
        const patronesSospechosos = [
          {
            regex: /[^\s]+@/,
            explicacion: "La URL contiene '@', lo que puede ocultar el dominio real."
          },
          {
            regex: /:\/\/[0-9]{1,3}(\.[0-9]{1,3}){3}/,
            explicacion: "La URL usa una dirección IP en lugar de un dominio, lo cual es típico en sitios maliciosos."
          },
          {
            regex: /https?:\/\/.*\.(zip|exe|scr|dll|bat|cmd)(\?.*)?$/i,
            explicacion: "La URL apunta a un archivo ejecutable, lo cual puede ser malicioso."
          },
          {
            regex: /\/\/.*\.(com|net|org|info|ru|cn|tk|ml)\/.*(confirm|secure|login|verify|update|account)/i,
            explicacion: "El path de la URL contiene palabras sospechosas como 'login' o 'verify'."
          },
          {
            regex: /(login|verify|secure|update|confirm|account)[-_.]?[a-z0-9]*\.(com|net|org|info|ru|cn|tk|ml)/i,
            explicacion: "El dominio incluye términos utilizados comúnmente en ataques de phishing."
          },
          {
            regex: /xn--/,
            explicacion: "La URL utiliza punycode (xn--), lo cual puede representar ataques homográficos."
          },
          {
            regex: /https?:\/\/[^\/]*[-_]{2,}[^\/]*\./i,
            explicacion: "El dominio contiene múltiples guiones bajos o medios, lo cual es inusual y puede ser engañoso."
          },
          {
            regex: /https?:\/\/(.*\.)?(0x[a-f0-9]+|[a-f0-9]{32,})/i,
            explicacion: "La URL contiene valores hexadecimales largos que pueden ocultar direcciones IP o IDs maliciosos."
          },
          {
            regex: /https?:\/\/[^\/]*_[^\/]*\./i,
            explicacion: "El dominio contiene un guión bajo, algo técnicamente inválido pero usado para imitar marcas conocidas'."
          },
          {
            regex: /https?:\/\/[^\/]*\.\.[^\/]*\./i,
            explicacion: "El dominio contiene puntos dobles '..', una estructura anómala que puede intentar confundir sistemas de validación."
          },
          {
            regex: /https?:\/\/(login|account|secure|verify)[-.]?[a-z0-9]*\.[^.]+\.[a-z]{2,}/i,
            explicacion: "Subdominios con palabras engañosas como 'login' o 'secure', usados para suplantar páginas legítimas."
          },
          {
            regex: /https?:\/\/[^\/]+\.(tk|ml|ga|cf|gq)(\/|$)/i,
            explicacion: "Dominios con TLDs gratuitas (.tk, .ml, etc.), frecuentemente usados para alojar contenido malicioso o spam."
          },
          {
            regex: /\?(session|auth|token)=([a-z0-9]{8,})/i,
            explicacion: "La URL contiene parámetros sospechosos como 'session', 'auth' o 'token' con valores artificiales."
          },
          {
            regex: /https?:\/\/([a-z0-9]+[-]){4,}[a-z0-9]+\./i,
            explicacion: "El dominio contiene demasiados guiones, lo cual puede indicar intento de manipular SEO o camuflarse como sitios legítimos."
          },
          {
            regex: /https?:\/\/[^\/]*\.\.[^\/]*/i,
            explicacion: "El dominio contiene puntos dobles '..', lo cual es inválido según las normas DNS y puede usarse para evadir validaciones."
          },
          {
            regex: /[A-Z]/,
            explicacion: "La URL contiene letras mayúsculas, lo cual es inusual y puede ser un intento de imitar visualmente un dominio legítimo."
          }
        ];
      
        let resultadoDiv = document.getElementById("resultadoURL");
        resultadoDiv.innerHTML = "";
      
        for (let { regex, explicacion } of patronesSospechosos) {
          if (regex.test(urlIn)) {
            resultadoDiv.innerHTML = `
              <div style="padding: 1em; background-color:rgb(92, 0, 0); border: 1px solid red; border-radius: 5px;">
                <strong>⚠️ Posiblemente Maliciosa</strong><br>
                Motivo: ${explicacion}
              </div>
            `;
            return;
          }
        }
      
        resultadoDiv.innerHTML = `
          <div style="padding: 1em; background-color:rgb(1, 90, 1); border: 1px solid green; border-radius: 5px;">
            ✅ URL sin patrones maliciosos
          </div>
        `;
      }