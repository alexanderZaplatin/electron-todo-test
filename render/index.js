'use strict'

const { ipcRenderer } = require('electron')

const deleteTodo = (e) => {
	ipcRenderer.send('delete-todo', e.target.textContent)
}

document.getElemetById('creareTodoBtn').addEventListener('click', () => {
	ipcRenderer.send('add-todo-window')
})

ipcRenderer.on('todos', (event, todos) => {
	const todoList = document.getElemetById('todoList')

	const todoItems = todos.reduce((html, todo) => {
		html += `<li class="todo-item">${todo}</li>`
		
		return html
	}, '')

	todoList.innerHTML = todoItems

	todoList.querySelectroAll('.todo-tem').forEach(item => {
		item.addEventListener('click', deleteTodo)
	})
})