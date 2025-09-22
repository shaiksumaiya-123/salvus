import React, { useEffect } from 'react';
import { View } from 'react-native';
import { configureBackgroundGeolocation, addGeofence } from '../services/location';

/**
 * Minimal geofence handler component: configures background geolocation on mount.
 * You can add geofences by calling addGeofence(...) from elsewhere (e.g., when planning trip).
 */
export default function GeofenceHandler() {
  useEffect(() => {
    configureBackgroundGeolocation();
  }, []);

  // Example: to add a sample geofence for demonstration:
  useEffect(() => {
    // Example coordinates (Guwahati, Assam)
    addGeofence('guwahati_center', 26.1445, 91.7362, 500);
  }, []);

  return <View />;
}
