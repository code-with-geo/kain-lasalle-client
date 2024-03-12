import React, { useContext } from "react";
import styled from "styled-components";
import { Button, Label } from "../Components.styled";
import { ShopContext } from "../../context/shop-context";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: left;
	padding: 5px;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	margin-left: 10px;
`;

const Image = styled.img`
	width: 80px;
	height: 80px;
`;
export const Products = (props) => {
	const { id, productName, price, productImage, productDescription } =
		props.data;
	const { addToCart, cartItems } = useContext(ShopContext);
	const cartItemAmount = cartItems[id];
	return (
		<>
			<Container>
				<Wrapper>
					<Image src={productImage} alt='' />
					<Content>
						<Label fontSize='16px' fontWeight='600' marginBottom='10px'>
							{productName}
						</Label>
						<Label fontSize='10px' fontWeight='400' marginBottom='10px'>
							{productDescription}
						</Label>
						<Label fontSize='12px' fontWeight='500' marginBottom='10px'>
							{price}
						</Label>
					</Content>
				</Wrapper>
				<Button bgColor='#b0c5a4' color='#fff' onClick={() => addToCart(id)}>
					Add to cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
				</Button>
			</Container>
		</>
	);
};
