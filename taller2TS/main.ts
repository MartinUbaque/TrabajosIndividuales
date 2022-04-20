import { series } from "./data.js";
import { Serie } from "./serie.js";



let  seriesTbody: HTMLElement = document.getElementById('series')!; 
let card: HTMLElement = document.getElementById('tarjeta')!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                          <td></td>
                          <td>${c.cadena}</td>
                           <td>${c.temporadas}</td>`;
                           seriesTbody.appendChild(trElement);
    let aElement = document.createElement("a");
    aElement.innerHTML = c.nombre;
    aElement.href="javascript:void(0)"
    aElement.onclick = () => {
        card.innerHTML = `<div class="card">

                           <img class="card-img-top" src="${c.imagen}" alt="Card image cap">

                            <div class="card-body">
                            <h1 class="card-title">${c.nombre}</h1>
                            <p class="card-text">${c.descripcion}</p>
                            <a href="${c.link}" class="btn btn-primary">Ir al sitio!</a>
                            </div>
                            </div>`
  }
  trElement.children[1].appendChild(aElement);
  seriesTbody.appendChild(trElement);
});
  let trElement = document.createElement("tr");
    trElement.innerHTML = `<td colspan="3"> Promedio de Temporadas:${getPromedioTemporadas(series)} </td>`;
    seriesTbody.appendChild(trElement);
}

  function getPromedioTemporadas(series: Serie[]): number{
    let suma: number = 0;
    series.forEach((serie)=> suma = suma+serie.temporadas);
    let promedio: number = suma/series.length;
    return promedio;
  }

  
