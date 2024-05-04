// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Farquest from 'farquest';
import { Response } from 'node-fetch';

const farquest = new Farquest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource quests', () => {
  test('complete: only required params', async () => {
    const responsePromise = farquest.quests.complete({ correlationId: 'string', questId: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: required and optional params', async () => {
    const response = await farquest.quests.complete({ correlationId: 'string', questId: 'string' });
  });
});
