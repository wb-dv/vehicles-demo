import clsx from 'clsx';
import { IVehicle } from '../../api';

import styles from './VehicleCard.module.scss';

interface IVehicleCardProps {
  vehicle: {
    nationIcon: string;
    typeIcon: string;
  } & IVehicle;
  customClasses?: string;
}

export function VehicleCard({ vehicle, customClasses = '' }: IVehicleCardProps) {
  const { title, description, icons, level, type, nation, nationIcon, typeIcon } = vehicle;

  return (
    <div className={clsx(styles.VehicleCard, customClasses)}>
      <div className={styles.VehicleCard__content}>
        {!!title.trim() && <h3 className={styles.VehicleCard__title}>{title}</h3>}
        <ul className={styles.VehicleCard__characteristics}>
          <li className={styles.VehicleCard__characteristic}>Уровень: {level}</li>
          <li className={styles.VehicleCard__characteristic}>
            <span>Класс: {type.title}</span>
            <img
              className={styles.VehicleCard__characteristicIcon}
              src={typeIcon}
              alt={type.title}
            />
          </li>
          <li className={styles.VehicleCard__characteristic}>
            <span>Нация: {nation.title}</span>
            <img
              className={styles.VehicleCard__characteristicIcon}
              src={nationIcon}
              alt={nation.title}
            />
          </li>
        </ul>
        {!!description.trim() && <p className={styles.VehicleCard__description}>{description}</p>}
      </div>
      <img
        className={styles.VehicleCard__img}
        src={`https:${icons.large}`}
        alt={title}
      />
    </div>
  );
}

