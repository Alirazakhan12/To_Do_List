let input = document.getElementById("input")
let todoBox = document.getElementById("to-do-box")
input.addEventListener("keyup", function(event){
 if(event.key == "Enter"){
  creat(input.value)
  input.value = ""
 }
})



let creat = function add(item){
 let listitem = document.createElement("li");
 listitem.innerHTML = `${item}
 <i  class="fa fa-times" id="list-cancel"></i>`;

 todoBox.appendChild(listitem)
 listitem.querySelector("#list-cancel").addEventListener("click",function(){
  listitem.remove()
 })
}








