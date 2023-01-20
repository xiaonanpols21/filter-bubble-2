import '../styles/style.css'
import * as d3 from 'd3';
import gsap from "gsap";

// Data D3
const data = [
    {
      koppigheid: '1-15',
      schermtijd: '1-3',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '16-31',
      schermtijd: '4-7',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '32-45',
      schermtijd: '8+',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '1-3',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '1-15',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '32-45',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '16-31',
      schermtijd: '8+',
      gekozenTiktok: 1,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '46-50',
      schermtijd: '8+',
      gekozenTiktok: 1,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '1-15',
      schermtijd: '8+',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '16-31',
      schermtijd: '4-7',
      gekozenTiktok: 3,
    },
    {
      koppigheid: '32-45',
      schermtijd: '8+',
      gekozenTiktok: 3,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '32-45',
      schermtijd: '1-3',
      gekozenTiktok: 3,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '46-50',
      schermtijd: '4-7',
      gekozenTiktok: 3,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '1-15',
      schermtijd: '1-3',
      gekozenTiktok: 3,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '1-15',
      schermtijd: '8+',
      gekozenTiktok: 0,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '16-31',
      schermtijd: '8+',
      gekozenTiktok: 2,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '32-45',
      schermtijd: '1-3',
      gekozenTiktok: 0,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '32-45',
      schermtijd: '4-7',
      gekozenTiktok: 2,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '46-50',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '1-15',
      source: 'Worldwar',
      schermtijd: '1-3',
      gekozenTiktok: 1,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '1-15',
      schermtijd: '4-7',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '46-50',
      schermtijd: '1-3',
      gekozenTiktok: 0,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'Noit',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '16-31',
      schermtijd: '4-7',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '32-45',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '46-50',
      schermtijd: '4-7',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '1-15',
      schermtijd: '4-7',
      gekozenTiktok: 1,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '1-15',
      schermtijd: '1-3',
      gekozenTiktok: 0,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '46-50',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: '16-31',
      schermtijd: '4-7',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '16-31',
      schermtijd: '4-7',
      gekozenTiktok: 0,
      deelGedrag: "Soms",
    },
    {
      koppigheid: "32-45",
      schermtijd: '8+',
      gekozenTiktok: 1,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '1-15',
      schermtijd: '8+',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '16-31',
      schermtijd: '1-3',
      gekozenTiktok: 3,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '32-45',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '32-45',
      schermtijd: '8+',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: '46-50',
      schermtijd: '4-7',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '1-15',
      schermtijd: '4-7',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '4-7',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '4-7',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '4-7',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '16-31',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '16-31',
      schermtijd: '4-7',
      gekozenTiktok: 3,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '32-45',
      schermtijd: '8+',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '4-7',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '1-15',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '1-15',
      schermtijd: '4-7',
      gekozenTiktok: 3,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '1-3',
      gekozenTiktok: 3,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '1-3',
      gekozenTiktok: 2,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '32-45',
      schermtijd: '1-3',
      gekozenTiktok: 3,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: '32-45',
      schermtijd: '4-7',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '32-45',
      schermtijd: '8+',
      gekozenTiktok: 3,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '46-50',
      schermtijd: '8+',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: '16-31',
      schermtijd: '4-7',
      gekozenTiktok: 3,
      deelGedrag: "Altijd",
    },
];

// ColorPicker deelGedrag
function colorPicker(d) {
    if (d.deelGedrag == "Altijd") {
        return "#68E77A";
    } else if (d.deelGedrag == "Vaak") {
        return "#FDDC80";
    } else if (d.deelGedrag == "Soms") {
        return "#06B4FF";
    } else {
        return "#D382FF"; // Nooit
    }
};

// Bron: https://codepen.io/xiao-nan-pols/pen/JjBrVWZ?editors=1010
var xCenter = [-50, 300, 500, 800];
var yCenter = [200, -50, 200, 100];

function updateKoppigheid(data, buttonPressed, whichBtn ) {

    // Koppigheid
    let newData = [];
    // Zoek alle knoppen met de class 'active'. Voor elke knop, kijken we naar het label en gebruiken we dat als filter.
    // Doordat we .push gebruiken breiden we de newData array telkens uit met meer data als er meer knoppen actief zijn

    if (buttonPressed) {
        document.querySelectorAll("#koppigheid button.active").forEach(button => {
            const dataFilter = data.filter(d => d.koppigheid == button.innerText);
            console.log(dataFilter);
            newData.push(dataFilter);
        })
    } else {
        newData = data;
    };

    // Zijn er geen knoppen met de class active? Dan blijft newData leeg en vullen we het met data:
    if (newData.length == 0) {
        newData = data; 
    }
    
    console.log(newData);

    d3.forceSimulation(data)
        .force('charge', d3.forceManyBody().strength(20))
        .force('x', d3.forceX().x(function(d) {
            return xCenter[d.gekozenTiktok];
        }))
        .force('y', d3.forceY().y(function(d) {
            return yCenter[d.gekozenTiktok];
        }))
        .force('collision', d3.forceCollide().radius(function(d) {
            return 25;
        }))
        .on('tick', ticked)
    ;

    function ticked() {
        d3.select('.bubbles')
            .selectAll('circle')
            .data(newData)
            .join('circle')
            .attr("r", 20)
            .attr("fill", d => 
                colorPicker(d)
            )
            .attr('cx', function(d) {
                return d.x;
            })
            .attr('cy', function(d) {
                return d.y;
            });
    };
};

