const JsonObj = '[{"nombre":"Luisa","apellido":"Contreras","identificacion":"1234589","especialidad":"Medicina General","consultorio":"102","email":"luisa@correo.com"}]'
//let doctores = []
let doctores = JSON.parse(JsonObj)

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
//expresiones regulares
const val_nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreDoctor)
if(!val_nombre){
    alert("El nombre ingresado no es correcto")
    return;
}

const val_apellidos = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(apellidoDoctor)
if(!val_apellidos){
    alert("El apellido ingresado no es correcto")
    return;
}

const val_documento = /^\d{6,11}$/.test(identificacionDoctor)
if(!val_apellidos){
    alert("El documento ingresado no es correcto")
    return;
}


const val_consultorio = /^\d{3}$/.test(consultorioDoctor)
if(!val_consultorio){
    alert("El numero de consultorio solo debe tener 3 digitos")
    return;
}

const  val_email = /^\d{6,11}$/.test(emailDoctor)
if(!val_apellidos){
    alert("El email ingresado no es correcto")
    return;
}

     
     /*var val_nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
     var val_apellidos = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
     var val_documento = /^\d{6,11}$/ // 6 a 11 numeros.
     var val_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
     var val_telefono =/^\d{7,10}$/ // 7 a 10 numeros.*/
   
     /*if(! val_nombre.test(nombreDoctor.nombreDoctor)){
        alert("El campo diligenciado no es valido")
        return;
     }

  
    /*const val_nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreDoctor)
    if(!val_nombre){
        validaFalla(nombreDoctor,"El nombre no es valido")
        return
    }else{validaOk(nombreDoctor)

    }
    /*const val_nombre = /[@.]/.test(nombreDoctor)
    if(!val_nombre){
        validaFalla(nombreDoctor,"El nombre no es valido")
        return
    }else{validaOk(nombreDoctor)

    }*/

    /*const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    /*const val_email = /[@.]/.test(emailDoctor)
    if(!val_email){
        alert("El email no es valido")
        return
    }*/

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

    //agregar el objeto (doctor) al arreglo
    doctores.push(doctor)
    //Limpiar el formulario
    doctorForm.reset()

    //actualizar la lista de doctores por medio de DOM
    mostrarDoctores()

}
function mostrarDoctores(){
    const doctorTabla = document.getElementById("doctorTable")
    const tbody = doctorTabla.querySelector("tbody")
    doctorTabla.innerHTML=" <thead><th>Nombre</th><th>Apellido</th><th>Identificación</th><th>Especialidad</th><th>Consultorio</th><th>Email</th></thead>"
    
    doctores.forEach((doctor) =>{
        //crear la tupla
        const tupla = doctorTabla.insertRow(-1)//0-1
        //crear los campos
        const nombreDoctor = document.createElement ("td")
        const apellidoDoctor = document.createElement ("td")
        const identificacionDoctor = document.createElement("td")
        const especialDoctor = document.createElement ("td")
        const consultorioDoctor = document.createElement ("td")
        const emailDoctor = document.createElement ("td") //crear un campo y guardar el valor
        
        
        //Agregar los valores de cada campo
        nombreDoctor.textContent = doctor.nombre
        apellidoDoctor.textContent = doctor.apellido
        identificacionDoctor.textContent = doctor.identificacion
        especialDoctor.textContent = doctor.especialidad
        consultorioDoctor.textContent = doctor.consultorio
        emailDoctor.textContent = doctor.email
        //Agregar los campos a la tupla
        tupla.appendChild(nombreDoctor)
        tupla.appendChild(apellidoDoctor)
        tupla.appendChild(identificacionDoctor)
        tupla.appendChild(especialDoctor)
        tupla.appendChild(consultorioDoctor)
        tupla.appendChild(emailDoctor)

    })
}
mostrarDoctores()
