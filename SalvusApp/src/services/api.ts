import axios from 'axios';
import { Platform } from 'react-native';
import * as dotenv from 'dotenv';
dotenv.config();

const API_BASE = process.env.API_BASE_URL ?? 'https://api.example.com';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000
});

export async function sendSOS(payload: { lat: number; lng: number; contact?: string; token?: string }) {
  const endpoint = (process.env.SOS_ENDPOINT ?? '/sos');
  try {
    const resp = await api.post(endpoint, payload);
    return resp.data;
  } catch (err) {
    throw err;
  }
}

export default api;
