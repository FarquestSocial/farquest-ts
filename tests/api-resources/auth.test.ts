// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Farquest from 'farquest';
import { Response } from 'node-fetch';

const farquest = new Farquest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource auth', () => {
  test('callback: only required params', async () => {
    const responsePromise = farquest.auth.callback({ state: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('callback: required and optional params', async () => {
    const response = await farquest.auth.callback({ state: 'string' });
  });

  test('retrieveState', async () => {
    const responsePromise = farquest.auth.retrieveState('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveState: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(farquest.auth.retrieveState('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Farquest.NotFoundError,
    );
  });
});
