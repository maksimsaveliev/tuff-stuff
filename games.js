// The games on the site. Each one is a copy of an open-source game in games/<slug>/, with its licence.
// To add a game: copy its files into games/<slug>/ (keep its LICENSE) and add an entry here.
const GAMES = [
  { slug: 'n-gon', name: 'n-gon', tag: 'Action', desc: 'Fast 2D physics shooter. Grab tech upgrades and fight your way down.',
    author: 'landgreen', license: 'GPL-3.0', source: 'https://github.com/landgreen/n-gon' },
  { slug: 'hexgl', name: 'HexGL', tag: 'Racing', desc: 'Futuristic 3D anti-gravity racing. Needs a decent computer.',
    author: 'Thibaut Despoulain (BKcore)', license: 'MIT', source: 'https://github.com/BKcore/HexGL' },
  { slug: 't-rex', name: 'T-Rex Runner', tag: 'Classic', desc: 'The Chrome offline dinosaur. Jump the cacti, duck the birds.',
    author: 'The Chromium Authors (extracted by wayou)', license: 'BSD-3-Clause', source: 'https://github.com/wayou/t-rex-runner' },
  { slug: '2048', name: '2048', tag: 'Puzzle', desc: 'Slide the tiles and merge numbers until you reach 2048.',
    author: 'Gabriele Cirulli', license: 'MIT', source: 'https://github.com/gabrielecirulli/2048' },
  { slug: 'tower', name: 'Tower Blocks', tag: 'Arcade', desc: 'Drop swinging blocks and stack the tallest tower you can.',
    author: 'iamkun', license: 'MIT', source: 'https://github.com/iamkun/tower_game' },
  { slug: 'radius-raid', name: 'Radius Raid', tag: 'Shooter', desc: 'Space shoot-em-up. Blast everything that comes at you.',
    author: 'Jack Rugile', license: 'MIT', source: 'https://github.com/jackrugile/radius-raid-js13k' },
  { slug: 'blocks', name: 'Falling Blocks', tag: 'Puzzle', desc: 'Stack the falling pieces and clear full lines.',
    author: 'Jake Gordon', license: 'MIT', source: 'https://github.com/jakesgordon/javascript-tetris' },
];
