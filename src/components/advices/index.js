import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useState } from "react";
import api_advices from "../../../services/api_advices";
import styles from "./styles";

export default function Advices() {
  const [advice, setAdvice] = useState("");
  const [idAdvice, setId] = useState("");
  const [random, setRandom] = useState(Math.floor(Math.random() * 200) + 20);

  async function loadAPI() {
    await api_advices.get(random.toString()).then((response) => {
        try{
      setAdvice(response.data.slip.advice);
      setId(response.data.slip.id)
      setRandom(Math.floor(Math.random() * 200) + 20);
      console.log(advice);
      console.log(random);
        }
        catch{
            setAdvice("The best sex is fun.")
        }
    });
  }
  useEffect(() => {
    loadAPI();
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.idText}>Advice #{idAdvice}</Text>
        <Text style={styles.adviceText}>{advice}</Text>
        <View style={styles.line}/>
      </View>
      <TouchableOpacity style={styles.adviceButton} onPress={() => loadAPI()}>
      <Text style={styles.buttonText}>Next advice</Text>
      </TouchableOpacity>
     
    </View>
  );
}
