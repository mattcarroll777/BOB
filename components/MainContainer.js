import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DateComponent } from './HomeScreen/DateComponent';
import { BigAppAddComp } from './HomeScreen/BigAppAddComp';
import { AppList } from './HomeScreen/AppList';

export const MainContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <DateComponent />
      </View>
      <View style={styles.boxTwo}>
        <BigAppAddComp />
      </View>
      <View style={styles.boxThree}>
        <AppList />
      </View>
      <View style={styles.boxFour}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 15,
  },
  boxOne: {
    height: 70,
    width: '100%',
  },
  boxTwo: {
    height: 500,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 30,
  },
  boxThree: {
    height: 400,
    width: '100%',
    backgroundColor: 'yellow',
    borderRadius: 30,
  },
  boxFour: {
    backgroundColor: 'pink',
    height: 50,
    width: 70,
  },
});
