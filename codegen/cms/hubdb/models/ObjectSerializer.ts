export * from './BatchInputHubDbTableRowV3Request';
export * from './BatchInputJsonNode';
export * from './BatchInputString';
export * from './BatchResponseHubDbTableRowV3';
export * from './BatchResponseHubDbTableRowV3WithErrors';
export * from './CollectionResponseWithTotalHubDbTableRowV3ForwardPaging';
export * from './CollectionResponseWithTotalHubDbTableV3ForwardPaging';
export * from './Column';
export * from './ColumnRequest';
export * from './ErrorDetail';
export * from './ForeignId';
export * from './ForwardPaging';
export * from './HubDbTableCloneRequest';
export * from './HubDbTableRowV3';
export * from './HubDbTableRowV3Request';
export * from './HubDbTableV3';
export * from './HubDbTableV3Request';
export * from './ImportResult';
export * from './ModelError';
export * from './NextPage';
export * from './Option';
export * from './SimpleUser';
export * from './StandardError';

import { BatchInputHubDbTableRowV3Request } from './BatchInputHubDbTableRowV3Request';
import { BatchInputJsonNode } from './BatchInputJsonNode';
import { BatchInputString } from './BatchInputString';
import { BatchResponseHubDbTableRowV3, BatchResponseHubDbTableRowV3StatusEnum        } from './BatchResponseHubDbTableRowV3';
import { BatchResponseHubDbTableRowV3WithErrors, BatchResponseHubDbTableRowV3WithErrorsStatusEnum          } from './BatchResponseHubDbTableRowV3WithErrors';
import { CollectionResponseWithTotalHubDbTableRowV3ForwardPaging } from './CollectionResponseWithTotalHubDbTableRowV3ForwardPaging';
import { CollectionResponseWithTotalHubDbTableV3ForwardPaging } from './CollectionResponseWithTotalHubDbTableV3ForwardPaging';
import { Column         , ColumnTypeEnum      } from './Column';
import { ColumnRequest   , ColumnRequestTypeEnum      } from './ColumnRequest';
import { ErrorDetail } from './ErrorDetail';
import { ForeignId } from './ForeignId';
import { ForwardPaging } from './ForwardPaging';
import { HubDbTableCloneRequest } from './HubDbTableCloneRequest';
import { HubDbTableRowV3 } from './HubDbTableRowV3';
import { HubDbTableRowV3Request } from './HubDbTableRowV3Request';
import { HubDbTableV3 } from './HubDbTableV3';
import { HubDbTableV3Request } from './HubDbTableV3Request';
import { ImportResult } from './ImportResult';
import { ModelError } from './ModelError';
import { NextPage } from './NextPage';
import { Option } from './Option';
import { SimpleUser } from './SimpleUser';
import { StandardError } from './StandardError';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "BatchResponseHubDbTableRowV3StatusEnum",
    "BatchResponseHubDbTableRowV3WithErrorsStatusEnum",
    "ColumnTypeEnum",
    "ColumnRequestTypeEnum",
]);

let typeMap: {[index: string]: any} = {
    "BatchInputHubDbTableRowV3Request": BatchInputHubDbTableRowV3Request,
    "BatchInputJsonNode": BatchInputJsonNode,
    "BatchInputString": BatchInputString,
    "BatchResponseHubDbTableRowV3": BatchResponseHubDbTableRowV3,
    "BatchResponseHubDbTableRowV3WithErrors": BatchResponseHubDbTableRowV3WithErrors,
    "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging": CollectionResponseWithTotalHubDbTableRowV3ForwardPaging,
    "CollectionResponseWithTotalHubDbTableV3ForwardPaging": CollectionResponseWithTotalHubDbTableV3ForwardPaging,
    "Column": Column,
    "ColumnRequest": ColumnRequest,
    "ErrorDetail": ErrorDetail,
    "ForeignId": ForeignId,
    "ForwardPaging": ForwardPaging,
    "HubDbTableCloneRequest": HubDbTableCloneRequest,
    "HubDbTableRowV3": HubDbTableRowV3,
    "HubDbTableRowV3Request": HubDbTableRowV3Request,
    "HubDbTableV3": HubDbTableV3,
    "HubDbTableV3Request": HubDbTableV3Request,
    "ImportResult": ImportResult,
    "ModelError": ModelError,
    "NextPage": NextPage,
    "Option": Option,
    "SimpleUser": SimpleUser,
    "StandardError": StandardError,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
