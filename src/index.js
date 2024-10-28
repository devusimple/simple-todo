// src/index.js

class TodoCRUD {
    constructor() {
            this.todos = [];
                    this.currentId = 1;
                        }

                            // Create a new todo
                                createTodo(task) {
                                        const todo = { id: this.currentId++, task, completed: false };
                                                this.todos.push(todo);
                                                        return todo;
                                                            }

                                                                // Read all todos
                                                                    getTodos() {
                                                                            return this.todos;
                                                                                }

                                                                                    // Update a todo by id
                                                                                        updateTodo(id, updatedTask) {
                                                                                                const todo = this.todos.find(t => t.id === id);
                                                                                                        if (todo) {
                                                                                                                    todo.task = updatedTask;
                                                                                                                                return todo;
                                                                                                                                        } else {
                                                                                                                                                    throw new Error("Todo not found");
                                                                                                                                                            }
                                                                                                                                                                }

                                                                                                                                                                    // Delete a todo by id
                                                                                                                                                                        deleteTodo(id) {
                                                                                                                                                                                const todoIndex = this.todos.findIndex(t => t.id === id);
                                                                                                                                                                                        if (todoIndex !== -1) {
                                                                                                                                                                                                    const deletedTodo = this.todos.splice(todoIndex, 1);
                                                                                                                                                                                                                return deletedTodo[0];
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                    throw new Error("Todo not found");
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                module.exports = TodoCRUD;