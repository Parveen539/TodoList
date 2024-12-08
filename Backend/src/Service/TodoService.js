import { TodoData } from "../Dataitems/TodoData.js";

class TodoService {
    TodoDetails = new TodoData();

    enterTodoDetails(TodoDetails){
        this.TodoDetails.TaskDesc = TodoDetails.TaskDesc;
        this.TodoDetails.TaskDueOn = TodoDetails.TaskDueOn;

        console.log(this.TodoDetails);
    };

    retrieveAllTasks(){
        console.log("To Do List Extracted");
    };

    retrieveFilteredTasks(condition) {
        console.log(condition);
    };

    deleteTodoTask(condition) {
        console.log(condition);
    };

    updateTodoTask(condition) {
        console.log(condition);
    };

};