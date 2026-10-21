import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type LoadingContainerProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <LoadingContainer isLoading={loading}>
            <Text> Dữ liệu đã tải thành công!</Text>
            <Text>Đây là nội dung được truyền vào thông qua 'children'.</Text>
          </LoadingContainer>
        </View>

        <Button 
          title={loading ? "Tắt trạng thái Loading" : "Bật lại Loading"} 
          onPress={() => setLoading(!loading)} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}