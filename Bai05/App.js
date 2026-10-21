import React, { useState } from 'react';
import { Text, TextInput,StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    const [text, setText] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Nhập văn bản:</Text>
        
       <TextInput
        style={styles.textInput}
          placeholder="Gõ gì đó vào đây..."
          onChangeText={(newText: string) => setText(newText)}
          value={text}
        />
        
        <Text>
          Số lượng ký tự: {text.length}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>

    
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20, 
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  }
  });