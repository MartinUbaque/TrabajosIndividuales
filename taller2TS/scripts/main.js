import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var card = document.getElementById('tarjeta');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                          <td></td>\n                          <td>").concat(c.cadena, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        var aElement = document.createElement("a");
        aElement.innerHTML = c.nombre;
        aElement.href = "javascript:void(0)";
        aElement.onclick = function () {
            card.innerHTML = "<div class=\"card\">\n\n                           <img class=\"card-img-top\" src=\"".concat(c.imagen, "\" alt=\"Card image cap\">\n\n                            <div class=\"card-body\">\n                            <h1 class=\"card-title\">").concat(c.nombre, "</h1>\n                            <p class=\"card-text\">").concat(c.descripcion, "</p>\n                            <a href=\"").concat(c.link, "\" class=\"btn btn-primary\">Ir al sitio!</a>\n                            </div>\n                            </div>");
        };
        trElement.children[1].appendChild(aElement);
        seriesTbody.appendChild(trElement);
    });
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=\"3\"> Promedio de Temporadas:".concat(getPromedioTemporadas(series), " </td>");
    seriesTbody.appendChild(trElement);
}
function getPromedioTemporadas(series) {
    var suma = 0;
    series.forEach(function (serie) { return suma = suma + serie.temporadas; });
    var promedio = suma / series.length;
    return promedio;
}
