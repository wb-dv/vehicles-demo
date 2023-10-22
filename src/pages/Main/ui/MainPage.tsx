import { VehiclesList } from '@/widgets/VehiclesList';

import { Container } from '@/shared/ui';

import styles from './MainPage.module.scss';

export function MainPage() {
  return (
    <main className={styles.MainPage}>
      <Container>
        <VehiclesList />
      </Container>
    </main>
  );
}
