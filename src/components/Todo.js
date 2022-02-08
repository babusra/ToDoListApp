import React from "react";
import { View,Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import  Icon  from "react-native-vector-icons/Feather";
import colors from "../consts/color";

class Todo extends React.Component{
    render(){
        return(
        <TouchableOpacity style={styles.todo}>
            {
                this.props.finished?(
                    <Icon name={"check-circle"} size={20} color={colors.todoCircleFinished}/>

                ) : (
                    <Icon name={"circle"} size={20} color={colors.todoCircle}/>

                )

            }
            <Text style={styles.todoText}>{this.props.text}</Text>
        </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    todo:{
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center'
    },
    todoText:{
        marginLeft:10,
        fontSize:16
    }
})

export default Todo;