import '@umbraco-ui/uui';

addCss('https://cdn.jsdelivr.net/npm/@umbraco-ui/uui-css@latest/dist/uui-css.css');

export * from './umb-act-modal';
export * from './umb-act-not-toggle';
export * from './umb-act-toggle';
export * from './umb-act-search-result-item';
export * from './umb-act-member-item-actions';


function addCss(fileName) {

  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

