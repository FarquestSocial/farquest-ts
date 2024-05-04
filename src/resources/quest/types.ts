// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'farquest/core';
import { APIResource } from 'farquest/resource';

export class Types extends APIResource {
  /**
   * Get all quest types
   */
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/quest/types', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
