// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'farquest/core';
import { APIResource } from 'farquest/resource';
import * as SessionAPI from 'farquest/resources/session';
import { maybeMultipartFormRequestOptions } from 'farquest/core';

export class Session extends APIResource {
  /**
   * Create a new session with a correlated ID
   */
  createCorrelated(
    params: SessionCreateCorrelatedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { path_correlatedId, body_correlatedId, authorization, farquestapikey, ...body } = params;
    return this._client.post(
      `/session/${path_correlatedId}`,
      maybeMultipartFormRequestOptions({
        body: { correlatedId: body_correlatedId, ...body },
        ...options,
        headers: {
          Accept: '*/*',
          authorization: authorization,
          farquestapikey: farquestapikey,
          ...options?.headers,
        },
      }),
    );
  }
}

export interface SessionCreateCorrelatedParams {
  /**
   * Path param:
   */
  path_correlatedId: string;

  /**
   * Body param:
   */
  body_correlatedId: string;

  /**
   * Header param:
   */
  authorization: string;

  /**
   * Header param:
   */
  farquestapikey: string;
}

export namespace Session {
  export import SessionCreateCorrelatedParams = SessionAPI.SessionCreateCorrelatedParams;
}
