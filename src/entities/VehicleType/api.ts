import { createGQLQuery } from '@/shared/api';

export interface IVehicleType {
  name: string;
  title: string;
  icons: {
    default: string;
  };
}

const GET_VEHICLE_TYPES = /* GraphQL */ `
  query getVehicleTypes {
    vehicleTypes(lang: "ru") {
      name
      title
      icons {
        default
      }
    }
  }
`;

export const getVehicleTypes = createGQLQuery<void, IVehicleType[]>({ query: GET_VEHICLE_TYPES, dataKey: 'vehicleTypes' });
