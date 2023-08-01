import Image from 'next/image'
import { Avatar, Space } from 'antd';
import Logo from '../../public/yatra-logo.png'
export default function Header() {
  return (
   <header>
    <div className="container">
       <nav>
        <div className="logo">
           <a href='/'><Image src={Logo} alt="Picture of the author"/></a>
        </div>
        <ul className="nav-menus">
            <li><a href="/login">Login</a></li>
            <li><a className="active" href="/register">Signup</a></li>
        </ul>
         <Avatar
         style={{
         marginTop: "33px",
         marginRight: "33px",
         backgroundColor: '#fde3cf',
         color: '#f56a00',
         }}
      >
         Razeet
      </Avatar>
       </nav>
    </div>
        
    </header>
    
  )
}