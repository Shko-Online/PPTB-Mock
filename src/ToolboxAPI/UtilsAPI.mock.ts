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

import { UtilsAPI } from "@pptb/types/toolboxAPI";
import { SinonMethodStub, SinonMethodStubOfGeneric } from "./helpers";
import { stub } from "sinon";

/**
 * Utils namespace - utility functions for tools
 */
export class UtilsAPIMock implements UtilsAPI {
    showNotification: SinonMethodStub<UtilsAPI['showNotification']>;
    copyToClipboard: SinonMethodStub<UtilsAPI['copyToClipboard']>;
    getCurrentTheme: SinonMethodStub<UtilsAPI['getCurrentTheme']>;
    executeParallel: SinonMethodStubOfGeneric<any, UtilsAPI['executeParallel']>;
    showLoading: SinonMethodStub<UtilsAPI['showLoading']>;
    hideLoading: SinonMethodStub<UtilsAPI['hideLoading']>;
    constructor() {
        this.showNotification = stub();
        this.showNotification.resolves();
        this.copyToClipboard = stub();
        this.copyToClipboard.resolves();
        this.getCurrentTheme = stub();
        this.getCurrentTheme.resolves("light");
        this.executeParallel = stub();
        this.executeParallel.resolves([]);
        this.showLoading = stub();
        this.showLoading.resolves();
        this.hideLoading = stub();
        this.hideLoading.resolves();
    }
}
