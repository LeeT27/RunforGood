import './Title.css';
import { motion } from 'framer-motion';
import TypedText from './TypedText.jsx';
import VideoComponent from './VideoComponent';

function Title() {
  return (
    <>
      <div className="titleContainer">
        <VideoComponent />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 5 },
          }}
          className="text-massive title"
        >
          Run for{' '}
          <span className="typed-text">
            <TypedText />
          </span>
        </motion.h1>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 5.5, ease: 'easeOut' }}
        className="subHeader"
      >
        Only you have the <span className="bolder">power</span> to change the{' '}
        <span className="bolder">world</span> for the better
      </motion.h1>
      <div className="buttonContainer">
        <motion.button className="button">
          Donate <span>&#10140;</span>
        </motion.button>
      </div>
    </>
  );
}
export default Title;
