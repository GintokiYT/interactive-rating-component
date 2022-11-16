const card = document.querySelector(".card"); 
const botones = document.querySelectorAll(".footer button");
const botonSubmit = document.querySelector("#submit");

let value = "";

botones.forEach( boton => {
  boton.addEventListener("click", () => {
    value = boton.textContent;
    if(value === "1") {
      botones.forEach(e => e.classList.remove("active"));
      boton.classList.add("active");
    } else if (value === "2") {
      botones.forEach(e => e.classList.remove("active"));
      boton.classList.add("active");
    } else if (value === "3") {
      botones.forEach(e => e.classList.remove("active"));
      boton.classList.add("active");
    } else if (value === "4") {
      botones.forEach(e => e.classList.remove("active"));
      boton.classList.add("active");
    } else {
      botones.forEach(e => e.classList.remove("active"));
      boton.classList.add("active");
    }
  })
})

botonSubmit.addEventListener("click", () => {
  if(value !== "") {
    card.innerHTML = `
      <div class="contenedorRespuesta">
        <div class="imagen">
          <img src="./src/assets/illustration-thank-you.svg" alt="thank you" />
        </div>
        <div class="data">
          <span>You selected ${value} out of 5</span>
        </div>
        <div class="salida">
          <div class="titulo">
            <p>Thank you!</p>
          </div>
          <div class="descripcion">
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>
        </div>
      </div>
    `
  }
});

