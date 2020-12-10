/**
 * Blog Post endpoints
 * \"Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags\"
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* Model definition for a Tag.
*/
export class Tag {
    /**
    * The unique ID of the Blog Tag.
    */
    'id': string;
    /**
    * The name of the tag.
    */
    'name': string;
    /**
    * The timestamp (ISO8601 format) when this Blog Tag was deleted.
    */
    'deletedAt': Date;
    /**
    * The timestamp (ISO8601 format) when this Blog Tag was created.
    */
    'createdAt': Date;
    /**
    * The timestamp (ISO8601 format) when this Blog Tag was last updated.
    */
    'updatedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Tag.attributeTypeMap;
    }
}

