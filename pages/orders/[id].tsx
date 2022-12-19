import NextLink from 'next/link';
import {
	Typography,
	Grid,
	CardContent,
	Card,
	Divider,
	Box,
	Link,
	Chip,
} from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { CartList, OrderSummary } from '../../components/cart';
import {
	CreditCardOffOutlined,
	CreditScoreOutlined,
} from '@mui/icons-material';

const OrderPage = () => {
	return (
		<ShopLayout
			title='Resumer de votre ordre de paiment'
			pageDescription='Resumer de votre ordre de paiement'>
			<Typography variant='h1' component='h1'>
				Résumé de votre ordre de paiment : ABC123
			</Typography>

			{/* <Chip
				sx={{ my: 2 }}
				label='Promotion'
				variant='outlined'
				color='error'
				icon={<CreditCardOffOutlined />}
			/> */}

			<Chip
				sx={{ my: 2 }}
				label='Paiement déja effectué'
				variant='outlined'
				color='success'
				icon={<CreditScoreOutlined />}
			/>

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

							<Box sx={{ mt: 3 }}>
								<h1>Paiement</h1>
								<Chip
									sx={{ my: 2 }}
									label='Paiement déja effectué'
									variant='outlined'
									color='success'
									icon={<CreditScoreOutlined />}
								/>
								{/* <Button color='secondary' className='circular-btn' fullWidth>
									Procéder au paiement
								</Button> */}
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};
export default OrderPage;
