/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { NextPage } from './nextPage';
import { PreviousPage } from './previousPage';

export class Paging {
    'next'?: NextPage;
    'prev'?: PreviousPage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "next",
            "baseName": "next",
            "type": "NextPage"
        },
        {
            "name": "prev",
            "baseName": "prev",
            "type": "PreviousPage"
        }    ];

    static getAttributeTypeMap() {
        return Paging.attributeTypeMap;
    }
}

