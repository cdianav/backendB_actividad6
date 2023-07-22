let doctores = []

doctorForm.addEventListener("submit", registrarDoctor)

function registrarDoctor(event){
    event.preventDefault() //no se actualiza cuando se da clic en submit
    const nombreDoctor = document.getElementById("nombreDoctor").value
    const apellidoDoctor = document.getElementById("apellidoDoctor").value
    const identificacionDoctor = document.getElementById("identificacionDoctor").value
    const especialDoctor = document.getElementById("especialidadDoctor").value
    const consultorioDoctor = document.getElementById("consultorioDoctor").value
    const emailDoctor = document.getElementById("emailDoctor").value
    //inicia las validaciones
    const val_email = /[@.]/.test(emailDoctor)
    if(!val_email){
        alert("El email no es valido")
        return
    }
    //finaliza las validaciones
    console.log(nombreDoctor,apellidoDoctor,identificacionDoctor,especialDoctor,consultorioDoctor,emailDoctor)

    //crear objeto Javascript
    const doctor = { //crear objeto
        nombre: nombreDoctor,
        apellido: apellidoDoctor,
        identificacion: identificacionDoctor,
        especialidad: especialDoctor,
        consultorio: consultorioDoctor,
        email: emailDoctor,
    }

    
    doctores.push(doctor)
   //convertir el objeto  JSON a cadena de texto
   const jsonString = JSON.stringify(doctores)
   //crear un blob de la cadena de texto
   const blob = new Blob([jsonString], {type:"application/json"})
   //crear una URL para el objeto blob
   const url = URL.createObjectURL(blob)
   //crear enlace de edescarga
   const padre = document.getElementById("descarga")
   const enlaceDescarga = document.createElement("a")
   enlaceDescarga.href = url
   enlaceDescarga.download = "doctor.json"
   enlaceDescarga.textContent = "Descargar JSON de Doctores"
   padre.appendChild(enlaceDescarga)

   
}