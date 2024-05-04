// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'farquest/core';
import { APIResource } from 'farquest/resource';

export class Validation extends APIResource {
  /**
   * Get the validation criteria for a quest
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/quest/validation/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
