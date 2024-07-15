import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProgressCounter = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 5000);
          return 100;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-primary z-50">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        className="h-2 bg-secondary"
      />
      <p className="absolute text-white text-2xl font-Akira">{progress}%</p>
    </div>
  );
};

export default ProgressCounter;
