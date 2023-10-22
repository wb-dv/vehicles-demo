import { createStore, sample, createEvent } from 'effector';

import { appStarted } from '@/shared/config/init';
import { ISelectOption } from '@/shared/ui';

import { getVehicleTypes } from './api';

type TVehicleTypesIcons = Record<string, string>;

export const $vehicleTypesIcons = createStore<TVehicleTypesIcons | null>(null);

$vehicleTypesIcons.on(getVehicleTypes.finished.success, (_, { result: vehicleTypes }) =>
  vehicleTypes.reduce((vehicleMap, type) => {
    vehicleMap[type.name] = type.icons.default;
    return vehicleMap;
  }, {} as TVehicleTypesIcons)
);

export const $vehicleTypesOptions = createStore<ISelectOption[]>([]);

$vehicleTypesOptions.on(getVehicleTypes.finished.success, (_, { result: vehicleTypes }) =>
  vehicleTypes.map((type) => ({
    label: type.title,
    value: type.name,
  }))
);

export const selectType = createEvent<string | null>();
export const clearType = createEvent();

export const $selectedType = createStore<string | null>(null);

$selectedType.on(selectType, (_, type) => type);
$selectedType.on(clearType, () => null);

sample({
  clock: selectType,
  filter: (type) => !type,
  target: clearType,
});

sample({
  clock: appStarted,
  target: getVehicleTypes.start,
});

$selectedType.watch((type) => {
  console.log('$selectedType', type);
});

