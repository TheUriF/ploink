import { ScrollView, StyleSheet, Text } from 'react-native';
import { SectionCard } from '@/components/SectionCard';
import { colors } from '@/theme/colors';

export function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionCard title="Who We Are">
        <Text style={styles.text}>
          Askunai Ha'ir is a global volunteer network coordinating emergency response, welfare support, and logistics for communities in need.
        </Text>
      </SectionCard>
      <SectionCard title="How We Operate">
        <Text style={styles.text}>• 24/7 dispatch coordination with trained local and regional teams.</Text>
        <Text style={styles.text}>• Volunteer specialists for medical, transport, and family support.</Text>
        <Text style={styles.text}>• Unified communication channels for rapid escalation and follow-through.</Text>
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
  text: { color: colors.text, fontSize: 15, lineHeight: 22 },
});
