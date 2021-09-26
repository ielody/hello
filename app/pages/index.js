module.exports = async function($) {
  $.page.title = 'Welcome to a creative space'
  $.page.description = "Can't decide which website layout you want for your business? Reach out to me!"
  const email = Buffer.from('ieldoy@gmail.com').toString('base64')

  return /* html */`
    <style>
      main {
        text-align: left;
        background-color: hsla(220,80%,50%,0.2);
        font-family: Helvetica;
        max-width: 600px;
        padding: 2rem 0;
        color: black;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
        padding: 20px;
        background-color: #E6E6FA;
      }

      h3,
      h2,
      h1 {
        margin: 10px;
        text-align: center;
      }

      p {
        margin: 5px 20px 25px 25px;
        text-align: left;
        font-size: 16px;
      }

      .imgindex {
        text-align: center;
      }

    </style>

<div class="imgindex">
  <img src="img/ielody-modified.png" height="200" width="200" alt="portfolio image">
</div>

<h3>About me</h3>

<p>
Hello! My name is Ingeborg and I'm a problem-solver. My love of
new challenges has brought me on the path of <strong>web development</strong>, and
I build user-friendly websites with a clean and simple design.
I am also a <strong>SEO article writer</strong> and freelance Norwegian <strong>translator</strong>.
Take a look at my <a href="/india.html">portfolio</a> to see examples of what I can do.
</p>

<h4>What I can help you with</h4>
<ul>
  <li>Build a simple, customized and user-friendly website for your business </li>
  <li>Write SEO blog articles for your website to attract more traffic to your site</li>
</ul>


<div class="mail">
  <a class="button" id="a" href="">Send me an email</a>
  </div>

<script>
setTimeout(() => {
  var m = atob('${email}')
  var a = document.querySelector('#a')
  a.href = 'mailto:' + m
}, 5)
</script>

  `
}
