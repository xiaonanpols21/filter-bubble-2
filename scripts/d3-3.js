import '../styles/style.css'
// import * as d3 from 'd3';
import gsap from "gsap";

// Bron: https://codepen.io/xiao-nan-pols/pen/xxJLmwJ

// Data
const data = [
    {
      koppigheid: 'A 1-15',
      source: 'Stargate and later in the 5 eens 0 oneens Stargate SG-1',
      schermtijd: '600 - 1800',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Forbidden koppigheid',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'K 32-45',
      source: 'The Dispossessed by Ursula K. Le Guin',
      schermtijd: '4800',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Dune by Frank Herbert, and subsequent works in the Dune universe',
      schermtijd: '600 - 1800',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Dark Sun setting for Dungeons & Dragons',
      schermtijd: '600 - 1800',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Bionicle',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'F 16-31',
      source: '"Beachworld" by Stephen King',
      schermtijd: '4800',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Wars: Dark Empire',
      schermtijd: '4800',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Star Trek: The 2 eens 3 oneens Series episode "The Eye of the Beholder"',
      schermtijd: '4800',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Trek: Deep Space Nine episode "The Homecoming"',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '5 eens 0 oneens',
    },
    {
      koppigheid: 'K 32-45',
      source: 'Star Trek: The Original Series episode "Space Seed", Star Trek II: The Wrath of Khan',
      schermtijd: '4800',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'K 32-45',
      source: "Star Trek: The Next Generation episode \"Journey's End\"",
      schermtijd: '600 - 1800',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Trek: Deep Space Nine episode "Indiscretion"',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Lexx season 3',
      schermtijd: '600 - 1800',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Enemy Mine',
      schermtijd: '4800',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Les Maîtres du temps',
      schermtijd: '4800',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Star Wars: Episode II – Attack of the Clones',
      schermtijd: '600 - 1800',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Trigun',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Now and Then, Here and There',
      schermtijd: '600 - 1800',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Worldwar',
      schermtijd: '600 - 1800',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Dragonball GT',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Wars: The Force Awakens',
      schermtijd: '600 - 1800',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'Noit',
      source: 'Star Fox 64 and Star Fox Assault',
      schermtijd: '600 - 1800',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Space Quest: The Sarien Encounter',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Homeworld',
      schermtijd: '600 - 1800',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Ben 10',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Starship Troopers by Robert A. Heinlein, and subsequent works',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Star Trek Nemesis',
      schermtijd: '600 - 1800',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'P 46-50',
      source: 'StarCraft and subsequent 1 eens 4 oneenss in the StarCraft franchise',
      schermtijd: '600 - 1800',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Wars: Knights of the Old Republic',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Pitch Black',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: "K 32-45",
      source: "Hammerfall (and later 2004's Forge of Heaven) by C. J. Cherryh",
      schermtijd: '4800',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Phantasy Star',
      schermtijd: '4800',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Trek: Voyager',
      schermtijd: '600 - 1800',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Futurama episode "A Pharaoh to Remember"',
      schermtijd: '600 - 1800',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Les Maîtres du temps',
      schermtijd: '4800',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Kin-dza-dza!',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Revelation Space by Alastair Reynolds',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Kirby 64: The Crystal Shards',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Salt by Adam Roberts',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'F-Zero',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Wars: The Roleplaying 1 eens 4 oneens adventure The Black Sands of Socorro',
      schermtijd: '600 - 1800',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Galactica 2400 - 4200 episode "The Return of Starbuck"',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Warhammer 40,000 universe',
      schermtijd: '4800',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Wars Episode IV: A New Hope and Star Wars Episode VI: Return of the Jedi',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Fox 64 for Nintendo 64',
      schermtijd: '600 - 1800',
      gekozenTiktok: '1 eens 4 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Roughnecks: Starship Troopers Chronicles',
      schermtijd: '600 - 1800',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Star Trek: Deep Space Nine episode "The Ship"',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Trek: Enterprise episode "Desert Crossing"',
      schermtijd: '600 - 1800',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Futurama episode "My Three Suns"',
      schermtijd: '600 - 1800',
      gekozenTiktok: '2 eens 3 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Star Trek: Deep Space Nine episodes "Image in the Sand" and "Shadows and Symbols"',
      schermtijd: '600 - 1800',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Snare by Katharine Kerr',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '4 eens 1 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Star Trek episode "Arena"',
      schermtijd: '4800',
      gekozenTiktok: '5 eens 0 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Spaceballs',
      schermtijd: '4800',
      gekozenTiktok: '3 eens 2 oneens',
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Trek: The Original Series and subsequent works in the Star Trek universe',
      schermtijd: '2400 - 4200',
      gekozenTiktok: '5 eens 0 oneens',
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
  
// SETUP
// list the categories for the different properties
// planet, describing ranges of letters in the alphabet
// ["A", "E"], ["F", "J"], ...
const koppigheid = [];
const letterA = 'A'.charCodeAt(0);
const letterZ = 'Z'.charCodeAt(0);

for (let i = letterA; i < letterZ; i += 5) {
    koppigheid.push([String.fromCharCode(i), String.fromCharCode(i + 3)]);
}
koppigheid[koppigheid.length - 1][1] = 'Z';


// medium categories using unique values from the medium property
const gekozenTiktok = new Set(data.map(item => item.gekozenTiktok));

// year categories describing five periods between the oldest and newest release
const oldest = data.reduce((acc, curr) => {
    const current = curr.schermtijd.match(/\d{4}/);

    if (current) {
        return current[0] < acc ? current[0] : acc;
    }   else {
        return acc;
    }
}, 800);

const newest = data.reduce((acc, curr) => {
    const current = curr.schermtijd.match(/\d{4}/);

    if (current) {
        return current[0] > acc ? current[0] : acc;
    } else {
        return acc;
    }
}, 800);

const difference = parseInt(newest, 10) - parseInt(oldest, 10);
const range = Math.floor(difference / 4);
const schermtijd = [];

for (let i = parseInt(newest, 10); i > parseInt(oldest, 10); i -= range) {
    schermtijd.push([i - (range - 1), i]);
}
  
// object describing each category in an array
// ! for the medium and year the array is multidimensional, itself describing the starting/ending letter/year for each range
const categories = {
    koppigheid,
    gekozenTiktok: [...gekozenTiktok],
    schermtijd: schermtijd.reverse(),
};
  
// SELECT & OPTION ELEMENTS
// target the .input div and add a select element with one option for each category
const options = Object.keys(categories);
const input = document.querySelector('.input');
const select = document.createElement('select');

options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
});

