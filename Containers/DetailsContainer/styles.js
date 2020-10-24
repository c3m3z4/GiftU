import styled from "styled-components";
const WrapperView = styled.div`
	display: flex;
	width: 100vw;
	background: rgba(196, 196, 196, 0.6);
	height: 100vh;
	justify-content: center;
	align-items: center;
	position: absolute;
    top: 0;
`;

const WrapperModal = styled.div`
	min-width: 40vw;
	min-height: 320px;
	box-shadow: 2px 10px 15px 0px rgba(0,0,0,0.17);
	background: white;
	border-radius: 30px;
`;

const WrapperBtnClose = styled.div`
	display: flex;
	justify-content: flex-end;
	min-height: 50px;
	align-items: center;
    padding: 5px 20px;

`;

const BtnClose = styled.button`
	background-color: transparent;
	border: none;
	height: 30px;
	width: 30px;
	border-radius: 50%;
    padding: 8px;
`;

const WrapperInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TextQuestion = styled.p`
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
`;

const CloseIcon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const TextComent = styled.p`
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
`;

const TextWrite = styled.input`
	width: 25vw;
	border: none;
	border-bottom: 2px solid #ffab07;
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
	color: #ffab07;
	padding: 10px 0;
	margin-bottom: 25px;
	&:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
`;
const DetailsWrapper = styled.div`
	font-family: "Quicksand", sans-serif;
	width: 100%;
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
`;
const LeftDetails = styled.div`
	width: 50vw;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: rgba(160, 221, 199, 0.25);
`;
const RightDetails = styled(LeftDetails)`
	background: #ffffff;
	width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const MainImageContainer = styled.div`
	width: 480px;
	height: 460px;
	position: relative;
	border-radius: 10px;
`;
const MainImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const DecorativeImage = styled.img`
	width: 156.85px;
	height: 152.24px;
	position: absolute;
	bottom: 0;
	right: 0;
`;

const InformationContainer = styled.div`
	width: 30vw;
	height: 50vh;
	background: rgba(255, 171, 7, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const TitleDetails = styled.p`
	font-family: Quicksand;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 0%;
	text-transform: uppercase;
	color: #87d3b8;
`;

const LineImage = styled.img`
	width: 69.02px;
	height: 17.59px;
`;
const DetailsInformation = styled.p`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
const DetailItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - 100px);
`;
const DetailItemTitle = styled.p`
	font-family: Quicksand;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	color: #726666;
	width: calc(100% / 2);
	font-weight: 900;
`;
const DetailItemContent = styled.p`
	font-family: Quicksand;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	color: #726666;
	width: calc(100% / 2);
`;
const DetailButton = styled.button`
	font-family: Quicksand;
	font-style: normal;
	max-width: 253px;
	max-height: 45px;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.15em;
	color: #f6f6f6;
	padding: 24px;
	background: #87d3b8;
	border-radius: 10px;
	border: none;
	cursor: pointer;
`;
const ColorLetter = styled.span`
	color: ${(props) => (props.blue ? "#87D3B8" : "#FFAB07")};
`;

export {
	DetailsWrapper,
	LeftDetails,
	RightDetails,
	MainImageContainer,
	MainImage,
	DecorativeImage,
	InformationContainer,
	ColorLetter,
	TitleDetails,
	LineImage,
	DetailsInformation,
	DetailItem,
	DetailItemTitle,
	DetailItemContent,
	DetailButton,
	WrapperView,
	WrapperModal,
	WrapperBtnClose,
	BtnClose,
	WrapperInfo,
	TextQuestion,
	// starts,
	TextComent,
	TextWrite,
	CloseIcon,
};
