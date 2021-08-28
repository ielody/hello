module.exports = async function($) {
  $.page.title = 'Index'

  return /* html */`
    <style>
      main {
        text-align: left;
        background-color: hsla(200,100%,25%,0.1);
        font-family: monospace;
        padding-top: 3rem;
      }

      h1 {
        text-align: center;
        font-size: 20px;
        margin: 20px;
      }

      img {
        margin-top: 90px;
        margin-bottom: 35px;
        margin-right: 25px;
        margin-left: 5px;
        position: relative;
      }

      p {

        margin: 25px;
        text-align: left;

      }
    </style>

<img src="img/ielody-modified.png" width="150" align="right" alt="portfolio">

<h2>About me</h2>
<p>
After years of traveling from continent to continent I have settled amongst the tallest people in the world, in Amsterdam
right by the canal houses. I might be a datamapper for the media company Nielsen for now, but my ambition is to work as
an expert coder and designer. My education spans over a lot of topics, mainly computer science, languages and media science.
</p>
<hr>
<h3>In the works</h3>
<p>
      Currently I am studying to become a front end developer to build functional websites that are easy on the eye,
      in close co-operation with the client. After all, isn't that what we all want? My portfolio is constantly expanding,
      and will be available on this page as soon as they are finished.
    </p>

  `
}
