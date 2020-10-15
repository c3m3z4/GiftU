import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
	margin-right: 30px;
`;

const WrapperImageMenu = styled.div`
	margin-right: 8px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const LogoImage = styled.img`
	margin-right: 8px;
	width: 60px;
`;

const image = "../images/logo.png";

const Text = styled.p`
	font-size: 25px;
	color: #87d3b8;
	margin-right: 25px;
	font-family: Quicksand;
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

const ListItems = styled.ul`
	display: none;
	list-style: none;
	padding: 0px;
	position: absolute;
	width: 100px;
	text-align: right;
	margin: 0px 0px 0px -50px;
	background-color: #9e9595;
	${Wrapper}:hover & {
		display: block;
	}
`;

const Item = styled.li`
	margin: 10px;
`;

const Link = styled.a`
	color: #ffab07;
	text-decoration: none;
	font-family: Quicksand;
`;

const Menu = () => {
	return (
		<Fragment>
			<Wrapper>
				<WrapperImageMenu>
					<Text>MENÜ</Text>
					<LogoImage src={image} />
				</WrapperImageMenu>
				<ListItems>
					<Item>
						<Link href="/">
							Sign <Span>In</Span>
						</Link>
					</Item>
					<Item>
						<Link href="/">
							{" "}
							<Span>P</Span>rofile
						</Link>
					</Item>
					<Item>
						<Link href="/">
							About <Span>Üs</Span>
						</Link>
					</Item>
				</ListItems>
			</Wrapper>
		</Fragment>
	);
};

export default Menu;
