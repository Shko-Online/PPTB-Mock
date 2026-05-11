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

import { TerminalAPI } from "@pptb/types/toolboxAPI";
import { SinonMethodStub } from './helpers';
import { stub } from "sinon";

/**
 * Terminal namespace - context-aware terminal operations
 */
class TerminalAPIMock implements TerminalAPI {
    create: SinonMethodStub<TerminalAPI['create']>;
    execute: SinonMethodStub<TerminalAPI['execute']>;
    close: SinonMethodStub<TerminalAPI['close']>;
    get: SinonMethodStub<TerminalAPI['get']>;
    list: SinonMethodStub<TerminalAPI['list']>;
    setVisibility: SinonMethodStub<TerminalAPI['setVisibility']>;
    constructor() {
        this.create = stub();
        this.create.resolves({} as ToolBoxAPI.Terminal);
        this.execute = stub()
        this.execute.resolves({} as ToolBoxAPI.TerminalCommandResult);
        this.close = stub();
        this.close.resolves();
        this.get = stub();
        this.get.resolves(undefined);
        this.list = stub();
        this.list.resolves([]);
        this.setVisibility = stub();
        this.setVisibility.resolves();
    }
}

export default TerminalAPIMock;
