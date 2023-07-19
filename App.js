import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddNumbers from './components/addNumbers';



export default function App() {
  return (
    <View style={styles.container}>

      <AddNumbers />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50
  },
});
