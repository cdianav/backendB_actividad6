let pacientes= []

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

const file = "/js/patient.json"
const reader = new FileReader() //fileReader sirve para leer archivos forma asincronica
//lectura del archivo JSON
fetch(file) //lee el archivo
.then(resp => resp.json())
.then(data => {
    console.log(data,typeof(data))
    pacientes = data
    mostrarPacientes()
})
.catch(error => console.log(error))

