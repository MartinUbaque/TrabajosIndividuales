import { series } from "./data";
import { Serie } from "./serie";



let  seriesTbody: HTMLElement = document.getElementById('series')!; 
let promedio :number=getPromedioTemporadas(series);
renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                          <td>${c.nombre}</td>
                          <td>${c.cadena}</td>
                           <td>${c.temporadas}</td>`;
                           seriesTbody.appendChild(trElement);
  });
  let trElement = document.createElement("tr");
    trElement.innerHTML = `<td colspan="3"> Promedio de Temporadas:${promedio} </td>`;
    seriesTbody.appendChild(trElement);
}

  function getPromedioTemporadas(series: Serie[]): number{
    let suma: number = 0;
    series.forEach((serie)=> suma = suma+serie.temporadas);
    let promedio: number = suma/series.length;
    return promedio;
  }

  
