
let valueInput = document.getElementById("valueInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList")


addTask.addEventListener("click",addList)
taskList.addEventListener("click",checkTask)

if (JSON.parse(localStorage.getItem("list"))!==null){
    tasks=JSON.parse(localStorage.getItem("list"))
    
}else{
    tasks=[]
}
displayTask()
function addList(){
    allTasks={
        id: tasks.length+1,
        task:valueInput.value
    }
 tasks.push(allTasks);
 var allList = JSON.stringify(tasks);
 localStorage.setItem("list", allList);
 displayTask()
 clearTask()

}

function displayTask(){
    let item =``
    for(let i=0;i<tasks.length;i++){
        item+=`<li class="task-item form-control mt-3"><span class="">${tasks[i].id}&nbsp; &nbsp;&nbsp;&nbsp; ${tasks[i].task}</span>
         <button class="btn " id="deleteInput" onClick="deleteTask(${i})">
        Delete<i class="fa-solid mx-1 fa-trash"></i></button> 
         <button  class="btn checkInput btn-primary"  >
        complete<i class="fa-solid mx-1 fa-check"></i></button> 

        
        </li>`
        
        
        
    }
    taskList.innerHTML=item
}
function clearTask(){
    valueInput.value=''
}
function deleteTask(index){

    tasks.splice(index,1)
    displayTask()
    localStorage.setItem('list', JSON.stringify(tasks));
}

function checkTask(e){
    const check = e.target;
    if(check.classList[1]==="checkInput"){
        const todoItem = check.parentElement;
        todoItem.classList.toggle("fall");
    }
}



