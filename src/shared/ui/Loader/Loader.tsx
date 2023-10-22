import clsx from 'clsx';

import styles from './Loader.module.scss';

interface ILoaderProps {
  customClasses?: string;
}

export function Loader({ customClasses = '' }: ILoaderProps) {
  return <div className={clsx(styles.Loader, customClasses)}></div>;
}

