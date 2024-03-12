import React, { useContext } from "react";
import styled from "styled-components";
import { Items } from "../data/Products";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "../components/cart/CartItem.jsx";
import { Button, Label } from "../components/Components.styled.js";
import { useNavigate, useParams } from "react-router-dom";
const Container = styled.div`
	width: 100%;
	max-width: 80%;
	margin: auto;
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 10px;
`;

const Wrapper = styled.div`
	display: flex;
	flex: 0.3;
	flex-direction: column;
	justify-content: space-between;
`;

const Total = styled.div`
	max-width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: right;
`;

const TotalWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CheckoutContainer = styled.div``;

function Cart() {
	const navigate = useNavigate();
	const { cartItems, getTotalCartAmount } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();
	return (
		<>
			<Container>
				<Content>
					<Label
						color='#383737'
						fontSize='25px'
						fontWeight='500'
						marginBottom='10px'>
						My Cart
					</Label>
					{Items.map((product) => {
						if (cartItems[product.id] !== 0) {
							return <CartItem data={product} />;
						}
					})}
				</Content>
				<Total>
					<Wrapper>
						<TotalWrapper>
							<Label>Total</Label>
							<Label>{totalAmount}</Label>
						</TotalWrapper>

						<CheckoutContainer>
							{totalAmount > 0 ? (
								<Button
									width='100%'
									marginTop='10px'
									bgColor='#b0c5a4'
									color='#fff'
									padding='6px'
									onClick={() => navigate("/checkout")}>
									Check Out
								</Button>
							) : (
								<Button
									width='100%'
									marginTop='10px'
									bgColor='#b0c5a4'
									color='#fff'
									padding='6px'
									disabled>
									Check Out
								</Button>
							)}
							<Button
								width='100%'
								marginTop='10px'
								padding='6px'
								onClick={() => navigate(`/store/}`)}>
								Back to Menu
							</Button>
						</CheckoutContainer>
					</Wrapper>
				</Total>
			</Container>
		</>
	);
}

export default Cart;
