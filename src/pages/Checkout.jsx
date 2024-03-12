import React, { useContext } from "react";
import styled from "styled-components";
import { Label, Button } from "../components/Components.styled";
import { Items } from "../data/Products";
import { CheckoutItem } from "../components/checkout/CheckoutItem";
import { ShopContext } from "../context/shop-context";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	max-width: 80%;
	margin: auto;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Content = styled.div`
	width: 100%;
`;

const CheckoutWrapper = styled.div`
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

function Checkout() {
	const { cartItems, getTotalCartAmount } = useContext(ShopContext);
	const navigate = useNavigate();
	const totalAmount = getTotalCartAmount();
	const options = {
		method: "POST",
		headers: {
			accept: "application/json",
			"content-type": "application/json",
			authorization: "Basic c2tfdGVzdF9TNWdGUjd4QmQ2UzRGTXJoYlBMZFB0Qlk6",
		},
		body: JSON.stringify({
			data: {
				attributes: {
					amount: totalAmount,
					description: "payment",
					remarks: "asdasd",
				},
			},
		}),
	};

	const HandleCheckoutClick = () => {
		fetch("https://api.paymongo.com/v1/links", options)
			.then((response) => response.json())
			.then((response) => {
				console.log(response.data.attributes.checkout_url);
			})
			.catch((err) => console.error(err));
	};
	return (
		<>
			<Container>
				<Wrapper>
					<Label
						color='#383737'
						fontSize='25px'
						fontWeight='500'
						marginBottom='10px'>
						Check Out
					</Label>
					<Content>
						{Items.map((product) => {
							if (cartItems[product.id] !== 0) {
								return <CheckoutItem data={product} />;
							}
						})}
					</Content>
				</Wrapper>
				<Total>
					<CheckoutWrapper>
						<TotalWrapper>
							<Label>Total</Label>
							<Label>{totalAmount}</Label>
						</TotalWrapper>

						<CheckoutContainer>
							<Button
								width='100%'
								marginTop='10px'
								bgColor='#b0c5a4'
								color='#fff'
								padding='6px'
								onClick={() => HandleCheckoutClick()}>
								Check Out
							</Button>

							<Button
								width='100%'
								marginTop='10px'
								padding='6px'
								onClick={() => navigate(`/cart/}`)}>
								Back to Cart
							</Button>
						</CheckoutContainer>
					</CheckoutWrapper>
				</Total>
			</Container>
		</>
	);
}

export default Checkout;
