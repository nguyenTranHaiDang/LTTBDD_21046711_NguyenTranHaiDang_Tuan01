import {View, FlatList,Button, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {useState} from "react";

type counterType ={
  num :number
};

const Counter = ({num}:counterType)=>{
  const [count, setCount]=useState(0);
   const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View>
      <Text>Counter: {count}</Text>

      <Button title="Giảm" onPress={decrease} />
      <Button title="Tăng" onPress={increase} />
    </View>
  );
}



 type mytype = {
  name:string
  age:number
  isAdmin:boolean
};

const UserCard  = ({name,age,isAdmin}: mytype) : void => (

  <>
  <Text>{name}</Text>
  <Text>{age}</Text>
  {isAdmin && <Text>Admin</Text>}
  
  </>
)

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  name: "kien",
    age: 19,
    isAdmin: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     name: "An",
    age: 20,
    isAdmin: false,
  },
 
];

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
  
      <FlatList
        data={DATA}
        renderItem={({item}) => <UserCard name={item.name} age = {item.age}  isAdmin={item.isAdmin}  />}
      />
        <Counter num={0} />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default App;