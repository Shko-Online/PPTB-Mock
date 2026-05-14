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

import { SettingsAPI } from "@pptb/types/toolboxAPI";
import { SinonMethodStub } from "./helpers";
import { stub } from "sinon";

/**
 * Settings namespace - context-aware tool settings All settings operations automatically use the current tool's ID
 */
export class SettingsAPIMock implements SettingsAPI {
    get: SinonMethodStub<SettingsAPI['get']>;
    getAll: SinonMethodStub<SettingsAPI['getAll']>;
    set: SinonMethodStub<SettingsAPI['set']>;
    setAll: SinonMethodStub<SettingsAPI['setAll']>;
    constructor() {
        this.get = stub();
        this.get.resolves(undefined);
        this.getAll = stub();
        this.getAll.resolves({});
        this.set = stub();
        this.set.resolves();
        this.setAll = stub();
        this.setAll.resolves();
    }
}
