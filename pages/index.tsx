import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';
import { ProductList } from '../components/products';
import { IProduct } from '../interfaces';

export default function Home() {

	console.log(process.env.NEXT_PUBLIC_CLIENT_KEY);
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

				<ProductList products={initialData.products as IProduct[]} />
			</ShopLayout>
		</>
	);
}
