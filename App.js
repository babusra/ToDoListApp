import React from "react";
import {View ,Text, StatusBar, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import AddTodo from "./src/components/AddTodo";
import TodoList from "./src/components/TodoList";
import { Provider } from "mobx-react";
import store from "./src/stores/MainStore";


class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <View style={styles.container}>
        <StatusBar/>
        <Header/> 
        <AddTodo/>
        <TodoList/>
      </View>
      </Provider>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})

export default App;