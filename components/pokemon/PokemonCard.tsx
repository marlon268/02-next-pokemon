import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { SmallPokemon } from '../../interfaces';

interface Props {
	pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
	const { id, name, img } = pokemon;

	const router = useRouter();

	const onClick = () => {
		router.push(`/name/${pokemon.name}`);
	};

	return (
		<Grid xs={6} sm={4} md={3} xl={2} key={id}>
			<Card hoverable clickable onClick={onClick}>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} width="100%" height={200} />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{name}</Text>
						<Text>#{id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
