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
        }
      ]
    }
  },
  'beginner': {
    title: 'Beginner',
    theme: 'copper-theme',
    skillRange: 'Copper Rank',
    badges: ['images/leagues/00_Copper_168.png'],
    level: 5,
    focus: 'Practice spotting, setting up and executing:',
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
        body: 'Raise your stack whenever you have no garbage queued to fall onto your board. In 1P modes where no garbage is sent to you, that means raising often, only stopping to clear parts of your stack with combos, chains, etc.',
        signs: [
          'You overburn panels, run out of possible matches and lock out',
          'You stay low stack, possibly with stretches of time where there are no possible matches, yet there\'s plenty of space to raise several rows'
        ]
      },
      {
        name: 'Vision',
        kind: 'Cornerstone',
        tags: ['Technical'],
        body: 'Practice anticipating where and how you will solve towards a garbage clear (both under the threat of being attacked or topped out by garbage, and when you have no garbage queued to fall onto your board). Ideally, prioritize combos and chains as garbage clears, rather than just +3 matches.',
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
        body: 'Manage the number of shock panels on your board so you seldom end up with 1–2 shock panels you can\'t clear (without popping enough panels to eventually reveal a third one by raising your stack).',
        signs: [
          'your board consistently has 1–2 shock panels you can\'t clear',
          'when you have ≥3 shock panels, they\'re not organized so you can readily clear them should an opportunity arise'
        ]
      }
    ],
    nextTier: 'Practice any of the above at a lower difficulty level to grasp the concept. If you can do all of the above at Level 5 (minimum), read on for a tougher challenge.',
    puzzles: {
      description: 'The mission sets the game gives you first. Watch a solution, then go and play the board yourself - nothing moves while you think.',
      links: [
        { url: 'puzzles/missions/beginner/combos.html', text: 'Combos' },
        { url: 'puzzles/missions/beginner/chains.html', text: 'Chains' }
      ]
    },
    resources: [
      { url: 'https://www.youtube.com/watch?v=3mQ6ty8tTcg', text: 'Puzzle Academy - [#1] The Basics', outdated: true }
    ]
  },
  'novice': {
    title: 'Novice',
    theme: 'bronze-theme',
    skillRange: 'Bronze Rank',
    badges: ['images/leagues/01_Bronze_168.png'],
    level: 5,
    focus: 'Improve your accuracy (fewer mistakes) and efficiency (fewer moves) at spotting, setting up and executing:',
    practice: [
      'basic combo shapes (+4, +5, +6)',
      'basic chain routes',
      'basic insert chain patterns, without relying on them too much',
      'garbage clears',
      'garbage chains',
      'garbage layer transitioning: transition clears and shoguns as well as buffering clears, which all help your stack management (below)'
    ],
    alsoPracticeTitle: 'Keep practicing:',
    alsoPractice: [
      'raising your stack when it is safe to',
      'solving towards garbage clears',
      'managing shock panels',
      'managing your stack while clearing garbage, so your next garbage clear is ready'
    ],
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
          "When you are topped out, combos and chains give more stop time.",
          "In 1P vs yourself, raise your stack high before or after your first attacks. It plays like being topped out in a match, and it doubles as high stack defence practice.",
          "Play opponents about one rank above you. They will find your weaknesses while still giving you a chance.",
          "Not sure what to work on? Ask your opponents or the community to look at your games.",
          "Watch how higher ranked players defend, live or in replays and videos.",
          "Don't get discouraged. Good habits and muscle memory take a long time to build."
        ]
      }
    ],
    fundamentals: [
      {
        name: 'Planning and executing openers',
        kind: 'Cornerstone',
        tags: ['Conceptual', 'Technical'],
        body: [
          'Read your board at the start of the game and find an opening attack to commit to. That means:',
          [
            'during the countdown, spotting where your first combo or chain link will be, and how to solve towards it',
            'raising your stack at the start of the game',
            'moving the cursor to where it needs to be to carry out the solve you planned',
            'during the opening attack, solving towards a garbage clear that is ready to pop when the first wave of garbage lands'
          ]
        ],
        signs: [
          'poor use of the starting panels: burning much of your stack while sending few lines of garbage, or unintended clears breaking up a chain or a combo set-up',
          'no garbage clear ready when your opponent\'s attacks land',
          {
            text: 'if you skip raising at the start to attack sooner:',
            list: [
              'poor use of the starting panels',
              'not raising your stack again afterwards',
              'idling instead of preparing a garbage clear for incoming attacks',
              'not raising in the first place, when the extra panels would have helped with any of the above'
            ]
          }
        ]
      },
      {
        name: 'Rebuilding stack height from low stack',
        kind: 'Cornerstone',
        tags: ['Technical'],
        body: 'When you clear large garbage while low stack, use your panels sparingly, so you gain back more panels than you spend.',
        signs: [
          'garbage chaining too much while low stack',
          'burning panels that don\'t help clear garbage, while low stack or on the way there',
          'often losing games by locking out',
          'often locked out of a garbage clear, so you have to burn more panels elsewhere to expose one'
        ]
      },
      {
        name: 'Chain offense',
        kind: 'Cornerstone',
        tags: ['Technical'],
        body: 'Send a constant stream of chain garbage so your opponent always stays topped out, and always at risk of losing. When they are low stack, large chains (x5 and up) take up more of their board and slow their counterattacks. When they are high stack and likely topped out, smaller chains give them less shake time to defend with. Don\'t chain so much that you run out of panels to clear garbage, or that you cut chains with no clear idea of where to solve next.',
        signs: [
          'your opponent spends too long not topped out',
          'struggling to send smaller chains when your opponent is already topped out',
          'struggling to send larger chains when your opponent is not topped out',
          'when your opponent is not topped out, struggling to land larger chains before they can raise their stack again',
          'losing too many games by locking out',
          'burning too many extra panels after a chain to reach the next garbage clear'
        ]
      },
      {
        name: 'Streamlining gameplay (Level 5)',
        kind: 'Cornerstone',
        tags: ['Conceptual', 'Technical'],
        body: 'For all of the above, cut down the time you spend idle when you could be doing something on your board. For example, while a chain is clearing, solve for an extension to it or set up a solve somewhere else on your board, instead of waiting for it to finish. If this is hard at Level 5, practice it at a lower level first to grasp the idea.',
        signs: [
          {
            text: 'staring at the board without actively:',
            list: [
              'searching for a solve (any clear, combo or chain)',
              'carrying out a solve',
              'when clearing garbage, preparing parts of your stack for the rows of panels the garbage will reveal'
            ]
          }
        ]
      }
    ],
    nextTier: 'If you can do all of the above at Level 5 (minimum), read on for a tougher challenge.',
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
    }
  },
  'intermediate': {
    title: 'Intermediate',
    theme: 'silver-theme',
    skillRange: 'Silver Rank',
    badges: ['images/leagues/02_Silver_168.png'],
    level: 8,
    focus: 'Improve your accuracy (fewer mistakes) and efficiency (fewer moves) at spotting, setting up and executing:',
    practice: [
      'basic combo shapes (+4, +5, +6, +8, +9)',
      'shapes for combo links (combo chaining)',
      'combo starters for chains, where a combo is the first link of the chain',
      'nonlocal chain links (extensions from shoguns)',
      'garbage clears',
      'garbage chains',
      'garbage layer transitioning: transition clears and shoguns as well as buffering clears, which all help your stack management'
    ],
    alsoPracticeTitle: 'Keep practicing:',
    alsoPractice: [
      'improving the strength, accuracy and efficiency of your opener',
      'raising your stack when it is safe to',
      'solving towards garbage clears',
      'managing shock panels',
      'managing your stack while clearing garbage, so your next garbage clear is ready',
      'planning and executing openers',
      'chain offense',
      'rebuilding stack height from a low stack'
    ],
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
      {
        name: 'Game flow awareness',
        kind: 'Milestone',
        tags: ['Conceptual'],
        body: [
          'Read both boards during and after your opening attacks, and then throughout the game, for useful information. For example:',
          [
            'checking whether you have the time and room to raise your stack again, and maybe prepare and send a follow-up attack',
            'sending combo garbage when your opponent keeps a high stack',
            'sending chain garbage when your opponent keeps a low stack'
          ]
        ],
        signs: [
          'when low stack, burning panels to clear small amounts of garbage, when that time is better spent raising to gain more panels first',
          'when high stack, spending too long unprepared to clear garbage',
          'sending large chains when smaller chains and combo garbage would set up more kill opportunities',
          'sending too little combo garbage and small chains when your opponent clearly won\'t be topped out',
          'cutting a chain too early or too late. Too early usually means not sending enough; too late usually means missing the chance to block off several rows of your opponent\'s board before they can raise or recover'
        ]
      },
      {
        name: 'Optimizing garbage clearing',
        kind: 'Milestone',
        tags: ['Conceptual'],
        body: [
          'Adjust your stack height, by burning panels or by raising to gain more, to suit the attacks you expect. A tall stack clears large garbage faster and gives you longer shake time to use. But a tall stack is dangerous against small combo garbage, which gives little shake time: caught topped out and unprepared to clear it, you can lose the game.',
          'A short stack lets more garbage onto your board. If that garbage is all blocks one row tall (only combo and x2 chain garbage), a single garbage clear turns all of it into panels and refreshes your supply. If it is mostly large chain garbage, you spend more time waiting on long clearing animations, especially when it covers several rows, across several garbage clears.',
          'Where you can, clear garbage with chains or combos rather than plain +3 clears. If you can slow your opponent down with a large block, for example when they play low stack with lots of empty space, use the extra pre-stop time from clearing garbage to set up more chain links for a counterattack. Ideally, do it without spending too many panels, which risks locking out, or spending them in a way that complicates your next solve.',
          'Sooner or later you will clear through garbage separated by revealed panels: several garbage layers with tiers of panels between them, as when clearing back-to-back large garbage or a factory. With each layer you clear off large garbage, it gets harder to chain off the revealed panels. That is why you need a buffer clear (a clear elsewhere on the board, ideally a combo or chain, that buys time to solve for the next garbage clear), or a shogun or transition clear set up after you fully clear a chain garbage block.'
        ],
        signs: [
          'being too careful with panels when high stack, instead of using more of them to attack, especially against combo garbage',
          'burning too many panels when low stack, so later garbage clears need long solves and you are far more likely to run out of stop time or health, especially against large chain garbage',
          'clearing garbage only with +3 clears',
          'being caught unprepared, or spending more panels than you need, to get through a garbage layer (for example, with no buffer clear, shogun or transition clear set up)'
        ]
      },
      {
        name: 'Smaller chain factory (x3, x4)',
        kind: 'Cornerstone',
        tags: ['Technical'],
        body: 'Once you are comfortable filling your opponent\'s board with chain garbage, work on doing it with garbage blocks that give less shake time. That means sending more, smaller blocks, which makes it more likely your opponent has garbage layers to transition through as they clear.',
        signs: [
          'idling after cutting at the x3 or x4 link, instead of going for the next solve, whether that is a clear, chain, combo or garbage clear',
          'relying only on active (skill) chaining, building the chain on the fly, instead of planning some links before you set off the trigger',
          'relying on specific chain setups and steering, for example only ever chaining vertical to vertical links and never horizontal to vertical or horizontal to horizontal'
        ]
      },
      {
        name: 'Combo offense',
        kind: 'Cornerstone',
        tags: ['Technical'],
        body: 'Send combo garbage to go with your chain offense. Chain garbage keeps your opponent under constant threat of being topped out. Adding combo garbage makes the tiers of panels between their garbage layers more complex once they clear, so more of their 2nd tier and higher clears touch only one garbage layer instead of two. Combo garbage also gives much less shake time than chain garbage: if your opponent\'s board fills with combo garbage at the top, they are more likely to lose when caught unprepared to clear it.',
        signs: [
          {
            text: 'your opponent spends too long not topped out, which might mean:',
            list: [
              'not enough setup beforehand, so you need more chain garbage',
              'too many panels spent on +4 combos, whose garbage falls side by side and halves the threat',
              'not sending combo garbage fast enough'
            ]
          },
          'poorly placed combos that lead to awkward follow-ups or lost games'
        ]
      },
      {
        name: 'Controlled downstacking',
        kind: 'Cornerstone',
        tags: ['Conceptual', 'Technical'],
        body: [
          'Downstack towers with a specific intent, such as:',
          [
            'when the topmost garbage on your board is a large block, using all of its shake time to plan your next solve and move to another part of the board to carry it out',
            'setting up a follow-up solve that needs key panels dropped to a specific row',
            'changing where you touch the garbage: downstacking a tower to bring a prepared clear into contact with it'
          ],
          'Where you can, downstack so it leaves you a clear, combo or chain setup nearby. Setting it off buys a lot of extra time to get to another part of the board and solve there.',
          'Downstacking blindly or in a panic risks:',
          [
            'quickly running out of good follow-up solves',
            'wasting the shake time of a large block on top of your board',
            'letting chain and combo garbage with less shake time drop onto your board, leaving you less time to reach a clear for safety'
          ]
        ],
        signs: [
          'panic downstacking',
          'downstacking in an order that leaves fewer follow-up solves, or makes them harder',
          'downstacking in an order that leaves fewer clear, combo or chain setups nearby',
          'downstacking at the wrong time, when you would do better to stop, gain stop time with a combo or chain, and come back to it later'
        ]
      },
      {
        name: 'Streamlining gameplay (Level 8)',
        kind: 'Cornerstone',
        tags: ['Conceptual', 'Technical'],
        body: 'While you practice all of the above, cut down the time you spend idle when you could be doing something on your board. For example, while a chain is clearing, solve for an extension to it or set up a solve somewhere else, instead of waiting for it to finish. If you rely only on inserts and other frame tricks, you will find you have less time to wait at Level 8 than at Level 5, and less time to find and carry out your next solve. Where you can, skip techniques that make you wait and spend that time preparing or carrying out solves elsewhere. It widens your vision and makes you far more likely to find other places on the board to solve.',
        signs: [
          {
            text: 'staring at the board without actively:',
            list: [
              'searching for a solve (any clear, combo or chain)',
              'carrying out a solve',
              'when clearing garbage, preparing parts of your stack for the rows of panels the garbage will reveal'
            ]
          },
          'finding or carrying out solves later than you would at Level 5',
          'running out of stop time (so your health drains) or health (so you lose) at Level 8 when you wouldn\'t at Level 5',
          'relying too much on inserts or frame tricks to chain, or using nothing else'
        ]
      }
    ],
    nextTier: 'If you can do all of the above at Level 8 (minimum), read on for a tougher challenge.',
    puzzles: {
      description: 'Inserts, openers and combo chains - the sets where you swap for the board that will exist a second later rather than the one in front of you.',
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
    }
  },
  'advanced': {
    title: 'Advanced',
    theme: 'gold-theme',
    skillRange: 'Gold to Platinum Ranks',
    badges: ['images/leagues/03_Gold_168.png', 'images/leagues/04_Platinum_168.png'],
    level: 10,
    focus: 'At this level you are very skilled with both offence and defence, and long skill chains come easily. Focus on mastering advanced defence techniques and panel management.',
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
    focus: 'At this level you are comfortable battling on the highest difficulty level for extended periods of time, effectively dishing out powerful offence and surviving while topped out. Focus on optimizing your playstyle, practicing high level techniques (factory, transition clear, shogun), and learning to survive in increasingly difficult situations.',
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

// Closes the guide, after the glossary
window.PUZZLE_GUIDE = {
  title: 'Puzzle Guide',
  theme: 'crystal-theme',
  tiers: {
    'Esme\'s Puzzle Guide': [
      {
        description: 'Every puzzle the game ships with, in the order the game gives them to you. Each one can play back its recorded solution at the speed it was set. Start with the classic sets; the sets for each skill level are linked from that level\'s section.',
        links: [
          { url: 'puzzles/index.html', text: 'Open the Puzzle Guide' }
        ]
      }
    ]
  }
};
