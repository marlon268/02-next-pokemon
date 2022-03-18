import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritesPokemons } from '../../components/pokemon';

const FavoritesPage: NextPage = () => {
	const [favoritePokemos, setFavoritePokemos] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemos(localFavorites.pokemons());
	}, []);

	return (
		<Layout title="Pokémons - Favoritos">
			{favoritePokemos.length === 0 ? (
				<NoFavorites />
			) : (
				<FavoritesPokemons pokemons={favoritePokemos} />
			)}
		</Layout>
	);
};

export default FavoritesPage;
