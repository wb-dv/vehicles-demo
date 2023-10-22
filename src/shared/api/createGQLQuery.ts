import { createQuery } from '@farfetched/core';

const requestURL = 'https://vortex.korabli.su/api/graphql/glossary/';

interface ICreateGQLQueryConfig {
  query: string;
  dataKey: string;
}

export const createGQLQuery = <VarsType, ResponseType>({ query, dataKey }: ICreateGQLQueryConfig) => {
  const GQLQuery = createQuery({
    handler: async (variabales: VarsType): Promise<ResponseType> => {
      const response = await fetch(requestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variabales,
        }),
      });
      const data = await response.json();
      return data.data[dataKey];
    },
  });

  return GQLQuery;
};
