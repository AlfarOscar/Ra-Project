import  React,{useState} from 'react'
import {FaBars, FaProject, FaTimes} from 'react-icons/fa'
import Logo from '../Assets/Logo.png'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick= () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
            <img src={Logo} alt="Logo Image" style={{width:'50px'}}/>
            </div>

            {/* menu*/}
            
            <ul className='hidden md:flex'>  
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact Us</li>
                </ul>
            


            {/*Hamburger*/}
            <div onClick={handleClick} className=' md:hidden z-10'>
                {!nav ? <FaBars />: <FaTimes />}
            </div>



            {/*mobile Menu*/}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About Us</li>
            <li className='py-6 text-4xl'>Gallery</li>
            <li className='py-6 text-4xl'>Contact Us</li>
        </ul>


            
    </div>
  )
}

export default Navbar