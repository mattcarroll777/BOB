import { StyleSheet, Text, View } from 'react-native';
import { AppLine } from './AppLine';

export const AppList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}> Categories</Text>
      <Text style={styles.categoryDescription}>
        Quick word about the Categories
      </Text>
      <AppLine />
      <AppLine />
      <AppLine />
      <AppLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 30,
    padding: 5,
  },
  category: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  categoryDescription: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
