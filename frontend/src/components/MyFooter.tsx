import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROLE } from "../Services/Api/Role";
import { User } from "../Services/Interface/Interface";
import { pageAdmin, pageChat, pageClassement, pageSettings, pageStat } from "../Services/Routes/RoutePage";

export default function MyFooter(props : {me: User}) {
	const { me } = props;
	const navigate = useNavigate();

	function handleLaunchStats() {
		if (me?.login !== undefined)
			navigate(`${pageStat}/${me?.login}`);
	}

	function handleLaunchClassement() {
		navigate(`${pageClassement}`);
	}

	function handleLaunchParametres() {
		navigate(`${pageSettings}`);
	}

	function handleLaunchChat() {
		navigate(`${pageChat}`);
	}

	function handleLaunchAdminView() {
		navigate(`${pageAdmin}`);
	}

	const buttonStyle = {
		border: "4px solid black",
		borderRadius: "15px",
		color: "black",
		fontFamily: "Myriad Pro",
		padding: "15px",
		backgroundColor: "white",
		fontSize: "17px",
		'&:hover': {
			backgroundColor: '#D5D5D5',
			color: '#000000',
		},
	}

	return (
		<Stack direction="row" sx={{width: 1, height: 1}} justifyContent="center" spacing={15}>
			<Button sx={buttonStyle}
				onClick={() => handleLaunchStats()}>
				<h2>Statistiques</h2>
			</Button>
			<Button sx={buttonStyle}
				onClick={() => handleLaunchClassement()}>
				<h2>Classement</h2>
			</Button>
			<Button sx={buttonStyle}
				onClick={() => handleLaunchParametres()}>
				<h2>Paramètres</h2>
			</Button>
			<Button sx={buttonStyle}
				onClick={() => handleLaunchChat()}>
				<h2>Chat</h2>
			</Button>
			{me?.role === ROLE.ADMIN ?
				<Button sx={buttonStyle}
					onClick={() => handleLaunchAdminView()}>
					<h2>Admin View</h2>
				</Button> : null
			}
		</Stack>
	);
};