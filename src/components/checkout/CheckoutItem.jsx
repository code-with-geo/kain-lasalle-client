import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import styled from "styled-components";
import { Label } from "../Components.styled";

const Container = styled.div`
	display: flex;
	width: 100%;
	max-width: 80%;
	margin: auto;
`;

const Image = styled.img`
	width: 80px;
	height: 80px;
	margin-right: 20px;
	border-radius: 4px;
`;

const Body = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	flex: 1;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	display: flex;
	align-items: left;
	justify-content: left;
	flex-direction: column;
`;

const Line = styled.div`
	border: 1px solid #f8f6f6;
	width: 100%;
	max-width: 80%;
	margin: auto;
	margin-bottom: 10px;
	margin-top: 10px;
`;

const Quantity = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Subtotal = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Right = styled.div`
	flex: 0.3;
`;

export const CheckoutItem = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { cartItems, getQuantity } = useContext(ShopContext);

	const subTotal = getQuantity();
	return (
		<>
			<Container>
				<Body>
					<Image src={productImage} alt='' />
					<Content>
						<Left>
							<Label color='#383737' fontSize='12px' fontWeight='500'>
								{productName}
							</Label>
							<Label color='#383737' fontSize='12px' fontWeight='500'>
								PHP {price}
							</Label>
						</Left>
						<Right>
							<Quantity>
								<Label fontSize='12px' color='#8c8c8c'>
									Qty
								</Label>
								<Label color='#383737' fontSize='12px' fontWeight='500'>
									{cartItems[id]}
								</Label>
							</Quantity>
							<Subtotal>
								<Label fontSize='12px' color='#8c8c8c'>
									Sub Total
								</Label>
								<Label color='#383737' fontSize='12px' fontWeight='500'>
									{subTotal}
								</Label>
							</Subtotal>
						</Right>
					</Content>
				</Body>
			</Container>
			<Line> </Line>
		</>
	);
};
