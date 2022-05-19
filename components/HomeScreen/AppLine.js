import { StyleSheet, Text, View } from 'react-native';

export const AppLine = () => {
  return (
    <View style={styles.foot}>
      <View style={styles.logo}></View>
      <View style={styles.description}></View>
      <View style={styles.downloadButton}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  foot: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 20,
    flexDirection: 'row',
  },
  logo: {
    flex: 2,
    backgroundColor: 'pink',
    borderRadius: 15,
  },
  description: {
    flex: 5,
    backgroundColor: 'yellow',
    borderRadius: 15,
  },
  downloadButton: {
    flex: 2,
    backgroundColor: 'orange',
    borderRadius: 15,
  },
});
