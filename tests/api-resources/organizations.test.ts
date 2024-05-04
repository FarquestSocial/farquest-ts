// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Farquest from 'farquest';
import { Response } from 'node-fetch';

const farquest = new Farquest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource organizations', () => {
  test('create: only required params', async () => {
    const responsePromise = farquest.organizations.create({
      authRedirectUrl: 'string',
      callbackUrl: 'string',
      name: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await farquest.organizations.create({
      authRedirectUrl: 'string',
      callbackUrl: 'string',
      name: 'string',
    });
  });
});