// function updateSchermtijd(data, buttonPressed, whichBtn ) {
//     // Koppigheid
//     let newData;
//     if (buttonPressed) {
//         if (whichBtn == 1) {
//             newData = data.filter(d => d.schermtijd == "1-3");
//         } else if (whichBtn == 2) {
//             newData = data.filter(d => d.schermtijd == "4-7");
//         } else if (whichBtn == 3) {
//             newData = data.filter(d => d.schermtijd == "8+");
//         } 
//     } else {
//         newData = data;
//     };

//     d3.forceSimulation(data)
//         .force('charge', d3.forceManyBody().strength(20))
//         .force('x', d3.forceX().x(function(d) {
//             return xCenter[d.gekozenTiktok];
//         }))
//         .force('y', d3.forceY().y(function(d) {
//             return yCenter[d.gekozenTiktok];
//         }))
//         .force('collision', d3.forceCollide().radius(function(d) {
//             return 25;
//         }))
//         .on('tick', ticked)
//     ;

//     function ticked() {
//         d3.select('.bubbles')
//             .selectAll('circle')
//             .data(newData)
//             .join('circle')
//             .attr("r", 20)
//             .attr("fill", d => 
//                 colorPicker(d)
//             )
//             .attr('cx', function(d) {
//                 return d.x;
//             })
//             .attr('cy', function(d) {
//                 return d.y;
//             });
//     };
// };
// function updateDeelgedrag(data, buttonPressed, whichBtn ) {
//     // Koppigheid
//     let newData;
//     if (buttonPressed) {
//         if (whichBtn == 1) {
//             newData = data.filter(d => d.deelGedrag == "Altijd");
//         } else if (whichBtn == 2) {
//             newData = data.filter(d => d.deelGedrag == "Vaak");
//         } else if (whichBtn == 3) {
//             newData = data.filter(d => d.deelGedrag == "Soms");
//         } else if (whichBtn == 4) {
//             newData = data.filter(d => d.deelGedrag == "Nooit");
//         }
//     } else {
//         newData = data;
//     };

//     d3.forceSimulation(data)
//         .force('charge', d3.forceManyBody().strength(20))
//         .force('x', d3.forceX().x(function(d) {
//             return xCenter[d.gekozenTiktok];
//         }))
//         .force('y', d3.forceY().y(function(d) {
//             return yCenter[d.gekozenTiktok];
//         }))
//         .force('collision', d3.forceCollide().radius(function(d) {
//             return 25;
//         }))
//         .on('tick', ticked)
//     ;

//     function ticked() {
//         d3.select('.bubbles')
//             .selectAll('circle')
//             .data(newData)
//             .join('circle')
//             .attr("r", 20)
//             .attr("fill", d => 
//                 colorPicker(d)
//             )
//             .attr('cx', function(d) {
//                 return d.x;
//             })
//             .attr('cy', function(d) {
//                 return d.y;
//             });
//     };
// };

updateKoppigheid(data);
// updateDeelgedrag(data);
// updateSchermtijd(data);

d3.selectAll("#koppigheid button")
.on("click", e => {
    updateKoppigheid(data, true, e.target.value);
    e.target.classList.toggle("active");
});

// d3.selectAll("#deelgedrag button")
// .on("click", e => {
//     updateDeelgedrag(data, true, e.target.value);
// });

// d3.selectAll("#schermtijd button")
// .on("click", e => {
//     updateSchermtijd(data, true, e.target.value);
// });
// Bron: https://codepen.io/pen


// Functions
const legendaBtn = document.querySelector(".legenda-container button");
const legenda = document.querySelector(".legenda");

const filterBtn = document.querySelector(".filter");
const filter = document.querySelector(".f-inner-con");
const gereedBtn = document.querySelector(".gereed");

// Legenda
legenda.classList.add("none");

function showLegenda() {
    legenda.classList.toggle("show");
}
legendaBtn.addEventListener("click", showLegenda);

// Filter
filter.classList.add("none");

function showFilter() {
    filter.classList.add("show");
}
filterBtn.addEventListener("click", showFilter);

function closeFilter() {
    filter.classList.remove("show");
}
gereedBtn.addEventListener("click", closeFilter);
