// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'farquest/core';
import { APIResource } from 'farquest/resource';
import * as AuthAPI from 'farquest/resources/auth';
import { maybeMultipartFormRequestOptions } from 'farquest/core';

export class Auth extends APIResource {
  /**
   * Callback to session with Privy Auth, returns URL to redirect back to your app
   */
  callback(body: AuthCallbackParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/auth/callback',
      maybeMultipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }

  /**
   * Get the redirect URL to start a session
   */
  retrieveState(state: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/auth/${state}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AuthCallbackParams {
  state: string;
}

export namespace Auth {
  export import AuthCallbackParams = AuthAPI.AuthCallbackParams;
}
