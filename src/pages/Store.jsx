import React from "react";
import styled from "styled-components";
import { Label } from "../components/Components.styled";
import { Products } from "../components/products/Product";
import { Items } from "../data/Products";
const Container = styled.div`
	width: 100%;
	max-width: 80%;
	margin: auto;
`;

const Content = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
`;
function Store() {
	return (
		<>
			<Container>
				<Label
					color='#383737'
					fontSize='25px'
					fontWeight='500'
					marginBottom='10px'>
					Menu
				</Label>
				<Content>
					{Items.map((item) => {
						return <Products data={item} />;
					})}
				</Content>
			</Container>
		</>
	);
}

export default Store;
