import styled from "styled-components";
//Default #8c8c8c
//Primary #b0c5a4
//White #FFF
export const Button = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	text-align: ${(props) => props.textAlign};
	padding: ${(props) => props.padding};
	line-height: 2;
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	border: 1px solid #f8f6f6;
	outline: none;
	cursor: pointer;
	border-radius: 3px;
	margin-top: ${(props) => props.marginTop};
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};
	margin-bottom: ${(props) => props.marginBottom};
	display: ${(props) => props.display};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
`;

export const Label = styled.p`
	color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	text-align: ${(props) => props.textAlign};
	padding: ${(props) => props.padding};
	margin-top: ${(props) => props.marginTop};
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};
	margin-bottom: ${(props) => props.marginBottom};
`;

export const TextBox = styled.input`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	text-align: ${(props) => props.textAlign};
	padding: ${(props) => props.padding};
	line-height: 2;
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	border: 1px solid #f8f6f6;
	outline: none;
	margin-top: ${(props) => props.marginTop};
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};
	margin-bottom: ${(props) => props.marginBottom};
	display: ${(props) => props.display};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
`;

export const Logo = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	cursor: pointer;
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};
	margin-top: ${(props) => props.marginTop};
	margin-bottom: ${(props) => props.marginBottom};
`;
