import { Component } from "@angular/core";
import { ITodo } from "./types/items";

@Component({
    selector: "todo",
    templateUrl: "./todo.component.html",
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {
    todo: string = ""
    done: boolean = false
    todos: ITodo[] = []

    addTodos(todo: string) {
        if (todo === "") {
            return ""
        }
        const newTodo = this.todos.push({
            id: Date.now(),
            todo: todo,
            done: false
        })
        this.todo = ""
        return newTodo

    }
    doneTodo(id: number) {
        const index = this.todos.findIndex((el) => el.id === id)
        this.todos[index].done = !this.todos[index].done

    }
    allDoneTodo(done: boolean) {
        this.todos.map((item) => item.done = done)

    }
    delTodo(id: number) {
        this.todos = this.todos.filter((el) => el.id !== id)
    }
}