import {
	Typography,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Box,
	Button,
} from '@mui/material';
import { ShopLayout } from '../../components/layouts';

const AdressPage = () => {
	return (
		<ShopLayout title='Paiement' pageDescription="Confirmer l'envoi">
			<Typography variant='h1' component='h1'>
				Envoi
			</Typography>
			<Grid container spacing={2} sx={{ mt: 2 }}>
				<Grid item xs={12} sm={6}>
					<TextField label='Nom' variant='filled' fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label='Prénom' variant='filled' fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label='Adresse' variant='filled' fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label='Autre Adresse' variant='filled' fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label='Code Postal' variant='filled' fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label='Ville' variant='filled' fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel>Pays</InputLabel>
						<Select variant='filled' label='Pays' value={1}>
							<MenuItem value={1}>France</MenuItem>
							<MenuItem value={2}>Allemagne</MenuItem>
							<MenuItem value={3}>Belgique</MenuItem>
							<MenuItem value={4}>Espagne</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField label='Téléphone' variant='filled' fullWidth />
				</Grid>
			</Grid>
			<Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
				<Button color='secondary' className='circular-btn' size='large'>
					Finaliser la commande
				</Button>
			</Box>
		</ShopLayout>
	);
};
export default AdressPage;
