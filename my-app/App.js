import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { getMyBoards, getListFromMyBoards, getCardsFromMyBoards } from './services/boards';

export default function App() {
  useEffect(() => {
    getMyBoards();
getListFromMyBoards();
getCardsFromMyBoards();
  
  }, []);
  return (
    <View style={styles.container}>
      <Text>Trello-App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
