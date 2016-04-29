/*jshint esversion: 6 */
const myDataRef = new Firebase('https://ce5csxm61gl.firebaseio-demo.com/');

document.getElementById("clearing-form__field__button").addEventListener("click", function(){
  var name = document.getElementById("clearing-form__field--name").value;
  var grade = document.getElementById("clearing-form__field--grade").value;
  var places =document.getElementById("clearing-form__field--places").value;

  myDataRef.push({name: name, grade: grade, places: places});

  name = document.getElementById("clearing-form__field--name").value = '';
  grade = document.getElementById("clearing-form__field--grade").value = '';
  places =document.getElementById("clearing-form__field--places").value = '';
});

myDataRef.on('child_added', function(snapshot) {
  var message = snapshot.val();
  var key = snapshot.key();
  displayOpportunity(message.name, message.grade, message.places, key);
});



document.getElementById("deleteItem").addEventListener("click", function(){
  var reftoDelete = new Firebase('https://ce5csxm61gl.firebaseio-demo.com/-KGSH2igrcw_uv9IdPRC');
  reftoDelete.remove();
});

function displayOpportunity(name, grade, places, key) {
  var opportunitySelector = document.getElementById('clearing-opportunities-table');
  var template = `<tr><td>${name}</td><td>${grade}</td><td>${places}</td></tr>`;
  opportunitySelector.innerHTML = opportunitySelector.innerHTML + template;
}
