import React, { useState } from 'react';
import { View, Text } from 'react-native';

type Todo = {
  id: string;
  title: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Học React Native cơ bản' },
    { id: '2', title: 'Làm bài tập Todo bằng hàm map()' },
    { id: '3', title: 'Thực hành khai báo kiểu mảng đối tượng' },
  ]);

  return (
   
      

      <View>
      <Text>Danh Sách Việc Cần Làm</Text>
        {todos.map((task) => (
          <View key ={task.id}>
            <Text>{task.title}</Text>
          </View>
        ))}
      </View>
 
  );
}