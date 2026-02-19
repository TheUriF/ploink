import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AppNavigation } from '@/navigation';

export default function App() {
  return (
    <View style={styles.root}>
      <AppNavigation />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
