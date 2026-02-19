import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { FormField } from '@/components/FormField';
import { PrimaryButton } from '@/components/PrimaryButton';
import { submitForm } from '@/services/api';
import { colors } from '@/theme/colors';

export function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await submitForm('/api/contact', { name, email, subject, message });
      Alert.alert('Message sent', 'We will get back to you shortly.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      Alert.alert('Submission failed', error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <FormField label="Full Name" value={name} onChangeText={setName} />
      <FormField label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <FormField label="Subject" value={subject} onChangeText={setSubject} />
      <FormField label="Message" value={message} onChangeText={setMessage} multiline />
      <PrimaryButton label="Send Message" onPress={onSubmit} loading={loading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
});
