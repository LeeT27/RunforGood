import './Opener.css';
import { motion } from 'framer-motion';

function Opener() {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: 1000,
          transition: { duration: 0.5, delay: 4.4, ease: 'easeOut' },
        }}
        className="blackOpener"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={[
            {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
            },
            {
              rotate: 360,
              transition: {
                duration: 1,
                delay: 1,
                repeat: 1,
                repeatDelay: 0.5,
              },
            },
          ]}
          className="loading"
        />
        <motion.div
          initial={{ y: 1000 }}
          animate={[
            {
              y: 0,
              transition: { duration: 1, delay: 0.5, ease: 'easeOut' },
            },
            {
              scaleX: 0,
              transition: { duration: 0.2, delay: 4, ease: 'linear' },
            },
          ]}
          className="loadingBar"
        >
          <motion.div
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{
              scaleX: 20,
              transition: { duration: 3, delay: 1 },
            }}
            className="loadingBarProgress"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
export default Opener;
