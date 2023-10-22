import { useStore, useUnit } from 'effector-react';
import clsx from 'clsx';

import { ISelectOption, MySelect, createCustomControl, createCustomOption } from '@/shared/ui';

import { $selectedType, $vehicleTypesIcons, $vehicleTypesOptions, selectType } from '../../model';

import styles from './VehicleTypeSelect.module.scss';

const VehicleTypeSelectControl = createCustomControl(() => {
  const [currType, icons] = useUnit([$selectedType, $vehicleTypesIcons]);

  if (!icons || !currType) return null;

  return (
    <img
      src={`https:${icons[currType]}`}
      className={styles.VehicleTypeSelect__icon}
      alt="Иконка класса корабля"
    />
  );
});

const VehicleTypeSelectOption = createCustomOption(({ currValue }) => {
  const icons = useStore($vehicleTypesIcons);

  if (!icons) return null;

  return (
    <img
      src={`https:${icons[currValue]}`}
      className={styles.VehicleTypeSelect__icon_inOption}
      alt="Иконка класса корабля"
    />
  );
});

interface IVehicleTypeSelectProps {
  customClasses?: string;
}

export function VehicleTypeSelect({ customClasses = '' }: IVehicleTypeSelectProps) {
  const [currType, types] = useUnit([$selectedType, $vehicleTypesOptions]);

  return (
    <div className={clsx(styles.NationSelect, customClasses)}>
      <MySelect
        options={types}
        components={{ Control: VehicleTypeSelectControl, Option: VehicleTypeSelectOption }}
        onChange={(option) => selectType(option ? (option as ISelectOption).value : null)}
        placeholder="Выберите класс"
        value={currType}
      />
    </div>
  );
}

