import { StyleSheet, View, Text } from "react-native";
export default function Cards({ data }) {
  const { name, shortUrl, labels } = data;
  const label = labels[0] ? labels[0].name : "";

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.label}>{shortUrl}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { with: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 250,
  },
  card: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  labelContainer: {
    backgroundColor: "var(--purple)",
    borderRadius: 12,
    marginRight: "auto",
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  label: {
    fontSize: 15,
  },
});
