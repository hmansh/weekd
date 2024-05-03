import styled from 'styled-components';
import { isUndefined } from "../../helpers/utils";
import Colors from "../../helpers/colors";

export const Padding = ({ padding }) =>
	padding &&
	`
		padding: ${
		padding.all
			? `${padding.all}px`
			: `${padding.top || 0}px
				${padding.right || 0}px
				${padding.bottom || 0}px
				${padding.left || 0}px`
	};
`;

export const Margin = ({ margin }) =>
	margin &&
	`
		margin: ${
		margin.all
			? `${margin.all}px`
			: `${margin.top || 0}px
				${margin.right || 0}px
				${margin.bottom || 0}px
				${margin.left || 0}px`
	};
`;

export const Border = ({ border }) =>
	border &&
	`
		border-width: ${
		border.all
			? `${border.all}px`
			: `${border.top || 0}px
			${border.right || 0}px
			${border.bottom || 0}px
			${border.left || 0}px`
	};
	${!isUndefined(border.radius) ? `border-radius: ${border.radius}px;` : ''}
	border-style: ${border.style ?? 'solid'};
	border-color: ${border.color ?? Colors.grey400};
`;


const container = styled.div`
	display: ${({ inline }) => inline && 'inline-block'};
	width: ${({ width }) => (width && typeof width === 'number' ? `${width}px` : width)};
	min-width: ${({ minWidth }) =>
    minWidth && typeof minWidth === 'number' ? `${minWidth}px` : minWidth};
	max-width: ${({ maxWidth }) =>
    maxWidth && typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};
	min-width: ${({ minWidth }) =>
    minWidth && typeof minWidth === 'number' ? `${minWidth}px` : minWidth};
	height: ${({ height }) => (height && typeof height === 'number' ? `${height}px` : height)};
	max-height: ${({ maxHeight }) =>
    maxHeight && typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight};
	min-height: ${({ minHeight }) =>
    minHeight && typeof minHeight === 'number' ? `${minHeight}px` : minHeight};
	line-height: ${({ lineHeight }) => !isUndefined(lineHeight) && lineHeight};
	text-align: ${({ textAlign = 'initial' }) => textAlign};
	background-color: ${({ bgColor = Colors.white }) => bgColor};
	overflow: ${({ overflow }) => !isUndefined(overflow) && overflow};
	z-index: ${({ zIndex }) => !isUndefined(zIndex) && zIndex};
	cursor: ${({ cursor }) => !!cursor && cursor};
	opacity: ${({ opacity }) => !isUndefined(opacity) && opacity};
	box-shadow: ${({ boxShadow }) => boxShadow};
	${Padding}
	${Margin}
	${Border}
`;

export default container;
