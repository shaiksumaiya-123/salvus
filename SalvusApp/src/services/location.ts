import BackgroundGeolocation, {
  Location,
  Geofence as BGGeofence,
  State
} from '@transistorsoft/react-native-background-geolocation';
import { DEFAULT_GEOFENCE_RADIUS } from '../utils/constants';
import { Platform, Alert } from 'react-native';

/**
 * Setup BackgroundGeolocation. This is a minimal setup demonstrating configuration,
 * start/stop, and adding a geofence. Consult plugin docs for production usage.
 */

export function configureBackgroundGeolocation(onLocation?: (loc: Location) => void) {
  BackgroundGeolocation.onLocation(
    (location) => {
      console.log('[BG] location', location);
      onLocation && onLocation(location);
    },
    (err) => {
      console.warn('[BG] location error', err);
    }
  );

  BackgroundGeolocation.onGeofence((event) => {
    console.log('[BG] geofence event:', event);
    Alert.alert('Geofence', `Entered/Exited geofence: ${event.identifier}`);
  });

  BackgroundGeolocation.ready(
    {
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 50,
      stopOnTerminate: false,
      startOnBoot: true,
      debug: false,
      logLevel: BackgroundGeolocation.LOG_LEVEL_OFF,
      preventSuspend: true,
      heartbeatInterval: 60,
      geofenceInitialTriggerEntry: true
    },
    (state: State) => {
      console.log('[BG] ready, enabled:', state.enabled);
      if (!state.enabled) {
        BackgroundGeolocation.start()
          .then(() => console.log('[BG] started'))
          .catch((e) => console.warn('[BG] start failed', e));
      }
    }
  );
}

export async function addGeofence(id: string, latitude: number, longitude: number, radius = DEFAULT_GEOFENCE_RADIUS) {
  const geofence: BGGeofence = {
    identifier: id,
    latitude,
    longitude,
    radius,
    notifyOnEntry: true,
    notifyOnExit: true,
    notifyOnDwell: false
  };
  try {
    await BackgroundGeolocation.addGeofence(geofence);
    console.log('[BG] geofence added', id);
  } catch (err) {
    console.warn('[BG] addGeofence error', err);
  }
}

export async function getCurrentPosition(timeout = 10000) {
  try {
    const location = await BackgroundGeolocation.getCurrentPosition({ samples: 1, timeout });
    return location;
  } catch (err) {
    console.warn('[BG] getCurrentPosition error', err);
    throw err;
  }
}

export async function stopBackground() {
  try {
    await BackgroundGeolocation.stop();
  } catch (err) {
    console.warn('[BG] stop error', err);
  }
}

