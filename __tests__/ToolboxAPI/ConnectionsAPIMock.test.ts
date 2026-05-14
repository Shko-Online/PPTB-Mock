import { expect, test, describe } from 'vitest';
import ConnectionsAPIMock from '../../src/ToolboxAPI/ConnectionsAPI.mock';

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