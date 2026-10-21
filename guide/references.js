// The guide's reference tables, from the game's engine: COMBO_GARBAGE in common/engine/checkMatches.lua
// and GARBAGE_SIZE_TO_SHAKE_FRAMES in common/engine/Stack.lua. A block is [width, height].
window.GUIDE_REFERENCES = {
  comboGarbage: {
    columns: ['Combo', 'Garbage sent'],
    rows: [
      {attack: ['combo04'], blocks: [[3, 1]]},
      {attack: ['combo05'], blocks: [[4, 1]]},
      {attack: ['combo06'], blocks: [[5, 1]]},
      {attack: ['combo07'], blocks: [[6, 1]]},
      {attack: ['combo08'], blocks: [[4, 1], [3, 1]]},
      {attack: ['combo09'], blocks: [[4, 1], [4, 1]]},
      {attack: ['combo10'], blocks: [[5, 1], [5, 1]]},
      {attack: ['combo11'], blocks: [[6, 1], [5, 1]]},
      {attack: ['combo12'], blocks: [[6, 1], [6, 1]]},
      {attack: ['combo13'], blocks: [[6, 1], [6, 1], [6, 1]]},
      {attack: ['combo14'], label: '+14 to +19', blocks: [[6, 1], [6, 1], [6, 1], [6, 1]]},
      {attack: ['combo20'], label: '+20 to +26', blocks: [[6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1]]},
      {attack: ['combo27'], label: '+27 and up', blocks: [[6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1]]}
    ]
  },
  shakeTime: {
    columns: ['Attack', 'Garbage', 'Frames', 'Seconds'],
    rows: [
      {attack: ['combo04'], blocks: [[3, 1]], frames: 18},
      {attack: ['combo05'], blocks: [[4, 1]], frames: 18},
      {attack: ['combo06'], blocks: [[5, 1]], frames: 24},
      {attack: ['combo07', 'chain02'], blocks: [[6, 1]], frames: 42},
      {attack: ['chain03'], blocks: [[6, 2]], frames: 66},
      {attack: ['chain04'], blocks: [[6, 3]], frames: 66},
      {attack: ['chain05'], label: 'x5 and up', blocks: [[6, 4]], frames: 76}
    ],
    note: 'Blocks taller than four rows all shake for the most there is: 76 frames, 1.27 seconds.'
  }
};
