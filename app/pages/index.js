module.exports = async function($) {
  $.page.title = 'Index'

  return /* html */`
    <style>
      main {
        text-align: left;
        background-color: hsla(200,100%,25%,0.1);
        font-family: monospace;
        padding-top: 2.5rem;
      }

      h3,
      h2 {
        font-size: 25px;
        margin: 10px;
      }

      #img {
        display: flex; justify-content: center;
      }

      p {

        margin: 5px 20px 20px 15px;
        text-align: left;
        font-size: 16px;
      }

    </style>
<div id="img">
<img src="img/ielody-modified.png" width="160" align=middle alt="portfolio">
</div>
<h2>About me</h2>

<p>After years of traveling and living I have settled amongst the canal houses in Amsterdam.
I might be a datamapper for the media company Nielsen for now, but my ambition is to work as
a web developer and designer. My education covers a lot of topics; computer science, languages and media science.
</p>

<hr>
<h3>In the works</h3>
<p>
      I build functional websites that are easy on the eye and user-friendly, and believe that a clean and simple design
      is usually the best. In addition to coding projects I also do some writing, both of which you can find in My portfolio.
      </p>

  `
}
