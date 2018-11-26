import { validator } from './validator';


const obj = 
{
  "year": 2016,
  "state": {
    "id": "setup"
  },
  "configuration": 1,
  "dates": [
    {
      "date": "2016-03-03T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 1,
            "label": "Keine"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": null,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "GV"
                }
              ]
            }
          ],
          "points": 20
        }
      ],
      "description": "GV"
    },
    {
      "date": "2016-03-04T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 44,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Erste Tour"
                }
              ]
            }
          ]
        }
      ],
      "description": "Erste Tour"
    },
    {
      "date": "2016-03-05T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 2,
          "candidates": [
            {
              "tour": 64,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.25 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.25 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 68,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.169230769230769 %, previous tour had 1.25 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 42,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 1.25 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 57,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.25 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-03-11T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 63,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 15,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 89.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1875 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 19,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 70,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 9,
                  "note": "Locations expected 0 matches got 1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-03-12T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 64,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 19,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-03-18T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 70,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 21,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2266666666666668 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 34,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-03-19T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 64,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.2266666666666668 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.2266666666666668 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.2266666666666668 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1.2266666666666668 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 57,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.2266666666666668 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-03-25T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 63,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 70,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 34,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 66,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-03-26T23:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 1,
            "label": "Keine"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": null,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Ostern"
                }
              ]
            }
          ]
        }
      ],
      "description": "Ostern"
    },
    {
      "date": "2016-03-27T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 16,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Ostermontag"
                }
              ]
            }
          ]
        }
      ],
      "description": "Ostermontag"
    },
    {
      "date": "2016-04-01T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 50,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 15,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9411764705882353 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 26,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 94"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0588235294117647 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 23,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 92"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.8235294117647058 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-02T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 42,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 9,
                  "note": "Locations expected 0 matches got 1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 8,
                  "note": "Locations expected 0 matches got 2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-04T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 3,
          "candidates": [
            {
              "tour": 40,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 38,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9090909090909092 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-06T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 24,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 36,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 14,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-08T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 26,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 94"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0588235294117647 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 15,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9411764705882353 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 23,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 92"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.8235294117647058 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-09T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 30,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 91"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.375 %, previous tour had 1.0588235294117647 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.0588235294117647 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1.0588235294117647 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 42,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 1.0588235294117647 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.0588235294117647 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-11T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 1,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.375 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.375 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.375 %"
                },
                {
                  "name": "Locations check",
                  "score": 9,
                  "note": "Locations expected 0 matches got 1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.375 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 53,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.375 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-13T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 2,
          "candidates": [
            {
              "tour": 24,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 9,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 14,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-15T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 23,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 92"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.8235294117647058 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 15,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9411764705882353 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 55,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 76.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9571428571428571 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-16T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 62,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 42,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 8,
                  "note": "Locations expected 0 matches got 2"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-18T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 54,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 53,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 27,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1454545454545455 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 33,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 11,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-20T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 2,
          "candidates": [
            {
              "tour": 71,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 33,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1454545454545455 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 40,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-22T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 70,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 34,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 66,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.625 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-23T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 59,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 57,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 64,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-25T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 40,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 33,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-27T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 47,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 24,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 14,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-29T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 15,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9411764705882353 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 50,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-04-30T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 32,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "1. Mai"
                }
              ]
            }
          ]
        }
      ],
      "description": "1. Mai"
    },
    {
      "date": "2016-05-02T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 40,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 11,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-04T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 31,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Auffahrt"
                }
              ]
            }
          ]
        }
      ],
      "description": "Auffahrt"
    },
    {
      "date": "2016-05-06T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 18,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 87"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 58,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91.4"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.425 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.625 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 69,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 34,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-07T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 59,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 31,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 6,
                  "note": "Distance expected 75 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-09T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 14,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 67,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-11T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 40,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 71,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 33,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 11,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-13T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 46,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Ricken"
                }
              ]
            }
          ]
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 61,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.625 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 58,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91.4"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.425 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 69,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 72,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 34,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ],
      "description": "Ricken"
    },
    {
      "date": "2016-05-14T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 1,
            "label": "Keine"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": null,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Pfingstsonntag"
                }
              ]
            }
          ]
        }
      ],
      "description": "Pfingstsonntag"
    },
    {
      "date": "2016-05-15T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 16,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Pfingstmontag"
                }
              ]
            }
          ]
        }
      ],
      "description": "Pfingstmontag"
    },
    {
      "date": "2016-05-16T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 3,
          "candidates": [
            {
              "tour": 60,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 33,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 11,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.3571428571428572 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-18T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 71,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 33,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.6 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-20T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 34,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 66,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.625 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 73,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 73"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2307692307692308 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-21T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 29,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 19,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-23T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 27,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 71,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 40,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-25T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 14,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 67,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-05-27T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 51,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Schwarzwald"
                }
              ]
            }
          ]
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 56,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 55,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 76.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9571428571428571 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 26,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 94"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0588235294117647 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 23,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 92"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.8235294117647058 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ],
      "description": "Schwarzwald"
    },
    {
      "date": "2016-05-28T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 75,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Winti-Marathon"
                }
              ]
            }
          ],
          "points": 40
        }
      ],
      "description": "Winti-Marathon"
    },
    {
      "date": "2016-05-30T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 14,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 67,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-01T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 71,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 40,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-03T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 66,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.625 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 73,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 73"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2307692307692308 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 70,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-04T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 29,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 64,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 19,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-06T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 54,
              "totalScore": 61,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 67,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 71,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-08T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 20,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 71,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 33,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-10T22:00:00.000Z",
      "description": "2 Tagestour",
      "tours": [
        {
          "tour": 0,
          "candidates": [
            {
              "tour": null,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "2 Tagestour"
                }
              ]
            }
          ],
          "points": 80
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 66,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 70,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 63,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 21,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2266666666666668 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-11T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 57,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 19,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 64,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.2142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-13T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 67,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-15T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 40,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 38,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9090909090909092 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-17T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": null,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Überraschungstour"
                }
              ]
            }
          ],
          "points": 20
        }
      ],
      "description": "Überraschungstour"
    },
    {
      "date": "2016-06-18T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 13,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 12,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 7,
                  "note": "Distance expected 75 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 57,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 31,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-20T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 67,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 14,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 36,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 24,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-22T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 2,
          "candidates": [
            {
              "tour": 1,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9090909090909092 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-24T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 49,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Schwägalp"
                }
              ]
            }
          ]
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 69,
              "totalScore": 60,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 72,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 18,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 87"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 58,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91.4"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.425 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.625 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ],
      "description": "Schwägalp"
    },
    {
      "date": "2016-06-25T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 31,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.6666666666666667/1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.6666666666666667/1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6666666666666667/1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 19,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.6666666666666667/1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.6666666666666667/1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-27T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 4,
          "candidates": [
            {
              "tour": 14,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 36,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 24,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-06-29T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 3,
          "candidates": [
            {
              "tour": 1,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.6666666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-01T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 73,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 73"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2307692307692308 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 70,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 21,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2266666666666668 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 34,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 66,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-02T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 19,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.2307692307692308 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.2307692307692308 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 64,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.2307692307692308 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.2307692307692308 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 42,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 1.2307692307692308 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-04T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 27,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1454545454545455 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 53,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 33,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 11,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1142857142857143 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-06T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 2,
          "candidates": [
            {
              "tour": 11,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 53,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.1454545454545455 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-08T22:00:00.000Z",
      "description": "Ferientour bis 16.07.2016",
      "tours": [
        {
          "tour": 0,
          "candidates": [
            {
              "tour": null,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Ferientour"
                }
              ]
            }
          ],
          "points": 150
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 45,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 89.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1875 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 63,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 34,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 55,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 76.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 0.9571428571428571 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 19,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-09T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 2,
          "candidates": [
            {
              "tour": 64,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 68,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.169230769230769 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 19,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 78.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1714285714285713 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 42,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 1.1875 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-11T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 17,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 54,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1818181818181819 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 11,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 71,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.1714285714285713 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-13T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 33,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 71,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 11,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.1818181818181819 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-15T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 70,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 34,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 95.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2705882352941176 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 21,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2266666666666668 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 72,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-16T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 64,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 42,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 1.2705882352941176 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-18T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 71,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 55.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1400000000000001 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 44,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 55 got 67.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.25 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 36,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.7 %, previous tour had 1.1538461538461537 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-20T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 11,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.6 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 17,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 9,
                  "note": "Locations expected 0 matches got 1"
                }
              ]
            },
            {
              "tour": 36,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.7 %, previous tour had 1.1400000000000001 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-22T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 28,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Klingenzell"
                }
              ]
            }
          ]
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 21,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2266666666666668 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 70,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 63,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 66,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 30,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.375 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ],
      "description": "Klingenzell"
    },
    {
      "date": "2016-07-23T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 57,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1 %, previous tour had 1.2413793103448276/1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 68,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.169230769230769 %, previous tour had 1.2413793103448276/1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1.2413793103448276/1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.2413793103448276/1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 1.2413793103448276/1.2 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-25T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 17,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 61.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1272727272727274 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 0.9 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 0.9 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.169230769230769 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-27T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 3,
          "candidates": [
            {
              "tour": 44,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 55 got 67.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.25 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 0.9 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 36,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.7 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 14,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1.1272727272727274 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-29T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 55,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 76.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9571428571428571 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 50,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 26,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 94"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0588235294117647 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 15,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9411764705882353 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 23,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 92"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.8235294117647058 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-30T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 2,
          "candidates": [
            {
              "tour": 42,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 30,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 91"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.375 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-07-31T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 32,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Nationalfeiertag"
                }
              ]
            }
          ]
        }
      ],
      "description": "Nationalfeiertag"
    },
    {
      "date": "2016-08-01T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 1,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 38,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9090909090909092 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-03T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 2,
          "candidates": [
            {
              "tour": 14,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 9,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 67,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 0.9 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-05T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 10,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Appenzell"
                }
              ]
            }
          ]
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 3,
          "candidates": [
            {
              "tour": 50,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 26,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 94"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0588235294117647 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 23,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 92"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.8235294117647058 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 15,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9411764705882353 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.3 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ],
      "description": "Appenzell"
    },
    {
      "date": "2016-08-06T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 12,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 7,
                  "note": "Distance expected 75 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.7333333333333332/0.9411764705882353 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 57,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.7333333333333332/0.9411764705882353 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.7333333333333332/0.9411764705882353 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 42,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 5,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 1.7333333333333332/0.9411764705882353 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.7333333333333332/0.9411764705882353 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-08T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 41,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 14,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 67,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-10T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 52,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 40,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 38,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9090909090909092 %, previous tour had 1.6 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-12T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": null,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Überraschungstour"
                }
              ]
            }
          ],
          "points": 20
        }
      ],
      "description": "Überraschungstour"
    },
    {
      "date": "2016-08-13T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 42,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 30,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 91"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.375 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 32,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 68"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-15T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 25,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 40,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 38,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9090909090909092 %, previous tour had 1.7142857142857142 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-17T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 14,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 67,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 24,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 1.0363636363636364 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-19T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 65,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Zugerland"
                }
              ]
            }
          ]
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 23,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 92"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.8235294117647058 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 21,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2266666666666668 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.488888888888889 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ],
      "description": "Zugerland"
    },
    {
      "date": "2016-08-20T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 57,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.8181818181818183/0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.8181818181818183/0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.8181818181818183/0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 31,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.8181818181818183/0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 12,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 7,
                  "note": "Distance expected 75 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.8181818181818183/0.8235294117647058 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-22T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 47,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 67,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 24,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 14,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-24T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 60,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 40,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 38,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9090909090909092 %, previous tour had 1.3333333333333335 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-26T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 72,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 10,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.625 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 58,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91.4"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.425 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 18,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 87"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 69,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 0.9333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-27T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 13,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 31,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 57,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 7,
                  "note": "Locations expected 0 matches got 3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-29T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 67,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 35,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 24,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 36,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-08-31T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 40,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 9,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9090909090909092 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-02T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 74,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Tösstal Classique"
                }
              ]
            }
          ]
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 58,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91.4"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.425 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 18,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 87"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.625 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 69,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 72,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 0.9090909090909092 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ],
      "description": "Tösstal Classique"
    },
    {
      "date": "2016-09-03T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 57,
              "totalScore": 59,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6/1.425 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 31,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.6/1.425 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.6/1.425 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 12,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 7,
                  "note": "Distance expected 75 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6/1.425 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 6,
                  "note": "Distance expected 75 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.6/1.425 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-05T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 67,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 63"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4545454545454546 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 9,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 56.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-07T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 40,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 1,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.4545454545454546 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-09T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 61,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.625 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 18,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 87"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 69,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 72,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 21,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2266666666666668 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-10T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 57,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 12,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 7,
                  "note": "Distance expected 75 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 59,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 31,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 6,
                  "note": "Distance expected 75 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.625 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-12T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 24,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 52.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6666666666666667 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 38,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 14,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.488888888888889 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 41,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 58"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 47,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 51"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 1 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-14T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 4,
            "label": "Abendtour"
          },
          "tour": 3,
          "candidates": [
            {
              "tour": 1,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 52,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 54.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 25,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 55 got 60.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0363636363636364 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 20,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 66.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1166666666666667 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 60,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Abendtour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 55 got 65.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9333333333333333 %, previous tour had 1.7 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-16T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 21,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 84.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2266666666666668 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 66,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 63,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 73,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 73"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2307692307692308 %, previous tour had 1.1166666666666667 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-17T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 76,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Bettag"
                }
              ]
            }
          ],
          "points": 40
        }
      ],
      "description": "Bettag"
    },
    {
      "date": "2016-09-23T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 5,
            "label": "Tagestour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 78,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Winti-Sola"
                }
              ]
            }
          ],
          "points": 40
        },
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 30,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.375 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 18,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 87"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 69,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 72,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 63,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 0 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ],
      "description": "Winti-Sola"
    },
    {
      "date": "2016-09-24T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 59,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.2"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.0285714285714287 %, previous tour had 1.6/0 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 31,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.6/0 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 6,
                  "note": "Distance expected 75 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.6/0 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.6/0 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.6/0 %"
                },
                {
                  "name": "Locations check",
                  "score": 12,
                  "note": "Locations expected 0 matches got -2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-09-30T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 69,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 30,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.375 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 72,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.625 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 66,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.0285714285714287 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-10-01T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 31,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.076923076923077 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 6,
                  "note": "Distance expected 75 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 13,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 53,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 53,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.4285714285714286 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-10-07T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 72,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 74.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4923076923076923 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 61,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.625 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 18,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 87"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.6 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 63,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 1.076923076923077 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-10-08T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 1,
          "candidates": [
            {
              "tour": 13,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 75 got 82.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 29,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 62"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2727272727272727 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 6,
                  "note": "Distance expected 75 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 64,
              "totalScore": 53,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 53,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 5,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 1.4923076923076923 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-10-14T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 63,
              "totalScore": 58,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 83.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1333333333333333 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 22,
              "totalScore": 57,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 30,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 91"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.375 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 66,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 78.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.2142857142857142 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 10,
                  "note": "Locations expected 0 matches got 0"
                }
              ]
            },
            {
              "tour": 26,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 94"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.0588235294117647 %, previous tour had 1.2727272727272727 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-10-15T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 37,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 1.1333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 62,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 77.8"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1142857142857143 %, previous tour had 1.1333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 64,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.1538461538461537 %, previous tour had 1.1333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 68,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 72.6"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.169230769230769 %, previous tour had 1.1333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 53,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 1.1333333333333333 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-10-21T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 3,
            "label": "Nachmittagstour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 55,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 76.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9571428571428571 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 50,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93.5"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 8,
                  "note": "Locations expected 0 matches got 2"
                }
              ]
            },
            {
              "tour": 15,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 90 got 93"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9411764705882353 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 73,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 90 got 73"
                },
                {
                  "name": "Difficulty check",
                  "score": 8,
                  "note": "Elevation is 1.2307692307692308 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 56,
              "totalScore": 54,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Nachmittagstour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 9,
                  "note": "Distance expected 90 got 98.3"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 0.9222222222222222 %, previous tour had 1.3857142857142857 %"
                },
                {
                  "name": "Locations check",
                  "score": 8,
                  "note": "Locations expected 0 matches got 2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-10-22T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 2,
            "label": "Morgentour"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": 30,
              "totalScore": 56,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 7,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 8,
                  "note": "Distance expected 75 got 91"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.375 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 42,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 82"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.7142857142857142 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 32,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 68"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3333333333333335 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 37,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 79.7"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.3857142857142857 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            },
            {
              "tour": 39,
              "totalScore": 55,
              "scores": [
                {
                  "name": "Tour-Type matching",
                  "score": 10,
                  "note": "Checking for type Morgentour"
                },
                {
                  "name": "Tour-Usage check",
                  "score": 4,
                  "note": "Counting usages for tour"
                },
                {
                  "name": "Restaurant check",
                  "score": 10,
                  "note": "Restaurant must be open"
                },
                {
                  "name": "Distance check",
                  "score": 10,
                  "note": "Distance expected 75 got 80"
                },
                {
                  "name": "Difficulty check",
                  "score": 10,
                  "note": "Elevation is 1.4285714285714286 %, previous tour had 0.9571428571428571 %"
                },
                {
                  "name": "Locations check",
                  "score": 11,
                  "note": "Locations expected 0 matches got -1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2016-10-27T22:00:00.000Z",
      "tours": [
        {
          "type": {
            "id": 1,
            "label": "Keine"
          },
          "tour": 0,
          "candidates": [
            {
              "tour": null,
              "scores": [
                {
                  "name": "Special date override",
                  "score": 0,
                  "note": "Abschluss"
                }
              ]
            }
          ]
        }
      ],
      "description": "Abschluss"
    }
  ],
  "version": 1,
  "id": 1
}
;
const errors = validator(obj);
console.log(errors.length > 0, errors);
console.log(errors[0]);

