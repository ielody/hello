module.exports = async function($) {
  $.page.title = 'Resume'

  return /* html */`
  <style>
  main {
    text-align: center;
    padding: 20px 0;
    max-width: 600px;
    background-color: hsla(220,80%,50%,0.2);
  }

  h1 {
    font-size: 16px;
    margin: 5px;
    align-content: left;
  }

  h2 {
    font-size: 14px;
    margin: 15px;
    font-style: italic;
    align-content: right;
  }

  .grid-container {
    display: grid;
    grid-row-gap: 20px;
    margin: 26px;
  }

  .grid-item {
    padding: 25px;
    font-size: 16px;
    text-align: left;
    background-color: white;
    border-radius: 12px;
  }

  #experience,
  #education {
    text-align: center;
    font-size: 22px;
    margin: 10px 15px;
  }

   {
    text-align: center;
    font-size: 20px;
    margin: 10px 15px;
  }

</style>
</head>

<body>

  <div class="grid-container">

<div id="experience"><strong>Work experience</strong></div>

<div class="grid-item">
  <h1>Editor for Nielsen</h1>
  <h2>Amsterdam | 2020-2021</h2>
    <ul>
      <li>Managing and maintaining a large database</li>
      <li>Editing and adding relevant information in the database in a variety of languages</li>
      <li>Communicating requests within an international media company</li>
    </ul>
</div>

<div class="grid-item">
  <h1>Freelance translator and writer</h1>
  <h2>Amsterdam | 2018-2020</h2>
    <ul>
      <li>GetYourGuide: Translated travel texts from English to Norwegian</li>
      <li>Hunkemöller: Translated the Norwegian website</li>
    </ul>
</div>

<div class="grid-item">
  <h1>Editor and writer at TravelBird</h1>
  <h2>Amsterdam | 2014-2018</h2>
    <ul>
      <li>Writing SEO texts in English and Norwegian</li>
      <li>Analyzing data and user patterns with Google Analytics and Hotjar</li>
      <li>Implementing data in a database for every offer</li>
      <li>Responsible for social media and Wordpress blog</li>
    </ul>
</div>

<div id="education"><strong>Education</strong></div>

<div class="grid-item">
  <h1>Media Science, Bachelor of Arts<h1>
  <h2>University of Oslo | 2006-2009</h2>
    <ul>
      <li>Online news publication: Writing and publishing articles</li>
      <li>Media analysis: Film, newspaper and television</li>
      <li>Short film production</li>
      <li>Apprenticeship in Telenor Group</li>
      <li>Market research and analysis</li>
    </ul>
</div>

<div class="grid-item">
  <h1>Japanese, Bachelor of Arts</h1>
  <h2>University of Oslo & Josai Int. University, Japan | 2004-2007</h2>
    <ul>
      <li>Japanese language; Intermediate</li>
      <li>One semester in Sapporo in North Japan</li>
      <li>Subjects of Japanese society, culture and history</li>
      <li>One year at Josai Int. University</li>
    </ul>
</div>

<div class="grid-item">
  <h1>Computer Science, first year Bachelor</h1>
  <h2>University of Oslo | 2003-2004</h2>
    <ul>
      <li>Introduction to HTML and CSS</li>
      <li>Introduction to Java programming</li>
    </ul>
  </div>
</div>
  `
}