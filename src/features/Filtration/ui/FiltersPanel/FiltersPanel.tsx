import clsx from 'clsx';

import { VehicleLevelSelect } from '@/entities/VehicleLevel';
import { VehicleTypeSelect } from '@/entities/VehicleType';
import { NationSelect } from '@/entities/Nations';

import { clearAll } from '../..';

import styles from './FiltersPanel.module.scss';
import { $isFiltered } from '../../model';
import { useStore } from 'effector-react';

interface IFiltersPanelProps {
  customClasses?: string;
}

export function FiltersPanel({ customClasses = '' }: IFiltersPanelProps) {
  const isFiltered = useStore($isFiltered);

  return (
    <section className={clsx(styles.FiltersPanel, customClasses)}>
      <VehicleLevelSelect />
      <VehicleTypeSelect />
      <NationSelect />
      {isFiltered && (
        <button
          className={styles.FiltersPanel__reset}
          type="button"
          onClick={() => clearAll()}
        >
          Сбросить
        </button>
      )}
    </section>
  );
}

