import { Box, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';

const Custom404 = () => {
	return (
		<ShopLayout
			title={'Page non trouvée'}
			pageDescription={'Rien à trouver ici 🥹'}>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				height='calc(100vh -200px)'
				sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
				<Typography
					variant='h1'
					component={'h1'}
					fontSize='100'
					fontWeight='200'>
					404 |
				</Typography>
				<Typography
					variant='h1'
					marginLeft={2}
					component={'h1'}
					fontSize='100'
					fontWeight='200'>
					Rien à chercher ici 😜
				</Typography>
			</Box>
		</ShopLayout>
	);
};
export default Custom404;
