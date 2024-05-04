// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'farquest/core';
import { APIResource } from 'farquest/resource';
import * as OrganizationsAPI from 'farquest/resources/organizations';
import { maybeMultipartFormRequestOptions } from 'farquest/core';

export class Organizations extends APIResource {
  /**
   * Create a new organization
   */
  create(body: OrganizationCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/organizations/create',
      maybeMultipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }
}

export interface OrganizationCreateParams {
  authRedirectUrl: string;

  callbackUrl: string;

  name: string;
}

export namespace Organizations {
  export import OrganizationCreateParams = OrganizationsAPI.OrganizationCreateParams;
}
