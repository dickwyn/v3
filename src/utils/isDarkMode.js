const isDarkMode = () => {
  let darkMode = window.matchMedia(`(prefers-color-scheme: dark)`).matches ? true : false;
  if (document.body.classList.contains('dark')) {
    darkMode = true;
  } else if (document.body.classList.contains('light')) {
    darkMode = false;
  }
  return darkMode;
};

export default isDarkMode;
