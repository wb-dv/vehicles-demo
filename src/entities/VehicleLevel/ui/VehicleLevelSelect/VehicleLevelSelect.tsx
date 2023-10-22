import { useStore } from 'effector-react';
import clsx from 'clsx';

import { ISelectOption, MySelect } from '@/shared/ui';

import { $selectedLevel, selectLevel, vehicleLevelOptions } from '../../model';

import styles from './VehicleLevelSelect.module.scss';

interface IVehicleLevelSelectProps {
  customClasses?: string;
}

export function VehicleLevelSelect({ customClasses = '' }: IVehicleLevelSelectProps) {
  const currLevel = useStore($selectedLevel);

  return (
    <div className={clsx(styles.VehicleLevelSelect, customClasses)}>
      <MySelect
        options={vehicleLevelOptions}
        onChange={(option) => selectLevel(option ? (option as ISelectOption).value : null)}
        placeholder="Выберите уровень"
        value={currLevel}
      />
    </div>
  );
}

