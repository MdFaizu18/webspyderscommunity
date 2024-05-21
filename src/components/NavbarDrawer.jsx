/* eslint-disable no-dupe-keys */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";


const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    // padding:"",
    borderTop:"15px solid #FFA500",
    transform: "translate(-50%, -50%)",
    height: 350,
    width: 350,
    background: 'white',
    boxShadow: 24,
    borderRadius: "30px",
    p: 1,
};
const pages = [
    {
        id: 1,
        name: "Home",
        // icon: <FaHome style={{ width: 21, height: 21 }} />,
        link: "/",
    },
    {
        id: 2,
        name: "About",
        // icon: <BsFillCollectionFill style={{ width: 21, height: 21 }} />,
        link: "/about",
    },
    {
        id: 3,
        name: "Updates",
        // icon: <BsPersonVcardFill style={{ width: 21, height: 21 }} />,
        link: "/new-updates",
    },
];

export default function NavbarDrawer() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    return (
        <Box style={{ margin: "2%" }}>
            <Button onClick={handleOpen}>
                <MenuOpenIcon sx={{ fontSize: "40px", color: "white" }} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <img src={img1} height="150px" style={{ marginLeft: "27%" }} /> */}
                    <Typography
                        id="modal-modal-title"
                        sx={{
                            textAlign: "center",
                            marginTop:"20px",
                            fontWeight:'600',
                            color: "#000b3f",
                        }}
                        variant="h4"
                        component="h2"
                    >
                        Travel Through
                    </Typography>
                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "grid",
                            justifyContent: "center",
                            gap: "20px",
                        }}
                    >
                        {pages.map((page) => (
                            <Box
                                key={page.id}
                                sx={{ display: "flex", cursor: "pointer", gap: "8%" }}
                            >
                                <Box sx={{ marginTop: "3%" }}>{page.icon} </Box>
                                    <Link
                                        key={page.id}
                                        to={page.link}
                                        style={{
                                            cursor: "pointer",
                                            textDecoration: "none",
                                            color: "black",
                                            width:'100%',
                                        }}
                                    >
                                <Typography sx={{ fontSize: "24px" ,fontWeight:'600',color:'#FFA500',textShadow:'0px 0px 1px black',textAlign:'center'}}>
                                        {page.name} 
                                </Typography>
                                    </Link>
                            </Box>
                        ))}
                        {/*--------------------------------User Identity------------------------------- */}
                        <Box
                            sx={{
                                paddingRight: "1.5%",

                                flex: 0.1,
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                gap: "9px",
                            }}
                        >
                        
                           
                        </Box>
                        {/*-------------------------------- Logout------------------------------- */}
                       
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}