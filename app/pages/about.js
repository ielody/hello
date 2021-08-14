module.exports = async function($) {
  $.page.title = 'About'

  return /* html */`
    <style>
      main {
        text-align: center;
        background-color: rgba(106, 70, 10, 0.3);
        font-family: courier;
      }
    </style>

  <h1>About</h1>
    <p>
      Travelinspo is all you need to plan your holiday.
    </p>
    <p>
      <a href="https://waveorb.com/about.html">
        Read more about Waveorb here
      </a>
    </p>
  `
}
