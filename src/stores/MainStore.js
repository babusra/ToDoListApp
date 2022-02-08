import { observable, action} from "mobx";

class MainStore{
    @observable todos=[
        {
            finished:false,
            text:"Learn React Native"
        }
    ];
    @action addTodo(todo){
        this.todos=[...this.todos, todo];
        this.addTodoInputText = "";
    }



    @observable addTodoInputText = "";
    @action addTodoInputText_change(text){
        this.addTodoInputText = text;
    }

}

const store = new MainStore();
export default store;

