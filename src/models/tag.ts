/**
 * Swagger PetstoreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, object, optional, Schema, string } from '../schema';

export interface Tag {
  id?: bigint;
  photoUrls: string[];
  name?: string;
}

export const tagSchema: Schema<Tag> = object({
  id: ['id', optional(bigint())],
  photoUrls: ['photoUrls', array(string(), { xmlItemName: 'photoUrl' })],
  name: ['name', optional(string())],
});