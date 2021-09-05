module.exports = async function($) {
  $.page.title = 'Portfolio'

  return /* html */`
    <style>
      main {
        text-align: center;
        padding: 2rem 0;
        max-width: 600px;
        background-color: hotpink;
      }

      a.button::after {
  border-radius: 50%;
  border-top: .1em solid #2F56B0;
  content: "";
  position: absolute;
    right: 0;
    bottom: .14em;
    left: 0;
}


</style>

</head>
  <body>


<div>
  <h2>Article</h2>
  <p>About Copywriting</p>
  </div>

  <div class="travel blog">
  <a class="button" href="www.travelartaction.com" target="blank">Take me to your blog</a>
</div>
  `
}