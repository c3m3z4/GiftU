import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px;
`;

const WrapperRight = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
		height: 30vh;
	}
`;

const ImageAbout = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	object-fit: cover;
	box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.17);
	@media (max-width: 768px) {
		width: 150px;
		height: 150px;
	}
	@media (max-width: 425px) {
		width: 60px;
		height: 60px;
	}
`;

const WrapperDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 30px;
	width: 300px;
	height: 200px;
`;

const TitleDetails = styled.h2`
	margin-bottom: 0;
	text-align: center;
	color: black;
	font-size: 30px;
	font-family: "Quicksand";
	@media (max-width: 425px) {
		font-size: 35px;
		font-weight: 400;
	}
`;

const TitleRole = styled.h2`
	margin-top: 0;
	text-align: center;
	color: black;
	font-size: 25px;
	font-family: "Quicksand";
	@media (max-width: 425px) {
		font-size: 35px;
		font-weight: 400;
	}
`;

const GitHub = styled.a`
	font-size: 20px;
	color: black;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
	margin: 10px;
`;

const LinkedIn = styled.a`
	font-size: 20px;
	color: black;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
`;

export {
	Wrapper,
	WrapperRight,
	ImageAbout,
	WrapperDetails,
	TitleDetails,
	TitleRole,
	GitHub,
	LinkedIn,
};