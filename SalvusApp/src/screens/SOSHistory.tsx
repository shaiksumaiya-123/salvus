import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

/**
 * Minimal local SOS history (in-memory) example. You can extend to persist (AsyncStorage or server).
 */
export default function SOSHistory() {
  const { t } = useTranslation();
  const [history, setHistory] = useState<
    Array<{ id: string; lat: number; lng: number; ts: number }>
  >([
    // sample
    { id: '1', lat: 26.1445, lng: 91.7362, ts: Date.now() - 3600 * 1000 }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('history')}</Text>

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>Lat: {item.lat.toFixed(4)}, Lng: {item.lng.toFixed(4)}</Text>
            <Text style={styles.time}>{new Date(item.ts).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  row: { padding: 12, borderBottomColor: '#eee', borderBottomWidth: 1 },
  time: { color: '#666', marginTop: 4 }
});
