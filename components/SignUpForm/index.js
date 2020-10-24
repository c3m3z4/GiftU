import React from 'react';
import Link from "next/link";
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
import FormComponent from '../FormComponent/index';


const SignUpForm = () => {
    return (
        <FormComponent>
            {/* inputs */}
            <WrappersmallerInput>
                <LabelText>
                    Nombre
                </LabelText>
                <LabelInput />
            </WrappersmallerInput>
            <WrappersmallerInput>
                <LabelText>
                    Email
                    <LabelImg src={email} />
                </LabelText>
                <LabelInput />
            </WrappersmallerInput>
            {/* contraseñas */}
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
            {/* contraseñas */}
            {/* terminan inputs */}
            {/* Botones */}
            <Link href="/">
                <BaseButton>Registrarse</BaseButton>
            </Link>
            <WrapperSingRD>
                <FBButton>
                Registrarse con 
                    <FbLogo src={FBLogo}></FbLogo>
                </FBButton>
                <GooButton>
                Registrarse con 
                    <GLogo src={GoLogo}></GLogo>
                </GooButton>
            </WrapperSingRD>
            {/* terminan botones */}
		</FormComponent>    
    )
}
export default SignUpForm;

