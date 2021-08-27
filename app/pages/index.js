module.exports = async function($) {
  $.page.title = 'Index'

  return /* html */`
    <style>
      main {
        text-align: center;
        background-color: hsla(25, 40%, 44%, 0.1);
        font-family: arial;
      }
    </style>

<h2>About me</h2>
<img src="img/ielody-modified.png" width="120" align="right" alt="portfolio">
<p>
After years of traveling I have settled amongst the tallest people in Amsterdam right by the canal houses, coding and writing.
</p>
<hr>
<h3>In the works</h3>
<p>
      Currently I am studying to become a front end developer to build functional websites that are easy on the eye.
      After all, isn't that what we all want?
    </p>

  `
}
