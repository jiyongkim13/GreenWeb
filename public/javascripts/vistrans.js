/* 버스 관련함수 */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var tree_bus = document.getElementById("tree_bus");

slider.oninput = function() {
  tree_bus.innerHTML = repeatimg(this.value*1.012/2.98, this.value*1.012/1.49 - this.value*1.012/2.98 );
  output_footprint.innerHTML = (+slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475).toFixed(2);
  setBubble(slider, bubble) 
  myAsyncFunctionbus()
};

/* 자동차 관련함수 */
var slider_car = document.getElementById("myRange_car");
var output_car = document.getElementById("demo_car");
var tree_car = document.getElementById("tree_car");

slider_car.oninput = function() {
  tree_car.innerHTML = repeatimg(this.value*0.1475/2.98, this.value*0.1475/1.49 - this.value*0.1475/2.98 );
  output_footprint.innerHTML = (+slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475).toFixed(2);
  setBubble(slider_car, carbubble) 
  myAsyncFunctioncar()
};

/* 자전거 관련함수*/
var slider_bike = document.getElementById("myRange_bike");
var output_bike = document.getElementById("demo_bike");
output_bike.innerHTML = slider_bike.value; 

slider_bike.oninput = function() {
  output_bike.innerHTML = this.value; 
  output_footprint.innerHTML = (+slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475).toFixed(2); 
};  


/* 도보 관련함수*/
var slider_walk = document.getElementById("myRange_walk");
var output_walk = document.getElementById("demo_walk");
output_walk.innerHTML = slider_walk.value; 

slider_walk.oninput = function() {
  output_walk.innerHTML = this.value; 
  output_footprint.innerHTML = (+slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475).toFixed(2); 
};  

/* 지하철 관련함수 */
var slider_train = document.getElementById("myRange_train");
var output_train = document.getElementById("demo_train");
var tree_train = document.getElementById("tree_train");

slider_train.oninput = function() {
  output_footprint.innerHTML = (+slider_train.value*1.008 + +slider.value*1.012 + +slider_car.value*0.1475).toFixed(2);
  tree_train.innerHTML = repeatimg(this.value*1.008/2.98, this.value*1.008/1.49 - this.value*1.008/2.98 );
  setBubble(slider_train, trainbubble) 
  myAsyncFunctiontrain() 
};

/* 총 탄소발자국 계산 함수 */
var output_footprint = document.getElementById("footprint");


/* 이미지 반복 함수 */

function repeatimg(num1, num2){
  return "<img src='../images/tree.png'>".repeat(+num1) + "<img src='../images/tree1.png'>".repeat(+num2) 

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

/* 버블 함수 */
const bubble = document.querySelector(".bubble");
const carbubble = document.querySelector(".carbubble");
const trainbubble = document.querySelector(".trainbubble");

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${50 - newVal * 1}px))`;
  bubble.style.opacity = 0.8; 
  // myAsyncFunction()
}



function delay(n){
  return new Promise(function(resolve){
      setTimeout(resolve,n*1000);
  });
}

async function myAsyncFunctionbus(){
  //Do what you want here 
  await delay(1);
  bubble.style.opacity = 0.2;
}
async function myAsyncFunctioncar(){
  //Do what you want here 
  await delay(1);
  carbubble.style.opacity = 0.2;
}
async function myAsyncFunctiontrain(){
  //Do what you want here 
  await delay(1);
  trainbubble.style.opacity = 0.2;
}
