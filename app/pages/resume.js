module.exports = async function($) {
  $.page.title = 'Resume'

  return /* html */`
    <style>
      main {
        text-align: center;
        background-color: hsla(9, 100%, 64%, 0.5);
        font-family: arial;
      }
    </style>


 <h1>About</h1>
    <p>
      Travelinspiration is all you need to plan your holiday.
    </p>
    <h2>Find your next trip</h2>
    <p>
      <a href="https://waveorb.com/about.html">
        Read more about Waveorb here
      </a>
    </p>

  `
}