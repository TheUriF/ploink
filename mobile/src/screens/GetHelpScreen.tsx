import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { FormField } from '@/components/FormField';
import { PrimaryButton } from '@/components/PrimaryButton';
import { submitForm } from '@/services/api';
import { colors } from '@/theme/colors';

export function GetHelpScreen() {
  const [name, setName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('High');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await submitForm('/api/gethelp', { name, contactEmail, phone, urgencyLevel, location, details });
      Alert.alert('Request received', 'Our dispatch team will reach out shortly.');
      setName('');
      setContactEmail('');
      setPhone('');
      setLocation('');
      setDetails('');
    } catch (error) {
      Alert.alert('Submission failed', error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <FormField label="Name" value={name} onChangeText={setName} />
      <FormField label="Contact Email" value={contactEmail} onChangeText={setContactEmail} keyboardType="email-address" />
      <FormField label="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <FormField label="Urgency Level" value={urgencyLevel} onChangeText={setUrgencyLevel} />
      <FormField label="Location" value={location} onChangeText={setLocation} />
      <FormField label="Details" value={details} onChangeText={setDetails} multiline />
      <PrimaryButton label="Request Help" onPress={onSubmit} loading={loading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
});
