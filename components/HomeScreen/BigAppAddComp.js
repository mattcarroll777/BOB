import { StyleSheet, Text, View } from 'react-native';
import { AppLine } from './AppLine';

export const BigAppAddComp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bigImg}></View>
      <AppLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  bigImg: {
    flex: 4,
    borderRadius: 20,
    backgroundColor: 'blue',
  },
});
