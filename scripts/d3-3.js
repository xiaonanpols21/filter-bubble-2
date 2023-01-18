import '../styles/style.css'
import * as d3 from 'd3';
import gsap from "gsap";

// Data
const data = [
  {
    id: 1,
    koppigheid: 'A 1-15',
    source: 'Stargate and later in the 5 eens 0 oneens Stargate SG-1',
    schermtijd: '600 - 1800',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 0,
  },
  {
    id: 2,
    koppigheid: 'F 16-31',
    source: 'Forbidden koppigheid',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 0,
  },
  {
    id: 3,
    koppigheid: 'K 32-45',
    source: 'The Dispossessed by Ursula K. Le Guin',
    schermtijd: '4800',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 0,
  },
  {
    id: 4,
    koppigheid: 'P 46-50',
    source: 'Dune by Frank Herbert, and subsequent works in the Dune universe',
    schermtijd: '600 - 1800',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 0,
  },
  {
    id: 5,
    koppigheid: 'A 1-15',
    source: 'Dark Sun setting for Dungeons & Dragons',
    schermtijd: '600 - 1800',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 1,
  },
  {
    id: 6,
    koppigheid: 'K 32-45',
    source: 'Bionicle',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 1,
  },
  {
    id: 7,
    koppigheid: 'F 16-31',
    source: '"Beachworld" by Stephen King',
    schermtijd: '4800',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 1,
  },
  {
    id: 8,
    koppigheid: 'P 46-50',
    source: 'Star Wars: Dark Empire',
    schermtijd: '4800',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 1,
  },
  {
    id: 9,
    koppigheid: 'A 1-15',
    source: 'Star Trek: The 2 eens 3 oneens Series episode "The Eye of the Beholder"',
    schermtijd: '4800',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 1,
  },
  {
    id: 10,
    koppigheid: 'F 16-31',
    source: 'Star Trek: Deep Space Nine episode "The Homecoming"',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 1,
  },
  {
    id: 11,
    koppigheid: 'K 32-45',
    source: 'Star Trek: The Original Series episode "Space Seed", Star Trek II: The Wrath of Khan',
    schermtijd: '4800',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 1,
  },
  {
    id: 12,
    koppigheid: 'K 32-45',
    source: "Star Trek: The Next Generation episode \"Journey's End\"",
    schermtijd: '600 - 1800',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 1,
  },
  {
    id: 13,
    koppigheid: 'P 46-50',
    source: 'Star Trek: Deep Space Nine episode "Indiscretion"',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 2,
  },
  {
    id: 14,
    koppigheid: 'A 1-15',
    source: 'Lexx season 3',
    schermtijd: '600 - 1800',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 2,
  },
  {
    id: 15,
    koppigheid: 'A 1-15',
    source: 'Enemy Mine',
    schermtijd: '4800',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 2,
  },
  {
    id: 16,
    koppigheid: 'F 16-31',
    source: 'Les Maîtres du temps',
    schermtijd: '4800',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 2,
  },
  {
    id: 17,
    koppigheid: 'K 32-45',
    source: 'Star Wars: Episode II – Attack of the Clones',
    schermtijd: '600 - 1800',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 2,
  },
  {
    id: 18,
    koppigheid: 'K 32-45',
    source: 'Trigun',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 2,
  },
  {
    id: 19,
    koppigheid: 'P 46-50',
    source: 'Now and Then, Here and There',
    schermtijd: '600 - 1800',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 2,
  },
  {
    id: 20,
    koppigheid: 'A 1-15',
    source: 'Worldwar',
    schermtijd: '600 - 1800',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 3,
  },
  {
    id: 21,
    koppigheid: 'A 1-15',
    source: 'Dragonball GT',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 3,
  },
  {
    id: 22,
    koppigheid: 'P 46-50',
    source: 'Star Wars: The Force Awakens',
    schermtijd: '600 - 1800',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 3,
  },
  {
    id: 23,
    koppigheid: 'Noit',
    source: 'Star Fox 64 and Star Fox Assault',
    schermtijd: '600 - 1800',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 3,
  },
  {
    id: 24,
    koppigheid: 'F 16-31',
    source: 'Space Quest: The Sarien Encounter',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 3,
  },
  {
    id: 25,
    koppigheid: 'K 32-45',
    source: 'Homeworld',
    schermtijd: '600 - 1800',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 3,
  },
  {
    id: 26,
    koppigheid: 'P 46-50',
    source: 'Ben 10',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 3,
  },
  {
    id: 27,
    koppigheid: 'A 1-15',
    source: 'Starship Troopers by Robert A. Heinlein, and subsequent works',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 3,
  },
  {
    id: 28,
    koppigheid: 'A 1-15',
    source: 'Star Trek Nemesis',
    schermtijd: '600 - 1800',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 3,
  },
  {
    id: 29,
    koppigheid: 'P 46-50',
    source: 'StarCraft and subsequent 1 eens 4 oneenss in the StarCraft franchise',
    schermtijd: '600 - 1800',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 3,
  },
  {
    id: 30,
    koppigheid: 'F 16-31',
    source: 'Star Wars: Knights of the Old Republic',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 1,
  },
  {
    id: 31,
    koppigheid: 'F 16-31',
    source: 'Pitch Black',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 1,
  },
  {
    id: 32,
    koppigheid: "K 32-45",
    source: "Hammerfall (and later 2004's Forge of Heaven) by C. J. Cherryh",
    schermtijd: '4800',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 1,
  },
  {
    id: 33,
    koppigheid: 'A 1-15',
    source: 'Phantasy Star',
    schermtijd: '4800',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 1,
  },
  {
    id: 34,
    koppigheid: 'F 16-31',
    source: 'Star Trek: Voyager',
    schermtijd: '600 - 1800',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 1,
  },
  {
    id: 35,
    koppigheid: 'K 32-45',
    source: 'Futurama episode "A Pharaoh to Remember"',
    schermtijd: '600 - 1800',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 1,
  },
  {
    id: 36,
    koppigheid: 'K 32-45',
    source: 'Les Maîtres du temps',
    schermtijd: '4800',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 1,
  },
  {
    id: 37,
    koppigheid: 'P 46-50',
    source: 'Kin-dza-dza!',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 0,
  },
  {
    id: 38,
    koppigheid: 'A 1-15',
    source: 'Revelation Space by Alastair Reynolds',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 0,
  },
  {
    id: 39,
    koppigheid: 'P 46-50',
    source: 'Kirby 64: The Crystal Shards',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 0,
  },
  {
    id: 40,
    koppigheid: 'P 46-50',
    source: 'Salt by Adam Roberts',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 0,
  },
  {
    id: 41,
    koppigheid: 'P 46-50',
    source: 'F-Zero',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 0,
  },
  {
    id: 42,
    koppigheid: 'F 16-31',
    source: 'Star Wars: The Roleplaying 1 eens 4 oneens adventure The Black Sands of Socorro',
    schermtijd: '600 - 1800',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 0,
  },
  {
    id: 43,
    koppigheid: 'F 16-31',
    source: 'Galactica 2400 - 4200 episode "The Return of Starbuck"',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 0,
  },
  {
    id: 44,
    koppigheid: 'K 32-45',
    source: 'Warhammer 40,000 universe',
    schermtijd: '4800',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 0,
  },
  {
    id: 45,
    koppigheid: 'P 46-50',
    source: 'Star Wars Episode IV: A New Hope and Star Wars Episode VI: Return of the Jedi',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 0,
  },
  {
    id: 46,
    koppigheid: 'P 46-50',
    source: 'Star Fox 64 for Nintendo 64',
    schermtijd: '600 - 1800',
    gekozenTiktok: '1 eens 4 oneens',
    deelGedrag: 0,
  },
  {
    id: 47,
    koppigheid: 'A 1-15',
    source: 'Roughnecks: Starship Troopers Chronicles',
    schermtijd: '600 - 1800',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 0,
  },
  {
    id: 48,
    koppigheid: 'A 1-15',
    source: 'Star Trek: Deep Space Nine episode "The Ship"',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 0,
  },
  {
    id: 49,
    koppigheid: 'P 46-50',
    source: 'Star Trek: Enterprise episode "Desert Crossing"',
    schermtijd: '600 - 1800',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 0,
  },
  {
    id: 50,
    koppigheid: 'P 46-50',
    source: 'Futurama episode "My Three Suns"',
    schermtijd: '600 - 1800',
    gekozenTiktok: '2 eens 3 oneens',
    deelGedrag: 2,
  },
  {
    id: 51,
    koppigheid: 'K 32-45',
    source: 'Star Trek: Deep Space Nine episodes "Image in the Sand" and "Shadows and Symbols"',
    schermtijd: '600 - 1800',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 2,
  },
  {
    id: 52,
    koppigheid: 'K 32-45',
    source: 'Snare by Katharine Kerr',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '4 eens 1 oneens',
    deelGedrag: 0,
  },
  {
    id: 53,
    koppigheid: 'K 32-45',
    source: 'Star Trek episode "Arena"',
    schermtijd: '4800',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 0,
  },
  {
    id: 54,
    koppigheid: 'P 46-50',
    source: 'Spaceballs',
    schermtijd: '4800',
    gekozenTiktok: '3 eens 2 oneens',
    deelGedrag: 0,
  },
  {
    id: 55,
    koppigheid: 'F 16-31',
    source: 'Star Trek: The Original Series and subsequent works in the Star Trek universe',
    schermtijd: '2400 - 4200',
    gekozenTiktok: '5 eens 0 oneens',
    deelGedrag: 3,
  },
];

