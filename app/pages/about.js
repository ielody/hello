module.exports = async function($) {
  $.page.title = 'About'

  return /* html */`
    <style>
      main {
        text-align: center;
        background-color: hsla(9, 100%, 64%, 0.5);
        font-family: arial;
      }
    </style>

 <img src="img/pexels-james-wheeler-417074.jpg" height="174" alt="travel">

 <p>
 Read about our destinations and enjoy our best tips to enjoy a new destination.
</p>

 <h1>About</h1>
    <p>
      Travel inspiration is all you need to plan your holiday.
    </p>
    <h4>Find your next trip</h4>
    <p>
      <a href="https://waveorb.com/about.html">
        Read more about Travel inspiration here
      </a>
    </p>

  `
}
