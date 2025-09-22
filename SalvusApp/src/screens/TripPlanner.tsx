import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { addGeofence } from '../services/location';

export default function TripPlanner() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [list, setList] = useState<Array<{ id: string; name: string }>>([]);

  async function handleAdd() {
    if (!name || !lat || !lng) return;
    const id = `${name}-${Date.now()}`;
    await addGeofence(id, parseFloat(lat), parseFloat(lng));
    setList((l) => [{ id, name }, ...l]);
    setName('');
    setLat('');
    setLng('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('trip_planner')}</Text>
      <TextInput placeholder="Place name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Latitude" style={styles.input} value={lat} onChangeText={setLat} keyboardType="numeric" />
      <TextInput placeholder="Longitude" style={styles.input} value={lng} onChangeText={setLng} keyboardType="numeric" />
      <Button title="Add Geofence" onPress={handleAdd} />

      <FlatList
        style={{ marginTop: 20 }}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        ListEmptyComponent={<Text style={{ color: '#666' }}>No planned geofences</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#eee' }
});
