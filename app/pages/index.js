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
        margin: 20px;
      }

      p {

        margin: 5px 20px 25px 25px;
        text-align: left;
        font-size: 16px;
      }

      #banner {
      position: top;
      }

    </style>

<div id="banner"></div>

<div id="img">
<img src="img/ielody-modified.png" width="160" align=middle alt="portfolio">
</div>



<h2>About me</h2>

<p>
Hello! My name is Ingeborg and I'm a problem-solver. My love of
new challenges has brought me on the path of <strong>web development</strong>, and
I build user-friendly websites with a clean and simple design. No fuzz. No drama.<br><br>
I also have experience as a <strong>SEO writer</strong> and worked as a freelance Norwegian <strong>translator</strong> for years.
Take a look at my portfolio to see examples of what I can do.
</p>

<hr>
<h3>What I can help you with</h3>
<ul>
      <li>Build you a simple and user-friendly website</li>
      <li>Write blog articles with SEO for your website</li>
      <li>Be your personal cheerleader (although I'm not really qualified for that)</li>

</ul>
<footer>
<a href="mailto:ieldoy@gmail.com">Send me an email if you're curious</a></footer>
  `
}
