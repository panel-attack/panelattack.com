// The guide's lessons, each with animated examples of its patterns:
// a clip played on its board in lessons-puzzles.json, filmed into images/lessons/ by panelAttackControl.
// A lesson is found by its name in sections.js. Everything after the = is plain JSON: keep it that way.
window.GUIDE_LESSONS = {
  "lessons": [
    {
      "name": "Your First Combos",
      "steps": [
        {
          "id": "first-combo",
          "title": "A +5 Combo",
          "caption": "Find one color in three rows next to each other. Don't match them yet: bring in a fourth and fifth panel, then one more swap makes a +5.",
          "clip": {
            "steps": [
              {
                "row": 5,
                "column": 4,
                "frame": 30
              },
              {
                "row": 1,
                "column": 2,
                "frame": 100
              },
              {
                "row": 1,
                "column": 3,
                "frame": 125
              },
              {
                "row": 3,
                "column": 3,
                "frame": 190
              }
            ],
            "expect": [
              "+5"
            ],
            "rows": 6,
            "tail": 240,
            "to": 300
          },
          "image": "images/lessons/first-combo.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "vertical-4",
          "title": "Vertical +4",
          "caption": "The trigger can be either of the two middle panels.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              }
            ],
            "expect": [
              "+4"
            ],
            "rows": 5,
            "tail": 240,
            "to": 140
          },
          "image": "images/lessons/vertical-4.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "vertical-5",
          "title": "Vertical +5",
          "caption": "The trigger must be the middle panel.",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 3,
                "frame": 30
              }
            ],
            "expect": [
              "+5"
            ],
            "rows": 6,
            "tail": 240,
            "to": 140
          },
          "image": "images/lessons/vertical-5.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "vertical-6",
          "title": "Vertical +6",
          "caption": "The trigger can be in any row.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              }
            ],
            "expect": [
              "+6"
            ],
            "rows": 4,
            "tail": 240,
            "to": 140
          },
          "image": "images/lessons/vertical-6.mp4",
          "size": [
            288,
            246
          ]
        },
        {
          "id": "l-shaped-5",
          "title": "L-shaped +5",
          "caption": "One panel in the first row, one in the second and three in the third, or the other way up.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 3,
                "frame": 30
              }
            ],
            "expect": [
              "+5"
            ],
            "rows": 4,
            "tail": 240,
            "to": 140
          },
          "image": "images/lessons/l-shaped-5.mp4",
          "size": [
            288,
            246
          ]
        },
        {
          "id": "t-shaped-5",
          "title": "T-shaped +5",
          "caption": "One panel in the first row, three in the second and one in the third.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 1,
                "frame": 30
              }
            ],
            "expect": [
              "+5"
            ],
            "rows": 4,
            "tail": 240,
            "to": 140
          },
          "image": "images/lessons/t-shaped-5.mp4",
          "size": [
            288,
            246
          ]
        }
      ]
    },
    {
      "name": "Your First Chains",
      "steps": [
        {
          "id": "first-chain",
          "title": "A x2 Chain",
          "caption": "The yellow on top of the cyans will fall when they clear. Line up two more yellows where it lands, and the yellows fall into a x2.",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 4,
                "frame": 30
              },
              {
                "row": 4,
                "column": 1,
                "frame": 90
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 7,
            "tail": 200
          },
          "image": "images/lessons/first-chain.mp4",
          "size": [
            288,
            390
          ]
        },
        {
          "id": "chain-reds",
          "title": "Extending With Reds",
          "caption": "Move these reds into position for a x3.",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 4,
                "frame": 30
              },
              {
                "row": 1,
                "column": 3,
                "frame": 80
              },
              {
                "row": 4,
                "column": 1,
                "frame": 140
              }
            ],
            "expect": [
              "x3"
            ],
            "rows": 7,
            "tail": 260
          },
          "image": "images/lessons/chain-reds.mp4",
          "size": [
            288,
            390
          ]
        },
        {
          "id": "chain-greens",
          "title": "Extending With Greens",
          "caption": "Or these greens.",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 4,
                "frame": 30
              },
              {
                "row": 2,
                "column": 4,
                "frame": 80
              },
              {
                "row": 1,
                "column": 5,
                "frame": 120
              },
              {
                "row": 1,
                "column": 4,
                "frame": 150
              },
              {
                "row": 4,
                "column": 1,
                "frame": 230
              }
            ],
            "expect": [
              "x3"
            ],
            "rows": 7,
            "tail": 260
          },
          "image": "images/lessons/chain-greens.mp4",
          "size": [
            288,
            390
          ]
        },
        {
          "id": "chain-both",
          "title": "Extending With Both",
          "caption": "Or both, which ends the x3 with a +6 combo.",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 4,
                "frame": 30
              },
              {
                "row": 1,
                "column": 3,
                "frame": 80
              },
              {
                "row": 2,
                "column": 4,
                "frame": 120
              },
              {
                "row": 1,
                "column": 5,
                "frame": 160
              },
              {
                "row": 1,
                "column": 4,
                "frame": 190
              },
              {
                "row": 4,
                "column": 1,
                "frame": 270
              }
            ],
            "expect": [
              "x3",
              "+6"
            ],
            "rows": 7,
            "tail": 260
          },
          "image": "images/lessons/chain-both.mp4",
          "size": [
            288,
            390
          ]
        }
      ]
    },
    {
      "name": "Set and Forget Chain Patterns",
      "steps": [
        {
          "id": "double-horizontal-a",
          "title": "Double Horizontal",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 5,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 3,
            "tail": 200
          },
          "image": "images/lessons/double-horizontal-a.mp4",
          "size": [
            288,
            198
          ]
        },
        {
          "id": "double-horizontal-b",
          "title": "Double Horizontal",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 4,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 3,
            "tail": 200
          },
          "image": "images/lessons/double-horizontal-b.mp4",
          "size": [
            288,
            198
          ]
        },
        {
          "id": "double-vertical-a",
          "title": "Double Vertical",
          "clip": {
            "steps": [
              {
                "row": 4,
                "column": 1,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 7,
            "tail": 200
          },
          "image": "images/lessons/double-vertical-a.mp4",
          "size": [
            288,
            390
          ]
        },
        {
          "id": "double-vertical-b",
          "title": "Double Vertical",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 1,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 7,
            "tail": 200
          },
          "image": "images/lessons/double-vertical-b.mp4",
          "size": [
            288,
            390
          ]
        },
        {
          "id": "horizontal-to-vertical-a",
          "title": "Horizontal to Vertical",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 4,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 5,
            "tail": 200
          },
          "image": "images/lessons/horizontal-to-vertical-a.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "horizontal-to-vertical-b",
          "title": "Horizontal to Vertical",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 4,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 5,
            "tail": 200
          },
          "image": "images/lessons/horizontal-to-vertical-b.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "vertical-to-horizontal",
          "title": "Vertical to Horizontal",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 5,
            "tail": 200
          },
          "image": "images/lessons/vertical-to-horizontal.mp4",
          "size": [
            288,
            294
          ]
        }
      ]
    },
    {
      "name": "Defence Basics",
      "steps": [
        {
          "id": "clearing-garbage",
          "title": "Clearing Garbage",
          "caption": "Downstack towers and loose panels, and look for matches touching the garbage.",
          "clip": {
            "steps": [
              {
                "row": 4,
                "column": 5,
                "frame": 30
              },
              {
                "row": 2,
                "column": 5,
                "frame": [
                  100,
                  160
                ]
              }
            ],
            "expect": [],
            "matches": 1,
            "rows": 8,
            "tail": 300
          },
          "image": "images/lessons/clearing-garbage.mp4",
          "size": [
            288,
            438
          ]
        },
        {
          "id": "clearing-garbage-chain",
          "title": "Garbage Chain",
          "caption": "Line up colors under the panels the garbage turns into, and they fall into a garbage chain.",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 3,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 6,
            "tail": 300
          },
          "image": "images/lessons/clearing-garbage-chain.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "topped-out",
          "title": "Topped Out",
          "caption": "Topped out with no clears? Don't panic. A combo or chain gives you stop time (a plain match doesn't): downstack loose panels with it and look for a clear.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 2,
                "frame": 8
              },
              {
                "row": 3,
                "column": 3,
                "frame": 50
              },
              {
                "row": 5,
                "column": 1,
                "frame": 150
              },
              {
                "row": 5,
                "column": 2,
                "frame": 175
              },
              {
                "row": 2,
                "column": 1,
                "frame": [
                  210,
                  320
                ]
              }
            ],
            "expect": [
              "+4"
            ],
            "level": 1,
            "multibar": true,
            "frame": true,
            "rows": 12,
            "lowest": 0,
            "hold": false,
            "tail": 300,
            "to": 420
          },
          "image": "images/lessons/topped-out.mp4",
          "size": [
            351,
            654
          ]
        },
        {
          "id": "backup-combo",
          "title": "Backup Combo",
          "caption": "With plenty of panels, keep a combo ready near a bottom corner for when you get into trouble.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 5,
                "frame": 30
              }
            ],
            "expect": [
              "+4"
            ],
            "rows": 10,
            "tail": 240,
            "to": 140
          },
          "image": "images/lessons/backup-combo.mp4",
          "size": [
            288,
            534
          ]
        },
        {
          "id": "raise-for-panels",
          "title": "Raise for Panels",
          "caption": "Barely any panels to defend with if another attack comes. There's still room up top: raise for more.",
          "clip": {
            "steps": [
              {
                "press": [
                  "raise"
                ],
                "frame": 60,
                "frames": 40
              }
            ],
            "matches": 0,
            "frame": true,
            "rows": 12,
            "lowest": 0,
            "hold": false,
            "tail": 60
          },
          "image": "images/lessons/raise-for-panels.mp4",
          "size": [
            312,
            654
          ]
        },
        {
          "id": "risky-garbage-chain",
          "title": "Risky Garbage Chain",
          "caption": "A x2+6 garbage chain is powerful but risky with so few panels. A plain x2 would be safer at this height.",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 2,
                "frame": 120
              }
            ],
            "expect": [
              "x2",
              "+6"
            ],
            "rows": 12,
            "tail": 700,
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "chain": [
                    5,
                    15,
                    25,
                    35
                  ],
                  "chainEndTime": 40
                }
              ]
            }
          },
          "image": "images/lessons/risky-garbage-chain.mp4",
          "size": [
            288,
            690
          ]
        }
      ]
    },
    {
      "name": "Downstacking Carefully",
      "steps": [
        {
          "id": "downstack-slowly",
          "title": "Downstack Slowly",
          "caption": "Can't even see the halfway point of the garbage? Downstack slowly to make the most of shake time.",
          "clip": {
            "steps": [
              {
                "row": 5,
                "column": 5,
                "frame": 20
              },
              {
                "row": 4,
                "column": 5,
                "frame": 100
              },
              {
                "row": 2,
                "column": 4,
                "frame": 160
              },
              {
                "row": 3,
                "column": 5,
                "frame": 230
              }
            ],
            "matches": 0,
            "level": 1,
            "multibar": true,
            "frame": true,
            "rows": 12,
            "lowest": 0,
            "hold": false,
            "tail": 120
          },
          "image": "images/lessons/downstack-slowly.mp4",
          "size": [
            351,
            654
          ]
        },
        {
          "id": "dont-ruin-the-clear",
          "title": "Don't Ruin the Clear",
          "caption": "Moving the top cyan right might be your first instinct, but it would ruin the clear. Moving the pink right instead sets up an easy +4.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 2,
                "frame": 30
              },
              {
                "row": 3,
                "column": 1,
                "frame": [
                  90,
                  150
                ]
              }
            ],
            "expect": [
              "+4"
            ],
            "rows": 8,
            "tail": 240,
            "to": 260
          },
          "image": "images/lessons/dont-ruin-the-clear.mp4",
          "size": [
            288,
            438
          ]
        }
      ]
    },
    {
      "name": "High Stack Defence",
      "steps": [
        {
          "id": "high-stack",
          "title": "High Stack",
          "clip": {
            "steps": [
              {
                "press": [
                  "raise"
                ],
                "frame": 30,
                "frames": 60
              }
            ],
            "matches": 0,
            "level": 5,
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "chain": [
                    40,
                    50,
                    60
                  ],
                  "chainEndTime": 70
                }
              ]
            },
            "multibar": true,
            "frame": true,
            "rows": 12,
            "lowest": 0,
            "hold": false,
            "tail": 230,
            "to": 320
          },
          "image": "images/lessons/high-stack.mp4",
          "size": [
            351,
            714
          ]
        }
      ]
    },
    {
      "name": "Why +7 Combos Are Bad",
      "steps": [
        {
          "id": "plus-7",
          "title": "A Two-Color +7",
          "caption": "The fourth red isn't needed to make this combo. You could either...",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 3,
                "frame": 30
              }
            ],
            "expect": [
              "+7"
            ],
            "rows": 5,
            "tail": 240,
            "to": 140
          },
          "image": "images/lessons/plus-7.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "plus-7-to-6",
          "title": "Make It a +6",
          "caption": "...remove the fourth red to make a +6...",
          "clip": {
            "steps": [
              {
                "row": 4,
                "column": 2,
                "frame": 30
              },
              {
                "row": 3,
                "column": 3,
                "frame": 80
              }
            ],
            "expect": [
              "+6"
            ],
            "rows": 5,
            "tail": 240,
            "to": 190
          },
          "image": "images/lessons/plus-7-to-6.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "plus-7-to-8-green",
          "title": "Make It a +8",
          "caption": "...add a green to make a +8...",
          "clip": {
            "steps": [
              {
                "row": 4,
                "column": 4,
                "frame": 30
              },
              {
                "row": 3,
                "column": 3,
                "frame": 70
              }
            ],
            "expect": [
              "+8"
            ],
            "rows": 5,
            "tail": 240,
            "to": 180
          },
          "image": "images/lessons/plus-7-to-8-green.mp4",
          "size": [
            288,
            294
          ]
        },
        {
          "id": "plus-7-to-8-red",
          "title": "Make It a +8",
          "caption": "...or add a fifth red to make a +8.",
          "clip": {
            "steps": [
              {
                "row": 5,
                "column": 2,
                "frame": 30
              },
              {
                "row": 3,
                "column": 3,
                "frame": 80
              }
            ],
            "expect": [
              "+8"
            ],
            "rows": 6,
            "tail": 240,
            "to": 190
          },
          "image": "images/lessons/plus-7-to-8-red.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "t-shaped-7",
          "title": "T-shaped +7",
          "caption": "T-shapes look cool, but this is the same as any other +7.",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 1,
                "frame": 30
              }
            ],
            "expect": [
              "+7"
            ],
            "rows": 6,
            "tail": 240,
            "to": 140
          },
          "image": "images/lessons/t-shaped-7.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "t-shaped-7-to-l",
          "title": "Make It an L +5",
          "caption": "Remove one of the branches to turn it into an L-shaped +5...",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 1,
                "frame": 30
              },
              {
                "row": 3,
                "column": 1,
                "frame": 60
              }
            ],
            "expect": [
              "+5"
            ],
            "rows": 6,
            "tail": 240,
            "to": 170
          },
          "image": "images/lessons/t-shaped-7-to-l.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "t-shaped-7-to-vertical",
          "title": "Make It a Vertical +5",
          "caption": "...or a vertical +5...",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 4,
                "frame": 30
              },
              {
                "row": 3,
                "column": 3,
                "frame": 60
              },
              {
                "row": 3,
                "column": 1,
                "frame": 100
              }
            ],
            "expect": [
              "+5"
            ],
            "rows": 6,
            "tail": 240,
            "to": 210
          },
          "image": "images/lessons/t-shaped-7-to-vertical.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "t-shaped-7-to-l-up",
          "title": "Make It an L +5",
          "caption": "...or an L-shaped +5 the other way up.",
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
                "frame": 60
              }
            ],
            "expect": [
              "+5"
            ],
            "rows": 6,
            "tail": 240,
            "to": 170
          },
          "image": "images/lessons/t-shaped-7-to-l-up.mp4",
          "size": [
            288,
            342
          ]
        }
      ]
    },
    {
      "name": "Shoguns and Transition Clears",
      "steps": [
        {
          "id": "shogun",
          "title": "Shogun",
          "caption": "The cyan will be held up by the panel the garbage turns into beneath it, and chains when the garbage clears.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 5,
                "frame": 30
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 8,
            "tail": 300
          },
          "image": "images/lessons/shogun.mp4",
          "size": [
            288,
            438
          ]
        },
        {
          "id": "transition-clear",
          "title": "Transition Clear",
          "caption": "When the garbage clears, the red falls one space, and the next layer clears quickly whatever panels the cleared garbage turned into.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 2,
                "frame": 30
              },
              {
                "row": 4,
                "column": 1,
                "frame": [
                  100,
                  200
                ]
              }
            ],
            "expect": [
              "x2"
            ],
            "matches": 3,
            "rows": 9,
            "tail": 300,
            "to": 330
          },
          "image": "images/lessons/transition-clear.mp4",
          "size": [
            288,
            486
          ]
        }
      ]
    }
  ]
};
