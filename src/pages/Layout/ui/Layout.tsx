import clsx from 'clsx';

import { FiltersHeader } from '@/widgets/FiltersHeader';

import styles from './Layout.module.scss';

interface ILayoutProps {
  children: JSX.Element;
  customClasses?: string;
}

export function Layout({ children, customClasses = '' }: ILayoutProps) {
  return (
    <div className={clsx(styles.Layout, customClasses)}>
      <FiltersHeader />
      {children}
    </div>
  );
}

