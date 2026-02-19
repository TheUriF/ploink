import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SectionCard } from '@/components/SectionCard';
import { newsItems } from '@/data/content';
import { colors } from '@/theme/colors';

export function NewsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {newsItems.map((item) => (
        <SectionCard key={item.title} title={item.title}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.summary}>{item.summary}</Text>
        </SectionCard>
      ))}
      <View style={styles.footerSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
  date: { color: colors.secondary, fontWeight: '600' },
  summary: { color: colors.text, lineHeight: 20 },
  footerSpace: { height: 20 },
});
