// How to Play: the game's basics, step by step. A step's clip is a glossary term's, named by its glossary id,
// or its own: a clip played on its board in howToPlay-puzzles.json, filmed into images/howToPlay/ by panelAttackControl.
// Everything after the = is plain JSON, so the in-game tutorial can read this same file: keep it that way.
window.HOW_TO_PLAY = {
  "title": "How to Play",
  "theme": "crystal-theme",
  "intro": "Panel Attack is a puzzle action game. Panels rise from the bottom of your board, and you swap them side to side to line up three or more of the same color. Matched panels disappear, the panels above them fall, and the stack keeps rising. If the board fills to the top, you are in danger of losing. There are many modes to play both solo and multiplayer.",
  "controls": {
    "image": "images/guide/controller.svg?v=3",
    "keyboard": "On a keyboard the defaults are the arrow keys to move, Z or X to swap, C or V to raise, and Enter to pause. Controllers start unassigned: set them up under Configure input in the main menu."
  },
  "lessons": [
    {
      "name": "The Basics",
      "steps": [
        {
          "id": "moving",
          "title": "Moving",
          "body": "The cursor covers two panels side by side. Move it anywhere on the board with the directional buttons.",
          "clip": {
            "steps": [
              {
                "press": [
                  "right"
                ],
                "frame": 20
              },
              {
                "press": [
                  "right"
                ],
                "frame": 30
              },
              {
                "press": [
                  "right"
                ],
                "frame": 40
              },
              {
                "press": [
                  "right"
                ],
                "frame": 50
              },
              {
                "press": [
                  "up"
                ],
                "frame": 60
              },
              {
                "press": [
                  "up"
                ],
                "frame": 70
              },
              {
                "press": [
                  "up"
                ],
                "frame": 80
              },
              {
                "press": [
                  "left"
                ],
                "frame": 90
              },
              {
                "press": [
                  "left"
                ],
                "frame": 100
              },
              {
                "press": [
                  "left"
                ],
                "frame": 110
              },
              {
                "press": [
                  "left"
                ],
                "frame": 120
              },
              {
                "press": [
                  "down"
                ],
                "frame": 130
              },
              {
                "press": [
                  "down"
                ],
                "frame": 140
              },
              {
                "press": [
                  "down"
                ],
                "frame": 150
              }
            ],
            "matches": 0,
            "rows": 5,
            "hold": false,
            "tail": 20
          },
          "image": "images/howToPlay/moving.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "swapping",
          "title": "Swapping",
          "body": "Press either swap button to trade the two panels under the cursor.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              },
              {
                "row": 2,
                "column": 3,
                "frame": 90
              }
            ],
            "matches": 0,
            "rows": 5,
            "hold": false,
            "tail": 60
          },
          "image": "images/howToPlay/swapping.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "dropping",
          "title": "Dropping",
          "body": "Swap a panel into an empty space and it falls until it lands on something.",
          "clip": {
            "steps": [
              {
                "row": 4,
                "column": 1,
                "frame": 30
              },
              {
                "row": 3,
                "column": 1,
                "frame": 80
              }
            ],
            "matches": 0,
            "rows": 5,
            "tail": 60
          },
          "image": "images/howToPlay/dropping.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "matching",
          "title": "Matching",
          "body": "Line up three or more panels of the same color, across or up and down, and they disappear.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 3,
                "frame": 30
              },
              {
                "row": 1,
                "column": 5,
                "frame": 110
              }
            ],
            "matches": 2,
            "rows": 4,
            "tail": 90
          },
          "image": "images/howToPlay/matching.mp4",
          "size": [
            288,
            246
          ]
        },
        {
          "id": "raising",
          "title": "Raising",
          "body": "The stack rises on its own. Hold a raise button to bring up new panels faster.",
          "clip": {
            "steps": [
              {
                "press": [
                  "raise"
                ],
                "frame": 200,
                "frames": 50
              }
            ],
            "matches": 0,
            "frame": true,
            "rows": 12,
            "lowest": 0,
            "hold": false,
            "tail": 60
          },
          "image": "images/howToPlay/raising.mp4",
          "size": [
            312,
            654
          ]
        },
        {
          "id": "game-over",
          "title": "Game Over",
          "body": "If the board fills to the top, you are in danger of losing. Your health drains while you stay topped out, unless something holds the stack still: stop time from a combo or chain, shake time from garbage landing, or pre-stop time while your matches are still popping. When your health runs out, you lose. Get back below the top and your health refills.",
          "clip": {
            "steps": [],
            "frame": true,
            "rows": 12,
            "lowest": 0,
            "tail": 900
          },
          "image": "images/howToPlay/game-over.mp4",
          "size": [
            312,
            654
          ]
        }
      ]
    },
    {
      "name": "Combos and Chains",
      "steps": [
        {
          "id": "combos",
          "title": "Combos",
          "body": "Match more than three panels at once and you make a combo. A +4 is four panels, a +5 is five, and so on.",
          "clip": {
            "steps": [
              {
                "row": 5,
                "column": 3,
                "frame": 30
              },
              {
                "row": 1,
                "column": 3,
                "frame": [
                  150,
                  220
                ]
              }
            ],
            "expect": [
              "+4",
              "+5"
            ],
            "rows": 8,
            "tail": 130,
            "to": 260
          },
          "image": "images/howToPlay/combos.mp4",
          "size": [
            288,
            438
          ]
        },
        {
          "id": "chains",
          "title": "Chains",
          "body": "When a match disappears, the panels above it fall. If they land in another match, that is a chain: x2 for two matches in a row, x3 for three.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 5,
                "frame": 30
              }
            ],
            "expect": [
              "x3"
            ],
            "rows": 4,
            "tail": 240
          },
          "image": "images/howToPlay/chains.mp4",
          "size": [
            288,
            246
          ]
        },
        {
          "id": "skill-chains",
          "title": "Skill Chains",
          "body": "You can keep a chain going by swapping panels into place while the last match is still clearing. This is a skill chain. It matters because you cannot lose during pre-stop time, while panels are clearing, and you rarely have time to build a whole chain ahead of time.",
          "glossary": "chain-extension"
        }
      ]
    },
    {
      "name": "Stop Time",
      "steps": [
        {
          "id": "stop-time",
          "title": "Stop Time",
          "body": "After a combo or a chain the stack stops rising for a moment. Bigger combos and chains stop it for longer.",
          "clip": {
            "steps": [
              {
                "row": 4,
                "column": 1,
                "frame": 40
              },
              {
                "row": 2,
                "column": 5,
                "frame": 200
              }
            ],
            "expect": [
              "x3",
              "+4"
            ],
            "multibar": true,
            "frame": true,
            "hold": false,
            "rows": 8,
            "lowest": 0,
            "to": "rise",
            "tail": 360
          },
          "image": "images/howToPlay/stop-time.mp4",
          "size": [
            351,
            462
          ]
        },
        {
          "id": "danger",
          "title": "Stop Time in Danger",
          "body": "When you are topped out, with a panel in the top row, combos and chains earn extra stop time. Close to the top isn't enough. That is often the breathing room you need to dig out.",
          "clip": {
            "steps": [
              {
                "row": 10,
                "column": 3,
                "frame": 290
              }
            ],
            "expect": [
              "+5"
            ],
            "level": 5,
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "chain": [
                    20,
                    35
                  ],
                  "chainEndTime": 50
                }
              ]
            },
            "multibar": true,
            "frame": true,
            "hold": false,
            "rows": 12,
            "lowest": 0,
            "to": "rise",
            "tail": 360
          },
          "image": "images/howToPlay/danger.mp4",
          "size": [
            351,
            714
          ]
        }
      ]
    },
    {
      "name": "VS Mode",
      "steps": [
        {
          "id": "vs",
          "title": "Sending Garbage",
          "body": "In VS your goal is to make your opponent top out. Every combo and chain sends garbage to their board.",
          "clip": {
            "steps": [
              {
                "row": 4,
                "column": 5,
                "frame": 30
              },
              {
                "row": 1,
                "column": 5,
                "frame": 120
              }
            ],
            "expect": [
              "x2",
              "+4"
            ],
            "vsSelf": true,
            "frame": true,
            "rows": 12,
            "to": 400,
            "tail": 300
          },
          "image": "images/howToPlay/vs.mp4",
          "size": [
            312,
            690
          ]
        },
        {
          "id": "combo-garbage",
          "title": "Combo Garbage",
          "body": "A combo sends small blocks. The bigger the combo, the wider the blocks and the more of them.",
          "reference": "comboGarbage"
        },
        {
          "id": "chain-garbage",
          "title": "Chain Garbage",
          "body": "A chain sends a block as wide as the board, one row thicker for each link: an x2 sends one row, an x3 two rows, an x4 three.",
          "clip": {
            "steps": [],
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "chain": [
                    20
                  ],
                  "chainEndTime": 40
                },
                {
                  "chain": [
                    140,
                    155
                  ],
                  "chainEndTime": 170
                },
                {
                  "chain": [
                    280,
                    295,
                    310
                  ],
                  "chainEndTime": 325
                }
              ]
            },
            "frame": true,
            "rows": 12,
            "tail": 520
          },
          "image": "images/howToPlay/chain-garbage.mp4",
          "size": [
            312,
            690
          ]
        },
        {
          "id": "shock-panels",
          "title": "Shock Panels",
          "body": "In VS, raising after you have cleared a lot of panels can bring up shock panels. Match three or more of them to send a special shock garbage block.",
          "clip": {
            "steps": [
              {
                "press": [
                  "raise"
                ],
                "frame": 30,
                "frames": 80
              },
              {
                "row": 4,
                "column": 3,
                "frame": 170
              }
            ],
            "matches": 1,
            "vsSelf": true,
            "frame": true,
            "rows": 12,
            "lowest": 0,
            "tail": 300
          },
          "image": "images/howToPlay/shock-panels.mp4",
          "size": [
            312,
            714
          ]
        },
        {
          "id": "garbage-order",
          "title": "Garbage Order",
          "body": "Garbage sent to you doesn't fall straight away. The clips below show what holds it back.",
          "list": [
            {
              "text": "Before it can fall, garbage takes about 1.5 seconds (90 frames) to reach the telegraph above your board and leave it, then 1 more second (60 frames):",
              "list": [
                "A chain's garbage stays in the telegraph until the chain ends, and its 1.5 seconds start from the last link.",
                "Combo garbage can't leave the telegraph while any chain garbage is in it, and shock garbage can't while chain or combo garbage is.",
                "Combo garbage can't leave while a narrower combo block is still there, and a new block of the same width restarts the wait for all of them."
              ]
            },
            {
              "text": "Then it falls one block at a time, never while your top row has panels in it, in this order:",
              "list": [
                {
                  "text": "Chain garbage first, in the order the chains ended",
                  "list": [
                    "x2 chain garbage waits until none of your panels are clearing, falling or being swapped. While it waits, it also holds back any chain garbage queued behind it.",
                    "Larger chain garbage two or more rows thick (from x3 chains or larger) falls even while you have panels clearing, falling or being swapped."
                  ]
                },
                "Combo garbage next, narrowest first. It waits similar to x2 chain garbage (only falling when no panels are clearing, falling or being swapped, but unlike x2 chain garbage, combo garbage does not hold back chain garbage), so you can hold it back by keeping matches going.",
                "Shock garbage always goes to the back of the garbage queue, waiting the same way as x2 chain garbage and combo garbage (only falling when no panels are clearing, falling or being swapped, but unlike x2 chain garbage, shock garbage does not hold back chain garbage)."
              ]
            }
          ]
        },
        {
          "id": "large-chains-while-clearing",
          "title": "Large Chains While Clearing",
          "body": "When there is no garbage queued from x2 chains, chain garbage two or more rows thick falls even while your panels are clearing. In the clip, a garbage block from an x3 chain lands while the chain on the board continues to grow.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 5,
                "frame": 30
              }
            ],
            "expect": [
              "x7"
            ],
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "chain": [
                    20,
                    87
                  ],
                  "chainEndTime": 147
                }
              ]
            },
            "frame": true,
            "rows": 12,
            "tail": 500
          },
          "image": "images/howToPlay/large-chains-while-clearing.mp4",
          "size": [
            312,
            690
          ]
        },
        {
          "id": "x2-and-combos-wait",
          "title": "x2 and Combos Wait",
          "body": "An x2's one row and combo garbage wait until none of your panels are clearing, falling or being swapped. In the clip, an x2 and a +4 arrive during an x7 and fall only once it is over, the x2 first.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 5,
                "frame": 30
              }
            ],
            "expect": [
              "x7"
            ],
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "chain": [
                    20
                  ],
                  "chainEndTime": 80
                },
                {
                  "width": 3,
                  "height": 1,
                  "startTime": 100
                }
              ]
            },
            "frame": true,
            "rows": 12,
            "tail": 610,
            "to": 640
          },
          "image": "images/howToPlay/x2-and-combos-wait.mp4",
          "size": [
            312,
            690
          ]
        },
        {
          "id": "combos-left-to-right",
          "title": "Combos Fall Left to Right",
          "body": "Each width of combo block takes turns between set places, keeping its own turn through the game. Column 1 is the leftmost column, counting up to column 6 on the right:",
          "list": [
            "3-wide: the left half, then the right half (columns 1–3, then 4–6)",
            "4-wide: columns 1–4, then 2–5, then 3–6",
            "5-wide: columns 1–5, then 2–6",
            "6-wide: the whole row"
          ],
          "clip": {
            "steps": [],
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 20
                },
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 40
                },
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 60
                }
              ]
            },
            "frame": true,
            "rows": 12,
            "tail": 320
          },
          "image": "images/howToPlay/combos-left-to-right.mp4",
          "size": [
            312,
            690
          ]
        }
      ]
    },
    {
      "name": "Clearing Garbage",
      "steps": [
        {
          "id": "garbage-clear",
          "title": "Clearing Garbage",
          "body": "Make a match touching a garbage block to turn it into normal panels.",
          "glossary": "garbage-clear"
        },
        {
          "id": "linked-garbage",
          "title": "Linked Garbage",
          "body": "Garbage blocks of the same kind that touch clear together. Shock garbage between two blocks keeps them apart.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 3,
                "frame": 30
              }
            ],
            "matches": 1,
            "rows": 6,
            "tail": 240
          },
          "image": "images/howToPlay/linked-garbage.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "thick-garbage",
          "title": "Thick Garbage",
          "body": "Clearing a thick block only turns its bottom layer into panels. You have to clear each layer on its own.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              },
              {
                "row": 3,
                "column": 4,
                "frame": [
                  225,
                  300
                ]
              },
              {
                "row": 3,
                "column": 5,
                "frame": 420
              }
            ],
            "matches": 3,
            "expect": [],
            "rows": 6,
            "tail": 240,
            "to": 640
          },
          "image": "images/howToPlay/thick-garbage.mp4",
          "size": [
            288,
            342
          ]
        }
      ]
    },
    {
      "name": "Match Stats",
      "steps": [
        {
          "id": "analytics",
          "title": "Match Stats",
          "body": "The panel beside your board counts what you do in a match. It starts on; you can turn it off under Options, General, Enable analytics. Per minute means per minute of the match clock, from before the countdown, with pauses left out. It refreshes once a second.",
          "picture": "images/guide/analytics.svg?v=1",
          "list": [
            "Panel: panels you've matched. Garbage you clear doesn't count.",
            "Face: garbage you've sent, in lines. A chain counts a line per link after the first, a combo half a line per 3-wide block and a line per wider one, and a shock match a line per shock panel past the second. It counts in every mode.",
            "Bricks: GPM, the garbage you've sent per minute.",
            "Brackets: cursor moves. Holding a direction counts once, however far the cursor runs.",
            "Arrows: swaps. A swap the game refuses doesn't count.",
            "Controller: APM, your moves plus swaps per minute. Raising doesn't count.",
            "Chain cards: how many chains you ended at each length. A ? card counts the ones longer than the theme has cards for.",
            "Combo cards: how many combos of each size you made, chain links included."
          ]
        }
      ]
    }
  ]
};
