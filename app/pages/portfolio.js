module.exports = async function($) {
  $.page.title = 'Portfolio'

  return /* html */`
  <style>

    * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    background-color: #E6E6FA;
    text-align: center;
  }

  main {
    padding: 20px 0;
    max-width: 600px;
    background-color: hsla(220,80%,50%,0.2);
  }

  .row {
    margin: 8px -16px;
  }

  /* padding between each column. */
  .row,
  .row > .column {
    padding: 8px;
  }

  /* creates two equal columns that floats next to each other. */
  .column {
    float: left;
    width: 50%
  }

  /*clear floats after row*/
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .content {
    background-color: #fff6f6;
    padding: 10px;
  }

  a, a:focus, a:active {
  text-decoration: none;
  color: inherit;
    }

  a:hover {
  color: hotpink;
  text-decoration: none;
  }

  /* Responsive layout - makes a two columns layout instead of one */
  @media screen and (max-width: 900px) {
      .column {
        width: 50%;
      }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      }
    }

</style>

<body>

<!-- Main Content -->
<div class="main">
<h3>Portfolio</h3>

<!-- Gallery Grid  -->
<div class="row">
  <div class="column">
    <div class="content">
      <a href="/india.html"><img src="/img/varanasi.jpeg" alt="Colorful people by the river in Ganges in India" style="width:100%>"><h5>Travel segment: From tea plantations to Ganges</h5></a>
  <p>
  "Diverse India is one of the world's most colorful and exciting countries, and a beautiful jumble of religion, culture, language and food - a destination everyone should visit at least once in their life." <br></p>
    </div>
  </div>

<div class="column">
  <div class="content">
  <a href="https://crowdfundhq.com/5-reasons-your-crowdfunding-site-should-have-a-blog.html"><img src="/img/blogbusinessweb2.jpeg" alt="Why your website should have a blog" style="width:100%">
  <h5>5 reasons your crowdfunding site should have a blog</h5></a>
  <p>This SEO article was written for CrowdfundHQ's blog to put focus on the platform's blog feature, attract more organic traffic and encourage platform users to actively use a blog on their business website.</p>
  </div>
</div>

</body>
  `
}