import Select, { ActionMeta, components } from 'react-select';
import clsx from 'clsx';

import './MySelect.scss';

export type TSelectComponents = typeof components;
type TPartialSelectComponents = Partial<TSelectComponents>;

export interface ISelectOption {
  label: string;
  value: string;
}

interface ISelectProps {
  options: ISelectOption[];
  placeholder?: string;
  customClasses?: string;
  value?: unknown;
  onChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
  components?: TPartialSelectComponents;
}

const getSelectValue = (val: unknown, options: ISelectOption[]) => (val ? options.find((option) => option.value === val) : '');

export function MySelect({ options, value, placeholder = '', customClasses = '', components = {}, onChange = () => {} }: ISelectProps) {
  return (
    <div className={clsx('MySelect__container', customClasses)}>
      <Select
        classNamePrefix="MySelect"
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        components={components}
        isClearable
        value={getSelectValue(value, options)}
      />
    </div>
  );
}

