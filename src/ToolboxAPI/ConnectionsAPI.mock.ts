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

import { ConnectionsAPI } from "@pptb/types/toolboxAPI";
import { stub } from "sinon";
import { SinonMethodStub } from "./helpers";

/**
 * Connections namespace - restricted access for tools
 */
export class ConnectionsAPIMock implements ConnectionsAPI {
    getActiveConnection: SinonMethodStub<ConnectionsAPI['getActiveConnection']>;
    getSecondaryConnection: SinonMethodStub<ConnectionsAPI['getSecondaryConnection']>;

    constructor() {
        this.getActiveConnection = stub();
        this.getActiveConnection.resolves({
            id: "mockConnectionId",
            name: "Mock Connection",
            url: "https://mock.environment.url",
            environment: "Dev",
            createdAt: new Date().toISOString(),
        });
        this.getSecondaryConnection = stub();
        this.getSecondaryConnection.resolves(null);
    }
}
