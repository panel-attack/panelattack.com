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
        body: 'Raise your stack to gain more panels whenever you have room to do so. Take caution such that you do not accidentally top yourself out from below, or raise so much such that you end up topped with a small amount of new garbage overhead. In 1P modes where no garbage is sent to you, that means raising often, only stopping to clear parts of your stack with combos, chains, etc.',
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
        body: 'Manage the number of shock panels on your board so you seldom end up with 1–2 shock panels you can\'t clear (without eventually revealing a third one after clearing through your opponent\'s garbage queue, and raising your stack). If you have more than three shock panels on your board, try to safely solve in a way that you end up with no shock panels. Reminder that +3 clears with shock panels do not generate stop time even though they do send garbage. So if you intend on gaining stop time with shock panels, they need to be part of a combo or a chain.',
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
          'excessively burning panels that do not clear garbage, especially while low stack, or as part of an inefficient solve towards a garbage clear',
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
        body: 'For all of the above, cut down the time you spend idle when you could be doing something else on your board. For example, while a chain is clearing, solve for an extension to it or set up a solve somewhere else on your board, instead of waiting for the chain to finish. If this is hard at Level 5, practice it at a lower level first to grasp the idea.',
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
          'when high stack, spending too much time unprepared to clear garbage',
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
          'Adjust your stack height, by burning panels or by raising to gain more, to counter against the attacks you\'re anticipating. A tall stack clears large garbage faster and gives you longer shake time to use. But a tall stack is dangerous against small combo garbage, which gives little shake time: if you\'re caught topped out under small combo garbage and are unprepared to clear it, you can lose the game.',
          'A short stack lets more garbage onto your board. If all of those garbage blocks are one row tall each (only combo and x2 chain garbage), a single garbage clear converts it entirely into panels, refreshing your stack supply. If it is mostly large chain garbage, you spend more time waiting on long clearing animations, especially when it covers several rows, across several garbage clears.',
          'Where you can, clear garbage with chains or combos rather than plain +3 clears. If you can slow your opponent down with a large block (for example: when they play low stack with lots of empty space) use the extra pre-stop time from clearing garbage to set up more chain links for a counterattack. Ideally, do it without spending too many panels, which risks locking out, or spending them in a way that complicates your next solve.',
          'Sooner or later you will clear through garbage separated by revealed panels: several garbage layers with tiers of panels between them, as when clearing back-to-back large garbage or a factory. With each layer you clear off of large garbage, the smaller it gets, making it harder to chain off the revealed panels on reaction. When larger pieces of garbage get smaller, preparing buffer clears (a clear elsewhere on the board, ideally a combo or chain) can buy you the extra time needed to solve for the next garbage clear. Before you\'re about to clear the last layer of a chain garbage block, look out for opportunities to set up shoguns and transition clears (especially in case no buffer clear is available upon fully clearing the chain garbage block).'
        ],
        signs: [
          'hoarding too many panels when high stack, instead of using more of them to attack, especially against combo garbage',
          'burning too many panels when low stack, so later garbage clears need long solves and you are far more likely to run out of stop time or health, especially against large chain garbage',
          'clearing garbage only with +3 clears',
          'being caught unprepared, or spending more panels than you need, to get through a garbage layer (for example, with no buffer clear, shogun or transition clear set up)'
        ]
      },
      {
        name: 'Smaller chain factory (x3, x4)',
        kind: 'Cornerstone',
        tags: ['Technical'],
        body: 'Once you are comfortable filling your opponent\'s board with chain garbage, work on doing it with garbage blocks that give less shake time. That means sending more, smaller blocks, making it more likely your opponent has garbage layers to transition through as they clear.',
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
        body: 'While you practice all of the above, cut down the time you spend idle when you could be doing something else on your board. For example, while a chain is clearing, solve for an extension to it or set up a solve somewhere else, instead of waiting for the chain to finish. If you rely only on inserts and other frame tricks, you will find you have less time to wait at Level 8 than at Level 5, and less time to find and carry out your next solve. Where you can, skip techniques that make you wait and spend that time preparing or carrying out solves elsewhere. It widens your vision and makes you far more likely to find other places on the board to solve.',
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
    focus: 'Improve your accuracy (fewer mistakes) and efficiency (fewer moves) at spotting, setting up and executing:',
    practice: [
      'basic combo shapes (+4, +5, +6, +8, +9)',
      'shapes for combo links (combo chaining)',
      'combo starters for chains, where a combo is the first link of the chain',
      'nonlocal chain links: links like a shogun\'s or an <a href="puzzles/missions/novice/earthquake-chains.html">earthquake</a>\'s that can appear anywhere on the board, not only across a garbage layer',
      'garbage clears',
      'garbage chains',
      'garbage layer transitioning: transition clears and shoguns as well as buffering clears, which all help your stack management',
      '"pocket" combo and chain setups, at least in the bottom corners or another spot you can use every time'
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
      'rebuilding stack height from a low stack',
      'game flow awareness',
      'optimizing garbage clearing',
      'combo offense',
      'smaller chain factories',
      'controlled downstacking'
    ],
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
      {
        name: 'Planning and executing follow-ups',
        kind: 'Milestone',
        tags: ['Conceptual'],
        body: 'The stronger your opponent, the less likely they are to lose to an opener or a single strong wave of offense. Keep up the aggression so they never get to empty their garbage queue and enjoy a moment of guaranteed safety, with too little garbage coming to top them out. Do it by backing up every opener or attack with a follow-up. After an attack, raise your stack again if it is safe, and get ready to attack again, keeping your opponent under a constant stream of garbage.',
        signs: [
          'not raising again in time, or not enough, to make the most of your panels',
          'your opponent isn\'t always topped out, or under threat of being topped out',
          'often losing the pressure advantage: you are topped out while your opponent isn\'t, or you are under garbage that slows your offense while theirs barely slows them',
          'often missing kill opportunities: your opponent runs out of pre-stop, stop or shake time while not topped out (had they been topped out, it would have been a kill), or they get the chance to raise their stack again'
        ]
      },
      {
        name: 'Controlled stack burning',
        kind: 'Milestone',
        tags: ['Conceptual', 'Technical'],
        body: [
          'Don\'t always burn your stack from high all the way down to low. Often shaving off only part of it works better, such as to counter a specific attack: when you expect a large garbage block to top you out, keep most of it off screen, so you get the most from its shake time and spend less time on the first garbage clear.',
          'Keeping the bottom of your stack gives you room to set up pocket combos or chain setups you can pop in a pinch. Managing more panels takes extra foresight and sharper vision, so take care to avoid unintended matches and clear walls: any match, combo or chain, often with a vertical component, that badly limits moving panels sideways across rows. Clear walls are very dangerous when you are topped out and can barely move panels down, since dropping a panel needs a hole to drop it into.'
        ],
        signs: [
          'burning too much, so you often lock out',
          'burning too much, so you give up the pressure advantage, often slowed by a large piece of garbage fully on screen',
          'downstacking in the wrong order, or in an order that limits your defensive options, and/or leads to weaker follow-ups in the immediate short-term',
          'solving in an order that makes unintended clears, which get in the way of finishing the solve',
          'losing games because you didn\'t solve towards a garbage clear well enough, leaving solves that are too demanding or complicated'
        ]
      },
      {
        name: 'Fluidity/Flexibility of gameplay',
        kind: 'Milestone',
        tags: ['Conceptual', 'Technical'],
        body: [
          'Adapt to how each game unfolds: shift the balance between offense and defense, and change how you attack (heavy chains, factories or combo offense). Depending on your board, cursor position, garbage queue, and opponent, a solve that is normally the best one for offense or defense may not be possible or safe. For example, you might be attacking with factory garbage with some combo garbage in between, but your opponent clears it faster than you send it, so it isn\'t a threat. Heavier chains would give you a chance to top them out first.',
          'Practice making a conscious call on whether to take another, maybe weaker, solve to make sure you survive right now. For example, when you are defending garbage in low stack and close to losing, a +3 match may be better than stretching yourself to make a +4 combo, even though the +4 sends garbage and gives you stop time. In the same spot, you might clear garbage with a +6 that is easier to prepare, sending a 5-wide block with more shake time, instead of a +5 that takes a longer solve and sends a 4-wide block with less shake time. Better still, manage your panels so you never end up there, forced to choose when no choice is good: a "don\'t-be-here" situation.',
          'None of this applies the same way if you are fast enough to make the harder solves without trouble. Judge each case against what you can reliably pull off right now.'
        ],
        signs: [
          'sending too much chain garbage when your opponent is already topped out under chain garbage',
          'sending too much combo garbage when your opponent is not topped out',
          'sending too little chain garbage to top out your opponent',
          'sending x2 garbage when it gets in the way of filling your opponent\'s board with larger blocks, for example when they have several empty rows and are idling, or can\'t raise because they are attacking or clearing garbage',
          'often ending up in "don\'t-be-here" situations',
          'losing games in "don\'t-be-here" situations, especially by choosing risky ways to attack'
        ]
      },
      {
        name: 'Streamlining gameplay (Level 10)',
        kind: 'Milestone',
        tags: ['Conceptual', 'Technical'],
        body: [
          'While you practice all of the above, cut down the time you spend idle when you could be doing something else on your board. For example, while a chain is clearing, solve for an extension to it or set up a solve somewhere else, instead of waiting for the chain to finish.',
          'If you rely on inserts and other frame tricks, you will have even less time to wait at Level 10 than at Level 8 or Level 5, and less time to find and carry out your next solve. Where you can, skip techniques that make you wait and spend that time preparing or carrying out solves elsewhere. It widens your vision and awareness, and makes you far more likely to find other places on the board to solve.',
          'Level 10 gives you only one frame of health (about 0.017 seconds), against 21 frames (0.35 seconds) at Level 8 and 51 frames (0.85 seconds) at Level 5, so being topped out without pre-stop, stop or shake time is far more likely to lose you the game. Expect to be topped out all the time, and be ready to keep stringing together clears, combos, chains and garbage clears so that single frame of health never runs out.',
          'The sixth panel color makes unintended clears, and full board clears that are hard to read less likely, but it makes defending against garbage trickier: you can lock out outright, or find every solve ends in a lockout.'
        ],
        signs: [
          {
            text: 'staring at the board without actively:',
            list: [
              'searching for a solve (any clear, combo or chain)',
              'carrying out a solve',
              'when clearing garbage, preparing parts of your stack for the rows of panels the garbage will reveal'
            ]
          },
          'finding or carrying out solves later than you would at Level 8',
          'locking out from burning too much, with six colors instead of five',
          'struggling with timing at Level 10 speed compared with Level 8',
          'running out of stop time at Level 10, which likely loses the game outright, when you would survive on health at Level 8',
          'relying too much on inserts or frame tricks to chain, or using nothing else'
        ]
      }
    ],
    nextTier: 'If you can do all of the above at Level 10, read on for a tougher challenge.',
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
    focus: 'Improve your accuracy (fewer mistakes) and efficiency (fewer moves) at spotting, setting up and executing:',
    practice: [
      'basic combo shapes (+4, +5, +6, +8, +9)',
      'shapes for combo links (combo chaining)',
      'combo starters for chains, where a combo is the first link of the chain',
      'nonlocal chain links: links like a shogun\'s that can appear anywhere on the board, not only across a garbage layer',
      'garbage clears',
      'garbage chains',
      'garbage layer transitioning: transition clears and shoguns as well as buffering clears, which all help your stack management',
      '"pocket" combo and chain setups, anywhere on the board',
      'offensive panel efficiency: as few +3 clears and as many combo chain links as you can',
      'defensive panel efficiency: when clearing garbage, as few +3 clears as you can (chain links aside), with each garbage clear touching as much garbage as it can'
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
      'rebuilding stack height from a low stack',
      'game flow awareness',
      'optimizing garbage clearing',
      'combo offense',
      'smaller chain factories',
      'controlled downstacking',
      'planning and executing follow-ups',
      'controlled stack burning',
      'fluidity and flexibility of gameplay'
    ],
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
      {
        name: 'Attacking speed',
        kind: 'Capstone',
        tags: ['Technical'],
        body: [
          'Streamline your attacks as much as you can, with little or no break between them. It takes well-practiced reactions and strong solve vision and accuracy. Ideally your opponent stays topped out all the time, with no chance to empty their garbage queue.',
          'You make most solves with plenty of time, such as during garbage clears or while large combos or chain extensions resolve. Some solves are only there for a moment, often from matches the revealed panels make after a garbage clear, and some of those lead to much better boards: easier to read and solve, with more panels and better, faster offense. As you sharpen your reactions, pattern recognition and solve accuracy, you will run into far fewer roadblocks in your attacks.'
        ],
        signs: [
          'routing a solve wrongly, breaking your stream of attacks',
          'making mistakes carrying out a solve, breaking your stream of attacks',
          'focusing too hard on a combo or chain in progress, instead of moving elsewhere to prepare your next offensive or defensive move',
          'rushing an attack when waiting a little longer would let you send more, or attack with less risky solves'
        ]
      },
      {
        name: 'Garbage clearing speed',
        kind: 'Capstone',
        tags: ['Technical'],
        body: [
          'Keep a rough count of the garbage your opponent has queued, and adjust your stack height and shape to clear it quickly and efficiently. Knowing what falls next, such as only combo garbage or large chains, tells you how to adjust your stack height. <a href="#play-garbage-order">Garbage Order</a> in How to Play explains what falls first. Each time you read it right and act on it, you empty your garbage queue faster.',
          'As with attacking, you make most garbage clears with plenty of time, such as while downstacking or while large combos or chain extensions resolve. Some solves are only there for a moment, often from matches the revealed panels make after a garbage clear, and some of those lead to much better boards: shorter solves, better places to touch the garbage, fewer panels burned. As you sharpen your reactions, pattern recognition and solve accuracy, you will lose far fewer games early.',
          'Also practice judging when to use the panels in your second tier or higher to clear garbage near the top of your board, either leaving the garbage below alone for now, or clearing it at the same time as the garbage touching your first tier at the bottom of your stack. That call depends on your pattern recognition, your board, the next wave of garbage, and your reactions and accuracy.'
        ],
        signs: [
          'letting too many rows of chain garbage onto your board, so your opponent can fill your garbage queue further while you slowly work through one piece',
          'clearing combo garbage one piece at a time, which stalls the rest from falling, instead of letting it all land and clearing it with one match (unless you do it on purpose, to have a garbage clear ready once the rest lands at once)',
          'routing solves in ways that clear garbage poorly: digging out the center and leaving towers, burning too many panels, or scrambling too much',
          'rushing to defend when waiting a little longer would let you clear garbage while counterattacking, or prepare garbage clears with less risky solves',
          'relying on solves beyond what you can do yet (routes, speed, reactions, frame tricks or other techniques), which need more practice on those skills before they work every time'
        ]
      },
      {
        name: 'Solve efficiency / playing with intent',
        kind: 'Capstone',
        tags: ['Conceptual'],
        body: [
          'By now you should avoid the basic pitfalls, such as clearing through the middle of your stack and leaving two towers, or burning your stack all the way into a lockout. Sharp vision, pattern recognition and reaction speed matter enormously for solves that need extra preparation: at the simplest, avoiding clear walls and other unintended matches; at the most involved, preparing future solves that depend on the current one going a particular way. Solving more efficiently leaves you clearer follow-ups, whether or not things go to plan, so you are less likely to get caught in a scramble or out of position with no solve in sight. When a situation calls for a particular combo or chain, solve in a way that doesn\'t get in the way of your plan.',
          'A common example is a board explosion from combo garbage: several matches go off across the board, so panels fall different distances in each column. Quickly scan your board for areas you can reliably solve in time, provided you can handle what comes right after the explosion, and commit to a route you can comfortably follow.'
        ],
        signs: [
          'downstacking more or less than you meant to',
          {
            text: 'often caught with a poor stack <span class="no-glossary">setup</span>:',
            list: [
              'you can\'t keep attacking despite having plenty of panels',
              'your attacks stop while you still need to spend more panels, even on attacks, to set up a garbage clear',
              'you miss out on more combos, combo chain links or chain starters after an attack'
            ]
          },
          'often struggling to judge how far panels will fall in each column',
          'struggling to read busier boards, such as during board explosions, in one area or across the whole board'
        ]
      },
      {
        name: 'Garbage composition',
        kind: 'Capstone',
        tags: ['Conceptual'],
        body: [
          'Practice sending what you want with what your board gives you. As long as scrambles or other dangerous boards don\'t get in the way, send the garbage you mean to, ideally whatever threatens your opponent most. Strong pattern recognition and excellent solve routing let you send what you want, when you want and how you want, more often than not.',
          'By now you can take advantage of the order the game drops garbage in (see <a href="#play-garbage-order">Garbage Order</a>). Watch what has been sent and what is still to fall, and adjust your attacks to catch your opponent off guard. For example:',
          [
            'when your opponent expects larger chain garbage to fall, send x2 chains: an x2 waits while they keep clearing, and holds back any larger chain garbage queued behind it',
            'when your opponent is struggling under a combo storm and hoping for chain garbage to give them more shake time, keep hopping from clear to clear with combos only, or keep extending your current chain, while more combo garbage lands on their board',
            'when your opponent downstacks to a low stack to recover after a board explosion, send a well-timed chain that will likely take up several rows on screen',
            'when your opponent struggles to transition through garbage layers, send factories fast enough to guarantee several tiers of panels, ideally with combo garbage between each piece of chain garbage'
          ]
        ],
        signs: [
          'relying too much on one combo, or a few (shapes or setups)',
          'relying too much on one combo chain link, or a few (shapes or setups)',
          'relying too much on chains of one length, or a few lengths',
          'not adjusting the garbage you send to fit your plan'
        ]
      }
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
