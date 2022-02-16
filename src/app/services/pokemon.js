import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pokeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://pokeapi.co/api/v2',
  }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export { pokeApi };
export const {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
} = pokeApi;
