function calculateArea() {
  //Get the values of length and width inputs
  var length = document.getElementById("length").Value;
  var width = document.getElementById("width").value;

  //Calculate the area of the rectangle
  var area = length * width;

  //Display result
  document.getElementById("result").innerhtml = "The area of the triangle is " + area;
}