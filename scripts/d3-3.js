import '../styles/style.css'
import * as d3 from 'd3';
import gsap from "gsap";

// Data
const data = [
    {
      koppigheid: 'A 1-15',
      source: 'Stargate and later in the3Stargate SG-1',
      schermtijd: '600 - 1800',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Forbidden koppigheid',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'K 32-45',
      source: 'The Dispossessed by Ursula K. Le Guin',
      schermtijd: '4800',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Dune by Frank Herbert, and subsequent works in the Dune universe',
      schermtijd: '600 - 1800',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Dark Sun setting for Dungeons & Dragons',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Bionicle',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'F 16-31',
      source: '"Beachworld" by Stephen King',
      schermtijd: '4800',
      gekozenTiktok: 1,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Wars: Dark Empire',
      schermtijd: '4800',
      gekozenTiktok: 1,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Star Trek: The4Series episode "The Eye of the Beholder"',
      schermtijd: '4800',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Trek: Deep Space Nine episode "The Homecoming"',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 3,
    },
    {
      koppigheid: 'K 32-45',
      source: 'Star Trek: The Original Series episode "Space Seed", Star Trek II: The Wrath of Khan',
      schermtijd: '4800',
      gekozenTiktok: 3,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'K 32-45',
      source: "Star Trek: The Next Generation episode \"Journey's End\"",
      schermtijd: '600 - 1800',
      gekozenTiktok: 3,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Trek: Deep Space Nine episode "Indiscretion"',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 3,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Lexx season 3',
      schermtijd: '600 - 1800',
      gekozenTiktok: 3,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Enemy Mine',
      schermtijd: '4800',
      gekozenTiktok: 0,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Les Maîtres du temps',
      schermtijd: '4800',
      gekozenTiktok: 2,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Star Wars: Episode II – Attack of the Clones',
      schermtijd: '600 - 1800',
      gekozenTiktok: 0,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Trigun',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 2,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Now and Then, Here and There',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Worldwar',
      schermtijd: '600 - 1800',
      gekozenTiktok: 1,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Dragonball GT',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Wars: The Force Awakens',
      schermtijd: '600 - 1800',
      gekozenTiktok: 0,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'Noit',
      source: 'Star Fox 64 and Star Fox Assault',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Space Quest: The Sarien Encounter',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Homeworld',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Ben 10',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Starship Troopers by Robert A. Heinlein, and subsequent works',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 1,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Star Trek Nemesis',
      schermtijd: '600 - 1800',
      gekozenTiktok: 0,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'P 46-50',
      source: 'StarCraft and subsequent2 in the StarCraft franchise',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Altijd",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Wars: Knights of the Old Republic',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Pitch Black',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 0,
      deelGedrag: "Soms",
    },
    {
      koppigheid: "K 32-45",
      source: "Hammerfall (and later 2004's Forge of Heaven) by C. J. Cherryh",
      schermtijd: '4800',
      gekozenTiktok: 1,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Phantasy Star',
      schermtijd: '4800',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Trek: Voyager',
      schermtijd: '600 - 1800',
      gekozenTiktok: 3,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Futurama episode "A Pharaoh to Remember"',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Les Maîtres du temps',
      schermtijd: '4800',
      gekozenTiktok: 2,
      deelGedrag: "Soms",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Kin-dza-dza!',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Revelation Space by Alastair Reynolds',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Kirby 64: The Crystal Shards',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Salt by Adam Roberts',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'F-Zero',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Wars: The Roleplaying2adventure The Black Sands of Socorro',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Galactica 2400 - 4200 episode "The Return of Starbuck"',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 3,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Warhammer 40,000 universe',
      schermtijd: '4800',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Wars Episode IV: A New Hope and Star Wars Episode VI: Return of the Jedi',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Fox 64 for Nintendo 64',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Roughnecks: Starship Troopers Chronicles',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'A 1-15',
      source: 'Star Trek: Deep Space Nine episode "The Ship"',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 3,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Star Trek: Enterprise episode "Desert Crossing"',
      schermtijd: '600 - 1800',
      gekozenTiktok: 3,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Futurama episode "My Three Suns"',
      schermtijd: '600 - 1800',
      gekozenTiktok: 2,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Star Trek: Deep Space Nine episodes "Image in the Sand" and "Shadows and Symbols"',
      schermtijd: '600 - 1800',
      gekozenTiktok: 3,
      deelGedrag: "Nooit",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Snare by Katharine Kerr',
      schermtijd: '2400 - 4200',
      gekozenTiktok: 1,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'K 32-45',
      source: 'Star Trek episode "Arena"',
      schermtijd: '4800',
      gekozenTiktok: 3,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'P 46-50',
      source: 'Spaceballs',
      schermtijd: '4800',
      gekozenTiktok: 0,
      deelGedrag: "Vaak",
    },
    {
      koppigheid: 'F 16-31',
      source: 'Star Trek: The Original Series and subsequent works in the Star Trek universe',
      schermtijd: '2400 - 4200',
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
var yCenter = [200, 0, 300, 100];

d3.forceSimulation(data)
	.force('charge', d3.forceManyBody().strength(20))
	.force('x', d3.forceX().x(function(d) {
        return xCenter[d.gekozenTiktok];
	}))
	.force('y', d3.forceY().y(function(d) {
        return yCenter[d.gekozenTiktok];
	}))
	.force('collision', d3.forceCollide().radius(function(d) {
		return 13;
	}))
	.on('tick', ticked)
;

function ticked() {
	d3.select('.bubbles')
		.selectAll('circle')
		.data(data)
		.join('circle')
        .attr("r", 10)
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
