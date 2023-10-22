import { createStore, sample, createEvent } from 'effector';

import { appStarted } from '@/shared/config/init';
import { ISelectOption } from '@/shared/ui';

import { getNations } from './api';

type TNationsIcons = Record<string, string>;

export const $nationsIcons = createStore<TNationsIcons | null>(null);

$nationsIcons.on(getNations.finished.success, (_, { result: nations }) =>
  nations.reduce((natiosnsMap, nation) => {
    natiosnsMap[nation.name] = nation.icons.tiny;
    return natiosnsMap;
  }, {} as TNationsIcons)
);

export const $nationsOptions = createStore<ISelectOption[]>([]);

$nationsOptions.on(getNations.finished.success, (_, { result: nations }) =>
  nations.map((nation) => ({
    label: nation.title,
    value: nation.name,
  }))
);

export const selectNation = createEvent<string | null>();
export const clearNation = createEvent();

export const $selectedNation = createStore<string | null>(null);

$selectedNation.on(selectNation, (_, nation) => nation);
$selectedNation.on(clearNation, () => null);

sample({
  clock: selectNation,
  filter: (nation) => !nation,
  target: clearNation,
});

sample({
  clock: appStarted,
  target: getNations.start,
});

