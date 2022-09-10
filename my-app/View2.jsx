import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getCards, getLists } from "./services/functions";
import Cards from "./components/cards";

export default function CardsView() {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [listsInfo, setListsInfo] = useState([]);

  useEffect(() => {
    getCards().then((item) => setCardsInfo(item));
    getLists().then((item) => setListsInfo(item));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Trello-App</Text>
        <Text style={styles.label}>{listsInfo.map((list) => list.name)}</Text>
      </View>
      {cardsInfo.map((cards, index) => (
        <Cards key={index} data={cards} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },

  label: {
    fontSize: 20,
  },
});
