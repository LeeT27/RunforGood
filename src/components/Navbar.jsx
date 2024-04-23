import './Navbar.css';
import { motion } from 'framer-motion';
import Logo from '../Assets/logo.png';
import Search from '../Assets/search.png';

function Navbar() {
  return (
    <>
      <motion.div
        initial={{ y: -200 }} // Initial position off the screen
        animate={{ y: 0 }} // Animation to slide down
        transition={{ duration: 0.5, delay: 5 }}
        className="navContainer"
      >
        <motion.img
          src={Logo}
          alt="logo"
          className="logo"
          whileHover={{
            scale: 1.1,
          }}
        />
        <ul>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
            id="home"
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
            id="blog"
          >
            Blog
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
            id="about"
          >
            About
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
            id="contact"
          >
            Contact
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
            id="donate"
          >
            Donate
          </motion.li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={Search} alt="" className="toggleIcon" />
        </div>
      </motion.div>
    </>
  );
}
export default Navbar;
