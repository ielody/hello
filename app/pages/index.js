module.exports = async function($) {
  $.page.title = 'Welcome to a creative space'
  $.page.description = "Can't decide which website layout you want for your business? Reach out to me!"
  return /* html */`
    <style>
      main {
        text-align: left;
        background-color: hsla(220,80%,50%,0.2);
        font-family: Helvetica;
        padding: 2rem 0;
        max-width: 600px;
        color: black;
      }

      h3,
      h2 {
        font-size: 20px;
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

      a.button{
        background: DarkMagenta;
        color: white;
        border-radius: 10px 50%;
        transition-duration: 0.3s;
      }

      .button:hover {
        background-color: hotpink;
        color: white;
      }
      img {
        width: auto ;
        max-width: 50% ;
        height: auto ;
      }
    </style>

<div id="img">
  <img src="img/ielody-modified.png" width="160" align=middle alt="portfolio">
</div>

<h1>About me</h1>

<p>
Hello! My name is Ingeborg and I'm a problem-solver. My love of
new challenges has brought me on the path of <strong>web development</strong>, and
I build user-friendly websites with a clean and simple design.
I am also a <strong>SEO article writer</strong> and freelance Norwegian <strong>translator</strong>.
Take a look at my <a href="https://ielody.com/portfolio.html" target="blank">portfolio</a> to see examples of what I can do.
</p>

<h3>What I can help you with</h3>
<ul>
  <li>Build a simple, customized and user-friendly website for your business </li>
  <li>Write SEO blog articles for your website to attract more traffic to your site</li>
</ul>


<div class="mail">
  <a class="button" href="mailto:ieldoy@gmail.com">Send me an email</a>
</div>
  `
}
