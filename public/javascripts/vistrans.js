
/* 버스 관련함수 */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var tree_bus = document.getElementById("tree_bus");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  tree_bus.innerHTML = repeatimg(this.value);
  output_footprint.innerHTML = +slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475; 
};
/* 자동차 관련함수 */
var slider_car = document.getElementById("myRange_car");
var output_car = document.getElementById("demo_car");
output_car.innerHTML = slider_car.value;

slider_car.oninput = function() {
  output_car.innerHTML = this.value;
  tree_car.innerHTML = repeatimg(this.value);
  output_footprint.innerHTML = +slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475; 
};

/* 자전거 관련함수*/
var slider_bike = document.getElementById("myRange_bike");
var output_bike = document.getElementById("demo_bike");
output_bike.innerHTML = slider_bike.value; 

slider_bike.oninput = function() {
  output_bike.innerHTML = this.value; 
  output_footprint.innerHTML = +slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475; 
};  


/* 도보 관련함수*/
var slider_walk = document.getElementById("myRange_walk");
var output_walk = document.getElementById("demo_walk");
output_walk.innerHTML = slider_walk.value; 

slider_walk.oninput = function() {
  output_walk.innerHTML = this.value; 
  output_footprint.innerHTML = +slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475; 
};  

/* 지하철 관련함수 */
var slider_train = document.getElementById("myRange_train");
var output_train = document.getElementById("demo_train");
output_train.innerHTML = slider_train.value;

slider_train.oninput = function() {
  output_train.innerHTML= this.value;
  output_footprint.innerHTML = +slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475; 
};

/* 총 탄소발자국 계산 함수 */
var output_footprint = document.getElementById("footprint");


/* 이미지 반복 함수 */

function repeatimg(num){
  return "<img src='../images/tree.png'>".repeat(+num) 
}


/* 반복 함수 */
var r = document.querySelector(':root');

function myFunction_set() {
  var heightwater = 70 + (+slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475)* -7;
  heightwater = heightwater.toString() + '%';
  r.style.setProperty('--height-water', heightwater);
}


function myFunction() {
  myFunction_set()
  var element1 = document.getElementById("wave-01");
  element1.classList.toggle("wave-01-act");
  var element2 = document.getElementById("wave-02");
  element2.classList.toggle("wave-02-act");
  var element3 = document.getElementById("wave-03");
  element3.classList.toggle("wave-03-act");
  var element4 = document.getElementById("wavesc");
  element4.classList.toggle("wavesc-act");
  myFunction_lines()
}

function myFunction_lines() {
  var element5 = document.getElementById("h_line");
  element5.classList.toggle("h_line_new");
}