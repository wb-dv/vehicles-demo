import { useStore, useUnit } from 'effector-react';
import clsx from 'clsx';

import { ISelectOption, MySelect, createCustomControl, createCustomOption } from '@/shared/ui';

import { $nationsIcons, $nationsOptions, $selectedNation, selectNation } from '../../model';

import styles from './NationSelect.module.scss';

const NationSelectControl = createCustomControl(() => {
  const [nation, icons] = useUnit([$selectedNation, $nationsIcons]);

  if (!icons || !nation) return null;

  return (
    <img
      src={`https:${icons[nation]}`}
      className={styles.NationSelect__icon}
    />
  );
});

const NationSelectOption = createCustomOption(({ currValue }) => {
  const icons = useStore($nationsIcons);

  if (!icons) return null;

  return (
    <img
      src={`https:${icons[currValue]}`}
      className={styles.NationSelect__icon_inOption}
    />
  );
});

interface INationSelectProps {
  customClasses?: string;
}

export function NationSelect({ customClasses = '' }: INationSelectProps) {
  const [currNation, nations] = useUnit([$selectedNation, $nationsOptions]);

  return (
    <div className={clsx(styles.NationSelect, customClasses)}>
      <MySelect
        options={nations}
        value={currNation}
        components={{ Control: NationSelectControl, Option: NationSelectOption }}
        onChange={(option) => selectNation(option ? (option as ISelectOption).value : null)}
        placeholder="Выберите нацию"
      />
    </div>
  );
}

