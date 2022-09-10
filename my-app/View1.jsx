import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getBoards } from "./services/functions";
import Boards from "./components/boards";

export default function BoardsView() {
  const [boardsInfo, setBoardsInfo] = useState([]);

  useEffect(() => {
    getBoards().then((item) =>
      setBoardsInfo(item.filter((visible) => visible.closed == false))
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text}>Tableros</Text>
      </View>
      <View>
        {boardsInfo.map((boards, index) => (
          <Boards key={index} data={boards} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  containerText: {
    marginVertical: 50,
  },

  text: {
    fontSize: 30,
    fontWeight: "600",
    color: "#0074BE",
  },
});
