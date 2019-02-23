// Рендеринг одного фильтра
const renderFilter = (filterName, taskAmount) => {
  const filterHtml = ``;

  const template = document.createElement(`template`);
  template.innerHTML = filterHtml;

  return template.content.children;
};

export default renderFilter;