// select the first option
select.value = 'koppigheid';
input.appendChild(select);
  
  
// TOOLTIP element
// add a div in the to show the bubble being hovered upon
const tooltip = d3
.select('body')
.append('div')
.attr('id', 'tooltip');

// D3 VIZ
// the idea is to include the planets from the get-go and then position them according to the selected option

// add an SVG element in the .output container
const margin = {
    top: 80,
    right: 80,
    bottom: 80,
    left: 80,
};

const width = 700 - (margin.left + margin.right);
const height = 300 - (margin.top + margin.bottom);

const output = d3
    .select('.output');

const outputSVG = output
    .append('svg')
    .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// immediately add a defs block for the gradients used in the project
// gradient for the outline of the circle
const outputDefs = outputSVG
    .append('defs');

// linear gradients included for each planet
// the idea is to have a color closely resembling the fill ultimately picked up by each circle
const gradientsStroke = outputDefs
    .selectAll('linearGradient')
    .data(data)
    .enter()
    .append('linearGradient')
    .attr('id', (d, i) => `gradient-stroke${i}`)
    .attr('x1', '100%')
    .attr('x2', '0%')
    .attr('y1', '0%')
    .attr('y2', '100%');
  
// group in which to plot the visualization
const outputGroup = outputSVG
    .append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`);
  
// before the circle element(s) describing the planets add the labels describing the category
// labels included around the coordinates ultimately used to separate the elements in the force graph
// centers of gravity according to the categories
const categoriesCenter = [
    {
        x: (-width / 2),
        y: -30,
    },
    {
        x: 0,
        y: (-height / 2),
    },
    {
        x: (width / 2),
        y: -30,
    },
    {
        x: -width / 6,
        y: (height / 2),
    },
    {
        x: width / 6,
        y: (height / 2),
    },
];
  
// group used to center the shapes in the svg
const planetsGroup = outputGroup
    .append('g')
    .attr('transform', `translate(${width / 2} ${height / 2})`);
  
// TEXT LABELS
// add the labels in the coordinates specified by the categoriesCenter array
const labels = planetsGroup
    .selectAll('text.label')
    .data(categoriesCenter)
    .enter()
    .append('text')
    // include the text specified by the selected category
    .text((d, i) => categories[select.value][i])
    .attr('x', d => d.x)
    .attr('y', (d, i) => (i % 2 === 0 ? d.y - 60 : d.y + 60))
    .attr('fill', '#fff')
    .style('font-size', '18')
    .style('opacity', '0.2')
    .style('letter-spacing', '0.1rem')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle');
  
// BUBBLES
// for each planet add a wrapping group
// this to gather together multiple shapes
const planets = planetsGroup
    .selectAll('g.koppigheid')
    // bind each group element with the name of the planet
    .data(data, d => d.koppigheid)
    .enter()
    .append('g')
    .attr('class', 'koppigheid')
    // on enter show the tooltip and add the information through paragraph elements
    .on('mouseenter', (d, i) => {
      tooltip
        .append('p')
        .attr('class', 'koppigheid')
        .append('strong')
        .text(d.koppigheid);
  
      tooltip
        .append('p')
        .attr('class', 'schermtijd')
        .text(d.schermtijd);
  
      tooltip
        .append('p')
        .attr('class', 'medium')
        .text(d.medium);
  
      tooltip
        .append('p')
        .attr('class', 'source')
        .text('From ')
        .append('em')
        .text(d.source);
  
      // show the tooltip where the cursor lies
      tooltip
        .style('opacity', '1')
        .style('visibility', 'visible')
        .style('left', `${d3.event.pageX}px`)
        .style('top', `${d3.event.pageY}px`)
    })

    // on exit hide the tooltip and remove the nested paragraph elements
    .on('mouseout', () => {
      tooltip
        .style('opacity', '0')
        .style('visibility', 'hidden')
        .selectAll('p')
        .remove();
    });
  
  // for each planet add a circle
  planets
    .append('circle')
    .attr('r', 12)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('class', 'bubble')
    .attr("fill", d => 
        colorPicker(d)
    );
  
// D3 FORCE
/* utility function for the forceX and forceY forces
input
- d, representing each piece of data with the properties included through the simulation
output
- {x, y}, object representing the coordinates dictating where the shapes ought to be positioned

the idea is to return the x and y coordinate in the categoriesCenter array according to the specific value of the selected category
*/
function centerOfGravity(d) {
    const { value } = select;
    // property of the bound object matching the select element's value
    const selectedCategory = d[value];
    // array describing the possible categories for the selected value
    const matchingCategories = categories[value];
    // retrieve the index describing the matching category
    // ! selectedCategory is a 2D array for the planet and year values, in which case a bit of computation is needed
    const index = matchingCategories.findIndex((category) => {
        if (value === 'gekozenTiktok') {
            return category === selectedCategory;
        }

        const [startingValue, endingValue] = category;
        const matchingValue = value === 'koppigheid' ? selectedCategory[0] : parseInt(selectedCategory.match(/\d{4}/)[0], 10);
        return matchingValue >= startingValue && matchingValue <= endingValue;
    });
    // return the coordinates of the center for the matching category
    return categoriesCenter[index];
};
  
// FORCE FUNCTIONS
// force to avoid excessive overlaps
const collision = d3
    .forceCollide()
    .radius(12);
  
// force to push the shapes horizontally according to the value returned by the utility function
const forceX = d3
    .forceX()
    .x(d => centerOfGravity(d).x)
    .strength(1);
  
// force to push the shapes vertically
const forceY = d3
    .forceY()
    .y(d => centerOfGravity(d).y)
    .strength(1);
  
  
// function run following the simulation, as the tick event is registered
function tick() {
    // translate the planets to the location described by the .x and .y properties
    // properties included through the forceSimulation function and on the basis of the established forces
    planets
      .attr('transform', ({ x, y }) => `translate(${x} ${y})`);
};
  
// create a simulation with the chosen forces
const simulation = d3
    .forceSimulation(data)
    .force('collision', collision)
    .force('x', forceX)
    .force('y', forceY)
    // small alpha to have the elements move at a slower pace
    .alpha(0.1)
    // call the tick function running the simulation
    .on('tick', tick);
  
// SELECT LISTENER
// listen for the change event on the select element to modify the visualization
function handleSelection() {
    // retrieve the value from the selected option
    const { value } = this;

    // transition the labels to the new values
    labels
        .transition()
        .style('opacity', 0)
        .transition()
        .style('opacity', 0.2)
        // ! as the planet and year categories return a 2D array, include a string joining said values if need be
        .text((d, i) => (Array.isArray(categories[value][i]) ? categories[value][i].join('-') : categories[value][i]));

    // establish new forces to reposition the planets according to the new selection
    const pushX = d3
        .forceX()
        .x(d => centerOfGravity(d).x)
        .strength(1);

    const pushY = d3
        .forceY()
        .y(d => centerOfGravity(d).y)
        .strength(1);

    // run the simulation anew and with the new forces
    simulation
        .force('collision', collision)
        .force('x', pushX)
        .force('y', pushY)
        // "reheat" the simulation resetting alpha to its previous value
        .alpha(0.1)
        .restart();
}
select.addEventListener('change', handleSelection);

const legendaBtn = document.querySelector(".legenda-container button");
const legenda = document.querySelector(".legenda");

legenda.classList.add("none");

function showLegenda() {
    legenda.classList.toggle("show");
}

legendaBtn.addEventListener("click", showLegenda);