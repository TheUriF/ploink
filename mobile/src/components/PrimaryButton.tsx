import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '@/theme/colors';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  loading?: boolean;
};

export function PrimaryButton({ label, onPress, loading }: PrimaryButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
