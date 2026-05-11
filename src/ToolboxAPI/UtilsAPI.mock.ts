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
import { SinonStub, stub } from "sinon";
import { SinonMethodStub } from "./helpers";

/**
 * Utils namespace - utility functions for tools
 */
class UtilsAPIMock implements UtilsAPI {
    showNotification: SinonMethodStub<UtilsAPI['showNotification']>;
    copyToClipboard: SinonMethodStub<UtilsAPI['copyToClipboard']>;
    getCurrentTheme: SinonStub<[], Promise<"light" | "dark">>;
    executeParallel: SinonStub<[], Promise<any[]>>;
    showLoading: SinonStub<[message?: string], Promise<void>>;
    hideLoading: SinonStub<[], Promise<void>>;
    constructor() {
        this.showNotification = stub();
        this.showNotification.resolves();
        this.copyToClipboard = stub();
        this.copyToClipboard.resolves();
        this.getCurrentTheme = stub<[], Promise<"light" | "dark">>().resolves("light");
        this.executeParallel = stub<[], Promise<any[]>>().resolves([]);
        this.showLoading = stub<[message?: string], Promise<void>>().resolves();
        this.hideLoading = stub<[], Promise<void>>().resolves();
    }
}

export default UtilsAPIMock;
