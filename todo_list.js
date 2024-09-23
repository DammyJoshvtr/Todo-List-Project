const inputElement = document.querySelector('.js_name_input');

const dateInputElement = document.querySelector('.js_due_date_input');


const todoList = [{
	name: 'make dinner',
	dueDate: '2024-12-22',
},
{
	name: 'wash dishes',
	dueDate: '2022-12-22'
}];


renderTodoList();

document.querySelectorAll('.js_add_todo_button')
	.forEach((addButton, index) => {
		addButton.addEventListener('click', () => {
			console.log(index);
			addTodo();
		})
	})


function renderTodoList() {
	let todoListHTML = '';

	for (let i = 0; i < todoList.length; i++) {
		const todoObject = todoList[i];
		console.log(i);
		//const name = todoObject.name;
		//const dueDate = todoObject.dueDate;

//since the variable name is the same as the property name, you a shortcut called Destructuring
		const {name, dueDate} = todoObject;

		const html = `
		<div>${name}</div>
		<div>${dueDate}</div>
		<button class="delete_todo_button js_delete_todo_button" onclick="
			todoList.splice(todoList[i], 1);
		">Delete</button>
		
		`;
		todoListHTML += html;
	}
		
	document.querySelector('.js_todo_list')
			.innerHTML = todoListHTML;

}


	// document.querySelector('.js_delete_todo_button')
	// 	.forEach((deleteButton, index) => {
	// 		deleteButton.addEventListener('click', () => {
	// 			deleteTodo();
	// 		})
	// 	})


function addTodo() {
  const name = inputElement.value;
	const dueDate = dateInputElement.value;
    
	todoList.push({
		/*
		name: name,
		dueDate: dueDate,
		*/
		//since the property name is the same, we use a shortcut method called shorthand property
		name,
		dueDate
	});

	console.log(todoList);

	inputElement.value = '';

	renderTodoList();
}

function deleteButton() {
	for (let i = 0; i < todoList.length; i++) {
		const todoObject = todoList[i];
		console.log(todoObject);
	}
	renderTodoList();
}


//onclick="
// todoList.splice(${i}, 1);
// renderTodoList();
// "