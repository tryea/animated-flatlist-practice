import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import ListItem from './components/ListItem';

const data = new Array(50).fill(0).map((_, index) => ({ id: index }))

export default function App() {

  const viewableItems = useSharedValue([])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 40 }}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          console.log(vItems);
          viewableItems.value = vItems
        }}
        renderItem={({ item }) => {
          return (
            <ListItem item={item} viewableItems={viewableItems} />
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
