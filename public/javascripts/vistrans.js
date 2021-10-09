
/* 버스 관련함수 */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

/* 지하철 관련함수 */
var slider_train = document.getElementById("myRange_train");
var output_train = document.getElementById("demo_train");
output_train.innerHTML = slider_train.value;

slider_train.oninput = function() {
  output_train.innerHTML= this.value;
};