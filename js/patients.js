const JsonObj = '[{"nombre":"Luisa","apellido":"Contreras","identificacion":"1234589","edad":"23","telefono":"3102654856","especialidad":"Medicina General"}]'
//let pacientes = []
let pacientes = JSON.parse(JsonObj)

pacienteForm.addEventListener("submit", registrarPaciente)
function registrarPaciente(event){
    event.preventDefault() //no se actualiza cuando se da clic en submit
   
    const nombrePaciente = document.getElementById("nombrePaciente").value
    const apellidoPaciente = document.getElementById("apellidoPaciente").value
    const identificacionPaciente = document.getElementById("identificacionPaciente").value
    const edadPaciente = document.getElementById("edadPaciente").value
    const telefonoPaciente = document.getElementById("telefonoPaciente").value
    const especialidadPaciente = document.getElementById("especialidadPaciente").value

    //inicia las validaciones
//expresiones regulares
const val_nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombrePaciente)
if(!val_nombre){
    alert("El nombre ingresado no es correcto")
    return;
}

const val_apellidos = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(apellidoPaciente)
if(!val_apellidos){
    alert("El apellido ingresado no es correcto")
    return;
}

const val_documento = /^\d{6,11}$/.test(identificacionPaciente)
if(!val_apellidos){
    alert("El documento ingresado no es correcto")
    return;
}


const val_edad = /^\d{2}$/.test(edadPaciente)
if(!val_edad){
    alert("El campo edad solo debe contener máximo 3 digitos")
    return;
}

const  val_telefono = /^\d{7,11}$/.test(telefonoPaciente)
if(!val_telefono){
    alert("El número de teléfono no es correcto")
    return;
}

     
    
    //finaliza las validaciones
    console.log(nombrePaciente,apellidoPaciente,identificacionPaciente,edadPaciente,telefonoPaciente,especialidadPaciente)

    //crear objeto Javascript
    const paciente = { //crear objeto
        nombre: nombrePaciente,
        apellido: apellidoPaciente,
        identificacion: identificacionPaciente,
        edad: edadPaciente,
        telefono: telefonoPaciente,
        especialidad: especialidadPaciente,
        
    }

    //agregar el objeto (doctor) al arreglo
    pacientes.push(paciente)
    //Limpiar el formulario
    pacienteForm.reset()

    //actualizar la lista de doctores por medio de DOM
    mostrarPacientes()

}
function mostrarPacientes(){
    const pacienteTabla = document.getElementById("pacienteTable")
    const tbody = pacienteTabla.querySelector("tbody")
    pacienteTabla.innerHTML=" <thead><th>Nombre</th><th>Apellido</th><th>Identificación</th><th>Edad</th><th>Telefono</th><th>Especialidad</th></thead>"
    
    pacientes.forEach((paciente) =>{
        //crear la tupla
        const tupla = pacienteTabla.insertRow(-1)//0-1
        //crear los campos
        const nombrePaciente = document.createElement ("td")
        const apellidoPaciente = document.createElement ("td")
        const identificacionPaciente = document.createElement("td")
        const edadPaciente = document.createElement ("td")
        const telefonoPaciente = document.createElement ("td")
        const especialidadPaciente = document.createElement ("td") //crear un campo y guardar el valor
        
        
        //Agregar los valores de cada campo
        nombrePaciente.textContent = paciente.nombre
        apellidoPaciente.textContent = paciente.apellido
        identificacionPaciente.textContent = paciente.identificacion
        edadPaciente.textContent = paciente.edad
        telefonoPaciente.textContent = paciente.telefono
        especialidadPaciente.textContent = paciente.especialidad
        //Agregar los campos a la tupla
        tupla.appendChild(nombrePaciente)
        tupla.appendChild(apellidoPaciente)
        tupla.appendChild(identificacionPaciente)
        tupla.appendChild(edadPaciente)
        tupla.appendChild(telefonoPaciente)
        tupla.appendChild(especialidadPaciente)

    })
}
mostrarPacientes()
