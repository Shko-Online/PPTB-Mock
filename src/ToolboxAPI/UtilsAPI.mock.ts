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
    openInConnectionBrowser: SinonMethodStub<UtilsAPI['openInConnectionBrowser']>;
    /** Medium delay in milliseconds for executeParallel */
    __mediumDelay: number;
    /** Variation for delay of executeParallel in ms */
    __delayVariation: number;
    constructor() {
        this.__delayVariation = 500;
        this.__mediumDelay = 500;
        this.showNotification = stub();
        this.showNotification.resolves();
        this.copyToClipboard = stub();
        this.copyToClipboard.resolves();
        this.getCurrentTheme = stub();
        this.getCurrentTheme.resolves("light");
        this.executeParallel = stub();
        this.executeParallel.callsFake((...promises) => {
            let delay = this.__mediumDelay ?? 0;
            if (this.__delayVariation && (delay - this.__delayVariation > 0)) {
                const sign = Number.parseInt((Math.random()*10).toFixed(0))%2 > 0 ? 1: -1;
                delay += Number.parseInt((sign*this.__delayVariation/2 * Math.random()).toFixed(0));
            }
            return new Promise(resolve => {
                setTimeout(() => resolve(Promise.all(promises)), delay);
            })
        });
        this.openInConnectionBrowser = stub();
        this.openInConnectionBrowser.resolves();
    }
}
