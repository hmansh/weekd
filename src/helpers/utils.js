export const isUndefined = (value) => typeof value === 'undefined';

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const openLinkInNewTab = (url) => {
  const win = window.open(url, '_blank');
  win.focus();
};
