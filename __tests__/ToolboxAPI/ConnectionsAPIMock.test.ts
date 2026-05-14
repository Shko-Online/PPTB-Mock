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
});