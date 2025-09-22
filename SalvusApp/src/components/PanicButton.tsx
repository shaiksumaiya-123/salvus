import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import EncryptedStorage from 'react-native-encrypted-storage';
import { getCurrentPosition } from '../services/location';
import { sendSOS } from '../services/api';
import { STORAGE_KEYS } from '../utils/constants';

type PanicButtonProps = {
  style?: any;
};

export default function PanicButton({ style }: PanicButtonProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  async function handlePanic() {
    setLoading(true);
    try {
      const contact = await EncryptedStorage.getItem(STORAGE_KEYS.EMERGENCY_CONTACT);
      const loc = await getCurrentPosition(15000); // 15s timeout
      const payload = {
        lat: loc.coords.latitude,
        lng: loc.coords.longitude,
        contact: contact ?? undefined
      };

      await sendSOS(payload);
      Alert.alert(t('sos_sent'), `${t('sos_sent')}`);
    } catch (err) {
      console.warn('SOS error', err);
      Alert.alert('Error', 'Failed to send SOS. Please check connectivity and permissions.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={handlePanic} disabled={loading}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text style={styles.buttonText}>{t('panic')}</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  button: {
    backgroundColor: '#E53935',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18
  }
});
