import {
	Card,
	CardActionArea,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';

export default function Home() {
	return (
		<>
			<ShopLayout
				title={'Teslo-Shop - Accueil'}
				pageDescription={'Trouvez les meilleurs produits Teslo'}>
				<Typography variant='h1' component='h1'>
					Boutique
				</Typography>
				<Typography variant='h2' sx={{ mb: 1 }}>
					Tous les produits
				</Typography>

				<Grid container spacing={4}>
					{initialData.products.map((product) => (
						<Grid item xs={6} sm={4} key={product.slug}>
							<Card>
								<CardActionArea>
									<CardMedia
										component='img'
										image={`products/${product.images[0]}`}
										alt={product.title}
									/>
								</CardActionArea>
							</Card>
						</Grid>
					))}
				</Grid>
			</ShopLayout>
		</>
	);
}
