import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Khatia ❤️{'\n'}I love You
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // მუქი ფონდი
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f43f5e', // ვარდისფერი
    textAlign: 'center',
  },
});
