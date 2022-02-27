const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const transitionDuration = {
  duration: 0.4,
};
const urlInputBoxTransition = {
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0.5,
    scale: 0.8,
  },
};
const navbarTransition = {
  in: {
    opacity: 1,
    translateY: 0,
  },
  out: {
    opacity: 0.5,
    translateY: '-120px',
  },
};
const bodyTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
export default {
  pageTransition,
  transitionDuration,
  urlInputBoxTransition,
  navbarTransition,
  bodyTransition,
};
