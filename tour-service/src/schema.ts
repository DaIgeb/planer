import { AnySchema } from 'is-my-json-valid';

export const tour: AnySchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: { type: 'string', required: true },
    name: { type: 'string', required: true },
    types: {
      type: 'array',
      items: {
        type: "object",
        properties: {
          id: { type: "string", required: true },
          label: { type: "string", required: true }
        }
      },
      required: true
    },
    timelines: {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "from": {
            "type": "string",
            "format": "date-time"
          },
          "until": {
            "type": "string",
            "format": "date-time"
          },
          "restaurants": {
            "type": "array",
            "items": {
              "type": "number"
            }
          },
          "distance": {
            "type": "number"
          },
          "elevation": {
            "type": "number"
          },
          "difficulty": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number"
              },
              "label": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "label"
            ]
          },
          "locations": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "from",
          "until",
          "restaurants",
          "distance",
          "elevation",
          "difficulty",
          "locations"
        ]
      }, required: true
    }
  }
};
