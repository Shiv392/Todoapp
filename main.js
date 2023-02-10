window.addEventListener('load',()=>{
   const form=document.querySelector('#new-task-form');
   const input=document.querySelector('#new-task-input');
   const list_el=document.querySelector('#tasks');

//    console.log(form);
//    console.log(input);
//    console.log(list_el);

form.addEventListener('submit',(e)=>{
    e.preventDefault();   
    //when you click submit button your form gets reload again
    //to avoid this we uses preventdefault() so that after submit() 
    //for will not refresh again and again
const task=input.value;   //value of input that needs to add to the tasl list
if(!task){
    alert("plz add a task");
    return;
}
const task_el=document.createElement("div"); //making task-el element
task_el.classList.add("task"); //adding task class to this element

const task_content_el=document.createElement("div");  //making eleent for new input and text element
task_content_el.classList.add("content")  //adding this element class with .content

// task_content_el.innerHTML=task;  //puttin input value in new div element

//append child and parent element
task_el.appendChild(task_content_el); //appned content el with task-el

const task_input_el=document.createElement('input');  //for edit
task_input_el.classList.add("text");
task_input_el.type="text";
task_input_el.value=task;
task_input_el.setAttribute("readonly","readonly");

task_content_el.appendChild(task_input_el);

const task_action_ele=document.createElement('div');  //creating button div
task_action_ele.classList.add("actions");

const task_edit_el=document.createElement('button'); //edit button
task_edit_el.classList.add("edit");
task_edit_el.innerHTML='edit';

const task_delete_el=document.createElement('button'); //delete button
task_delete_el.classList.add('delete');
task_delete_el.innerHTML='delete';

task_action_ele.appendChild(task_edit_el);  //appen this button to div
task_action_ele.appendChild(task_delete_el);

//now appending action ele to taks element
task_el.appendChild(task_action_ele);

list_el.appendChild(task_el); //apned task with list_el

input.value=""; //set to nothting after submitiing form
     
task_edit_el.addEventListener('click',()=>{
    if(task_edit_el.innerText.toLowerCase()=='edit'){
        task_input_el.removeAttribute("readonly");
    task_input_el.focus();
    task_edit_el.innerHTML="Save";
    }
    else{
        task_input_el.setAttribute("readonly","readonly");
        task_edit_el.innerText="Edit"
    }
});

task_delete_el.addEventListener('click',()=>{
    list_el.removeChild(task_el);
})


})
})