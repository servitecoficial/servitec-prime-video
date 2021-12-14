document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "541160548658";
  
    let cliente = document.querySelector("#cliente").value;
    
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let empleado = document.querySelector("#empleado").value;
    let NombreServicio = document.querySelector("#NombreServicio").value;
    
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_SERVITEC AREA JUEGOS PROGRAMAS LIBROS_*%0A
          *Pedido Especial*%0A%0A
          *¿Cuál es tu nombre?*%0A
          ${cliente}%0A
          *Para cuando lo quiere*%0A
          ${fecha}%0A
          *Horario*%0A
          ${hora}%0A
          *Seleccion del servicio*%0A
          ${empleado}%0A
          *Nombre del servicio a buscar*%0A
          ${NombreServicio}%0A
          `;
  
    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });
  