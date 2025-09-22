import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { STORAGE_KEYS } from '../utils/constants';
import { useTranslation } from 'react-i18next';

/**
 * Simple settings page: view/remove consent and emergency contact.
 */
export default function Settings() {
  const { t, i18n } = useTranslation();
  const [consent, setConsent] = useState<string | null>(null);
  const [contact, setContact] = useState<string | null>(null);

  async function load() {
    const c = await EncryptedStorage.getItem(STORAGE_KEYS.CONSENT);
    const e = await EncryptedStorage.getItem(STORAGE_KEYS.EMERGENCY_CONTACT);
    setConsent(c);
    setContact(e);
  }

  useEffect(() => {
    load();
  }, []);

  async function clearAll() {
    await EncryptedStorage.removeItem(STORAGE_KEYS.CONSENT);
    await EncryptedStorage.removeItem(STORAGE_KEYS.EMERGENCY_CONTACT);
    load();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('settings')}</Text>

      <View style={{ marginVertical: 12 }}>
        <Text>Consent: {consent ? 'Given' : 'Not given'}</Text>
        <Text>Emergency contact: {contact ?? '-'}</Text>
      </View>

      <Button title="Clear Consent & Contact" onPress={clearAll} />
      <View style={{ height: 16 }} />
      <Button
        title="Switch to Spanish"
        onPress={() => {
          i18n.changeLanguage('es');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 }
});
