import React from "react";
import styled from "styled-components";
import { Button, Logo } from "./Components.styled";
import { ShoppingBag } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
	height: 100px;
	display: flex;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: left;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: right;
`;
function Navigator() {
	const navigate = useNavigate();
	const { id } = useParams();

	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Logo
							src='./assets/logo-1.png'
							width='100px'
							height='100px'
							onClick={() => navigate("/")}
						/>
					</Left>
					<Right>
						<Button
							padding='6px'
							width='40px'
							bgColor='#b0c5a4'
							color='#fff'
							marginRight='10px'
							display='flex'
							alignItems='center'
							justifyContent='center'
							onClick={() => navigate(`/cart/${id}`)}>
							<ShoppingBag />
						</Button>
						<Button padding='5px' width='130px' bgColor='#b0c5a4' color='#fff'>
							Login/Sign Up
						</Button>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
}

export default Navigator;
