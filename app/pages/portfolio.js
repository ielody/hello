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
  }

  main {
    text-align: center;
    padding: 20px 0;
    max-width: 600px;
    background-color: hsla(220,80%,50%,0.2);
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
      <a href="/india.html"><img src="/img/image-41941.jpeg" alt="Colorful people by the river in Ganges in India" style="width:100%>"></a>
<h3>Travel article about Varanasi in India</h3>
  <p>
  "Varanasi is everything I had imagined about India in one and the same city - what a colorful chaos! Varanasi is the city of the Ganges flows through and pilgrims come here every year to cleanse themselves with a bath in the river." <br></p>
    </div>
  </div>

  <div class="column">
    <div class="content">
    <img src="/img/IMG_2351.jpeg" alt="Traditional fishing nets by the harbour at Fort Kochi" style="width:100%">
<h3>Travel article about Fort Kochi</h3>
  <p>Just a short ferry ride across the water from the city of Kochi is Fort Kochi. This was originally a fishing village, something you see again today along the water front where the old-fashioned fishing nets are stretched out ready for use.<br></p>
  </div>
</div>

<div class="column">
    <div class="content">
    <img src="/img/munnar3.jpeg" alt="Tea plantations in Munnar" style="width:100%">
<h3>Travel article about Munnar</h3>
<p>Munnar is a six-hour bus ride from Kochi, and is a mountain village surrounded by tea plantations, lakes and beautiful scenery. Already on the way up in the mountains, the view of lush forests, waterfalls and endless tea plantations was truly spectacular. <br></p>
        </div>
      </div>
</body>
  `
}