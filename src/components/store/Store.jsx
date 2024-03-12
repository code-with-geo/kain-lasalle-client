import React from "react";
import styled from "styled-components";
import { Label } from "../Components.styled";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	padding: 10px;
	cursor: pointer;
`;
const Image = styled.img`
	width: 100%;
	height: 150px;
`;
export const Cards = (props) => {
	const navigate = useNavigate();
	const handleClick = (id) => {
		navigate(`/store/${id}`);
	};
	const { id, storeName, location, storeImage } = props.data;
	return (
		<>
			<Container onClick={() => handleClick(id)}>
				<Image src={storeImage} alt='' />
				<Label fontSize='16px' fontWeight='500'>
					{storeName}
				</Label>
				<Label fontSize='12px' fontWeight='400'>
					{location}
				</Label>
			</Container>
		</>
	);
};
