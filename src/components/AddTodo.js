import React from "react";
import { View,Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../consts/color";
import  Icon  from "react-native-vector-icons/Feather";
import { inject, observer} from "mobx-react";
import store from "../stores/MainStore";


@inject("store")
@observer


class AddTodo extends React.Component{

    onPressButton(){
        this.props.store.addTodo({
            finished:false,
            text:this.props.store.addTodoInputText
        });
        
    }

    render(){
        return(
        <View style={styles.addTodo}>
            <TextInput
                onChangeText={text=>this.props.store.addTodoInputText_change(text)} 
                placeholder={"Type a task.." }
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}
                onPress={()=>this.onPressButton()}>
                <Icon name={"plus-circle"} color={colors.buttonText} size={24} />
            </TouchableOpacity>
        </View>
        )
    }
}

const styles=StyleSheet.create({
    addTodo:{
        paddingVertical:25,
        paddingHorizontal:'5%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        flex:1,
        height:60,
        backgroundColor:colors.inputBackground,
        paddingHorizontal:20,
        fontSize:16,
        borderRadius:4,
        elevation:2
    },
    button:{
        backgroundColor:colors.buttonBackground,
        height:50,
        width:60,
        marginLeft:15,
        borderRadius:4,
        elevation:2,
        justifyContent:'center',
        alignItems:'center'
    }

   
})

export default AddTodo;