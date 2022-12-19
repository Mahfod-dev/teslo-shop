import NextLink from 'next/link';
import {
	Typography,
	Grid,
	CardContent,
	Card,
	Divider,
	Box,
	Button,
	Link,
} from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { CartList, OrderSummary } from '../../components/cart';

const SummaryPage = () => {
	return (
		<ShopLayout
			title='Resumer de votre commande'
			pageDescription='Resumer de votre commande'>
			<Typography variant='h1' component='h1'>
				Résumé de votre Commande
			</Typography>

			<Grid container sx={{ mt: 2 }}>
				<Grid item xs={12} sm={7}>
					<CartList />
				</Grid>
				<Grid item xs={12} sm={5}>
					<Card className='summary-card'>
						<CardContent>
							<Typography variant='h2'>Résumé (3 articles)</Typography>
							<Divider sx={{ my: 1 }} />

							<Box display='flex' justifyContent='space-between'>
								<Typography variant='subtitle1'>
									Adresse de livraison
								</Typography>
								<NextLink href='/checkout/address' passHref legacyBehavior>
									<Link underline='always'>Commander</Link>
								</NextLink>
							</Box>

							<Typography>Mahfod Addi</Typography>
							<Typography>5 rue de la genievre</Typography>
							<Typography>Bron, 69500</Typography>
							<Typography>France</Typography>
							<Typography>+336 12345678</Typography>

							<Divider sx={{ my: 1 }} />

							<Box display='flex' justifyContent='end'>
								<NextLink href='/cart' passHref legacyBehavior>
									<Link underline='always'>Commander</Link>
								</NextLink>
							</Box>

							<OrderSummary />

							<Box>
								<Button color='secondary' className='circular-btn' fullWidth>
									Procéder au paiement
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};
export default SummaryPage;
