// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'farquest/core';
import { APIResource } from 'farquest/resource';

export class Completions extends APIResource {
  /**
   * Get the number of quest completions for a quest
   */
  count(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/quest/completions/count/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
