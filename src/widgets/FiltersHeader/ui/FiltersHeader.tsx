import { FiltersPanel } from '@/features/Filtration';

import { Container } from '@/shared/ui';

import styles from './FiltersHeader.module.scss';

export function FiltersHeader() {
  return (
    <header className={styles.FiltersHeader}>
      <Container customClasses={styles.FiltersHeader__container}>
        <FiltersPanel customClasses={styles.FiltersHeader__filters} />
      </Container>
    </header>
  );
}

