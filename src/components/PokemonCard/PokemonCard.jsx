import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from '../../app/services/pokemon';

const PokemonCard = ({ name }) => {
  const { data: pokemon, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) return 'loading...';

  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 p-8 lg:h-80 lg:aspect-none">
        <img
          key={pokemon.id}
          src={pokemon.sprites.front_default}
          alt="pokemon sprite"
          className="w-full h-full object-center object-cover lg:w-full lg:h-full cursor:pointer"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/pokemon/${name}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
