import { components } from 'react-select';

import { TSelectComponents } from '../../MySelect';

type TLibControlProps = TSelectComponents['Control'];

type TCustomElement = () => JSX.Element | null;

export function createCustomControl(CustomElement: TCustomElement) {
  const CustomControl: TLibControlProps = ({ children, ...props }) => {
    return (
      <components.Control {...props}>
        <CustomElement />
        {children}
      </components.Control>
    );
  };

  return CustomControl;
}

