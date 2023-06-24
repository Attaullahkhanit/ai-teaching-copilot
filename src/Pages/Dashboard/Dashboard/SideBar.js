import React from 'react'
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GiBackup, GiTeacher } from 'react-icons/gi';
import { getFileSrcFromPublicimg } from '../../../utils';
import { GiArmorUpgrade } from 'react-icons/gi';
import { FcIdea } from 'react-icons/fc';
import { MdPlayLesson } from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { BsAlignStart, BsCreditCard2Front } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md'
import { GoCloudDownload } from 'react-icons/go';


function SideBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const navigate = useNavigate()

    const goToSignin = () => {
        localStorage.removeItem('status');
        navigate('/')
    }
    const goToContactUs = () => {
        navigate('/toolidea')
    }
    const tabButtonDta = [
        {
            icon : "bi bi-file-earmark-play-fill text-white",
            btnname: 'Form Tutor',
            navgateTo: '/formtutor'
        },
        {
            icon : "bi bi-person-video3 text-white",
            btnname: 'Classroom Tools',
            navgateTo: '/createplay'
        },
        {
            icon : "bi bi-chat-left-text text-white",
            btnname: 'Communication Tools',
            navgateTo: '/communicationtools'
        },
        {
            icon : "bi bi-align-start text-white",
            btnname: 'Primary Tools',
            navgateTo: '/primarytools'
        },
        {
            icon : "bi bi-people-fill text-white",
            btnname: 'Secondary Tools',
            navgateTo: '/secondarytools'
        },
        {
            icon : "bi bi-cloud-arrow-down-fill text-white",
            btnname: 'Downloads',
            navgateTo: '/downloads'
        },
        {
            icon : "bi bi-person-circle text-white",
            btnname: 'Profile',
            navgateTo: '/profile'
        },
    ]

    // const downTabBtnDta = [
    //     {
    //         icon : "",
    //         btnname: 'PRO UPGRADE',
    //         navgateTo: '/upgrade'
    //     },
    //     {
    //         icon : "bi bi-tools",
    //         btnname: 'TOOL IDEA',
    //         navgateTo: 'goToContactUs'
    //     },
    //     {
    //         icon : "bi bi-box-arrow-left",
    //         btnname: 'LOGOUT',
    //         navgateTo: 'goToSignin'
    //     }
    // ]
        let userDetail =  localStorage.getItem('loginResponse');
        userDetail = JSON.parse(userDetail);
        userDetail = userDetail?.userDetail?._id;

  return (
    <>
        <div className='d-flex flex-column justify-content-between align-items-center menu-item'>
            <Link className='text-decoration-none text-white d-flex justify-content-center text-center py-2'to="/createplay">
                <img src={getFileSrcFromPublicimg("t-c-transp-logo2.png")} alt='logo' width="120px" height="70px" />
            </Link>
            <hr className='text-white py-0 my-0'/>
                <div className='w-100'>
                    <ul className='nav nav-pills flex-column'>
                        {tabButtonDta.map((item) => (
                            <li className='nav-item text-white'>
                            <Link to={item?.navgateTo} className='nav-link text-whiten dashboardmenulink py-0 px-3' aria-current="page">
                            <i className={item?.icon}/>
                            <span className='ms-2 text-white d-none d-sm-inline  menuitemfont'>{item?.btnname}</span>
                            </Link>
                        </li>
                        ))}
                        {/* <li className='nav-item text-white'>
                            <Link to="/formtutor" className='nav-link text-whiten dashboardmenulink py-0 px-3' aria-current="page">
                            <i className='bi bi-person-video3 text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline  menuitemfont'>FORM TUTOR</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white'>
                            <Link to="/classroomtools" className='nav-link text-whiten dashboardmenulink py-0 px-3' aria-current="page">
                            <i className='bi bi-person-vcard-fill text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline  menuitemfont'>CLASSROOM TOOLS</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white'>
                            <Link to="/primarytools" className='nav-link text-whiten dashboardmenulink py-0 px-3' aria-current="page">
                            <i className='bi bi-align-start text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline  menuitemfont'>PRIMARY TOOLS</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white'>
                            <Link to="/secondarytools" className='nav-link text-whiten dashboardmenulink py-0 px-3' aria-current="page">
                            <i className='bi bi-people-fill text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline  menuitemfont'>SECONDARY TOOLS</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white'>
                            <Link to="/downloads" className='nav-link text-white dashboardmenulink py-0 px-3' aria-current="page">
                            <i className='bi bi-cloud-arrow-down-fill text-white'></i>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>DOWNLOADS</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white'>
                            <Link to="/profile" className='nav-link text-white dashboardmenulink py-0 px-3' aria-current="page">
                            <i className='bi bi-person-circle text-white'></i>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>PROFILE</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                
                
                <div className='upgradbottom'>
                <hr className='text-white'/>
                    <ul className='nav nav-pills flex-column text-right'>
                        <li className='nav-item text-white '>
                            <Link to="" className='nav-link text-whiten dashboardmenulink py-0 px-3' aria-current="page">
                            <BsCreditCard2Front className='text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>0 of 10 Credits</span>
                            </Link>
                        </li>
                        {userDetail == "6481f7beb18138ad06dee0ca" &&
                            <li className='nav-item text-white '>
                            <Link to="/payment-list" className='nav-link text-whiten dashboardmenulink py-0 px-3' aria-current="page">
                            <MdPayment className='text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>Payment Transection</span>
                            </Link>
                        </li>
                        }
                        <li className='nav-item text-white '>
                            <Link to="/upgrade" className='nav-link text-whiten dashboardmenulink py-0 px-3' aria-current="page">
                            <i className='bi bi-lightning-charge-fill text-warning'/>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>Pro Upgrade</span>
                            </Link>
                        </li>
                    
                        <li className='nav-item text-white '>
                            <button onClick = {goToContactUs} className='nav-link text-start text-white dashboardmenulink py-0 px-3 w-100' aria-current="page">
                            <i className='bi bi-tools text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>Tool Idea</span>
                            </button>
                        </li>

                        <li className='nav-item text-white'>
                            <button onClick={goToSignin} className='nav-link text-start text-white dashboardmenulink py-0 px-3 w-100' aria-current="page">
                            <i className='bi bi-box-arrow-left text-white'></i>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
        {/* content */}
        </div>      
    </>
  )
}

export default SideBar