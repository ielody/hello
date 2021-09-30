module.exports = async function($) {
  $.page.title = 'contactme'

  return /* html */`

  <div class="container">
    <h2>Let's have a conversation.</h2>
  </div>
  <div class="row">
   <div class="column">
      <img src="/img/pexels-olya-kobrusevaweb.jpeg" style="width:100%">
    </div>
    <div class="column">
      <!--<form action="/action_page.php">-->
        <label for="fname">Name</label>
        <input type="text" id="fname" name="firstname" placeholder="That's you..">
        <label for="lname">Email address</label>
        <input type="text" id="lname" name="lastname" placeholder="I will keep it a secret..">
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="It's your time to shine.." style="height:170px"></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</div>

  `
}