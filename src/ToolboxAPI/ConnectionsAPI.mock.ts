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

import { Connection, ConnectionsAPI } from "@pptb/types/toolboxAPI";
import { stub } from "sinon";
import { SinonMethodStub } from "./helpers";

/**
 * Connections namespace - restricted access for tools
 */
export class ConnectionsAPIMock implements ConnectionsAPI {
    getActiveConnection: SinonMethodStub<ConnectionsAPI['getActiveConnection']>;
    getSecondaryConnection: SinonMethodStub<ConnectionsAPI['getSecondaryConnection']>;
    getConnections: SinonMethodStub<ConnectionsAPI['getConnections']>;
    getConnection: SinonMethodStub<ConnectionsAPI['getConnection']>;

    constructor() {
        const mockConnection: Connection = {
            id: "mockConnectionId",
            name: "Mock Connection",
            url: "https://mock.environment.url",
            environment: "Dev",
            createdAt: new Date().toISOString(),
        };
        this.getActiveConnection = stub();
        this.getActiveConnection.resolves(mockConnection);
        this.getSecondaryConnection = stub();
        this.getSecondaryConnection.resolves(null);
        this.getConnections = stub();
        this.getConnections.resolves([mockConnection, null]);
        this.getConnection = stub();
        // Resolves the slot from getConnections so overriding that stub keeps both consistent
        this.getConnection.callsFake(async (target) => {
            const index = target === "primary" ? 0 : target === "secondary" ? 1 : target;
            const connections = await this.getConnections();
            return connections[index] ?? null;
        });
    }
}
