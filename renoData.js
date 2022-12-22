var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-doorentry",
      "name": "Front Door/Entry",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5809576339148315,
        "pitch": 0.04129062099346825,
        "fov": 1.2725518759018106
      },
      "linkHotspots": [
        {
          "yaw": -2.45818387572851,
          "pitch": 0.07473665330511281,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 1.2583431129412048,
          "pitch": 0.13033236523149228,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": 0.9435871540980187,
          "pitch": 0.032186491822560725,
          "rotation": 0,
          "target": "7-deck"
        },
        {
          "yaw": 2.3017003861337484,
          "pitch": 0.06751673685474202,
          "rotation": 0,
          "target": "8-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4623738547145404,
        "pitch": 0.09655244965565757,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.4623738547145404,
          "pitch": 0.09655244965565757,
          "rotation": 0,
          "target": "0-front-doorentry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9404158231515005,
          "pitch": 0.0585363183621439,
          "rotation": 0,
          "target": "0-front-doorentry"
        },
        {
          "yaw": 0.5322048780969979,
          "pitch": 0.03620673704377886,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -3.024584166168859,
          "pitch": 0.14591458812748925,
          "rotation": 0,
          "target": "7-deck"
        },
        {
          "yaw": -0.4404399466769,
          "pitch": 0.07032695887815699,
          "rotation": 0,
          "target": "8-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18543949017808714,
          "pitch": 0.03537271391840413,
          "rotation": 5.497787143782138,
          "target": "8-laundry"
        },
        {
          "yaw": 0.45701544456473897,
          "pitch": 0.02039327763662513,
          "rotation": 0.7853981633974483,
          "target": "6-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.861312006649479,
          "pitch": 0.08587035200736359,
          "rotation": 0,
          "target": "8-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1213298887247412,
        "pitch": 0.3707017313830221,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 2.6043022636654234,
          "pitch": 0.06561932604723708,
          "rotation": 18.06415775814132,
          "target": "8-laundry"
        },
        {
          "yaw": 2.8825576619977067,
          "pitch": 0.06004345339419537,
          "rotation": 0,
          "target": "6-bedroom-3"
        },
        {
          "yaw": 3.0768853568583845,
          "pitch": 0.052929079156839975,
          "rotation": 13.351768777756625,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-3",
      "name": "Bedroom 3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1181230315134068,
          "pitch": 0.06261675966874236,
          "rotation": 6.283185307179586,
          "target": "8-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-deck",
      "name": "Deck",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4287917863443962,
        "pitch": -0.03566851487418177,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 3.097679202249089,
          "pitch": 0.07500363064687043,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": 2.7288610313013493,
          "pitch": 0.07743177363501097,
          "rotation": 0,
          "target": "8-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-laundry",
      "name": "Laundry",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9122498030226964,
          "pitch": 0.10035197199969126,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": -2.898957841074653,
          "pitch": 0.02262698558920917,
          "rotation": 0,
          "target": "4-bedroom-1"
        },
        {
          "yaw": 2.2444734830371322,
          "pitch": 0.042162314461084094,
          "rotation": 0,
          "target": "5-bedroom-2"
        },
        {
          "yaw": -0.11697109450421905,
          "pitch": 0.10644520330457397,
          "rotation": 0,
          "target": "6-bedroom-3"
        },
        {
          "yaw": 0.431119654444295,
          "pitch": 0.04897226820513545,
          "rotation": 0,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Oct-25-2020",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
