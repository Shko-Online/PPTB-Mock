/*
   Copyright 2026 Shko Online LLC <sales@shko.online>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import { API, EntityRelatedMetadataPath } from '@pptb/types/dataverseAPI';
import { SinonMethodStub, SinonMethodStubOfGeneric } from '../ToolboxAPI/helpers';
import { stub } from 'sinon';

/**
 * Dataverse Web API for CRUD operations, queries, and metadata
 */
export class DataverseAPIMock implements API {
    create: SinonMethodStub<API['create']>;
    retrieve: SinonMethodStub<API['retrieve']>;
    update: SinonMethodStub<API['update']>;
    delete: SinonMethodStub<API['delete']>;
    fetchXmlQuery: SinonMethodStub<API['fetchXmlQuery']>;
    retrieveMultiple: SinonMethodStub<API['retrieveMultiple']>;
    execute: SinonMethodStub<API['execute']>;
    getEntityMetadata: SinonMethodStub<API['getEntityMetadata']>;
    getAllEntitiesMetadata: SinonMethodStub<API['getAllEntitiesMetadata']>;
    getEntityRelatedMetadata: SinonMethodStubOfGeneric<EntityRelatedMetadataPath, API['getEntityRelatedMetadata']>;
    getSolutions: SinonMethodStub<API['getSolutions']>;
    queryData: SinonMethodStub<API['queryData']>;
    publishCustomizations: SinonMethodStub<API['publishCustomizations']>;
    createMultiple: SinonMethodStub<API['createMultiple']>;
    updateMultiple: SinonMethodStub<API['updateMultiple']>;
    getEntitySetName: SinonMethodStub<API['getEntitySetName']>;
    associate: SinonMethodStub<API['associate']>;
    disassociate: SinonMethodStub<API['disassociate']>;
    deploySolution: SinonMethodStub<API['deploySolution']>;
    getImportJobStatus: SinonMethodStub<API['getImportJobStatus']>;
    buildLabel: SinonMethodStub<API['buildLabel']>;
    getCSDLDocument: SinonMethodStub<API['getCSDLDocument']>;
    getAttributeODataType: SinonMethodStub<API['getAttributeODataType']>;
    createEntityDefinition: SinonMethodStub<API['createEntityDefinition']>;
    updateEntityDefinition: SinonMethodStub<API['updateEntityDefinition']>;
    deleteEntityDefinition: SinonMethodStub<API['deleteEntityDefinition']>;
    createAttribute: SinonMethodStub<API['createAttribute']>;
    updateAttribute: SinonMethodStub<API['updateAttribute']>;
    deleteAttribute: SinonMethodStub<API['deleteAttribute']>;
    createPolymorphicLookupAttribute: SinonMethodStub<API['createPolymorphicLookupAttribute']>;
    createRelationship: SinonMethodStub<API['createRelationship']>;
    updateRelationship: SinonMethodStub<API['updateRelationship']>;
    deleteRelationship: SinonMethodStub<API['deleteRelationship']>;
    createGlobalOptionSet: SinonMethodStub<API['createGlobalOptionSet']>;
    updateGlobalOptionSet: SinonMethodStub<API['updateGlobalOptionSet']>;
    deleteGlobalOptionSet: SinonMethodStub<API['deleteGlobalOptionSet']>;
    insertOptionValue: SinonMethodStub<API['insertOptionValue']>;
    updateOptionValue: SinonMethodStub<API['updateOptionValue']>;
    deleteOptionValue: SinonMethodStub<API['deleteOptionValue']>;
    orderOption: SinonMethodStub<API['orderOption']>;

    constructor() {
        this.create = stub();
        const pleaseMockThis = new Error("Please mock the method based on your needs");
        this.create.rejects(pleaseMockThis);
        this.retrieve = stub();
        this.retrieve.rejects(pleaseMockThis);
        this.update = stub();
        this.update.rejects(pleaseMockThis);
        this.delete = stub();
        this.delete.rejects(pleaseMockThis);
        this.fetchXmlQuery = stub();
        this.fetchXmlQuery.rejects(pleaseMockThis);
        this.retrieveMultiple = stub();
        this.retrieveMultiple.rejects(pleaseMockThis);
        this.execute = stub();
        this.execute.rejects(pleaseMockThis);
        this.getEntityMetadata = stub();
        this.getEntityMetadata.rejects(pleaseMockThis);
        this.getAllEntitiesMetadata = stub();
        this.getAllEntitiesMetadata.rejects(pleaseMockThis);
        this.getEntityRelatedMetadata = stub();
        this.getEntityRelatedMetadata.rejects(pleaseMockThis);
        this.getSolutions = stub();
        this.getSolutions.rejects(pleaseMockThis);
        this.queryData = stub();
        this.queryData.rejects(pleaseMockThis);
        this.publishCustomizations = stub();
        this.publishCustomizations.rejects(pleaseMockThis);
        this.createMultiple = stub();
        this.createMultiple.rejects(pleaseMockThis);
        this.updateMultiple = stub();
        this.updateMultiple.rejects(pleaseMockThis);
        this.getEntitySetName = stub();
        this.getEntitySetName.rejects(pleaseMockThis);
        this.associate = stub();
        this.associate.rejects(pleaseMockThis);
        this.disassociate = stub();
        this.disassociate.rejects(pleaseMockThis);
        this.deploySolution = stub();
        this.deploySolution.rejects(pleaseMockThis);
        this.getImportJobStatus = stub();
        this.getImportJobStatus.rejects(pleaseMockThis);
        this.buildLabel = stub();
        this.buildLabel.rejects(pleaseMockThis);
        this.getCSDLDocument = stub();
        this.getCSDLDocument.rejects(pleaseMockThis);
        this.getAttributeODataType = stub();
        this.getAttributeODataType.rejects(pleaseMockThis);
        this.createEntityDefinition = stub();
        this.createEntityDefinition.rejects(pleaseMockThis);
        this.updateEntityDefinition = stub();
        this.updateEntityDefinition.rejects(pleaseMockThis);
        this.deleteEntityDefinition = stub();
        this.deleteEntityDefinition.rejects(pleaseMockThis);
        this.createAttribute = stub();
        this.createAttribute.rejects(pleaseMockThis);
        this.updateAttribute = stub();
        this.updateAttribute.rejects(pleaseMockThis);
        this.deleteAttribute = stub();
        this.deleteAttribute.rejects(pleaseMockThis);
        this.createPolymorphicLookupAttribute = stub();
        this.createPolymorphicLookupAttribute.rejects(pleaseMockThis);
        this.createRelationship = stub();
        this.createRelationship.rejects(pleaseMockThis);
        this.updateRelationship = stub();
        this.updateRelationship.rejects(pleaseMockThis);
        this.deleteRelationship = stub();
        this.deleteRelationship.rejects(pleaseMockThis);
        this.createGlobalOptionSet = stub();
        this.createGlobalOptionSet.rejects(pleaseMockThis);
        this.updateGlobalOptionSet = stub();
        this.updateGlobalOptionSet.rejects(pleaseMockThis);
        this.deleteGlobalOptionSet = stub();
        this.deleteGlobalOptionSet.rejects(pleaseMockThis);
        this.insertOptionValue = stub();
        this.insertOptionValue.rejects(pleaseMockThis);
        this.updateOptionValue = stub();
        this.updateOptionValue.rejects(pleaseMockThis);
        this.deleteOptionValue = stub();
        this.deleteOptionValue.rejects(pleaseMockThis);
        this.orderOption = stub();
        this.orderOption.rejects(pleaseMockThis);
    }
}
