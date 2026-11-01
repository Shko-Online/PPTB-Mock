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

import { expect, test, describe, vi } from 'vitest';
import { WorkersAPIMock } from '../../src/ToolboxAPI/WorkersAPI.mock';
import { ToolboxAPIMock } from '../../src/ToolboxAPI/ToolboxAPI.mock';

describe('WorkersAPIMock', () => {
    test('toolboxAPI exposes a workers mock', () => {
        expect(new ToolboxAPIMock().workers).toBeInstanceOf(WorkersAPIMock);
    });

    test('connect throws until mocked', async () => {
        const workers = new WorkersAPIMock();
        const mockedWarn = vi.spyOn(console, 'warn').mockImplementation(() => { });
        await expect(async () => await workers.connect('myWorker'))
            .rejects
            .toThrow("Please mock the 'toolboxAPI.workers.connect' method based on your needs");
        mockedWarn.mockRestore();
    });

    test('subscriptions return unsubscribe functions and lifecycle calls resolve', async () => {
        const workers = new WorkersAPIMock();
        const handle = 'handle' as ToolBoxAPI.WorkerHandle;
        expect(workers.onMessage(handle, () => { })).toBeTypeOf('function');
        expect(workers.onExit(handle, () => { })).toBeTypeOf('function');
        await expect(workers.stop(handle)).resolves.toBeUndefined();
        await expect(workers.dispose(handle)).resolves.toBeUndefined();
    });
});
