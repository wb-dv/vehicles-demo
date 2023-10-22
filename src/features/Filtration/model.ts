import { combine, sample, createEvent } from 'effector';

import { $vehicles } from '@/entities/Vehicle';

import { $selectedLevel, clearLevel } from '@/entities/VehicleLevel';
import { $selectedNation, clearNation } from '@/entities/Nations';
import { $selectedType, clearType } from '@/entities/VehicleType';

const $filter = combine({
  level: $selectedLevel,
  nation: $selectedNation,
  type: $selectedType,
});

export const $isFiltered = $filter.map((filter) => Boolean(filter.level || filter.nation || filter.type));

export const $filteredVehicles = $vehicles.map((el) => el);

sample({
  clock: $filter,
  source: $vehicles,
  fn: (vehicles, filter) => {
    if (!vehicles) return [];
    if (filter.level) {
      vehicles = vehicles.filter((vehicle) => vehicle.level === Number(filter.level));
    }
    if (filter.nation) {
      vehicles = vehicles.filter((vehicle) => vehicle.nation.name === filter.nation);
    }
    if (filter.type) {
      vehicles = vehicles.filter((vehicle) => vehicle.type.name === filter.type);
    }
    return vehicles;
  },
  target: $filteredVehicles,
});

export const clearAll = createEvent();

sample({
  clock: clearAll,
  target: [clearNation, clearLevel, clearType],
});

