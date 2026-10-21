// The guide's sections, by skill level. guide.html renders them; the glossary lives in glossary.js.
window.GUIDE_SECTIONS = {
  'overview': {
    title: 'Overview',
    theme: 'crystal-theme',
    tiers: {
      'Getting Started': [
        {
          title: 'How to Use This Guide',
          description: 'This guide is organized by skill level. Start with Beginner if you\'re new to the game, then progress through the guide as your skills develop. The Glossary section contains definitions and visual explanations of all the terminology used throughout the guide.'
        }
      ],
      'Reference Material': [
        {
          title: 'Quick Reference Guides',
          description: 'Essential reference material for Panel Attack:',
          links: [
            { url: 'images/guide/Combo_Damage_Guide.png', text: 'Combo Damage Guide' },
            { url: 'images/guide/Shake_Time_Guide.png', text: 'Shake Time Guide' }
          ]
        }
      ],
      'Puzzle Solutions': [
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
    description: 'Players in this category should focus on getting familiar with the game mechanics, getting better at combos and chains, and getting consistent at defense.',
    badge: 'images/leagues/00_Copper.png',
    tiers: {
      'How to Play - Overview': [
        {
          title: 'Essential Tutorials',
          description: 'Essential tutorials for learning the basics:',
          links: [
            { url: 'https://www.youtube.com/watch?v=Ais1mCvL7lE', text: 'Tetris Attack -- How to Play' },
            { url: 'https://www.youtube.com/watch?v=3mQ6ty8tTcg', text: 'Puzzle Academy - [#1] The Basics' },
            { url: 'https://www.youtube.com/watch?v=lm5zW5yPsr0', text: 'Panel Attack Setup and Tutorial' },
            { url: 'https://www.youtube.com/watch?v=NSgZG1dwYSk', text: 'Panel Attack Basics (old graphics)' }
          ]
        }
      ],
      'Basic Combos and Chains': [
        {
          title: 'Fundamental Offensive Techniques',
          description: 'Learn fundamental offensive techniques:',
          links: [
            { url: 'https://www.youtube.com/watch?v=djoCjO4mUzg', text: 'Panel Attack Tutorial! [Combo and Chains]' },
            { url: 'images/guide/SetForgetSimpleChainPatterns.png', text: '"Set and Forget" Beginner Chain Patterns' },
            { url: 'images/guide/First_Steps_Into_Offence.png', text: 'Your First Steps Into Offence' }
          ]
        }
      ],
      'Beginner Exercises': [
        {
          title: 'Practice Challenges',
          description: 'Practice challenges and goals:',
          links: [
            { url: 'images/guide/Bronze_Bingo.png', text: 'Bronze Bingo Sheet' }
          ],
          goals: [
            'Complete Pokemon Puzzle League\'s Mimic Mode – Beginner/Intermediate Combo & Chain',
            'Complete Easy difficulty of stage clear mode in Panel de Pon/Tetris Attack (or 1P stadium in PPL)'
          ]
        }
      ],
      'Puzzle Sets': [
        {
          title: 'Puzzles at This Level',
          description: 'The mission sets the game gives you first. Watch a solution, then go and play the board yourself - nothing moves while you think.',
          links: [
            { url: 'puzzles/missions/beginner/combos.html', text: 'Combos' },
            { url: 'puzzles/missions/beginner/chains.html', text: 'Chains' }
          ]
        }
      ]
    }
  },
  'novice': {
    title: 'Novice',
    theme: 'bronze-theme',
    skillRange: 'Bronze Rank',
    description: 'Building upon basic skills with more advanced chain techniques and defense fundamentals.',
    badge: 'images/leagues/01_Bronze.png',
    tiers: {
      'Chain Techniques': [
        {
          title: 'More advanced chaining patterns',
          description: '',
          links: [
            { url: 'https://www.youtube.com/watch?v=msSjOeY8Bhg', text: 'Tetris Attack - Starting a Vertical Chain' },
            { url: 'https://www.youtube.com/watch?v=_qJ7CwFatyc', text: 'Tetris Attack - Horizontal Chain' }
          ]
        }
      ],
      'Defense Basics': [
        {
          title: 'Learn to handle incoming garbage',
          description: '',
          links: [
            { url: 'images/guide/Defence_Basics.png', text: 'How Do I Improve My Defence? – Basics' }
          ]
        }
      ],
      'Novice Exercises': [
        {
          title: 'Silver-level challenges',
          description: '',
          links: [
            { url: 'images/guide/Silver_Bingo.png', text: 'Silver Bingo Sheet' }
          ],
          goals: [
            'Complete Pokemon Puzzle League\'s Mimic Mode – Beginner/Intermediate Skill Chain',
            'Complete Hard difficulty of stage clear mode in Panel de Pon/Tetris Attack (or 1P stadium in PPL)'
          ]
        }
      ],
      'Puzzle Sets': [
        {
          title: 'Puzzles at This Level',
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
      ]
    }
  },
  'intermediate': {
    title: 'Intermediate',
    theme: 'silver-theme',
    skillRange: 'Silver Rank',
    description: 'Silver players are developing more consistent techniques and defense capabilities. Focus on learning about intricacies of defense and improving chaining skills.',
    badge: 'images/leagues/02_Silver.png',
    tiers: {
      'Advanced Techniques': [
        {
          title: 'Improve your offensive game',
          description: '',
          links: [
            { url: 'https://www.youtube.com/watch?v=zE6XHfSQbhQ', text: 'Tetris Attack - Advanced Chaining' },
            { url: 'images/guide/7_Combo_Bad.png', text: 'Why +7 Combos Are Bad' }
          ]
        }
      ],
      'Garbage Management': [
        {
          title: 'Handle tougher defensive situations',
          description: '',
          links: [
            { url: 'https://www.youtube.com/watch?v=qYkguUllMN4', text: 'Panel Attack Tutorial! [Defense]' },
            { url: 'https://www.youtube.com/watch?v=buukLFjcNFE', text: 'Tetris Attack - Changing styles for VS Mode' }
          ]
        }
      ],
      'Intermediate Exercises': [
        {
          title: 'Gold-level challenges',
          description: '',
          links: [
            { url: 'images/guide/Gold_Bingo.png', text: 'Gold Bingo Sheet' }
          ],
          goals: [
            'Complete Pokemon Puzzle League\'s Mimic Mode – Advanced and Expert chain/skill chain',
            'Beat Planet Puzzle League\'s level 10 AI',
            'Complete Super Hard in Pokemon Puzzle League\'s 1P stadium mode'
          ]
        }
      ],
      'Puzzle Sets': [
        {
          title: 'Puzzles at This Level',
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
        }
      ]
    }
  },
  'advanced': {
    title: 'Advanced',
    theme: 'gold-theme',
    skillRange: 'Gold to Platinum Ranks',
    description: 'Gold and Platinum players are very skilled with both offence and defence, and are able to easily do long skill chains. Focus on mastering advanced defense techniques and panel management.',
    badges: ['images/leagues/03_Gold.png', 'images/leagues/04_Platinum.png'],
    tiers: {
      'Advanced Defense': [
        {
          title: 'Master high-level defensive play',
          description: '',
          links: [
            { url: 'images/guide/Defence_Advanced.png', text: 'How Do I Improve My Defence? – Advanced' }
          ]
        }
      ],
      'Advanced Exercises': [
        {
          title: 'Platinum-level challenges',
          description: '',
          links: [
            { url: 'images/guide/Platinum_Bingo.png', text: 'Platinum Bingo Sheet' }
          ],
          goals: [
            'Complete Super Hard in Pokemon Puzzle League\'s 1P stadium mode without using a continue'
          ]
        }
      ],
      'Puzzle Sets': [
        {
          title: 'Puzzles at This Level',
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
      ]
    }
  },
  'expert': {
    title: 'Expert',
    theme: 'diamond-theme',
    skillRange: 'Diamond, Master, and Grandmaster Ranks',
    description: 'Players at this level are comfortable battling on the highest difficulty level for extended periods of time, effectively dishing out powerful offence and surviving while topped out. Focus on optimizing playstyle, practicing high level techniques (factory, transition clear, shogun), and learning to survive in increasingly difficult situations.',
    badges: ['images/leagues/05_Diamond.png', 'images/leagues/06_Master.png', 'images/leagues/07_Grandmaster.png'],
    tiers: {
      'Expert Resources': [
        {
          title: 'Available resources',
          description: 'At this time, there is not much expert level learning material available. As it is created, it will be added to this guide. If you are a high level player, please consider contributing guides or lessons.',
          links: [
            { url: 'images/guide/Diamond_Bingo.png', text: 'Diamond Bingo Sheet' }
          ]
        }
      ]
    }
  }
};
