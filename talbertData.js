var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.2708243008444189,
        "pitch": -0.07905749127623096,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.3509523103661962,
          "pitch": 0.020637535645123606,
          "rotation": 0,
          "target": "1-bedroom-1"
        },
        {
          "yaw": -0.33135287791696655,
          "pitch": -0.03874894534598283,
          "rotation": 0,
          "target": "2-bathroom-1"
        },
        {
          "yaw": 0.10975364551674005,
          "pitch": -0.05298229368552754,
          "rotation": 0,
          "target": "3-kitchen-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8802238542043312,
          "pitch": 0.018385940727878136,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.8143061254807815,
        "pitch": -0.01919667424178151,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.292543146661341,
          "pitch": -0.011162747364183545,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": -0.6766658634928415,
          "pitch": -0.06926392153150118,
          "rotation": 0,
          "target": "1-bedroom-1"
        },
        {
          "yaw": -1.5247281540112425,
          "pitch": -0.03423404805827346,
          "rotation": 0,
          "target": "3-kitchen-outside"
        },
        {
          "yaw": -1.183549982654963,
          "pitch": -0.011246050777675265,
          "rotation": 0,
          "target": "5-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-outside",
      "name": "Kitchen Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.456595355082767,
        "pitch": 0.0870278688730668,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.409075466455203,
          "pitch": -0.05445529603518651,
          "rotation": 0,
          "target": "2-bathroom-1"
        },
        {
          "yaw": 0.9967701749067253,
          "pitch": -0.0268051289511142,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 1.1891555632008775,
          "pitch": -0.04547607379553398,
          "rotation": 0,
          "target": "1-bedroom-1"
        },
        {
          "yaw": 2.5714490555447487,
          "pitch": -0.05033629679002516,
          "rotation": 0,
          "target": "4-kitchen-inside"
        },
        {
          "yaw": -0.27253418197270207,
          "pitch": 0.007351917794721885,
          "rotation": 0,
          "target": "8-bedroom-2"
        },
        {
          "yaw": -1.5244023008070187,
          "pitch": 0.1283834685572458,
          "rotation": 0,
          "target": "5-living-room"
        },
        {
          "yaw": -2.2792923487991192,
          "pitch": 0.06601783236535752,
          "rotation": 0,
          "target": "6-doorway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-inside",
      "name": "Kitchen Inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 3.011203900839323,
        "pitch": 0.09342159307414022,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.366437990765581,
          "pitch": 0.0005891124618422339,
          "rotation": 0,
          "target": "3-kitchen-outside"
        },
        {
          "yaw": 2.471617455523969,
          "pitch": -0.03339268817523333,
          "rotation": 0,
          "target": "6-doorway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.2526706606275653,
        "pitch": 0.027611288358359687,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.7335137545438375,
          "pitch": 0.058595218152257544,
          "rotation": 0,
          "target": "3-kitchen-outside"
        },
        {
          "yaw": -0.44686473033286767,
          "pitch": 0.10356008974355468,
          "rotation": 0,
          "target": "6-doorway"
        },
        {
          "yaw": -1.9813926742996308,
          "pitch": 0.03445437952258601,
          "rotation": 0,
          "target": "2-bathroom-1"
        },
        {
          "yaw": -2.1095112753012746,
          "pitch": 0.028487766910416212,
          "rotation": 0,
          "target": "1-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-doorway",
      "name": "Doorway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.060415189109155776,
        "pitch": 0.04227352731965084,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.7250755539017923,
          "pitch": -0.06740015660518672,
          "rotation": 0,
          "target": "4-kitchen-inside"
        },
        {
          "yaw": -0.0174594324957269,
          "pitch": -0.04213415274077015,
          "rotation": 0,
          "target": "3-kitchen-outside"
        },
        {
          "yaw": -1.0345195185996658,
          "pitch": 0.00239372682219674,
          "rotation": 0,
          "target": "5-living-room"
        },
        {
          "yaw": -2.821690461582868,
          "pitch": -0.029509207407459215,
          "rotation": 0,
          "target": "7-outside-porch"
        },
        {
          "yaw": -0.4000777095302759,
          "pitch": -0.021938958013519638,
          "rotation": 0,
          "target": "8-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-outside-porch",
      "name": "Outside Porch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.7481999819103926,
        "pitch": -0.13213528620537573,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.5230859283847131,
          "pitch": 0.09040293561537105,
          "rotation": 0,
          "target": "6-doorway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.7986103256095687,
        "pitch": -0.014363599724669385,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.2768506247949816,
          "pitch": 0.04391244509793779,
          "rotation": 0,
          "target": "3-kitchen-outside"
        },
        {
          "yaw": 1.0570366788704213,
          "pitch": -0.0019192331235373672,
          "rotation": 0,
          "target": "9-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.0563969098342252,
        "pitch": -0.01846346920565267,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.6145747688130427,
          "pitch": 0.014772733285546735,
          "rotation": 0,
          "target": "8-bedroom-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
