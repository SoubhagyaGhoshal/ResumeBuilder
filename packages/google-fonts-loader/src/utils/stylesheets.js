const _stylesheetId = (fontId) => `font-${fontId}`;
export const hasStylesheet = (fontId) =>
  document.getElementById(_stylesheetId(fontId)) !== null;
export const createStylesheet = (fontId, styles) => {
  const stylesheet = document.createElement("style");
  stylesheet.id = _stylesheetId(fontId);
  stylesheet.textContent = styles;
  document.head.appendChild(stylesheet);
};
