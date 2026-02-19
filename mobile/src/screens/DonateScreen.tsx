import { Alert, Linking, ScrollView, StyleSheet, Text } from 'react-native';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SectionCard } from '@/components/SectionCard';
import { colors } from '@/theme/colors';

const DONATION_URL = 'https://askunaihair.org/donate';

export function DonateScreen() {
  const openDonationUrl = async () => {
    const canOpen = await Linking.canOpenURL(DONATION_URL);
    if (!canOpen) {
      Alert.alert('Unable to open donation page', DONATION_URL);
      return;
    }
    await Linking.openURL(DONATION_URL);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionCard title="Support Our Mission">
        <Text style={styles.text}>
          Donations help us maintain dispatch operations, volunteer support, and emergency response logistics.
        </Text>
      </SectionCard>
      <PrimaryButton label="Donate Securely" onPress={openDonationUrl} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16, gap: 12 },
  text: { color: colors.text, fontSize: 15, lineHeight: 22 },
});
