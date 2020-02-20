import './ie-buster.scss';

const isIE = () => {
  const agent = window.navigator.userAgent;
  return agent.indexOf('MSIE') > 0 || agent.indexOf('Trident') > 0;
};

export const IEBuster = () => {
  if (!isIE()) {
    return false;
  }
  document.body.classList.add('ie-busted');
  const id = 'ie-buster';
  const $el = document.getElementById(id) || document.createElement('div');
  $el.id = id;

  $el.innerHTML = `
    <h2>SORRY!</h2>
    <h3>YOU ARE USING AN OLD BROWSER</h3>
    <h4>
      Please let us - web developers - use recent technology and download a modern browser to see better Internet.
      Pick one of suggested ones from the links below or google one yourself.
    </h4>
    <p>Thanks! ツ</p>
    <div>
      <a target="_blank" href="https://www.google.com/chrome/">Google Chrome</a>
      <a target="_blank" href="https://mozilla.org/">Mozilla Firefox</a>
      <a target="_blank" href="https://www.opera.com/">Opera</a>
      <a target="_blank" href="https://brave.com/">Brave</a>
    </div>
  `;
  document.body.appendChild($el);

  return true;
};
