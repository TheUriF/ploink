import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { FormField } from '@/components/FormField';
import { PrimaryButton } from '@/components/PrimaryButton';
import { submitForm } from '@/services/api';
import { colors } from '@/theme/colors';

export function ApplyScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [experience, setExperience] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await submitForm('/api/application', { firstName, lastName, email, phone, city, experience });
      Alert.alert('Application submitted', 'Thank you for applying to volunteer.');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCity('');
      setExperience('');
    } catch (error) {
      Alert.alert('Submission failed', error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <FormField label="First Name" value={firstName} onChangeText={setFirstName} />
      <FormField label="Last Name" value={lastName} onChangeText={setLastName} />
      <FormField label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <FormField label="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <FormField label="City" value={city} onChangeText={setCity} />
      <FormField label="Relevant Experience" value={experience} onChangeText={setExperience} multiline />
      <PrimaryButton label="Submit Application" onPress={onSubmit} loading={loading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
});
