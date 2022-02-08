import React from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";
import { inject, observer} from "mobx-react";
import colors from "../consts/color";
import Todo from "./Todo";


@inject("store")
@observer

class TodoList extends React.Component{
    render(){
        return(
        <ScrollView style={styles.TodoList}>
            {
            this.props.store.todos.map((item,index)=>(
            <Todo key={"todo-"+index} index={index} finished={item.finished} text={item.text} />
                ))
                
            }
 

        </ScrollView>
        
        ) 
    }

}

const styles=StyleSheet.create({
    TodoList:{
        paddingHorizontal:"5%",
    }
})

export default TodoList;