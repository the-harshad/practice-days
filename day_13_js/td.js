let todo = [];
let req = prompt("plz enter your request like.. list, add, quit, delete");

while(true){
   if(req == "quit"){
    console.log("quitting app");
    break;
   } 

   if(req == "list"){
      console.log("------------");
      for(let i=0; i<todo.length; i++){
        console.log(i, todo[i]);
      }
      console.log("------------");
   } else if (req == "add"){
     let task = prompt("enter the task you want to add");
     todo.push(task);
     console.log("task added");
   } else if (req == "delete"){
     let idx = prompt("enter the task index");
     todo.splice(idx, 1);
  } else{
    console.log("wrong reqest");
  }
   req = prompt("plz enter your request");
}