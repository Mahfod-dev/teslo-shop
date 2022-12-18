import {
	Typography,
	Grid,
	CardContent,
	Card,
	Divider,
	Box,
	Button,
} from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { CartList, OrderSummary } from '../../components/cart';

const CartPage = () => {
	return (
		<ShopLayout title='Panier -3' pageDescription='articles du panier'>
			<Typography variant='h1' component='h1'>
				Panier
			</Typography>

			<Grid container>
				<Grid item xs={12} sm={7}>
					<CartList editable />
				</Grid>
				<Grid item xs={12} sm={5}>
					<Card className='summary-card'>
						<CardContent>
							<Typography variant='h2'>Commander</Typography>
							<Divider sx={{ my: 1 }} />
							<OrderSummary />

							<Box>
								<Button color='secondary' className='circular-btn' fullWidth>
									Paiement
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};
export default CartPage;
