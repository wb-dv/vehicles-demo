import { useUnit } from 'effector-react';

import { $filteredVehicles } from '@/features/Filtration';

import { $vehiclesLoading, VehicleCard } from '@/entities/Vehicle';
import { $vehicleTypesIcons } from '@/entities/VehicleType';
import { $nationsIcons } from '@/entities/Nations';

import { Loader } from '@/shared/ui';

import styles from './VehiclesList.module.scss';

export function VehiclesList() {
  const [vehicles, vehiclesLoading] = useUnit([$filteredVehicles, $vehiclesLoading]);
  const [nationsIcons, typesIcons] = useUnit([$nationsIcons, $vehicleTypesIcons]);

  return (
    <section className={styles.VehiclesList__container}>
      {vehiclesLoading || !nationsIcons || !typesIcons ? (
        <div className={styles.VehiclesList__placeholder}>
          <Loader />
        </div>
      ) : vehicles ? (
        <ul className={styles.VehiclesList}>
          {vehicles.length ? (
            vehicles.map((vehicle) => {
              return (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={{
                    ...vehicle,
                    nationIcon: `https:${nationsIcons[vehicle.nation.name]}`,
                    typeIcon: `https:${typesIcons[vehicle.type.name]}`,
                  }}
                />
              );
            })
          ) : (
            <div className={styles.VehiclesList__placeholder}>Нет кораблей, удовлетворяющих фильтрам</div>
          )}
        </ul>
      ) : (
        <div className={styles.VehiclesList__placeholder}>Не удалось зашрузить корабли</div>
      )}
    </section>
  );
}

