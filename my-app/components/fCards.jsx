import { StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#0074BE",
    shadowOffset: { with: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 13,
    elevation: 3,
    marginHorizontal: 4,
    marginVertical: 13,
    width: 250,
    alignSelf: "center",
  },
  board: {
    marginVertical: 15,
    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
  },
});
