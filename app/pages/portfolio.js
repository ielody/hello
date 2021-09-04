module.exports = async function($) {
  $.page.title = 'Portfolio'

  return /* html */`
    <style>
      main {
        text-align: center;
        padding: 2rem 0;
        max-width: 1000px;
        background-color: hotpink;
      }

      div {
  background-color: white;
  width: 900px;
  border: 5px grey;
  padding: 20px;
  margin: 20px;
  text-align: left;

  justify-content: center;
      }

      h2 {
        font-size: 22px;
      }

</style>

</head>
  <body>


  <div>
  <h2>Article</h2>
  <p>About Copywriting</p>
  </div>



  `
}