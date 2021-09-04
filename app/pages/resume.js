module.exports = async function($) {
  $.page.title = 'Resume'

  return /* html */`
  <style>
  main {
    text-align: center;
    padding: 20px 0;
    max-width: 600px;
    background-color: lightpink;
  }


  h1 {
    font-size: 18px;
    text-align: left;
    display: inline;
    margin: 15px;
  }

  h2 {
    font-size: 16px;
    text-align: right;
    display: inline;
    margin: 15px;
    font-style: italic;
  }

  .grid-container {
    display: grid;
    grid-row-gap: 50px lightpink;
  }

  .grid-item {
    border: 15px solid lightpink;
    padding: 25px;
    font-size: 16px;
    text-align: left;
    background-color: white;
  }

  .experience {
    text-align: center;
    font-size: 22px;
    background-color: hotpink;
    margin: 10px 15px;
  }

  .education {
    text-align: center;
    font-size: 20px;
    background-color: plum;
    margin: 10px 15px;
  }

</style>
</head>

<body>
  <div class="grid-container">

<div class="experience"><strong>Work experience</strong></div>

<div class="grid-item">
  <h1>Editor for Nielsen</h1>
  <h2>Netherlands, 2020-2021</h2>
    <ul>
      <li>Managing and maintaining a large database</li>
      <li>Editing and adding relevant information in the database in a variety of languages</li>
      <li>Communicating requests within an international media company</li>
    </ul>
</div>

<div class="grid-item">
  <h1>Freelance translator and writer</h1>
  <h2>Netherlands, 2018-2020</h2>
    <ul>
      <li>GetYourGuide: Translated travel texts from English to Norwegian</li>
      <li>Hunkemöller: Translated the Norwegian website</li>
    </ul>
</div>

<div class="grid-item">
  <h1>Editor and writer at TravelBird</h1>
  <h2>Netherlands, 2014-2018</h2>
    <ul>
      <li>Writing SEO texts in English and Norwegian</li>
      <li>Analyzing data and user patterns by using Google Analytics and Hotjar</li>
      <li>Implementing data in a database for every offer</li>
      <li>Responsible for social media and Wordpress blog</li>
    </ul>
</div>

<div class="education"><strong>Education</strong></div>

<div class="grid-item">
  <h1>B.A. Media Science<h1>
  <h2>Norway, 2006-2009</h2>
    <ul>
      <li>Online news publication: Writing and publishing articles</li>
      <li>Media analysis: Film, newspaper and television</li>
      <li>Short film production</li>
      <li>Apprenticeship in Telenor Group</li>
      <li>Market research and analysis</li>
    </ul>
</div>

<div class="grid-item">
  <h1>B.A. Major in Japanese</h1>
  <h2>Norway, 2004-2006</h2>
    <ul>
      <li>Japanese language; Basic and intermediate course</li>
      <li>One semester in Sapporo in North Japan</li>
      <li>Subjects of Japanese society, culture and history</li>
      <li>One year at Josai International University in Japan</li>
    </ul>
</div>

<div class="grid-item">
  <h1>Computer Science</h1>
  <h2>Norway, 2003-2004</h2>
    <ul>
      <li>HTML and CSS</li>
      <li>Java programming</li>
    </ul>
  </div>
</div>
  `
}