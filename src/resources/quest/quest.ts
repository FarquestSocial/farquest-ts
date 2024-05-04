// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'farquest/core';
import { APIResource } from 'farquest/resource';
import * as QuestAPI from 'farquest/resources/quest/quest';
import * as CompletionsAPI from 'farquest/resources/quest/completions';
import * as TypesAPI from 'farquest/resources/quest/types';
import * as ValidationAPI from 'farquest/resources/quest/validation';
import { maybeMultipartFormRequestOptions } from 'farquest/core';

export class Quest extends APIResource {
  types: TypesAPI.Types = new TypesAPI.Types(this._client);
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
  validation: ValidationAPI.Validation = new ValidationAPI.Validation(this._client);

  /**
   * Create a new quest
   */
  create(body: QuestCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/quest/create',
      maybeMultipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }

  /**
   * Get a quest by ID, optionally for a specific user by their ID
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/quest/${id}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * Get quests paginated, optionally with a filter
   */
  list(
    filter: 'ACTIVE' | 'COMPLETE' | 'ALL' | 'NOT_STARTED',
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/quest/list/${filter}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface QuestCreateParams {
  description: string;

  endsAt: string;

  image: string;

  name: string;

  organizationId: string;

  questTypeId: string;

  startsAt: string;

  validationCriteria: unknown;

  customCallbackMetadata?: unknown;

  customMetadata?: unknown;
}

export namespace Quest {
  export import QuestCreateParams = QuestAPI.QuestCreateParams;
  export import Types = TypesAPI.Types;
  export import Completions = CompletionsAPI.Completions;
  export import Validation = ValidationAPI.Validation;
}
