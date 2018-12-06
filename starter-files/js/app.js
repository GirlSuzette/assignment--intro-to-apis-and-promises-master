var request = superagent;
var API_URL = "https://restcountries.eu/rest/v2/all";
var container = document.querySelector(".countries-container");

request.get(API_URL).then(function(response) {
  var paises = response.body;

  // console.log(paises);

  paises.forEach(function(pais) {
    var name = pais.name;
    var flag = pais.flag;
    var capital = pais.capital;

    //     <div class="country-card">
    //     <img class="country-flag" src="https://restcountries.eu/data/mex.svg" alt="flag">
    //     <h4 class="country-name">Mexico</h4>
    //     <p class="country-capital">Mexico City</p>
    //   </div>

    var div = document.createElement("div");
    div.setAttribute("class", "country-card");
    container.appendChild(div);

    var allInfor =
      '<img class="country-flag" src="' +
      flag +
      '" alt="flag"></img>' +
      '<h4 class="country-name">' +
      name +
      "</h4>" +
      '<p class="country-capital">' +
      capital +
      "</p>";
    div.innerHTML = allInfor;
  });
});
