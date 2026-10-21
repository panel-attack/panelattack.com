// The glossary's terms, and how each term's clip is filmed.
// Everything after the = is plain JSON, so the filming tools read this same file: keep it that way.
window.GLOSSARY = {
  "title": "Glossary",
  "theme": "crystal-theme",
  "description": "Comprehensive reference for Panel Attack terminology and techniques.",
  "categories": [
    {
      "name": "Game Mechanics",
      "terms": [
        {
          "id": "combo",
          "title": "Combo",
          "body": "A match of more than three panels at the same time. Denoted as +4 for a 4 combo, +5 for a 5 combo, etc.",
          "image": "images/glossary/combo.mp4",
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
            "rows": 5
          },
          "size": [
            288,
            294
          ]
        },
        {
          "id": "chain",
          "title": "Chain",
          "body": "When panels fall after a match disappears, causing another match. Denoted as x2 for a 2 chain, x3 for a 3 chain, etc. Referred to as \"skill chains\" when panels are actively swapped to extend the chain. Chains above x13 are referred to as \"mystery chains\" due to the game denoting them as \"x?\".",
          "image": "images/glossary/chain.mp4",
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
            "rows": 3
          },
          "size": [
            288,
            198
          ]
        },
        {
          "id": "clear",
          "title": "Clear",
          "body": "When panels are matched next to garbage blocks, turning the garbage into panels.",
          "image": "images/glossary/clear.mp4",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 3,
                "frame": 30
              }
            ],
            "matches": 1,
            "rows": 3,
            "hold": false,
            "tail": 240
          },
          "size": [
            288,
            198
          ]
        },
        {
          "id": "tier",
          "title": "Tier",
          "body": "Layers of panels above or between garbage.",
          "image": "images/glossary/tier.mp4",
          "clip": {
            "steps": [],
            "rows": 6,
            "tail": 30
          },
          "size": [
            288,
            342
          ]
        },
        {
          "id": "shake-time",
          "title": "Shake Time",
          "body": "The period of time after garbage falls on your stack, causing it to shake. Larger garbage results in more shake time. You cannot lose during shake time, even if you are topped out.",
          "image": "images/glossary/shake-time.mp4",
          "clip": {
            "steps": [],
            "multibar": true,
            "frame": true,
            "hold": false,
            "rows": 6,
            "tail": 100
          },
          "size": [
            351,
            342
          ]
        },
        {
          "id": "stop-time",
          "title": "Stop Time",
          "body": "The period of time after making a chain or combo when your panels stop rising. Larger chains and combos result in more stop time. Less stop time is given on higher difficulty levels; more stop time is given if you are nearly topped out. You cannot lose during stop time, even if you are topped out.",
          "image": "images/glossary/stop-time.mp4",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 3,
                "frame": 90
              }
            ],
            "expect": [
              "+4"
            ],
            "multibar": true,
            "frame": true,
            "hold": false,
            "rows": 7,
            "lowest": 0,
            "to": 225,
            "tail": 240
          },
          "size": [
            351,
            414
          ]
        },
        {
          "id": "time-delay",
          "title": "Time Delay",
          "body": "When falling panels land at slightly different times and form multiple chains instead of a single chain/combo.",
          "image": "images/glossary/time-delay.mp4",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 4,
                "frame": 30
              }
            ],
            "expect": [
              "x3",
              "+5"
            ],
            "rows": 7,
            "tail": 240
          },
          "size": [
            288,
            390
          ]
        },
        {
          "id": "ghost-match",
          "title": "Ghost Match",
          "body": "When rising panels become active and form a match. Can also be a ghost combo if multiple matches are made.",
          "image": "images/glossary/ghost-match.mp4",
          "clip": {
            "steps": [],
            "matches": 1,
            "frame": true,
            "rows": 4,
            "lowest": 0,
            "tail": 200
          },
          "size": [
            312,
            270
          ]
        },
        {
          "id": "garbage-chain",
          "title": "Garbage Chain",
          "body": "When panels fall from cleared garbage and cause a chain or combo.",
          "image": "images/glossary/garbage-chain.mp4",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 1,
                "frame": 30
              },
              {
                "row": 3,
                "column": 3,
                "frame": [
                  130,
                  300
                ]
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 6,
            "tail": 240
          },
          "size": [
            288,
            342
          ]
        },
        {
          "id": "das",
          "title": "DAS",
          "body": "\"Delayed Auto Shift\" — Rapidly moving your cursor across the board by holding down a movement key.",
          "image": "images/glossary/das.mp4",
          "clip": {
            "steps": [
              {
                "press": [
                  "right"
                ],
                "frames": 24,
                "frame": 20
              },
              {
                "press": [
                  "left"
                ],
                "frames": 24,
                "frame": 70
              }
            ],
            "rows": 3,
            "hold": false,
            "tail": 30
          },
          "size": [
            288,
            198
          ]
        },
        {
          "id": "link",
          "title": "Link",
          "body": "Each match in a chain after the first.",
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
          "image": "images/glossary/link.mp4",
          "size": [
            288,
            246
          ]
        },
        {
          "id": "revealed-row",
          "title": "Revealed Row",
          "body": "The colored panels that come from clearing or converting garbage.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 3,
                "frame": 30
              }
            ],
            "matches": 1,
            "rows": 3,
            "tail": 200
          },
          "image": "images/glossary/revealed-row.mp4",
          "size": [
            288,
            198
          ]
        },
        {
          "id": "incoming-garbage",
          "title": "Incoming Garbage",
          "body": "Garbage about to land on your board that has not landed yet.",
          "clip": {
            "steps": [],
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 20
                }
              ]
            },
            "frame": true,
            "rows": 12,
            "lowest": 6,
            "tail": 200
          },
          "image": "images/glossary/incoming-garbage.mp4",
          "size": [
            312,
            450
          ]
        }
      ]
    },
    {
      "name": "Frame Tricks",
      "terms": [
        {
          "id": "frame-trick",
          "title": "Frame Trick",
          "body": "Any skill chain that requires frame-perfect timing to execute (e.g. slide, catch).",
          "image": "images/glossary/frame-trick.mp4",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 4,
                "frame": 30
              },
              {
                "row": 3,
                "column": 3,
                "frame": [
                  40,
                  160
                ]
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 5,
            "tail": 180
          },
          "size": [
            288,
            294
          ]
        },
        {
          "id": "catch",
          "title": "Catch",
          "body": "Swapping a falling panel into an adjacent column, requiring frame-perfect timing. A type of skill chain.",
          "image": "images/glossary/catch.mp4",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 4,
                "frame": 30
              },
              {
                "row": 2,
                "column": 3,
                "frame": [
                  40,
                  160
                ]
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 5,
            "tail": 180
          },
          "size": [
            288,
            294
          ]
        },
        {
          "id": "grounded-catch",
          "title": "Grounded Catch",
          "body": "A catch made the moment the falling panel lands on the floor, swapping it sideways before it stops counting as part of the chain.",
          "image": "images/glossary/grounded-catch.mp4",
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
                "frame": [
                  40,
                  200
                ]
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 5,
            "tail": 180
          },
          "size": [
            288,
            294
          ]
        },
        {
          "id": "slide",
          "title": "Slide",
          "body": "Swapping a panel underneath a falling panel so it supports two panels at once, requiring frame-perfect timing. A type of skill chain.",
          "image": "images/glossary/slide.mp4",
          "clip": {
            "steps": [
              {
                "row": 3,
                "column": 1,
                "frame": 30
              },
              {
                "row": 1,
                "column": 1,
                "frame": [
                  40,
                  160
                ]
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 5,
            "tail": 180
          },
          "size": [
            288,
            294
          ]
        },
        {
          "id": "insert",
          "title": "Insert",
          "body": "Swapping a panel into the space left by a clear before the panels above fill the hole.",
          "image": "images/glossary/insert.mp4",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              },
              {
                "row": 2,
                "column": 2,
                "frame": [
                  40,
                  160
                ]
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 6,
            "tail": 180
          },
          "size": [
            288,
            342
          ]
        },
        {
          "id": "stealth",
          "title": "Stealth",
          "body": "Swapping a piece over two spaces by quickly pressing both swap buttons while moving in the direction you want to swap the panel. Can be used to move a panel past a match, or extend the length of a catch (also called a stealth chain).",
          "image": "images/glossary/stealth.mp4",
          "clip": {
            "steps": [
              {
                "press": [
                  "swap"
                ],
                "frame": 30
              },
              {
                "press": [
                  "right",
                  "swap"
                ],
                "frame": 32
              }
            ],
            "matches": 0,
            "rows": 4,
            "tail": 90
          },
          "size": [
            288,
            246
          ]
        },
        {
          "id": "tornado",
          "title": "Tornado",
          "body": "Quickly swapping two panels into the space left from a vertical match to create a chain.",
          "image": "images/glossary/tornado.mp4",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 3,
                "frame": 30
              },
              {
                "row": 1,
                "column": 2,
                "frame": [
                  40,
                  160
                ]
              },
              {
                "row": 2,
                "column": 3
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 5,
            "tail": 180
          },
          "size": [
            288,
            294
          ]
        }
      ]
    },
    {
      "name": "Offense",
      "terms": [
        {
          "id": "combo-storm",
          "title": "Combo Storm",
          "body": "Performing many combos in rapid succession to send many small garbage pieces, resulting in low shake time for your opponent; can kill very quickly.",
          "image": "images/glossary/combo-storm.mp4",
          "clip": {
            "steps": [],
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "width": 3,
                  "height": 1,
                  "startTime": 20
                },
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 28
                },
                {
                  "width": 3,
                  "height": 1,
                  "startTime": 36
                },
                {
                  "width": 5,
                  "height": 1,
                  "startTime": 44
                },
                {
                  "width": 3,
                  "height": 1,
                  "startTime": 52
                },
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 60
                },
                {
                  "width": 6,
                  "height": 1,
                  "startTime": 68
                },
                {
                  "width": 3,
                  "height": 1,
                  "startTime": 76
                },
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 84
                },
                {
                  "width": 5,
                  "height": 1,
                  "startTime": 92
                },
                {
                  "width": 3,
                  "height": 1,
                  "startTime": 100
                },
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 108
                },
                {
                  "width": 3,
                  "height": 1,
                  "startTime": 116
                },
                {
                  "width": 5,
                  "height": 1,
                  "startTime": 124
                },
                {
                  "width": 4,
                  "height": 1,
                  "startTime": 132
                },
                {
                  "width": 3,
                  "height": 1,
                  "startTime": 140
                }
              ]
            },
            "rows": 12,
            "from": 50,
            "to": 440,
            "tail": 700
          },
          "size": [
            288,
            690
          ]
        },
        {
          "id": "factory",
          "title": "Factory",
          "body": "Rapidly sending many x3 chains to your opponent, resulting in a garbage pattern that is very difficult to clear.",
          "image": "images/glossary/factory.mp4",
          "clip": {
            "steps": [],
            "attacks": {
              "delayBeforeRepeat": 100000,
              "attackPatterns": [
                {
                  "chain": [
                    20,
                    35
                  ],
                  "chainEndTime": 50
                },
                {
                  "chain": [
                    65,
                    80
                  ],
                  "chainEndTime": 95
                },
                {
                  "chain": [
                    110,
                    125
                  ],
                  "chainEndTime": 140
                },
                {
                  "chain": [
                    155,
                    170
                  ],
                  "chainEndTime": 185
                },
                {
                  "chain": [
                    200,
                    215
                  ],
                  "chainEndTime": 230
                },
                {
                  "chain": [
                    245,
                    260
                  ],
                  "chainEndTime": 275
                }
              ]
            },
            "rows": 12,
            "to": 440,
            "tail": 800
          },
          "size": [
            288,
            690
          ]
        },
        {
          "id": "setup",
          "title": "Setup",
          "body": "Preparing panels ahead of time, before a match is made.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              },
              {
                "row": 1,
                "column": 5,
                "frame": 70
              }
            ],
            "expect": [
              "x2"
            ],
            "rows": 3
          },
          "image": "images/glossary/setup.mp4",
          "size": [
            288,
            198
          ]
        },
        {
          "id": "chain-extension",
          "title": "Chain Extension",
          "body": "Adding another link to a chain.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 5,
                "frame": 30
              },
              {
                "row": 2,
                "column": 5,
                "frame": 40
              },
              {
                "row": 1,
                "column": 4,
                "frame": [
                  60,
                  140
                ]
              }
            ],
            "expect": [
              "x3"
            ],
            "rows": 4,
            "tail": 240
          },
          "image": "images/glossary/chain-extension.mp4",
          "size": [
            288,
            246
          ]
        },
        {
          "id": "bridge",
          "title": "Bridge",
          "body": "Filling in a gap with panels or a clear so you can walk panels across it.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              },
              {
                "row": 2,
                "column": 5,
                "frame": 70
              },
              {
                "row": 2,
                "column": 4,
                "frame": 84
              },
              {
                "row": 2,
                "column": 3,
                "frame": 98
              }
            ],
            "matches": 1,
            "rows": 3,
            "to": 115,
            "tail": 120
          },
          "image": "images/glossary/bridge.mp4",
          "size": [
            288,
            198
          ]
        },
        {
          "id": "match-bridge",
          "title": "Match Bridge",
          "body": "Walking a panel across panels that are flashing from a match, which hold it up until they clear, to reach a garbage clear on the other side.",
          "image": "images/glossary/match-bridge.mp4",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 4,
                "frame": 30
              },
              {
                "row": 2,
                "column": 1,
                "frame": 44
              },
              {
                "row": 2,
                "column": 2,
                "frame": 56
              },
              {
                "row": 2,
                "column": 3,
                "frame": 68
              }
            ],
            "matches": 2,
            "rows": 4,
            "to": 85,
            "tail": 240
          },
          "size": [
            288,
            246
          ]
        }
      ]
    },
    {
      "name": "Defense",
      "terms": [
        {
          "id": "topped-out",
          "title": "Topped Out",
          "body": "When panels and/or garbage reach the top of your playfield. Being topped out for too long results in defeat.",
          "image": "images/glossary/topped-out.mp4",
          "clip": {
            "steps": [],
            "frame": true,
            "rows": 12,
            "tail": 90
          },
          "size": [
            312,
            630
          ]
        },
        {
          "id": "locked-out",
          "title": "Locked Out",
          "body": "When you are topped out with no possible moves to make.",
          "image": "images/glossary/locked-out.mp4",
          "clip": {
            "steps": [],
            "frame": true,
            "rows": 12,
            "tail": 90
          },
          "size": [
            312,
            630
          ]
        },
        {
          "id": "tower",
          "title": "Tower",
          "body": "A tall, isolated column of panels. Very dangerous; holds garbage up high, often prevents clears, and inhibits how high you can raise your stack.",
          "image": "images/glossary/tower.mp4",
          "clip": {
            "steps": [],
            "rows": 9,
            "tail": 30
          },
          "size": [
            288,
            486
          ]
        },
        {
          "id": "downstacking",
          "title": "Downstacking",
          "body": "Removing panels from towers (or the highest points of your stack) to reduce its height.",
          "image": "images/glossary/downstacking.mp4",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              },
              {
                "row": 2,
                "column": 2,
                "frame": 60
              },
              {
                "row": 3,
                "column": 3,
                "frame": 90
              },
              {
                "row": 3,
                "column": 2,
                "frame": 120
              }
            ],
            "rows": 7,
            "hold": false,
            "tail": 60
          },
          "size": [
            288,
            390
          ]
        },
        {
          "id": "shogun",
          "title": "Shogun",
          "body": "When a panel from a higher tier falls and creates a chain after the garbage beneath it is cleared.",
          "image": "images/glossary/shogun.mp4",
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
            "tail": 240
          },
          "size": [
            288,
            390
          ]
        },
        {
          "id": "transition-clear",
          "title": "Transition Clear",
          "body": "Aligning three panels as shown below to easily \"transition\" from one layer of garbage to the next.",
          "image": "images/glossary/transition-clear.mp4",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 3,
                "frame": 30
              },
              {
                "row": 4,
                "column": 1,
                "frame": [
                  60,
                  400
                ]
              }
            ],
            "matches": 2,
            "rows": 7,
            "tail": 240
          },
          "size": [
            288,
            390
          ]
        },
        {
          "id": "garbage-clear",
          "title": "Garbage Clear",
          "body": "The match that starts converting a garbage block.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 3,
                "frame": 30
              }
            ],
            "matches": 1,
            "rows": 4,
            "tail": 200
          },
          "image": "images/glossary/garbage-clear.mp4",
          "size": [
            288,
            246
          ]
        },
        {
          "id": "transition-panels",
          "title": "Transition Panels",
          "body": "The panels on top of a garbage block that you can already see and plan for, which fall when the block has finished converting to normal panels.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 5,
                "frame": 30
              }
            ],
            "matches": 1,
            "rows": 4,
            "tail": 180
          },
          "image": "images/glossary/transition-panels.mp4",
          "size": [
            288,
            246
          ]
        },
        {
          "id": "pedestal",
          "title": "Pedestal (Support)",
          "body": "The panel holding up newly revealed panels so you can make a match with them.",
          "clip": {
            "steps": [
              {
                "row": 1,
                "column": 5,
                "frame": 30
              },
              {
                "row": 2,
                "column": 3,
                "frame": 140
              },
              {
                "row": 3,
                "column": 3,
                "frame": [
                  185,
                  320
                ]
              }
            ],
            "matches": 2,
            "rows": 6,
            "to": 300,
            "tail": 240
          },
          "image": "images/glossary/pedestal.mp4",
          "size": [
            288,
            342
          ]
        },
        {
          "id": "conserve",
          "title": "Conserve",
          "body": "Using as few panels as possible to survive when your stack is low. Also called conserving.",
          "clip": {
            "steps": [
              {
                "row": 2,
                "column": 3,
                "frame": 30
              },
              {
                "row": 2,
                "column": 4,
                "frame": 160
              },
              {
                "row": 3,
                "column": 4,
                "frame": 455
              },
              {
                "row": 3,
                "column": 5,
                "frame": [
                  462,
                  560
                ]
              }
            ],
            "expect": [
              "x3"
            ],
            "rows": 9,
            "tail": 900
          },
          "image": "images/glossary/conserve.mp4",
          "size": [
            288,
            486
          ]
        }
      ]
    }
  ]
};
