import { DirectionsResponseData } from "@googlemaps/google-maps-services-js/dist/directions";

// @ts-ignore
export const direction: DirectionsResponseData = {
  "geocoded_waypoints": [
    {
      "geocoder_status": "OK",
      "place_id": "ChIJDwzlGXkkm4ARDBBK9Hoedvs",
      "types": [
        "street_address"
      ]
    },
    {
      "geocoder_status": "OK",
      "place_id": "ChIJtQleW4gjm4ARzW_FbkKwAUY",
      "types": [
        "premise"
      ]
    }
  ],
  "routes": [
    {
      "bounds": {
        "northeast": {
          "lat": 38.80939890000001,
          "lng": -121.3522091
        },
        "southwest": {
          "lat": 38.8058776,
          "lng": -121.3584665
        }
      },
      "copyrights": "Map data ©2021",
      "legs": [
        {
          "distance": {
            "text": "0.7 mi",
            "value": 1086
          },
          "duration": {
            "text": "3 mins",
            "value": 192
          },
          "end_address": "4051 Parkland Way, Roseville, CA 95747, USA",
          "end_location": {
            "lat": 38.8058776,
            "lng": -121.3523581
          },
          "start_address": "6040 Danwood Dr, Roseville, CA 95747, USA",
          "start_location": {
            "lat": 38.8088606,
            "lng": -121.3579007
          },
          "steps": [
            {
              "distance": {
                "text": "344 ft",
                "value": 105
              },
              "duration": {
                "text": "1 min",
                "value": 18
              },
              "end_location": {
                "lat": 38.8080284,
                "lng": -121.3584665
              },
              "html_instructions": "Head <b>southwest</b> on <b>Danwood Dr</b> toward <b>Smokehouse Way</b>",
              "polyline": {
                "points": "kzzkFzuucVhAt@n@`@VLRJ"
              },
              "start_location": {
                "lat": 38.8088606,
                "lng": -121.3579007
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "266 ft",
                "value": 81
              },
              "duration": {
                "text": "1 min",
                "value": 21
              },
              "end_location": {
                "lat": 38.8077201,
                "lng": -121.3576281
              },
              "html_instructions": "Turn <b>left</b> onto <b>Smokehouse Way</b>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "euzkFlyucVF_@Rw@`@oA"
              },
              "start_location": {
                "lat": 38.8080284,
                "lng": -121.3584665
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.2 mi",
                "value": 391
              },
              "duration": {
                "text": "1 min",
                "value": 67
              },
              "end_location": {
                "lat": 38.8085886,
                "lng": -121.3548797
              },
              "html_instructions": "Turn <b>left</b> onto <b>Brick Mason Cir</b>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "gszkFdtucVoGcEGKUYCEQi@Ky@@c@JgAb@q@VSXS\\G^C"
              },
              "start_location": {
                "lat": 38.8077201,
                "lng": -121.3576281
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "312 ft",
                "value": 95
              },
              "duration": {
                "text": "1 min",
                "value": 16
              },
              "end_location": {
                "lat": 38.8083218,
                "lng": -121.3538551
              },
              "html_instructions": "Turn <b>left</b> onto <b>Big Tree Way</b>",
              "maneuver": "turn-left",
              "polyline": {
                "points": "uxzkF~bucVDm@Dk@Jk@\\eA"
              },
              "start_location": {
                "lat": 38.8085886,
                "lng": -121.3548797
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "0.2 mi",
                "value": 388
              },
              "duration": {
                "text": "1 min",
                "value": 61
              },
              "end_location": {
                "lat": 38.8060783,
                "lng": -121.3522091
              },
              "html_instructions": "Turn <b>right</b> at the 1st cross street onto <b>Wheelright Way</b>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "_wzkFr|tcVbFzCjA_DbAeDx@wBPg@"
              },
              "start_location": {
                "lat": 38.8083218,
                "lng": -121.3538551
              },
              "travel_mode": "DRIVING"
            },
            {
              "distance": {
                "text": "85 ft",
                "value": 26
              },
              "duration": {
                "text": "1 min",
                "value": 9
              },
              "end_location": {
                "lat": 38.8058776,
                "lng": -121.3523581
              },
              "html_instructions": "Turn <b>right</b> onto <b>Weathervane Way</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
              "maneuver": "turn-right",
              "polyline": {
                "points": "_izkFhrtcVf@\\"
              },
              "start_location": {
                "lat": 38.8060783,
                "lng": -121.3522091
              },
              "travel_mode": "DRIVING"
            }
          ],
          "traffic_speed_entry": [],
          "via_waypoint": []
        }
      ],
      "overview_polyline": {
        "points": "kzzkFzuucVxBvAj@XZwA`@oAoGcE]e@Uo@Ky@@c@JgAb@q@p@g@|@KJyAJk@\\eAbFzCjA_DbAeDx@wBPg@f@\\"
      },
      "summary": "Brick Mason Cir and Wheelright Way",
      "warnings": [],
      "waypoint_order": []
    }
  ],
  "status": "OK"
};