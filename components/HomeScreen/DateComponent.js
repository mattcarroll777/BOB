import { StyleSheet, Text, View } from 'react-native';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const d = new Date();
let monthName = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();

export const DateComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {monthName} {day}
      </Text>
      <Text style={styles.today}> Today </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    textAlign: 'left',
  },
  date: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  today: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
