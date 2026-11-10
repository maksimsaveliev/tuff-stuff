// The games on the site. Each one is a copy of an open-source game in games/<slug>/, with its licence.
// To add a game: copy its files into games/<slug>/ (keep its LICENSE) and add an entry here.
const GAMES = [
  { slug: 'n-gon', name: 'n-gon', tag: 'Action', desc: 'Fast 2D physics shooter. Grab tech upgrades and fight your way down.',
    author: 'landgreen', license: 'GPL-3.0', source: 'https://github.com/landgreen/n-gon' },
  { slug: 't-rex', name: 'T-Rex Runner', tag: 'Classic', desc: 'The Chrome offline dinosaur. Jump the cacti, duck the birds.',
    author: 'The Chromium Authors (extracted by wayou)', license: 'BSD-3-Clause', source: 'https://github.com/wayou/t-rex-runner' },
];
