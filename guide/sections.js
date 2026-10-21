// The guide's sections, by skill level. guide.html renders them; the glossary lives in glossary.js.
window.GUIDE_SECTIONS = {
  'overview': {
    title: 'Overview',
    theme: 'crystal-theme',
    tiers: {
      'Getting Started': [
        {
          title: 'How to Use This Guide',
          description: 'This guide is organized by skill level. Start with How to Play if you\'re new to the game, then Beginner, then progress through the guide as your skills develop. The Glossary section contains definitions and visual explanations of all the terminology used throughout the guide.'
        },
        {
          title: 'Esme\'s Puzzle Guide',
          description: 'Every puzzle the game ships with, in the order it gives them to you, each one able to play its own recorded solution back at the speed it was set. The classic sets are the place to start; the sets for each skill level are linked from the sections below.',
          links: [
            { url: 'puzzles/index.html', text: 'Open the Puzzle Guide' },
            { url: 'puzzles/classic/set-1.html', text: 'Classic Set 1' },
            { url: 'puzzles/classic/set-2.html', text: 'Classic Set 2' },
            { url: 'puzzles/classic/set-3.html', text: 'Classic Set 3' },
            { url: 'puzzles/classic/set-4.html', text: 'Classic Set 4' },
            { url: 'puzzles/classic/set-5.html', text: 'Classic Set 5' },
            { url: 'puzzles/classic/set-6.html', text: 'Classic Set 6' }
          ]
        }
      ]
    }
  },
  'beginner': {
    title: 'Beginner',
    theme: 'copper-theme',
    skillRange: 'Copper Rank',
    badge: 'images/leagues/00_Copper_168.png',
    level: 5,
    focus: 'Players in this category should focus on learning and practicing how to spot, set up, and execute the following:',
    practice: [
      'basic combo shapes (+4, +5, +6)',
      'basic chain routes ("set and forget" patterns for x2 chains)',
      'basic insert chain patterns',
      'garbage clears',
      'garbage chains',
      'garbage layer transitioning (with buffering clears at minimum)'
    ],
    lessons: [
      {
        "name": "Your First Combos",
        "paragraphs": [
          "Combos are where offence starts. Look for one color in three rows next to each other. Don't match them yet: look for a fourth or fifth panel of that color nearby and bring it in first, then make the last swap.",
          "Keep the trigger, the final swap that sets off the combo, near the middle. If it sits at an end, the other panels match early without it."
        ],
        "listTitle": "Common combo shapes:",
        "list": [
          "Vertical +4: four in a column. The trigger can be either of the two middle panels.",
          "Vertical +5: five in a column. The trigger must be the middle panel.",
          "Vertical +6: two colors side by side, three of each. The trigger can be in any row.",
          "L-shaped +5: one panel in the first row, one in the second and three in the third, or the other way up.",
          "T-shaped +5: one panel in the first row, three in the second and one in the third."
        ]
      },
      {
        "name": "Your First Chains",
        "paragraphs": [
          "Chains are about thinking one step ahead. Before you make a match, look at what will fall when it disappears and where it will land.",
          "Find a panel sitting on top of a match you are about to make. Look for two more of its color near where it will land, and line them up first. When the match clears, the panel falls into the other two: an x2.",
          "It doesn't have to stop there. Look at what falls after the second match, and set up a third.",
          "If x2 and x3 are the most you can manage, that's fine. Chaining takes practice to become muscle memory, and x2 and x3 chains are plenty at this level."
        ]
      },
      {
        "name": "Set and Forget Chain Patterns",
        "paragraphs": [
          "These patterns need no swapping once they start: set them up, make the first match and let them play out. Combine or repeat them to build longer chains. Learn all four and go for an x5."
        ],
        "list": [
          "Double Horizontal: two panels of one color beside a horizontal match, in its row or the row above, and a third of that color in the other of those rows, over the match. When the match clears, the three line up into a second horizontal match.",
          "Double Vertical: three panels of one color in a column with a vertical match of another color between them, one on one side and two on the other. When the match clears, the three stack into a second vertical match.",
          "Horizontal to Vertical: a horizontal match with panels of another color above and below it in one column, three in all. When the row clears, the column closes into a vertical match.",
          "Vertical to Horizontal: a vertical match with a panel of another color on top, and two of that color either side of its bottom panel. When the column clears, the top panel falls between them into a horizontal match."
        ]
      }
    ],
    fundamentals: [
      {
        name: 'Maintaining stack supply',
        kind: 'Cornerstone',
        tags: ['Conceptual', 'Technical'],
        body: 'Players should also endeavour to raise their stack when they do not have any garbage queued to fall onto their boards. In 1P modes that do not have garbage sent to the player, this means that players should endeavour to raise their stacks often, only stopping to clear parts of their stack with combos, chains, etc.',
        signs: [
          'Player overburns panels, runs out of possible matches and locks out',
          'Player remains low stack, possibly with stretches of time where there are no possible matches, yet there\'s plenty of space to raise several rows'
        ]
      },
      {
        name: 'Vision',
        kind: 'Cornerstone',
        tags: ['Technical'],
        body: 'Players should practice anticipating where and how they will solve towards a garbage clear (both under the threat of being attacked or topped out by garbage, as well as when they do not have any garbage queued to fall onto their boards). Ideally, combos and chains are prioritized as garbage clears, rather than just +3 matches.',
        signs: [
          'over-reliance on +3 matches',
          'over-reliance on a specific type of combo',
          'hyperfocusing attention on clears/combos/chains that are resolving instead of confirming / acting on what to do next',
          'downstacking or clearing in the wrong order (jeopardizing a solve)',
          'neglecting possible matches away from bottom of the stack (e.g. second tier, third tier)',
          'unable to find a match to stay alive while topped out, despite having several possible matches available with sufficient rows of panels (not locked out)'
        ]
      },
      {
        name: 'Managing shock panels',
        kind: 'Cornerstone',
        tags: ['Conceptual'],
        body: 'Players should also aim to prioritize managing the number of shock panels on their board such that they seldom end up with 1–2 shock panels that cannot be cleared (without continuing to pop enough panels to eventually reveal third panel from raising the stack).',
        signs: [
          'board consistently has 1–2 shock panels that cannot be cleared',
          'when there are ≥3 shock panels, they\'re not organized such that they can be readily cleared should an opportunity arise'
        ]
      }
    ],
    nextTier: 'Any of the above can be practiced at a lower difficulty level to grasp the concept. Players capable of performing all of the above at Level 5 (minimum) may read further for a tougher challenge.',
    puzzles: {
      description: 'The mission sets the game gives you first. Watch a solution, then go and play the board yourself - nothing moves while you think.',
      links: [
        { url: 'puzzles/missions/beginner/combos.html', text: 'Combos' },
        { url: 'puzzles/missions/beginner/chains.html', text: 'Chains' }
      ]
    },
    resources: [
      { url: 'https://www.youtube.com/watch?v=Ais1mCvL7lE', text: 'Tetris Attack -- How to Play', outdated: true },
      { url: 'https://www.youtube.com/watch?v=3mQ6ty8tTcg', text: 'Puzzle Academy - [#1] The Basics', outdated: true },
      { url: 'https://www.youtube.com/watch?v=lm5zW5yPsr0', text: 'Panel Attack Setup and Tutorial', outdated: true },
      { url: 'https://www.youtube.com/watch?v=NSgZG1dwYSk', text: 'Panel Attack Basics (old graphics)', outdated: true },
      { url: 'https://www.youtube.com/watch?v=djoCjO4mUzg', text: 'Panel Attack Tutorial! [Combo and Chains]', outdated: true }
    ]
  },
  'novice': {
    title: 'Novice',
    theme: 'bronze-theme',
    skillRange: 'Bronze Rank',
    badge: 'images/leagues/01_Bronze_168.png',
    level: 5,
    focus: 'Building upon basic skills with more advanced chain techniques and defense fundamentals.',
    lessons: [
      {
        "name": "Defence Basics",
        "paragraphs": [
          "If you struggle to clear garbage, flatten any towers or loose panels between the bulk of your stack and the garbage. Then look in the three rows under the garbage for a color you can match against it.",
          "Line up matches under the panels the garbage turns into, so they chain when they land. These garbage chains clear garbage fast and send an attack back at the same time, and they are easiest on large blocks, which take a long time to convert.",
          "If you are topped out and can't clear the garbage in time, stay calm. Make a combo or a small chain for stop time (a plain match of three gives none), use it to flatten loose panels and look for a clear, and repeat until you find one.",
          "When you have plenty of panels, build a combo near a bottom corner and leave it as a backup for when you get into trouble. This works at any skill level.",
          "Raise your stack when you can, so you have panels to defend with, and don't spend so many on one garbage chain that you lock yourself out. A big garbage chain with few panels left is risky; a plain x2 garbage chain is safer at that height."
        ],
        "listTitle": "Tips and exercises:",
        "list": [
          "When you are topped out or nearly, combos and chains give more stop time.",
          "In 1P vs yourself, raise your stack high before or after your first attacks. It plays like being topped out in a match, and it doubles as high stack defence practice.",
          "Play opponents about one rank above you. They will find your weaknesses while still giving you a chance.",
          "Not sure what to work on? Ask your opponents or the community to look at your games.",
          "Watch how higher ranked players defend, live or in replays and videos.",
          "Don't get discouraged. Good habits and muscle memory take a long time to build."
        ]
      }
    ],
    fundamentals: [
      { name: 'Planning and executing openers', kind: 'Cornerstone', tags: ['Conceptual', 'Technical'] },
      { name: 'Streamlining gameplay (Level 5)', kind: 'Cornerstone', tags: ['Conceptual', 'Technical'] },
      { name: 'Rebuilding stack height', kind: 'Cornerstone', tags: ['Technical'] },
      { name: 'Chain offense', kind: 'Cornerstone', tags: ['Technical'] }
    ],
    puzzles: {
      description: 'Where chains stop being one shape you have learned and start being something you build. The clear puzzles are the first that ask you to deal with garbage.',
      links: [
        { url: 'puzzles/missions/novice/combos.html', text: 'Combos' },
        { url: 'puzzles/missions/novice/chains.html', text: 'Chains' },
        { url: 'puzzles/missions/novice/convert-horizontal-chains.html', text: 'Convert Horizontal Chains' },
        { url: 'puzzles/missions/novice/earthquake-chains.html', text: 'Earthquake Chains' },
        { url: 'puzzles/missions/novice/horizontal-chain-from-tower.html', text: 'Horizontal Chain From Tower' },
        { url: 'puzzles/missions/novice/clear-puzzles-1.html', text: 'Clear Puzzles 1' },
        { url: 'puzzles/missions/novice/clear-puzzles-2.html', text: 'Clear Puzzles 2' }
      ]
    },
    resources: [
      { url: 'https://www.youtube.com/watch?v=msSjOeY8Bhg', text: 'Tetris Attack - Starting a Vertical Chain', outdated: true },
      { url: 'https://www.youtube.com/watch?v=_qJ7CwFatyc', text: 'Tetris Attack - Horizontal Chain', outdated: true }
    ]
  },
  'intermediate': {
    title: 'Intermediate',
    theme: 'silver-theme',
    skillRange: 'Silver Rank',
    badge: 'images/leagues/02_Silver_168.png',
    level: 8,
    focus: 'Silver players are developing more consistent techniques and defense capabilities. Focus on learning about intricacies of defense and improving chaining skills.',
    lessons: [
      {
        "name": "Downstacking Carefully",
        "paragraphs": [
          "Once your opponent can punish it, bad downstacking loses games. Never downstack just to get out of being topped out: know what you are doing.",
          "If a tower or lopsided stack has you topped out after an attack and there is no clear in sight, check how big the attack is. If it reaches well off the top of the board, downstack slowly: each large block that lands gives you just over a second of shake time. Use it to look for a clear.",
          "Watch for small combo garbage landing on top of the main block. It gives almost no shake time and can end the game quickly. Downstacking during stop time helps avoid that.",
          "If you see a possible clear where you are downstacking, don't ruin it by moving panels carelessly. A combo or small chain buys a second or two to set it up."
        ]
      }
    ],
    fundamentals: [
      { name: 'Streamlining gameplay (Level 8)', kind: 'Cornerstone', tags: ['Conceptual', 'Technical'] },
      { name: 'Controlled downstacking', kind: 'Cornerstone', tags: ['Conceptual', 'Technical'] },
      { name: 'Smaller chain factory (x3, x4)', kind: 'Cornerstone', tags: ['Technical'] },
      { name: 'Large chain offense', kind: 'Cornerstone', tags: ['Conceptual'] },
      { name: 'Game flow awareness', kind: 'Milestone', tags: ['Conceptual'] },
      { name: 'Optimizing garbage clearing', kind: 'Milestone', tags: ['Conceptual'] }
    ],
    puzzles: {
      description: 'Inserts, openers and combo chains - the sets where a swap is made for the board that will exist a second later rather than the one in front of you.',
      links: [
        { url: 'puzzles/missions/intermediate/chains.html', text: 'Chains' },
        { url: 'puzzles/missions/intermediate/extended-chains.html', text: 'Extended Chains' },
        { url: 'puzzles/missions/intermediate/chains-from-huge-tower.html', text: 'Chains From Huge Tower' },
        { url: 'puzzles/missions/intermediate/horizontal-chain-from-the-side.html', text: 'Horizontal Chain From the Side' },
        { url: 'puzzles/missions/intermediate/pre-setup-combo-chains.html', text: 'Pre Setup Combo Chains' },
        { url: 'puzzles/missions/intermediate/combo-chain.html', text: 'Combo Chain' },
        { url: 'puzzles/missions/intermediate/pre-setup-inserts.html', text: 'Pre Setup Inserts' },
        { url: 'puzzles/missions/intermediate/change-side-inserts.html', text: 'Change Side Inserts' },
        { url: 'puzzles/missions/intermediate/inserts.html', text: 'Intermediate Inserts' },
        { url: 'puzzles/missions/intermediate/combo-chain-inserts.html', text: 'Combo Chain Inserts' },
        { url: 'puzzles/missions/intermediate/removes.html', text: 'Removes' },
        { url: 'puzzles/missions/intermediate/openers.html', text: 'Openers' },
        { url: 'puzzles/missions/intermediate/clear-puzzles-1.html', text: 'Clear Puzzles 1' },
        { url: 'puzzles/missions/intermediate/clear-puzzles-2.html', text: 'Clear Puzzles 2' }
      ]
    },
    resources: [
      { url: 'https://www.youtube.com/watch?v=zE6XHfSQbhQ', text: 'Tetris Attack - Advanced Chaining', outdated: true },
      { url: 'https://www.youtube.com/watch?v=qYkguUllMN4', text: 'Panel Attack Tutorial! [Defense]', outdated: true },
      { url: 'https://www.youtube.com/watch?v=buukLFjcNFE', text: 'Tetris Attack - Changing styles for VS Mode', outdated: true }
    ]
  },
  'advanced': {
    title: 'Advanced',
    theme: 'gold-theme',
    skillRange: 'Gold to Platinum Ranks',
    badges: ['images/leagues/03_Gold_168.png', 'images/leagues/04_Platinum_168.png'],
    level: 10,
    focus: 'Gold and Platinum players are very skilled with both offence and defence, and are able to easily do long skill chains. Focus on mastering advanced defense techniques and panel management.',
    lessons: [
      {
        "name": "High Stack Defence",
        "paragraphs": [
          "Raise your stack very high before your opponent's opening attack lands, after a small opening attack of your own or by leaving yourself the time. With that many panels, garbage clears quickly, you can make the most of shake time, and you can come back from a weak opener.",
          "The cost is that you will be topped out almost all the time, small attacks can punish you, and it takes practice. Once you learn it, it is well worth it; just watch how your opponent attacks so they can't punish it."
        ]
      },
      {
        "name": "Why +7 Combos Are Bad",
        "paragraphs": [
          "From Gold up, a +7 is usually a wasted attack. Below that it is still a fine one.",
          "A +5 and a +6 each send one block that fills a row, just like a +7, but a +7's block shakes the opponent for 42 frames (0.7 seconds) instead of 18 or 24. It also spends more of your panels to hand your opponent more panels when they clear it.",
          "Most +7s use two colors, and the smallest two-color combo is a +6: leave out one panel to make a +6, or add one to make a +8. A T-shaped +7 can lose one branch to become a vertical or L-shaped +5."
        ]
      }
    ],
    fundamentals: [
      { name: 'Planning and executing follow-ups', kind: 'Milestone', tags: ['Conceptual'] },
      { name: 'Controlled stack burning', kind: 'Milestone', tags: ['Conceptual', 'Technical'] },
      { name: 'Streamlining gameplay (Level 10)', kind: 'Milestone', tags: ['Conceptual', 'Technical'] },
      { name: 'Fluidity/Flexibility of gameplay', kind: 'Milestone', tags: ['Conceptual', 'Technical'] }
    ],
    puzzles: {
      description: 'Shogun, transitions, and six sets of garbage to dig out. These are the longest solutions in the collection and the ones worth watching more than once.',
      links: [
        { url: 'puzzles/missions/advanced/shogun.html', text: 'Shogun' },
        { url: 'puzzles/missions/advanced/transitions-1.html', text: 'Transitions 1' },
        { url: 'puzzles/missions/advanced/transitions-2.html', text: 'Transitions 2' },
        { url: 'puzzles/missions/advanced/clear-puzzles-1.html', text: 'Clear Puzzles 1' },
        { url: 'puzzles/missions/advanced/clear-puzzles-2.html', text: 'Clear Puzzles 2' },
        { url: 'puzzles/missions/advanced/clear-puzzles-3.html', text: 'Clear Puzzles 3' },
        { url: 'puzzles/missions/advanced/clear-puzzles-4.html', text: 'Clear Puzzles 4' },
        { url: 'puzzles/missions/advanced/clear-puzzles-5.html', text: 'Clear Puzzles 5' },
        { url: 'puzzles/missions/advanced/clear-puzzles-6.html', text: 'Clear Puzzles 6' }
      ]
    }
  },
  'expert': {
    title: 'Expert',
    theme: 'diamond-theme',
    skillRange: 'Diamond, Master, and Grandmaster Ranks',
    badges: ['images/leagues/05_Diamond_168.png', 'images/leagues/06_Master_168.png', 'images/leagues/07_Grandmaster_168.png'],
    level: 10,
    focus: 'Players at this level are comfortable battling on the highest difficulty level for extended periods of time, effectively dishing out powerful offence and surviving while topped out. Focus on optimizing playstyle, practicing high level techniques (factory, transition clear, shogun), and learning to survive in increasingly difficult situations.',
    lessons: [
      {
        "name": "Shoguns and Transition Clears",
        "paragraphs": [
          "Both set up a second tier of panels on top of the garbage, so moving on to the next layer goes smoothly.",
          "A shogun (or tier chain) places a panel in the upper tier so that when the garbage clears, it falls onto the panels the garbage became and makes a chain. That guarantees stop time and extra offence when you can't rely on shake time or garbage chains.",
          "A transition clear lines up two panels of one color in the upper tier over a third of that color, with an empty space beneath. When the garbage clears, the upper panel drops into place and clears the next layer quickly, whatever panels the garbage became.",
          "With perfect timing you can catch the falling panel as it lands, so the transition clear counts as a chain. On level 10, if you are topped out with no stop time and miss that timing, you lose instantly; another match, or stop time, makes it safe."
        ]
      }
    ],
    fundamentals: [
      { name: 'Attacking speed', kind: 'Capstone', tags: ['Technical'] },
      { name: 'Garbage clearing speed', kind: 'Capstone', tags: ['Technical'] },
      { name: 'Playing with intent', kind: 'Capstone', tags: ['Conceptual'] },
      { name: 'Garbage composition', kind: 'Capstone', tags: ['Conceptual'] }
    ]
  }
};
