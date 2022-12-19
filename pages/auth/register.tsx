import NextLink from 'next/link';
import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../../components/layouts';

const RegisterPage = () => {
	return (
		<AuthLayout title='register'>
			<Box sx={{ width: 350, padding: '10px 20px' }}>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant='h1' component='h1'>
							Crééz votre compte
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField label='nom et prénom' variant='filled' fullWidth />
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField label='email' variant='filled' fullWidth />
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField label='votre mot de passe' variant='filled' fullWidth />
					</Grid>
					<Grid xs={12}>
						<Button
							color='secondary'
							className='circular-btn'
							size='large'
							fullWidth
							sx={{ my: 3 }}>
							Enregistrez vous
						</Button>
					</Grid>

					<Grid item xs={12} display='flex' justifyContent='end'>
						<NextLink href='/auth/login' passHref legacyBehavior>
							<Link underline='always'>Vous avez déja un compte ?</Link>
						</NextLink>
					</Grid>
				</Grid>
			</Box>
		</AuthLayout>
	);
};
export default RegisterPage;
