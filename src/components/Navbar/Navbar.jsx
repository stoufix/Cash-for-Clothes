import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  function transform(link){
    if ( link ==='We visit YOU') {return 'about';}
    if ( link ==='Visit US') {return 'work';}
    return link ;
  }

  return (
    <nav className="app__navbar">
      
      <ul className="app__navbar-links">
        {['home', 'We visit YOU', 'Visit US', 'skills', 'contact'].map((item) => (
          
          <li className="app__flex p-text" key={`link-${transform(item)}`}>
            <div />
            <a href={`#${transform(item)}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['We visit YOU', 'Visit US', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${transform(item)}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
