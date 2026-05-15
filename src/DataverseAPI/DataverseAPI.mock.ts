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
        this.create.callsFake(()=> {throw new Error("Please mock the create method based on your needs")});
        this.retrieve = stub();
        this.retrieve.callsFake(()=> {throw new Error("Please mock the retrieve method based on your needs")});
        this.update = stub();
        this.update.callsFake(()=> {throw new Error("Please mock the update method based on your needs")});
        this.delete = stub();
        this.delete.callsFake(()=> {throw new Error("Please mock the delete method based on your needs")});
        this.fetchXmlQuery = stub();
        this.fetchXmlQuery.callsFake(()=> {throw new Error("Please mock the fetchXmlQuery method based on your needs")});
        this.retrieveMultiple = stub();
        this.retrieveMultiple.callsFake(()=> {throw new Error("Please mock the retrieveMultiple method based on your needs")});
        this.execute = stub();
        this.execute.callsFake(()=> {throw new Error("Please mock the execute method based on your needs")});;
        this.getEntityMetadata = stub();
        this.getEntityMetadata.callsFake(()=> {throw new Error("Please mock the getEntityMetadata method based on your needs")});
        this.getAllEntitiesMetadata = stub();
        this.getAllEntitiesMetadata.callsFake(()=> {throw new Error("Please mock the getAllEntitiesMetadata method based on your needs")});;
        this.getEntityRelatedMetadata = stub();
        this.getEntityRelatedMetadata.callsFake(()=> {throw new Error("Please mock the getEntityRelatedMetadata method based on your needs")});;
        this.getSolutions = stub();
        this.getSolutions.callsFake(()=> {throw new Error("Please mock the getSolutions method based on your needs")});;
        this.queryData = stub();
        this.queryData.callsFake(()=> {throw new Error("Please mock the queryData method based on your needs")});;
        this.publishCustomizations = stub();
        this.publishCustomizations.callsFake(()=> {throw new Error("Please mock the publishCustomizations method based on your needs")});;
        this.createMultiple = stub();
        this.createMultiple.callsFake(()=> {throw new Error("Please mock the createMultiple method based on your needs")});;
        this.updateMultiple = stub();
        this.updateMultiple.callsFake(()=> {throw new Error("Please mock the updateMultiple method based on your needs")});;
        this.getEntitySetName = stub();
        this.getEntitySetName.callsFake(()=> {throw new Error("Please mock the getEntitySetName method based on your needs")});;
        this.associate = stub();
        this.associate.callsFake(()=> {throw new Error("Please mock the associate method based on your needs")});;
        this.disassociate = stub();
        this.disassociate.callsFake(()=> {throw new Error("Please mock the disassociate method based on your needs")});;
        this.deploySolution = stub();
        this.deploySolution.callsFake(()=> {throw new Error("Please mock the deploySolution method based on your needs")});;
        this.getImportJobStatus = stub();
        this.getImportJobStatus.callsFake(()=> {throw new Error("Please mock the getImportJobStatus method based on your needs")});;
        this.buildLabel = stub();
        this.buildLabel.callsFake(()=> {throw new Error("Please mock the buildLabel method based on your needs")});;
        this.getCSDLDocument = stub();
        this.getCSDLDocument.callsFake(()=> {throw new Error("Please mock the getCSDLDocument method based on your needs")});;
        this.getAttributeODataType = stub();
        this.getAttributeODataType.callsFake(()=> {throw new Error("Please mock the getAttributeODataType method based on your needs")});
        this.createEntityDefinition = stub();
        this.createEntityDefinition.callsFake(()=> {throw new Error("Please mock the createEntityDefinition method based on your needs")});
        this.updateEntityDefinition = stub();
        this.updateEntityDefinition.callsFake(()=> {throw new Error("Please mock the updateEntityDefinition method based on your needs")});
        this.deleteEntityDefinition = stub();
        this.deleteEntityDefinition.callsFake(()=> {throw new Error("Please mock the deleteEntityDefinition method based on your needs")});
        this.createAttribute = stub();
        this.createAttribute.callsFake(()=> {throw new Error("Please mock the createAttribute method based on your needs")});
        this.updateAttribute = stub();
        this.updateAttribute.callsFake(()=> {throw new Error("Please mock the updateAttribute method based on your needs")});
        this.deleteAttribute = stub();
        this.deleteAttribute.callsFake(()=> {throw new Error("Please mock the deleteAttribute method based on your needs")});
        this.createPolymorphicLookupAttribute = stub();
        this.createPolymorphicLookupAttribute.callsFake(()=> {throw new Error("Please mock the createPloymorphicLookupAttribute method based on your needs")});
        this.createRelationship = stub();
        this.createRelationship.callsFake(()=> {throw new Error("Please mock the createRelationship method based on your needs")});
        this.updateRelationship = stub();
        this.updateRelationship.callsFake(()=> {throw new Error("Please mock the updateRelationship method based on your needs")});
        this.deleteRelationship = stub();
        this.deleteRelationship.callsFake(()=> {throw new Error("Please mock the deleteRelationship method based on your needs")});
        this.createGlobalOptionSet = stub();
        this.createGlobalOptionSet.callsFake(()=> {throw new Error("Please mock the createGlobalOptionSet method based on your needs")});
        this.updateGlobalOptionSet = stub();
        this.updateGlobalOptionSet.callsFake(()=> {throw new Error("Please mock the updateGlobalOptionSet method based on your needs")});
        this.deleteGlobalOptionSet = stub();
        this.deleteGlobalOptionSet.callsFake(()=> {throw new Error("Please mock the deleteGlobalOptionSet method based on your needs")});
        this.insertOptionValue = stub();
        this.insertOptionValue.callsFake(()=> {throw new Error("Please mock the insertOptionValue method based on your needs")});
        this.updateOptionValue = stub();
        this.updateOptionValue.callsFake(()=> {throw new Error("Please mock the updateOptionValue method based on your needs")});
        this.deleteOptionValue = stub();
        this.deleteOptionValue.callsFake(()=> {throw new Error("Please mock the deleteOptionValue method based on your needs")});
        this.orderOption = stub();
        this.orderOption.callsFake(()=> {throw new Error("Please mock the orderOption method based on your needs")});
    }
}
