import { MenuItem, Select, styled } from '@mui/material';
import Colors from '../../../helpers/colors';

export const StyledSelect = styled(Select)({
	minWidth: 180,
	marginLeft: '8px',
	marginRight: '8px',
	'&.MuiSelect-select': {
		padding: '8px 16px',
	},
});

export const StyledMenuOption = styled(MenuItem)({
	fontSize: 14,
	padding: '8px 16px',
	marginLeft: '8px',
	marginRight: '8px',
	borderRadius: '8px',
	'&:hover': {
		backgroundColor: Colors.grey100,
	},
	// selected
	'&.Mui-selected': {
		backgroundColor: Colors.grey200,
	},
	'&.Mui-selected:hover': {
		backgroundColor: Colors.grey200,
	},
});
