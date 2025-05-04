import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


export default function App() {

  const [assets, SetAssets] = useState('');
  const [liabilities, SetLiabilities] = useState('');
  const [result, setResult] = useState(null);

  function calculateBalance() {

    if (assets === '' || liabilities === '') {
      Alert.alert("Please enter values for both fields");
      return;
    }

    const netWorth = parseFloat(assets) - parseFloat(liabilities);
    setResult(netWorth);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balance Calculator</Text>

    <View style={styles.inputContainer}>
      <TextInput 
      placeholder='assets'
      keyboardType='numeric'
      value={assets}
      onChangeText={SetAssets}
      style={styles.input}
       />

      <TextInput 
      placeholder='liabilities'
      keyboardType='numeric'
      value={liabilities}
      onChangeText={SetLiabilities}
      style={styles.input}
       />
    </View>
       <Button onPress={calculateBalance} title='Calculate' />
       <Text style={styles.resultText}>Net Worth: {result}</Text>


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

  title: {
    fontSize: 35,
    fontWeight: "bold",
    
  },

  inputContainer: {
    marginBottom: 10,
    marginTop: 30,
    width: '80%',
  },

  input: {
    
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    margin: 8,
    paddingHorizontal: 15,
    textAlign: "left",
    height: 45,    
  },

  resultText: {
    fontSize: 22,
    marginTop: 17,
    color: '#28a745',  
    fontWeight: '900',
  }
});
