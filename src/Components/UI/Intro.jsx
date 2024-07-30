import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProgressCounter = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [resourcesLoaded, setResourcesLoaded] = useState(0);
  const [totalResources, setTotalResources] = useState(0);

  useEffect(() => {
    const images = Array.from(document.images);
    const resourceCount = images.length;

    setTotalResources(resourceCount);

    if (resourceCount === 0) {
      setProgress(100);
      onComplete();
    } else {
      images.forEach((img) => {
        if (img.complete) {
          incrementLoadedResources();
        } else {
          img.addEventListener('load', incrementLoadedResources);
          img.addEventListener('error', incrementLoadedResources);
        }
      });
    }

    function incrementLoadedResources() {
      setResourcesLoaded((prev) => prev + 1);
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', incrementLoadedResources);
        img.removeEventListener('error', incrementLoadedResources);
      });
    };
  }, [onComplete]);

  useEffect(() => {
    if (totalResources > 0) {
      const progressPercentage = (resourcesLoaded / totalResources) * 100;
      setProgress(progressPercentage);
      if (progressPercentage === 100) {
        setTimeout(onComplete, 500); // Give some time before proceeding
      }
    }
  }, [resourcesLoaded, totalResources, onComplete]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-primary z-50">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        className="h-2 bg-secondary"
      />
      <p className="absolute text-white text-2xl font-Akira">{Math.round(progress)}%</p>
    </div>
  );
};

export default ProgressCounter;
