import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var promedio = getPromedioTemporadas(series);
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                          <td>").concat(c.nombre, "</td>\n                          <td>").concat(c.cadena, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=\"3\"> Promedio de Temporadas:".concat(promedio, " </td>");
    seriesTbody.appendChild(trElement);
}
function getPromedioTemporadas(series) {
    var suma = 0;
    series.forEach(function (serie) { return suma = suma + serie.temporadas; });
    var promedio = suma / series.length;
    return promedio;
}
