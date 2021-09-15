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
  }

  main {
    text-align: center;
    padding: 20px 0;
    max-width: 600px;
  }

  h1 {
    font-size: 30px;
    word-break: break-all;
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
<h1>Portfolio</h1>

<!-- Gallery Grid  -->
<div class="row">
  <div class="column">
    <div class="content">
      <a href="/india.html"><img src="/img/varanasi.jpeg" alt="Colorful people by the river in Ganges in India" style="width:100%>"><h3>Travel segment: From tea plantations to the banks of Ganges</h3></a>
  <p>
  "Diverse India is one of the world's most colorful and exciting countries, and a beautiful jumble of religion, culture, language and food - a destination everyone should visit at least once in their life." <br></p>
    </div>
  </div>

  <div class="column">
    <div class="content">
    <a href="https://crowdfundhq.com/5-reasons-your-crowdfunding-site-should-have-a-blog.html" target="blank"><img src="/img/blogbusinessweb2.jpeg" alt="Why your website should have a blog" style="width:100%">
<h3>5 reasons your crowdfunding site should have a blog</h3></a>
  <p>This SEO article was written for CrowdfundHQ's blog to put focus on the platform's blog feature, attract more organic traffic and encourage platform users to actively use a blog on their business website.</p>
  </div>
</div>

</body>
  `
}