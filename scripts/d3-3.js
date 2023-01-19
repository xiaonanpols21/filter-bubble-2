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

function update(data, buttonPressed, whichBtn ) {
    let newData;
    if (buttonPressed) {
        if (whichBtn == 1) {
            newData = data.filter(d => d.koppigheid == "1-15");
            console.log(newData)
        } else if (whichBtn == 2) {
            newData = data.filter(d => d.koppigheid == "16-31");
            console.log(newData)
        }
    } else {
        newData = data;
    };

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
            .data(data)
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

update(data);

d3.selectAll("#koppigheid button")
.on("click", e => {
    update(data, true, e.target.value);
});
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
