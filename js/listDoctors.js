let doctores= []

function mostrarDoctores(){
    const doctorTabla = document.getElementById("doctorTable")
    const tbody = doctorTabla.querySelector("tbody")
    doctorTabla.innerHTML= doctorTabla.innerHTML=" <thead><th>Nombre</th><th>Apellido</th><th>Identificacion</th><th>Especialidad</th><th>Consultorio</th><th>Email</th></thead>"
    
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

const file = "/js/doctor.json"
const reader = new FileReader() //fileReader sirve para leer archivos forma asincronica
//lectura del archivo JSON
fetch(file) //lee el archivo
.then(resp => resp.json())
.then(data => {
    console.log(data,typeof(data))
    doctores = data
    mostrarDoctores()
})
.catch(error => console.log(error))

