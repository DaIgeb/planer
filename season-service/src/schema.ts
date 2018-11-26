import { AnySchema } from 'is-my-json-valid';

const tourEvent: AnySchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    date: { type: 'string', format: 'date', required: true },
    tours: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        additionalProperties: true,
        properties: {
          id: { type: 'string', required: true },
          points: { type: 'number', required: true }
        }
      }
    }
  }
};

const dateRangeEvent: AnySchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    dateFrom: { type: 'string', format: 'date', required: true },
    dateTo: { type: 'string', format: 'date', required: true },
    description: { type: 'string', required: true }
  }
};

const dateEvent: AnySchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    date: { type: 'string', format: 'date', required: true },
    description: { type: 'string', required: true }
  }
};

const event: AnySchema = {
  oneOf: [
    dateEvent,
    tourEvent,
    dateRangeEvent
  ]
};

export const season: AnySchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: { type: 'string', required: true },
    title: { type: 'string', required: true },
    events: {
      type: 'array',
      items: event
    }
  }
};
