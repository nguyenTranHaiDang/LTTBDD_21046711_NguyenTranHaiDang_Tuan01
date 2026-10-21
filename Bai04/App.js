import React from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
// 1. Import thêm SafeAreaProvider cùng với SafeAreaView
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type MyButtonProps = {
  label: string;
  onPress: () => void;
  color?: string; 
};

const MyButton = ({ label, onPress, color = 'blue' }: MyButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{ 
        backgroundColor: color, 
        padding: 12, 
        borderRadius: 8, 
        marginVertical: 10,
        alignItems: 'center'
      }}
    >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <View>
          <MyButton 
            label="Nút màu mặc định (Xanh)" 
            onPress={() => Alert.alert('Thông báo', 'Bạn vừa bấm nút xanh!')} 
          />
          
          <MyButton 
            label="Nút màu tùy biến (Đỏ)" 
            color="red" 
            onPress={() => Alert.alert('Thông báo', 'Bạn vừa bấm nút đỏ!')} 
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}