import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import EncryptedStorage from 'react-native-encrypted-storage';
import { STORAGE_KEYS } from '../utils/constants';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../AppNavigator';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

type Props = {
  navigation: OnboardingScreenNavigationProp;
};

export default function Onboarding({ navigation }: Props) {
  const { t } = useTranslation();
  const [contact, setContact] = useState('');

  async function requestPermissions() {
    try {
      const permission =
        Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      const res = await request(permission);
      console.log('permission', res);
      return res === RESULTS.GRANTED || res === RESULTS.LIMITED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }

  async function handleSave() {
    const granted = await requestPermissions();
    if (!granted) {
      Alert.alert('Permission required', 'Location permission is required for Salvus to work.');
      return;
    }

    await EncryptedStorage.setItem(STORAGE_KEYS.CONSENT, JSON.stringify({ consented: true, ts: Date.now() }));
    await EncryptedStorage.setItem(STORAGE_KEYS.EMERGENCY_CONTACT, contact);

    navigation.replace('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.subtitle}>{t('consent_title')}</Text>
      <Text style={styles.description}>{t('consent_description')}</Text>

      <Text style={styles.label}>{t('enter_emergency_contact')}</Text>
      <TextInput
        style={styles.input}
        placeholder="+91 9XXXXXXXXX"
        keyboardType="phone-pad"
        value={contact}
        onChangeText={setContact}
      />

      <View style={{ marginTop: 20 }}>
        <Button title={t('save_and_continue')} onPress={handleSave} />
      </View>

      <View style={{ marginTop: 36 }}>
        <Text style={{ fontWeight: '600' }}>KYC (placeholder)</Text>
        <Text style={{ color: '#666', marginTop: 8 }}>
          KYC flow would be implemented here — capture passport/Aadhaar and store hashed ID references.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 18, fontWeight: '600', marginBottom: 6 },
  description: { fontSize: 14, color: '#444', marginBottom: 16 },
  label: { fontSize: 14, marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, marginTop: 8 }
});
