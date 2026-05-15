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

const pleaseMockThisFactory = (functionName: string)=>{
    return (...args:unknown[])=>{
        console.warn(args.length ? `'${functionName}' called with args:` : `'${functionName}' called with no args`, ...args);
        throw new Error(`Please mock the '${functionName}' method based on your needs`);
    }
}

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
        this.create.callsFake(pleaseMockThisFactory('dataverseAPI.create'));
        this.retrieve = stub();
        this.retrieve.callsFake(pleaseMockThisFactory('dataverseAPI.retrieve'));
        this.update = stub();
        this.update.callsFake(pleaseMockThisFactory('dataverseAPI.update'));
        this.delete = stub();
        this.delete.callsFake(pleaseMockThisFactory('dataverseAPI.delete'));
        this.fetchXmlQuery = stub();
        this.fetchXmlQuery.callsFake(pleaseMockThisFactory('dataverseAPI.fetchXmlQuery'));
        this.retrieveMultiple = stub();
        this.retrieveMultiple.callsFake(pleaseMockThisFactory('dataverseAPI.retrieveMultiple'));
        this.execute = stub();
        this.execute.callsFake(pleaseMockThisFactory('dataverseAPI.execute'));
        this.getEntityMetadata = stub();
        this.getEntityMetadata.callsFake(pleaseMockThisFactory('dataverseAPI.getEntityMetadata'));
        this.getAllEntitiesMetadata = stub();
        this.getAllEntitiesMetadata.callsFake(pleaseMockThisFactory('dataverseAPI.getAllEntitiesMetadata'));
        this.getEntityRelatedMetadata = stub();
        this.getEntityRelatedMetadata.callsFake(pleaseMockThisFactory('dataverseAPI.getEntityRelatedMetadata'));
        this.getSolutions = stub();
        this.getSolutions.callsFake(pleaseMockThisFactory('dataverseAPI.getSolutions'));
        this.queryData = stub();
        this.queryData.callsFake(pleaseMockThisFactory('dataverseAPI.queryData'));
        this.publishCustomizations = stub();
        this.publishCustomizations.callsFake(pleaseMockThisFactory('dataverseAPI.publishCustomizations'));;
        this.createMultiple = stub();
        this.createMultiple.callsFake(pleaseMockThisFactory('dataverseAPI.createMultiple'));
        this.updateMultiple = stub();
        this.updateMultiple.callsFake(pleaseMockThisFactory('dataverseAPI.updateMultiple'));
        this.getEntitySetName = stub();
        this.getEntitySetName.callsFake(pleaseMockThisFactory('dataverseAPI.getEntitySetName'));
        this.associate = stub();
        this.associate.callsFake(pleaseMockThisFactory('dataverseAPI.associate'));
        this.disassociate = stub();
        this.disassociate.callsFake(pleaseMockThisFactory('dataverseAPI.disassociate'));
        this.deploySolution = stub();
        this.deploySolution.callsFake(pleaseMockThisFactory('dataverseAPI.deploySolution'));
        this.getImportJobStatus = stub();
        this.getImportJobStatus.callsFake(pleaseMockThisFactory('dataverseAPI.getImportJobStatus'));
        this.buildLabel = stub();
        this.buildLabel.callsFake(pleaseMockThisFactory('dataverseAPI.buildLabel'));
        this.getCSDLDocument = stub();
        this.getCSDLDocument.callsFake(pleaseMockThisFactory('dataverseAPI.getCSDLDocument'));
        this.getAttributeODataType = stub();
        this.getAttributeODataType.callsFake(pleaseMockThisFactory('dataverseAPI.getAttributeODataType'));
        this.createEntityDefinition = stub();
        this.createEntityDefinition.callsFake(pleaseMockThisFactory('dataverseAPI.createEntityDefinition'));
        this.updateEntityDefinition = stub();
        this.updateEntityDefinition.callsFake(pleaseMockThisFactory('dataverseAPI.updateEntityDefinition'));
        this.deleteEntityDefinition = stub();
        this.deleteEntityDefinition.callsFake(pleaseMockThisFactory('dataverseAPI.deleteEntityDefinition'));
        this.createAttribute = stub();
        this.createAttribute.callsFake(pleaseMockThisFactory('dataverseAPI.createAttribute'));
        this.updateAttribute = stub();
        this.updateAttribute.callsFake(pleaseMockThisFactory('dataverseAPI.updateAttribute'));
        this.deleteAttribute = stub();
        this.deleteAttribute.callsFake(pleaseMockThisFactory('dataverseAPI.deleteAttribute'));
        this.createPolymorphicLookupAttribute = stub();
        this.createPolymorphicLookupAttribute.callsFake(pleaseMockThisFactory('dataverseAPI.createPolymorphicLookupAttribute'));
        this.createRelationship = stub();
        this.createRelationship.callsFake(pleaseMockThisFactory('dataverseAPI.createRelationship'));
        this.updateRelationship = stub();
        this.updateRelationship.callsFake(pleaseMockThisFactory('dataverseAPI.updateRelationship'));
        this.deleteRelationship = stub();
        this.deleteRelationship.callsFake(pleaseMockThisFactory('dataverseAPI.deleteRelationship'));
        this.createGlobalOptionSet = stub();
        this.createGlobalOptionSet.callsFake(pleaseMockThisFactory('dataverseAPI.createGlobalOptionSet'));
        this.updateGlobalOptionSet = stub();
        this.updateGlobalOptionSet.callsFake(pleaseMockThisFactory('dataverseAPI.updateGlobalOptionSet'));
        this.deleteGlobalOptionSet = stub();
        this.deleteGlobalOptionSet.callsFake(pleaseMockThisFactory('dataverseAPI.deleteGlobalOptionSet'));
        this.insertOptionValue = stub();
        this.insertOptionValue.callsFake(pleaseMockThisFactory('dataverseAPI.insertOptionValue'));
        this.updateOptionValue = stub();
        this.updateOptionValue.callsFake(pleaseMockThisFactory('dataverseAPI.updateOptionValue'));
        this.deleteOptionValue = stub();
        this.deleteOptionValue.callsFake(pleaseMockThisFactory('dataverseAPI.deleteOptionValue'));
        this.orderOption = stub();
        this.orderOption.callsFake(pleaseMockThisFactory('dataverseAPI.orderOption'));
    }
}
