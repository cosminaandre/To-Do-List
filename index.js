const addBtn = document.getElementById('add-button');
const listContainer = document.getElementById('list-container')
const taskEl = document.getElementById('add-task');


addBtn.addEventListener('click' , function(){
 let li =document.createElement('li');
 li.innerHTML = taskEl.value
 listContainer.appendChild(li);
 taskEl.value = '';
 let span = document.createElement('span');
 span.innerHTML = "\u00d7";
 li.appendChild(span);
 saveData();
})

listContainer.addEventListener('click',  function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle('checked');
    saveData();
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
},  false);

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML);
}

function displayList(){
  listContainer.innerHTML = localStorage.getItem('data');
}
displayList();