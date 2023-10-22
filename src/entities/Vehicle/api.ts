import { createGQLQuery } from '@/shared/api';

interface IIcons {
  default: string;
  medium: string;
  large: string;
}

interface IType {
  name: string;
  title: string;
}

interface INation {
  name: string;
  title: string;
}

export interface IVehicle {
  id: string;
  title: string;
  description: string;
  icons: Pick<IIcons, 'large'>;
  level: number;
  type: IType;
  nation: INation;
}

const GET_VEHICLES = /* GraphQL */ `
  query getVehicles {
    vehicles(lang: "ru") {
      id
      title
      description
      icons {
        large
      }
      level
      type {
        name
        title
      }
      nation {
        name
        title
      }
    }
  }
`;

export const getVehicles = createGQLQuery<void, IVehicle[]>({ query: GET_VEHICLES, dataKey: 'vehicles' });
