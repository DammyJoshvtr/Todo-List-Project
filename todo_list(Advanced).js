const todoList = [{
	name: 'make dinner',
	dueDate: '2024-12-22',
},
{
	name: 'wash dishes',
	dueDate: '2022-12-22'
}];


renderTodoList();


function renderTodoList() {
	let todoListHTML = '';

	todoList.forEach((todoObject, index) => {
//since the variable name is the same as the property name, you a shortcut called Destructuring
		const {name, dueDate} = todoObject; 

    const html = `
			<div>${name}</div>
			<div>${dueDate}</div>
			<button
			class="delete_todo_button js_delete_todo_button">Delete</button>
        `;
        todoListHTML += html;
    });

	document.querySelector('.js_todo_list')
        .innerHTML = todoListHTML;

	document.querySelectorAll('.js_delete_todo_button')
		.forEach((deleteButton, index) => {
			deleteButton.addEventListener('click', () => {
				console.log(index);
				todoList.splice(index, 1);
				renderTodoList();
			});
		});
}
    
document.querySelector('.js_add_todo_button')
	.addEventListener('click', () => {
		addTodo();
	});

function addTodo() {
	const inputElement = document.querySelector('.js_name_input');

	const name = inputElement.value;

	const dateInputElement = document.querySelector('.js_due_date_input');

	const dueDate = dateInputElement.value;
    
    
	todoList.push({
		/*
		name: name,
		dueDate: dueDate,
		*/
		//since the property name is the same, we use a shortcut method called shorthand prperty
		name,
		dueDate
	});

	console.log(todoList);

	inputElement.value = '';

	renderTodoList();
}
