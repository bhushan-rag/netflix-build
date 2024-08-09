import React , {useState,useEffect} from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
  return (
      <div className={`nav ${show && "nav_black"}`}>
          <div className='nav_content' >
              <img className='nav_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='logo' />
          <img className='nav_avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuuv_89dQV4F_8TqeGgd2YfxGlN3I5vllGxb3jfJu7cg&s' alt=''/>
          </div>
    </div>
  )
}

export default Nav