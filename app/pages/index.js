module.exports = async function($) {
  $.page.title = 'Web developer'
  $.page.description = "Offering creative services"
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
        font-size: 15px;
        margin: 10px;
      }

      h1 {
        font-size: 30px;
        margin: 10px;
      }

      #img {
        display: flex;
        justify-content: center;
        margin: 20px;
      }

      p {
        margin: 5px 20px 25px 25px;
        text-align: left;
        font-size: 16px;
      }

    </style>

<div id="img">
  <img src="img/ielody-modified.png" width="160" align=middle alt="portfolio">
</div>

<h1>About me</h1>

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
  <li>Build a simple, customized and user-friendly website </li>
  <li>Write SEO blog articles for your website to attract more organic traffic to the site</li>
</ul>

<div class="mail">
  <a href="mailto:ieldoy@gmail.com">Send me an email</a>
</div>
  `
}
