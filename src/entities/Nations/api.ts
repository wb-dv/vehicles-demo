import { createGQLQuery } from '@/shared/api';

export interface INation {
  name: string;
  title: string;
  icons: {
    tiny: string;
  };
}

const GET_NATIONS = /* GraphQL */ `
  query getNations {
    nations(lang: "ru") {
      name
      title
      icons {
        tiny
      }
    }
  }
`;

export const getNations = createGQLQuery<void, INation[]>({ query: GET_NATIONS, dataKey: 'nations' });
