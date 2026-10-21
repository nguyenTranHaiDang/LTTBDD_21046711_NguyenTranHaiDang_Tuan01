import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type Gender = 'male' | 'female' | 'other';

export default function App() {
  const [gender, setGender] = useState<Gender>('male');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Giới tính đang chọn: {gender}</Text>
        
        <View>
          <Button title="Nam" onPress={() => setGender('male')} />
          <Button title="Nữ" onPress={() => setGender('female')} />
          <Button title="Khác" onPress={() => setGender('other')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}