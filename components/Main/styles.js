import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: "Quicksand";
`;

const WrapperTitle = styled.div`
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Title = styled.h1`
	text-align: center;
	color: black;
	font-size: 50px;
	font-family: "Quicksand";
`;

const WrapperGifts = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100vw;
`;

const Wrappergift = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: "Quicksand";
`;

const GiftTitle = styled.h2`
	text-align: center;
	color: black;
	font-family: "Quicksand";
	cursor: pointer;
	margin: 0;
`;

const ColorLine = styled.button`
	width: 230px;
	height: 6px;
	background: white;
	background: linear-gradient(90deg, #ffab07 60%, white 60%);
	background: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
	border: ${(props) =>
		props.primary ? "1px solid #ffab07" : "1px solid #87d3b8"};
	cursor: pointer;
`;

const Span = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export {
	Wrapper,
	WrapperTitle,
	Title,
	WrapperGifts,
	Wrappergift,
	GiftTitle,
	ColorLine,
	Span,
};