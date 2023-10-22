import { sample } from 'effector';

import { appStarted } from '@/shared/config/init';

import { getVehicles } from './api';

sample({
  clock: appStarted,
  target: getVehicles.start,
});

export const { $data: $vehicles, $pending: $vehiclesLoading, $succeeded: $vehiclesSuccess } = getVehicles;

