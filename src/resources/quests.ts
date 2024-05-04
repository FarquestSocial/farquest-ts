// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'farquest/core';
import { APIResource } from 'farquest/resource';
import * as QuestsAPI from 'farquest/resources/quests';
import { maybeMultipartFormRequestOptions } from 'farquest/core';

export class Quests extends APIResource {
  /**
   * Complete a quest
   */
  complete(body: QuestCompleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/quest/complete',
      maybeMultipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }
}

export interface QuestCompleteParams {
  correlationId: string;

  questId: string;
}

export namespace Quests {
  export import QuestCompleteParams = QuestsAPI.QuestCompleteParams;
}
