import NextLink from 'next/link';
import { Typography, Grid, Chip, Link } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID' },
	{
		field: 'fullname',
		headerName: 'Nom Complet',
		width: 300,
	},
	{
		field: 'paid',
		headerName: 'Payé',
		description: 'Information si la commande a été payée ou non',
		width: 200,
		renderCell: (params) => {
			return params.row.paid ? (
				<Chip color='success' label='payé' variant='outlined' />
			) : (
				<Chip color='error' label='en attente de paiement' variant='outlined' />
			);
		},
	},
	{
		field: 'Order',
		headerName: 'Voir commande',
		width: 200,
		sortable: false,
		renderCell: (params) => {
			return (
				<NextLink href={`/orders/${params.row.id}`} legacyBehavior passHref>
					<Link underline='always'>Voir commande</Link>
				</NextLink>
			);
		},
	},
];

const rows = [
	{ id: 1, paid: true, fullname: 'Mahfod Addi' },
	{ id: 2, paid: false, fullname: 'Melissa Flores' },
	{ id: 3, paid: true, fullname: 'John Doed' },
	{ id: 4, paid: false, fullname: 'Marty Jackson' },
	{ id: 5, paid: true, fullname: 'Richard Poor' },
	{ id: 6, paid: false, fullname: 'Bixente Lizarazu' },
];

const History = () => {
	return (
		<ShopLayout
			title={'Historique de votre commande'}
			pageDescription={'Historique de la commande du client'}>
			<Typography variant='h1' component='h1'>
				Historique de la commande
			</Typography>

			<Grid container>
				<Grid item xs={12} sx={{ height: 650, width: '100%' }}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={10}
						rowsPerPageOptions={[10]}
					/>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};
export default History;
