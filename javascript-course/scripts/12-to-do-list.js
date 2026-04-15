// const todolist=[];
// function addTodo(){
//   const todovalue=  document.querySelector('.todo-input');
//     const name=todovalue.value;
//     console.log(name);
//  const todo=todolist.push(name);
//  console.log(todolist);
//  todovalue.value='';
// }//////////////////////////////////////////////////////////////////////
//   const todolist=['make dinner','plan for a movie','wash cloths'];
// renderTodoList()
// function renderTodoList(){
//   let todoListHtml='';
//   // loop through array
//   for (let i=0;i<todolist.length;i++){
//     //
//     const todo=todolist[i];
//     const html= `<p>${todolist[i]}<button onclick="todoList.splice(${i},1);
//     renderTodoList();">Delete</button></p>`;
//     todoListHtml+=html;
//     console.log(todoListHtml);
//   }
//     document.querySelector('.js-todo-list').innerHTML=todoListHtml

// }



// function addTodo(){
//   const todovalue=  document.querySelector('.todo-input');
//     const name=todovalue.value;
//     console.log(name);
//  const todo=todolist.push(name);
//  console.log(todolist);
//  todovalue.value='';
//  renderTodoList();
// }
// const todolist=[];
// function addTodo(){
//   const todovalue=  document.querySelector('.todo-input');
//     const name=todovalue.value;
//     console.log(name);
//  const todo=todolist.push(name);
//  console.log(todolist);
//  todovalue.value='';
// }
const todolist = [{ name: 'make dinner', dueDate: '23-09-23' }, { name: 'plan for a movie', dueDate: '23-09-23' }];
renderTodoList()
function renderTodoList() {
  let todoListHtml = '';
  // loop through array
  todolist.forEach((todoObject, index) => {
    // const todoObject=todolist[i];

    const { name, dueDate } = todoObject;

    const html = `
  <div class="todo-item">
    <div>${name}</div>
    <div>${dueDate}</div>
    <button
    //  onclick=" renderTodoList();" 
      class="delete-todo-button js-delete-button">
      Delete
    </button>
  </div>
`;
    todoListHtml += html;
    console.log(todoListHtml);
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => { todolist.splice(index, 1);renderTodoList() });

  })

  // for (let i=0;i<todolist.length;i++){
  //
  //   const todoObject=todolist[i];
  //   // const name=todoObject.name;
  //   // const dueDate=todoObject.date;
  //   // const{name}=todoObject.name;
  //   // const{dueDate}=todoObject.dueDate;
  //   const{name,dueDate}=todoObject;

  //  const html = `
  //   <div>${name}</div>
  //   <div>${dueDate}</div>
  //   <button onclick="todolist.splice(${i},1); renderTodoList();" class="delete-todo-button">
  //     Delete 
  //   </button>
  // `;
  //   todoListHtml+=html;
  //   console.log(todoListHtml);
  // }

}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const todovalue = document.querySelector('.todo-input');
  const dateInputElement = document.querySelector('.date-input');
  const name = todovalue.value;
  const dueDate = dateInputElement.value;
  console.log(name);
  const todo = todolist.push({
    // name:name,dueDate:dueDate
    name, dueDate
  });
  console.log(todolist);
  todovalue.value = '';
  renderTodoList();
}