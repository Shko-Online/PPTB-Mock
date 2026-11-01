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

import { expect, test, describe } from 'vitest';
import { ConnectionsAPIMock } from '../../src/ToolboxAPI/ConnectionsAPI.mock';

describe('ConnectionsAPIMock', () => {
    test('getActiveConnection returns a mock connection', async () => {
        const connectionsAPIMock = new ConnectionsAPIMock();
        const activeConnection = await connectionsAPIMock.getActiveConnection();
        expect(activeConnection).toEqual({
            id: "mockConnectionId",
            name: "Mock Connection",
            url: "https://mock.environment.url",
            environment: "Dev",
            createdAt: expect.any(String),
        });
    });

    test('getSecondaryConnection returns null', async () => {
        const connectionsAPIMock = new ConnectionsAPIMock();
        const secondaryConnection = await connectionsAPIMock.getSecondaryConnection();
        expect(secondaryConnection).toBeNull();
    });

    test('getConnections returns the primary connection and an empty secondary slot', async () => {
        const connectionsAPIMock = new ConnectionsAPIMock();
        const connections = await connectionsAPIMock.getConnections();
        expect(connections).toEqual([await connectionsAPIMock.getActiveConnection(), null]);
    });

    test('getConnection resolves legacy aliases and slot indexes from getConnections', async () => {
        const connectionsAPIMock = new ConnectionsAPIMock();
        const third = { id: "thirdId", name: "Third", url: "https://third.url", environment: "Test" as const };
        connectionsAPIMock.getConnections.resolves([null, null, third]);
        expect(await connectionsAPIMock.getConnection("primary")).toBeNull();
        expect(await connectionsAPIMock.getConnection("secondary")).toBeNull();
        expect(await connectionsAPIMock.getConnection(2)).toEqual(third);
        expect(await connectionsAPIMock.getConnection(5)).toBeNull();
    });
});