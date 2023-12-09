import React, { Component } from "react"
import { Text, View,Button, TextInput } from "react-native"

export default function LoginForm() {
   
    return (
      <View>
        <TextInput placeholder="CORREO"/>
        <TextInput placeholder="CONTRASEÑA"/> 
        <Button title="Enviar" onPress={() =>console.log("SENT")} />
      </View>
    );
  
}
