

document.getElementById("form-task").addEventListener("submit", saveTask);


function saveTask(event){
    

    // OBTENER INFORMACION DE FORMULARIO
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    // ALMACENAR LOS DATOS EN UN OBJETO
    let task = {'title': title, 'description': description};


    // PARA GUARDAR LA TAREA EN LS SE REQUIERE CONVERTIR LA TAREA EN STRING
    //localStorage.setItem('TASK', JSON.stringify(task));

    // PARA MOSTRAR LA TAREA EN FORMATO JSON SE UTILIZA LO SIGUIENTE
    //console.log(JSON.parse(localStorage.getItem('TASK')));

    if(localStorage.getItem('tasks') == null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    
    }

    //console.log(task);

    getTask();

    event.preventDefault();

}


function getTask(){

    let tareas = JSON.parse(localStorage.getItem('tasks'));

    let list_tasks = document.getElementById('tasks');

    list_tasks.innerHTML = '';

    //list_tasks.innerHTML = '';

    for(let i=0;i<tareas.length;i++){
        list_tasks.innerHTML += `<div class='card mt-3'>
            <div class='card-body'>
                <p>${tareas[i].title} - ${tareas[i].description}</p>
                <a class='btn btn-danger' onClick="deleteTasks('${tareas[i].title}')">Eliminar</a>
            </div>
        </div>
        `;
    }
}

function deleteTasks(title){


    // TRAER DATOS DEL LS
    let tareas = JSON.parse(localStorage.getItem('tasks'));

    // RECORRER EL ARREGLO Y ELIMINAR
    for(let i=0;i<tareas.length;i++){
        if(tareas[i].title == title){
            tareas.splice(i,1);
        }
    }

    // GUARDAR DE NUEVO LOS DATOS EN EL LS
    localStorage.setItem('tasks', JSON.stringify(tareas));
    
    getTask();

    //console.log(title);
}

