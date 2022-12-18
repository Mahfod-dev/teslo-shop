import React from 'react';
import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts';
import { Box, Link, Typography } from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';

const EmptyCard = () => {
	return (
		<ShopLayout
			title={'Panier vide'}
			pageDescription={"Il n'y a pas d'articles dans le panier"}>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				height='calc(100vh -200px)'
				sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
				<RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
				<Box display='flex' flexDirection='column' alignItems='center'>
					<Typography variant='h2' marginLeft={2}>
						Votre panier est vide
					</Typography>
					<NextLink href='/' passHref legacyBehavior>
						<Link typography='h4'>Revenir à la maison</Link>
					</NextLink>
				</Box>

				{/* <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
					404 |
				</Typography>
				<Typography marginLeft={2}>Nous ne trouvons aucune page ici 🥹</Typography> */}
			</Box>
		</ShopLayout>
	);
};

export default EmptyCard;
