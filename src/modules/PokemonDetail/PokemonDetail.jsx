import { useLayoutEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../app/services/pokemon';

const PokemonDetail = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading, isSuccess } = useGetPokemonByNameQuery(name);
  const [, setTitle] = useOutletContext();

  useLayoutEffect(() => {
    if (isSuccess) {
      setTitle(pokemon.name);
    }
  }, [isSuccess, pokemon?.name, setTitle]);
  
  if (isLoading) return 'loading..';

  return (
    <div>
      {pokemon.name}
    </div>
  )
}

export default PokemonDetail
