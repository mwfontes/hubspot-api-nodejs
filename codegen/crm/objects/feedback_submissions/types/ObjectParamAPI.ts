import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AssociatedId } from '../models/AssociatedId';
import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInput } from '../models/BatchInputSimplePublicObjectInput';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { CollectionResponseAssociatedId } from '../models/CollectionResponseAssociatedId';
import { CollectionResponseAssociatedIdForwardPaging } from '../models/CollectionResponseAssociatedIdForwardPaging';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { Filter } from '../models/Filter';
import { FilterGroup } from '../models/FilterGroup';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PreviousPage } from '../models/PreviousPage';
import { PublicMergeInput } from '../models/PublicMergeInput';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectBatchInput } from '../models/SimplePublicObjectBatchInput';
import { SimplePublicObjectId } from '../models/SimplePublicObjectId';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
import { StandardError } from '../models/StandardError';
import { ValueWithTimestamp } from '../models/ValueWithTimestamp';

import { ObservableAssociationsApi } from "./ObservableAPI";
import { AssociationsApiRequestFactory, AssociationsApiResponseProcessor} from "../apis/AssociationsApi";

export interface AssociationsApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof AssociationsApiarchive
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApiarchive
     */
    toObjectType: string
    /**
     * 
     * @type string
     * @memberof AssociationsApiarchive
     */
    toObjectId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApiarchive
     */
    associationType: string
}

export interface AssociationsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof AssociationsApicreate
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApicreate
     */
    toObjectType: string
    /**
     * 
     * @type string
     * @memberof AssociationsApicreate
     */
    toObjectId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApicreate
     */
    associationType: string
}

export interface AssociationsApiGetPageRequest {
    /**
     * 
     * @type string
     * @memberof AssociationsApigetPage
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApigetPage
     */
    toObjectType: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof AssociationsApigetPage
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof AssociationsApigetPage
     */
    limit?: number
}

export class ObjectAssociationsApi {
    private api: ObservableAssociationsApi

    public constructor(configuration: Configuration, requestFactory?: AssociationsApiRequestFactory, responseProcessor?: AssociationsApiResponseProcessor) {
        this.api = new ObservableAssociationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove an association between two feedback submissions
     * @param param the request object
     */
    public archive(param: AssociationsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.feedbackSubmissionId, param.toObjectType, param.toObjectId, param.associationType,  options).toPromise();
    }

    /**
     * Associate a feedback submission with another object
     * @param param the request object
     */
    public create(param: AssociationsApiCreateRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        return this.api.create(param.feedbackSubmissionId, param.toObjectType, param.toObjectId, param.associationType,  options).toPromise();
    }

    /**
     * List associations of a feedback submission by type
     * @param param the request object
     */
    public getPage(param: AssociationsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseAssociatedIdForwardPaging> {
        return this.api.getPage(param.feedbackSubmissionId, param.toObjectType, param.after, param.limit,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof BasicApiarchive
     */
    feedbackSubmissionId: string
}

export interface BasicApiCreateRequest {
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApicreate
     */
    simplePublicObjectInput: SimplePublicObjectInput
}

export interface BasicApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApigetById
     */
    feedbackSubmissionId: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    propertiesWithHistory?: Array<string>
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    associations?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BasicApigetById
     */
    archived?: boolean
    /**
     * The name of a property whose values are unique for this object type
     * @type string
     * @memberof BasicApigetById
     */
    idProperty?: string
}

export interface BasicApiGetPageRequest {
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof BasicApigetPage
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BasicApigetPage
     */
    after?: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    propertiesWithHistory?: Array<string>
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    associations?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BasicApigetPage
     */
    archived?: boolean
}

export interface BasicApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof BasicApiupdate
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApiupdate
     */
    simplePublicObjectInput: SimplePublicObjectInput
    /**
     * The name of a property whose values are unique for this object type
     * @type string
     * @memberof BasicApiupdate
     */
    idProperty?: string
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move an Object identified by `{feedbackSubmissionId}` to the recycling bin.
     * Archive
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.feedbackSubmissionId,  options).toPromise();
    }

    /**
     * Create a feedback submission with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard feedback submissions is provided.
     * Create
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.create(param.simplePublicObjectInput,  options).toPromise();
    }

    /**
     * Read an Object identified by `{feedbackSubmissionId}`. `{feedbackSubmissionId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        return this.api.getById(param.feedbackSubmissionId, param.properties, param.propertiesWithHistory, param.associations, param.archived, param.idProperty,  options).toPromise();
    }

    /**
     * Read a page of feedback submissions. Control what is returned via the `properties` query param.
     * List
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        return this.api.getPage(param.limit, param.after, param.properties, param.propertiesWithHistory, param.associations, param.archived,  options).toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{feedbackSubmissionId}`. `{feedbackSubmissionId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.update(param.feedbackSubmissionId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectId
     * @memberof BatchApiarchive
     */
    batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId
}

export interface BatchApiCreateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectInput
     * @memberof BatchApicreate
     */
    batchInputSimplePublicObjectInput: BatchInputSimplePublicObjectInput
}

export interface BatchApiReadRequest {
    /**
     * 
     * @type BatchReadInputSimplePublicObjectId
     * @memberof BatchApiread
     */
    batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BatchApiread
     */
    archived?: boolean
}

export interface BatchApiUpdateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectBatchInput
     * @memberof BatchApiupdate
     */
    batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a batch of feedback submissions by ID
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * Create a batch of feedback submissions
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.create(param.batchInputSimplePublicObjectInput,  options).toPromise();
    }

    /**
     * Read a batch of feedback submissions by internal ID, or unique property values
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.read(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of feedback submissions
     * @param param the request object
     */
    public update(param: BatchApiUpdateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.update(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

}

import { ObservablePublicObjectApi } from "./ObservableAPI";
import { PublicObjectApiRequestFactory, PublicObjectApiResponseProcessor} from "../apis/PublicObjectApi";

export interface PublicObjectApiMergeRequest {
    /**
     * 
     * @type PublicMergeInput
     * @memberof PublicObjectApimerge
     */
    publicMergeInput: PublicMergeInput
}

export class ObjectPublicObjectApi {
    private api: ObservablePublicObjectApi

    public constructor(configuration: Configuration, requestFactory?: PublicObjectApiRequestFactory, responseProcessor?: PublicObjectApiResponseProcessor) {
        this.api = new ObservablePublicObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Merge two feedback submissions with same type
     * @param param the request object
     */
    public merge(param: PublicObjectApiMergeRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.merge(param.publicMergeInput,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiDoSearchRequest {
    /**
     * 
     * @type PublicObjectSearchRequest
     * @memberof SearchApidoSearch
     */
    publicObjectSearchRequest: PublicObjectSearchRequest
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public doSearch(param: SearchApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        return this.api.doSearch(param.publicObjectSearchRequest,  options).toPromise();
    }

}
