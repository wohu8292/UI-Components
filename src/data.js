import './exampleImg.jpg'
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { BsInbox } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";


const Profile_Dropdown_Data=[
    {
        img: <CgProfile />,
        text: "My Profile"
    },
    {
        img: <FaRegEdit />,
        text: "Edit Profile"
    },
    {
        img: <BsInbox />,
        text: "Inbox"
    },
    {
        img: <CiSettings />,
        text: "Settings"
    },
    {
        img: <IoIosHelpCircleOutline  />,
        text: "Help"
    },
    {
        img: <IoIosLogOut  />,
        text: "Logout"
    },
]

export {Profile_Dropdown_Data}