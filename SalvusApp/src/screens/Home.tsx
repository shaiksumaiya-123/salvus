import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import PanicButton from '../components/PanicButton';
import GeofenceHandler from '../components/GeofenceHandler';
import { useTranslation } from 'react-i18next';
import { getCurrentPosition } from '../services/location';

const { width, height } = Dimensions.get('window');

export default function Home() {
  const { t } = useTranslation();
  const [region, setRegion] = useState<Region>({
    latitude: 26.1445,
    longitude: 91.7362,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  });
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(null);
  const [safetyScore, setSafetyScore] = useState(78);

  useEffect(() => {
    (async () => {
      try {
        const loc = await getCurrentPosition(10000);
        setRegion({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        });
        setMarker({ lat: loc.coords.latitude, lng: loc.coords.longitude });
      } catch (err) {
        console.warn('Could not fetch initial position', err);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <GeofenceHandler />

      <Text style={styles.header}>{t('home_title')}</Text>

      <MapView style={styles.map} region={region} showsUserLocation showsMyLocationButton>
        {marker && <Marker coordinate={{ latitude: marker.lat, longitude: marker.lng }} />}
      </MapView>

      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>{t('safety_score')}</Text>
        <Text style={styles.widgetScore}>{safetyScore}</Text>
      </View>

      <View style={styles.panicContainer}>
        <PanicButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 20, fontWeight: '700', padding: 16 },
  map: { width, height: height * 0.55 },
  widget: {
    margin: 16,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#f2f4f7',
    alignItems: 'center'
  },
  widgetTitle: { fontSize: 14, color: '#666' },
  widgetScore: { fontSize: 32, fontWeight: '800' },
  panicContainer: { alignItems: 'center', marginVertical: 20 }
});
