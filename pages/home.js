import React, { Fragment } from "react";

import {
	Header,
	ContainerText,
	ContainerGift,
	Texto,
	Span,
	GiftType,
	Footer,
	Barra,
	Login,
	MenuDerecho,
} from "../styles/Home";

import { GlobalStyle } from "../styles/GlobalStyle.js";

const Home = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Header>
				<LogoName src={/giftu.png} />
				<MenuDerecho>
					<p className="menu">MENU</p>
					<img className="logo-image" src="/images/logo.png" />
				</MenuDerecho>
			</Header>
			<ContainerText>
				<Texto>
					HOLA , <br />¿ <Span primary>Q</Span>UÉ
					<br />
					QUIERES <br />
					REGALAR <Span>?</Span>
				</Texto>
			</ContainerText>
			<ContainerGift>
				<GiftType>
					<p>
						REGALO <br />
						RECOM<Span>É</Span>NDADO
					</p>
					<Barra primary />
				</GiftType>
				<GiftType>
					<p>
						REGALO <br />
						ID<Span primary>E</Span>AL
					</p>
					<Barra />
				</GiftType>
			</ContainerGift>
			<Login>
				<p className="yatienes">¿Ya tienes cuenta?</p>
				<a className="anchor" href="/">
					Log in
				</a>
			</Login>
			<Footer src="/images/footer.png" />
		</Fragment>
	);
};

export default Home;
