import { StyleSheet, View, Text } from "react-native";

export default function Boards({ data }) {
  const { name } = data;
  return (
    <View style={styles.boardContainer}>
      <View style={styles.board}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boardContainer: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#fff",
    borderColor: "#0074BE",
    borderWidth: 3,
    marginHorizontal: 4,
    marginVertical: 20,
    width: 250,
  },

  board: {
    marginHorizontal: 30,
    marginVertical: 30,
    alignItems: "center",
  },

  text: {
    fontSize: 25,
    fontWeight: "600",
  },
});
