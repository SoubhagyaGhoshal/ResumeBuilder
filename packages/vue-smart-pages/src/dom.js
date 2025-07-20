const NEW_PAGE_CLASS = "md-it-newpage";
const _elementHeight = (element) => {
  const style = window.getComputedStyle(element);
  const marginTop = parseInt(style.marginTop) || 0;
  const marginBottom = parseInt(style.marginBottom) || 0;
  return element.clientHeight + marginTop + marginBottom;
};
const _createPage = (size, margins) => {
  const page = document.createElement("div");
  page.dataset.scope = "vue-smart-pages";
  page.dataset.part = "page";
  page.style.height = `${size.height}px`;
  setWidthAndMargins(page, size, margins);
  return page;
};
export const setWidthAndMargins = (element, size, margins) => {
  element.style.width = `${size.width}mm`;
  element.style.padding = `${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px`;
};
export const breakPage = (target, size, margins) => {
  const maxHeight = size.height - margins.top - margins.bottom;
  const pages = document.createElement("div");
  let accHeight = 0;
  let page = _createPage(size, margins);
  Array.from(target.children).forEach((child) => {
    const childHeight = _elementHeight(child);
    if (accHeight + childHeight > maxHeight || child.className === NEW_PAGE_CLASS) {
      pages.appendChild(page);
      accHeight = 0;
      page = _createPage(size, margins);
    }
    page.appendChild(child);
    accHeight += childHeight;
  });
  pages.appendChild(page);
  target.innerHTML = pages.innerHTML;
};
