import '../styles/style.css'
import * as d3 from 'd3';
import gsap from "gsap";

// Get files
import * as d from "../public/data/data.js";
import * as v from "./variables";
import * as f from "./func";
   
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

function filterFunction(data) {
    // Data showen met filteren
    let newData = [];

    if (document.querySelector("#koppigheidForm").koppigheidName.value) {
        newData = data.filter(d => d.koppigheid == document.querySelector("#koppigheidForm").koppigheidName.value);
    } 
    
    if (document.querySelector("#deelgedragForm").deelgedragName.value) {
        newData = newData.filter(d => d.deelGedrag == document.querySelector("#deelgedragForm").deelgedragName.value);
    } 
    
    if (document.querySelector("#schermtijdForm").schermtijdName.value) {
        newData = newData.filter(d => d.schermtijd == document.querySelector("#schermtijdForm").schermtijdName.value);
    }

    if (newData.length == 0) {
        newData = data;
    }

    d3.forceSimulation(newData)
        .force('charge', d3.forceManyBody().strength(20))
        .force('x', d3.forceX().x (d => {
            return v.xCenter[d.gekozenTiktok];
        }))
        .force('y', d3.forceY().y (d => {
            return v.yCenter[d.gekozenTiktok];
        }))
        .force('collision', d3.forceCollide().radius(d => {
            return 15;
        }))
        .on('tick', ticked)
    ;

    function ticked() {
        d3.select('.bubbles')
            .selectAll('circle')
            .data(newData)
            .join('circle')
            .attr("r", 10)
            .attr("fill", d => 
                colorPicker(d)
            )
            .attr('cx', d => {
                return d.x;
            })
            .attr('cy', d => {
                return d.y;
            })

            .on("mouseover", (e, d) => {
                d3.select(".tooltip")
                .html(`
                    <strong>Koppgheid:</strong> ${d.koppigheid}</br>
                    <strong>Deelgedrag:</strong> ${d.deelGedrag}</br>
                    <strong>Schermtijd:</strong> ${d.schermtijd}</br>
                `)
                .transition()
                .duration(200)
                .style("opacity", 1)
                .style("font-size", "18px")
            })
        
            .on("mousemove", e =>
                d3
                .select(".tooltip")
                .style("left", `${e.pageX + -0}px`)
                .style("top", `${e.pageY + -130}px`)
            )
        
            .on("mouseout", e => 
                d3.
                select(".tooltip")
                .style("opacity", 0));
            // Bron: https://codepen.io/vijnv/pen/RwJKBeO?editors=1010
            ; 
    };

    d3.select('.jij')
        .append('circle')
        .attr('cx', '220')
        .attr('cy', '0')
        .attr('r', 20)
        .style('fill', 'white');

    d3.selectAll('.jij')
        .append('text')
        .text("Jij")
        .attr('x', 213)
        .attr('y', 5)
        .style("fill", "black");
    
};

filterFunction(d.data);

d3.selectAll("section.filter-container input[type='radio']")
.on("click", e => {
    filterFunction(d.data);
});