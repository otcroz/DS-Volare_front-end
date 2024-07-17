import { useAnimation, AnimationControls } from 'framer-motion';

export const useConvertAnimation = () => {
  const controlScripts = useAnimation();
  const controlStoryboard = useAnimation();
  const controlStatistics = useAnimation();

  const startAnimation = (controls: AnimationControls) => {
    controls.start({
      opacity: [0, 0.2, 0.5, 0.8, 1],
      scale: [0.8, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
      },
    });
  };
  return {
    controlScripts,
    controlStoryboard,
    controlStatistics,
    startAnimation,
  };
};
