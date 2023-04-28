import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import {BiLibrary} from "react-icons/bi";
import {AiFillHeart} from "react-icons/ai";
import {BsPlusSquare} from 'react-icons/bs';

export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/Home",
    },
    {
        title:"Search",
        icon:<SearchIcon/>,
        link:"/Search",
    },
    {
        title:"Your Library",
        icon:<BiLibrary/>,
        link:"/Your Library",
    },
    {
        title:"Create Playlist",
        icon:<BsPlusSquare/>,
        link:"/Create Playlist",
    },
    {
       title:"Liked Songs",
        icon:<AiFillHeart/>,
        link:"/Liked Songs",
    },
];