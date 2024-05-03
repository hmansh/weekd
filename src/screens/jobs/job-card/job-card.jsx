import { Button, Card, styled, Typography } from '@mui/material';
import Colors from '../../../helpers/colors';

export const StyledCard = styled(Card)({
	boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
	borderRadius: 16,
	'&:hover': {
		backgroundColor: Colors.grey50,
	},
});

export const StyledPrimaryButton = styled(Button)({
	backgroundColor: Colors.primary600,
	color: Colors.white,
	'&:hover': {
		backgroundColor: Colors.primary800,
	},
});

export const StyledSecondaryButton = styled(Button)({
	backgroundColor: Colors.secondary600,
	color: Colors.white,
	'&:hover': {
		backgroundColor: Colors.secondary800,
	},
});

export const StyledDescription = styled(Typography)({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	WebkitLineClamp: 8,
	WebkitBoxOrient: 'vertical',
});