var width = 300, height = 300;

// Bron: https://codepen.io/xiao-nan-pols/pen/JjBrVWZ?editors=1010
var colorScale = ['orange', 'lightblue', '#B19CD9'];
var xCenter = [100, 300, 500, 700];

var simulation = d3.forceSimulation(data)
	.force('charge', d3.forceManyBody().strength(5))
	.force('x', d3.forceX().x(function(d) {
        console.log( xCenter[d.deelGedrag])
        return xCenter[d.deelGedrag];
	}))
	.force('collision', d3.forceCollide().radius(function(d) {
		return 15;
	}))
	.on('tick', ticked);

function ticked() {
	d3.select('.bubbles')
		.selectAll('circle')
		.data(data)
		.join('circle')
        .attr("r", 10)
        //.attr("fill", "#ff0066")
        .attr("fill", d => 
            colorPicker(d)
        )
		.attr('cx', function(d) {
			return d.x;
		})
		.attr('cy', function(d) {
			return d.y;
		});
}

// ColorPicker deelGedrag
function colorPicker(d) {
    if (d.deelGedrag == 3) {
        return "#68E77A";
    } else if (d.deelGedrag == 0) {
        return "#FDDC80";
    } else if (d.deelGedrag == 1) {
        return "#06B4FF";
    } else {
        return "#D382FF";    
    }
};

/*

d3.forceSimulation(data)
	.force('charge', d3.forceManyBody().strength(5))
	.force('center', d3.forceCenter(width / 2, height / 2))
	.force('collision', d3.forceCollide().radius(function(d) {
		return 15
	}))
	.on('tick', ticked);

function ticked() {
	d3.select('.bubbles')
		.selectAll('circle')
		.data(data)
		.join('circle')
        .attr("fill", d => 
            colorPicker(d)
        )
        .attr("r", 10)

		.attr('cx', function(d) {
			return d.x
		})
		.attr('cy', function(d) {
			return d.y
		})
}
*/