const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const pageTransition = {
  type: `spring`,
  ease: `linear`,
  duration: 0.05,
};

export default { pageVariants, pageTransition };
