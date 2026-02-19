import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { SectionCard } from '@/components/SectionCard';
import { missionPoints, quickStats } from '@/data/content';
import type { RootStackParamList } from '@/navigation';
import { colors } from '@/theme/colors';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const links: Array<{ label: string; screen: keyof RootStackParamList }> = [
  { label: 'About', screen: 'About' },
  { label: 'What We Do', screen: 'WhatWeDo' },
  { label: 'Get Help', screen: 'GetHelp' },
  { label: 'Apply to Volunteer', screen: 'Apply' },
  { label: 'Global Operations', screen: 'GlobalOperations' },
  { label: 'Donate', screen: 'Donate' },
  { label: 'News', screen: 'News' },
  { label: 'Contact', screen: 'Contact' },
];

export function HomeScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Coordinating Help When It Matters Most</Text>
      <Text style={styles.subheading}>
        Native Android experience for emergency coordination, community support, and volunteer mobilization.
      </Text>

      <SectionCard title="Quick Actions">
        <View style={styles.actions}>
          {links.map((link) => (
            <Pressable key={link.label} style={styles.actionBtn} onPress={() => navigation.navigate(link.screen)}>
              <Text style={styles.actionText}>{link.label}</Text>
            </Pressable>
          ))}
        </View>
      </SectionCard>

      <SectionCard title="Impact Snapshot">
        {quickStats.map((item) => (
          <View key={item.label} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </SectionCard>

      <SectionCard title="Our Mission">
        {missionPoints.map((point) => (
          <Text key={point} style={styles.bullet}>• {point}</Text>
        ))}
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
  heading: { fontSize: 28, fontWeight: '800', color: colors.text, marginBottom: 8 },
  subheading: { fontSize: 16, color: colors.mutedText, marginBottom: 16 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  actionBtn: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  actionText: { color: '#FFF', fontWeight: '600' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { color: colors.mutedText, fontSize: 15 },
  value: { color: colors.text, fontWeight: '700' },
  bullet: { color: colors.text, fontSize: 15, lineHeight: 22 },
});
