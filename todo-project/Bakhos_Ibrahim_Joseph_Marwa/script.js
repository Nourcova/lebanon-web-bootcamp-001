const list = document.querySelector('#task-list ul');
const forms = document.forms;
const entries=[];


// delete tasks
list.addEventListener('click', (e) => {
  if(e.target.className == 'remove'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add tasks
const addForm = forms['add-task'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = document.getElementById('input_id').value;
  const ddLine= document.getElementById('deadline').value;
  //extended date 
  let dates = new Date(ddLine).toDateString();
//
  const li = document.createElement('li');
  const taskName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  const prio= document.getElementById('priority').value;
 
  
 //taskName.innerHTML =` <input type="checkbox" id="check"><label> ${value}</label> <br> ${ddLine} ${prio}`;
  ///taskName.innerHTML =`<input type="checkbox">  ${objectTask.value}  ${objectTask.ddLine}  <br>`;
  

//li.addEventListener('click', function(e){
 // li.className="checked";
//});
/*
li.addEventListener("click", function (e) {
  if (e.detail === 1) {
    // do something if the element was clicked once.
    li.className="checked";
  } else if (e.detail === 2) {
    // do something else if the element was clicked twice
    li.className="";
  }
});*/



  deleteBtn.textContent = 'remove';

  // add classes
  taskName.classList.add('name');
  deleteBtn.classList.add('remove');

  // append to DOM
  li.appendChild(taskName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  //empty the input after adding
  document.getElementById("input_id").value="";

//Highlight expired tasks
  let timeResult =document.getElementById("deadline").valueAsDate;
    
  let g1 = new Date(); 
  if (timeResult.getTime() < g1.getTime()) {
        li.className+="expired";      
  }
  //Object

//put the values in an Object
let info={valueTask:value,
          ddLineTask:dates,
          prioTask:prio
          };

entries.push(info);
//console.log(entries);
renderPeople(entries);

function renderPeople(people) {
taskName.innerHTML='';
  for(let i=0; i<people.length; i++){

  taskName.innerHTML =`<input type="checkbox" id="check"> <label>${people[i].valueTask} </label> <br> ${people[i].ddLineTask} ${prio}`;
  }
//console.log(taskName)
}
});

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
 let today = new Date();
let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

/*
 document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, 'cancel');
  });*/
