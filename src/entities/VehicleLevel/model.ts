import { createStore, createEvent, sample } from 'effector';

import { ISelectOption } from '@/shared/ui';

export const vehicleLevelOptions: ISelectOption[] = Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1}`, value: `${i + 1}` }));

export const selectLevel = createEvent<string | null>();
export const clearLevel = createEvent();

export const $selectedLevel = createStore<string | null>(null);

$selectedLevel.on(selectLevel, (_, level) => level);
$selectedLevel.on(clearLevel, () => null);

sample({
  clock: selectLevel,
  filter: (level) => !level,
  target: clearLevel,
});

