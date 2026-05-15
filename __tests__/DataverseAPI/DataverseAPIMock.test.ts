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
import { DataverseAPIMock } from '../../src/DataverseAPI/DataverseAPI.mock';

describe('DataverseAPIMock', () => {

    test('error is thrown if method is not mocked and arguments are written to console', async () => {
        const dataverseAPI = new DataverseAPIMock();
        const mockedWarn = vi.spyOn(console, 'warn');
        await expect(
            async () => {
                await dataverseAPI.retrieve('account', 'noId');
            })
            .rejects
            .toThrow("Please mock the 'dataverseAPI.retrieve' method based on your needs");
        expect(mockedWarn).toHaveBeenCalledWith("'dataverseAPI.retrieve' called with args:", 'account', 'noId');
        mockedWarn.mockReset();
    });

    test('error is thrown if method is not mocked and no arguments is written to console', async () => {
        const dataverseAPI = new DataverseAPIMock();
        const mockedWarn = vi.spyOn(console, 'warn');
        await expect(
            async () => {
                await dataverseAPI.publishCustomizations();
            })
            .rejects
            .toThrow("Please mock the 'dataverseAPI.publishCustomizations' method based on your needs");
        expect(mockedWarn).toHaveBeenCalledWith("'dataverseAPI.publishCustomizations' called with no args");
        mockedWarn.mockReset();
    });

});