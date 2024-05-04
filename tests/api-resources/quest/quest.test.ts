// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Farquest from 'farquest';
import { Response } from 'node-fetch';

const farquest = new Farquest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource quest', () => {
  test('create: only required params', async () => {
    const responsePromise = farquest.quest.create({
      description: 'string',
      endsAt: '2019-12-27T18:11:19.117Z',
      image: 'string',
      name: 'string',
      organizationId: 'string',
      questTypeId: 'string',
      startsAt: '2019-12-27T18:11:19.117Z',
      validationCriteria: {},
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
    const response = await farquest.quest.create({
      description: 'string',
      endsAt: '2019-12-27T18:11:19.117Z',
      image: 'string',
      name: 'string',
      organizationId: 'string',
      questTypeId: 'string',
      startsAt: '2019-12-27T18:11:19.117Z',
      validationCriteria: {},
      customCallbackMetadata: {},
      customMetadata: {},
    });
  });

  test('retrieve', async () => {
    const responsePromise = farquest.quest.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(farquest.quest.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Farquest.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = farquest.quest.list('ACTIVE');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(farquest.quest.list('ACTIVE', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Farquest.NotFoundError,
    );
  });
});
