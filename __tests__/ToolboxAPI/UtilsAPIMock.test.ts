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
import { UtilsAPIMock } from '../../src/ToolboxAPI/UtilsAPI.mock';

describe('UtilsAPIMock', () => {
    test('execute executeParallel has default 0ms delay', async () => {
        const utilsAPIMock = new UtilsAPIMock();
        const request1 = async (name:string)=> name;
        const result = await  utilsAPIMock.executeParallel(request1('Betim'), request1('Beja')) as string[];
        expect(result[0]).toBe("Betim");
    });

    test('execute executeParallel can specify 1000ms delay', async () => {
        const utilsAPIMock = new UtilsAPIMock();
        utilsAPIMock.__mediumDelay = 1000;
        const request1 = async (name:string)=> name;
        const result = await  utilsAPIMock.executeParallel(request1('Betim'), request1('Beja')) as string[];
        expect(result[0]).toBe("Betim");
    });

    test('execute executeParallel can specify 1000ms delay with 500ms variation', async () => {
        const utilsAPIMock = new UtilsAPIMock();
        utilsAPIMock.__mediumDelay = 1000;
        utilsAPIMock.__delayVariation = 500;
        const request1 = async (name:string)=> name;
        const result = await  utilsAPIMock.executeParallel(request1('Betim'), request1('Beja')) as string[];
        expect(result[0]).toBe("Betim");
    });

});