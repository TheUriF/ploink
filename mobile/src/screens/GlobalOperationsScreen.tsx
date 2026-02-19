import { ScrollView, StyleSheet, Text } from 'react-native';
import { SectionCard } from '@/components/SectionCard';
import { operationsRegions } from '@/data/content';
import { colors } from '@/theme/colors';

export function GlobalOperationsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionCard title="Regional Presence">
        {operationsRegions.map((region) => (
          <Text key={region} style={styles.item}>• {region}</Text>
        ))}
      </SectionCard>
      <SectionCard title="Response Model">
        <Text style={styles.item}>1. Incident intake and triage.</Text>
        <Text style={styles.item}>2. Dispatch and volunteer assignment.</Text>
        <Text style={styles.item}>3. Family support and logistics.</Text>
        <Text style={styles.item}>4. Post-incident follow-up and documentation.</Text>
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
  item: { color: colors.text, fontSize: 15, marginBottom: 4 },
});
