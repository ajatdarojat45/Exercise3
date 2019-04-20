var planets = [];


fetch('../../../../latihan/Exercise3/assets/data/planets.json')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  var data = JSON.stringify(json);
  planets = JSON.parse(data);
  planet = planets.map(f_showData);
  document.getElementById('tBody').innerHTML = planet;
})

function ajat(){
  var q = document.getElementById('filter').value;
  data = planets.filter(function (planet) {
    return planet.name.includes(q) || planet.rotation_period.includes(q) || planet.orbital_period.includes(q) || planet.diameter.includes(q) || planet.climate.includes(q) || planet.gravity.includes(q) || planet.terrain.includes(q) || planet.surface_water.includes(q) || planet.population.includes(q)
  }); 
  
  planet = data.map(f_showData);
  document.getElementById('tBody').innerHTML = planet;
}

function f_showData(value, index) {
  return "<tr><td>"+(index+1)+
          "</td><td>"+value.name+
          "</td><td>"+value.rotation_period+
          "</td><td>"+value.orbital_period+
          "</td><td>"+value.diameter+
          "</td><td>"+value.climate+
          "</td><td>"+value.gravity+
          "</td><td>"+value.terrain+
          "</td><td>"+value.surface_water+
          "</td><td>"+value.population+
          "</td></tr>";
  
}