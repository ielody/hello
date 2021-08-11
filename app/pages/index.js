module.exports = async function($) {
  $.page.title = 'Create incredible web apps'

  return /* html */`
    <style>
      main {
        text-align: center;
      }
      img.waveorb-logo {
        max-height: 174px;
        max-width: 90%;
      }
    </style>
    <div>
      <img class="waveorb-logo" src="/img/waveorb-logo-full.svg" height="174" alt="waveorb-logo">
      <h1>Welcome to my homepage</h1>
      <p>The complete framework for building fast applications.</p>
    </div>
  `
}
