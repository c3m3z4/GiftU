import React from "react";
import Link from "next/link";
import Auth from "../../lib/Auth";
const auth = new Auth();

import FormComponent from "../FormComponent/index";

import {
	WrappersmallerInput,
	LabelText,
	LabelInput,
	LabelImg,
	LabelTextPass,
	LabelInputPass,
	FlexInputWrapper,
	BaseButton,
	WrapperSingRD,
	FBLogo,
	pass,
	email,
	FbLogo,
	FBButton,
	GoLogo,
	GLogo,
	GooButton,
	WrapperLabel,
} from "../AccessRight/styles";

export default class NavSignUp extends React.Component {
	handleLogin() {
		auth.login();
	}

	render() {
		return (
			<FormComponent>
				<WrappersmallerInput>
					<LabelText>Nombre</LabelText>
					<LabelInput />
				</WrappersmallerInput>
				<WrappersmallerInput>
					<LabelText>
						Email
						<LabelImg src={email} />
					</LabelText>
					<LabelInput />
				</WrappersmallerInput>
				<FlexInputWrapper>
					<WrappersmallerInput>
						<WrapperLabel>
							<LabelTextPass>Contraseña</LabelTextPass>
							<LabelImg src={pass} />
						</WrapperLabel>
						<LabelInputPass></LabelInputPass>
					</WrappersmallerInput>
					<WrappersmallerInput>
						<WrapperLabel>
							<LabelTextPass> Repite Contraseña</LabelTextPass>
							<LabelImg src={pass} />
						</WrapperLabel>
						<LabelInputPass></LabelInputPass>
					</WrappersmallerInput>
				</FlexInputWrapper>
				<Link href="/">
					<BaseButton>Registrarse</BaseButton>
				</Link>
				<WrapperSingRD>
					<FBButton onClick={() => this.handleLogin()}>
						Registrarse con
						<FbLogo src={FBLogo}></FbLogo>
					</FBButton>
					<GooButton onClick={() => this.handleLogin()}>
						Registrarse con
						<GLogo src={GoLogo}></GLogo>
					</GooButton>
				</WrapperSingRD>
			</FormComponent>
		);
	}
}
