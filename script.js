let rating = 0;
let prerating = 0;
let width = screen.width;
document.getElementById("f-width").style.width = width;

function submit() {
  var new_page;
  if (rating > 0) {
    document.getElementById('main').innerHTML = `
    <div class="Sub_img center">
    <img src="/images/illustration-thank-you.svg" alt="Thank you">
  </div>
  <div class="rating_value white center">
    <p id="num_select center" class="rating_para">
    You selected  ${rating} out of 5

    </p>
  </div>
  <div class="text white">
    <H1 class="white center">

      Thank you!
    </H1>
    <p class="white center">

      We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch!
    </p>
  </div> `

  }

}
function set_rating_value(star) {
  console.log(star);
  rating = star;
}
