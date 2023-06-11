export const Sentence = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04 * i,
      duration: 1.5,
    },
  }),
};
export const letter = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 10,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
export const navbar = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 1.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: 0.5,
    },
  },
};
export const image = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "tween",
      damping: 12,
      stiffness: 100,
      duration: 1.5,
    },
  },
};

export const about = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    
  },
  visible: {
    opacity: 1,
    scale: 1,
    
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 1.5,
    },
  },
};

export const footer = {
  hidden: {
    opacity: 0,
    y:-200,
    
  },
  visible: {
    opacity: 1,
    y:0,
    
    transition: {
      type: "tween",
      damping: 12,
      stiffness: 100,
      duration: 1.5,
    },
  },
};
