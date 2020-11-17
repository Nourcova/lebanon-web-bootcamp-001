/* Instructions 

1- Implement the Check all button functionality, when clicked all check boxes should become checked

2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked

3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
*/

//1
document.getElementById("check-all").addEventListener('click',check);
function check(e) {
  let list=document.querySelectorAll(".shopping-item");
  for(let i=0; i<list.length; i++){
    list[i].checked=true;
  }
     
}

//2
document.getElementById("uncheck-all").addEventListener('click',uncheck);
function uncheck(e) {
  let list=document.querySelectorAll(".shopping-item");
  for(let i=0; i<list.length; i++){
    list[i].checked=false;
  }  
}

//3
let listNour=document.querySelectorAll(".shopping-item");
//let listNour = Array.prototype.slice.call(listo);
let verifyList=[];
let ul=document.createElement('ul');
let logList = document.getElementById("log");

for(let i=0; i<listNour.length; i++){
  listNour[i].addEventListener('change',function(){
    //console.log(verifyList)
    if (this.checked){
      verifyList.push(this.value);
    }
    if(this.checked==false){
      if(verifyList.includes(this.value)){
      let index =verifyList.findIndex(notcheck => notcheck === this.value);
      //console.log(index);
      let ff=verifyList.splice(index,1);
      }
    }
    ul.innerHTML = '';
    for(let j=0; j<verifyList.length;j++){
      ul.innerHTML += `<li> Bought ${verifyList[j]} </li>`;
      logList.appendChild(ul);
      }
  });
}

