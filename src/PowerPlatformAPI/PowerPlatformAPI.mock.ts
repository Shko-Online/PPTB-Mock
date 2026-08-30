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

import { API } from '@pptb/types/powerplatformAPI';
import { AnalyticsMock } from './Analytics.mock';
import { AppManagementMock } from './AppManagement.mock';
import { AuthorizationMock } from './Authorization.mock';
import { ConnectivityMock } from './Connectivity.mock';
import { CopilotStudioMock } from './CopilotStudio.mock';
import { DynamicsMock } from './Dynamics.mock';
import { EnvironmentManagementMock } from './EnvironmentManagement.mock';
import { GovernanceMock } from './Governance.mock';
import { LicensingMock } from './Licensing.mock';
import { PowerAppsMock } from './PowerApps.mock';
import { PowerAutomateMock } from './PowerAutomate.mock';
import { PowerPagesMock } from './PowerPages.mock';
import { ResourceQueryMock } from './ResourceQuery.mock';
import { UserManagementMock } from './UserManagement.mock';
import { WorkflowAgentsMock } from './WorkflowAgents.mock';

/**
 * Dataverse Web API for CRUD operations, queries, and metadata
 */
export class PowerPlatformAPIMock implements API {
    Analytics: AnalyticsMock;
    AppManagement: AppManagementMock;
    Authorization: AuthorizationMock;
    Connectivity: ConnectivityMock;
    CopilotStudio: CopilotStudioMock;
    Dynamics: DynamicsMock;
    EnvironmentManagement: EnvironmentManagementMock;
    Governance: GovernanceMock;
    Licensing: LicensingMock;
    PowerApps: PowerAppsMock;
    PowerAutomate: PowerAutomateMock;
    PowerPages: PowerPagesMock;
    ResourceQuery: ResourceQueryMock;
    UserManagement: UserManagementMock;
    WorkflowAgents: WorkflowAgentsMock;

    constructor() {
        this.Analytics = new AnalyticsMock();
        this.AppManagement = new AppManagementMock();
        this.Authorization = new AuthorizationMock();
        this.Connectivity = new ConnectivityMock();
        this.CopilotStudio = new CopilotStudioMock();
        this.Dynamics = new DynamicsMock();
        this.EnvironmentManagement = new EnvironmentManagementMock();
        this.Governance = new GovernanceMock();
        this.Licensing = new LicensingMock();
        this.PowerApps = new PowerAppsMock();
        this.PowerAutomate = new PowerAutomateMock();
        this.PowerPages = new PowerPagesMock();
        this.ResourceQuery = new ResourceQueryMock();
        this.UserManagement = new UserManagementMock();
        this.WorkflowAgents = new WorkflowAgentsMock();
    }
}
