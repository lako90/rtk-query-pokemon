import { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useGetAllPokemonQuery } from "../../app/services/pokemon"
import PokemonCard from "../../components/PokemonCard";

const PokemonList = () => {
  const { data: pokemons, isLoading } = useGetAllPokemonQuery();

  const [, setTitle] = useOutletContext();

  useLayoutEffect(() => {
    setTitle('list');
  }, [setTitle]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto p-8 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {isLoading
            ? 'loading..'
            : pokemons.results.map(({ name }) => (
              <PokemonCard
                key={name}
                name={name}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PokemonList
