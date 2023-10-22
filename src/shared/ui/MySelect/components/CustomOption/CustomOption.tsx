import { components } from 'react-select';
import clsx from 'clsx';

import { ISelectOption, TSelectComponents } from '../../MySelect';

import styles from './CustomOption.module.scss';

type TLibOptionProps = TSelectComponents['Option'];

type TCustomElementProps = {
  currValue: string;
};

type CustomElement = (props: TCustomElementProps) => JSX.Element | null;

export function createCustomOption(CustomElement: CustomElement) {
  const CustomOption: TLibOptionProps = ({ children, className = '', ...props }) => {
    const currLabel = props.label;

    const options = props.options as unknown as ISelectOption[];

    const currValue = options.find((option) => (option as ISelectOption).label === currLabel)!.value;

    return (
      <components.Option
        className={clsx(className, styles.CustomOption)}
        {...props}
      >
        <CustomElement currValue={currValue} />
        {children}
      </components.Option>
    );
  };

  return CustomOption;
}

