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

import { WorkersAPI } from "@pptb/types/toolboxAPI";
import { SinonMethodStub } from "./helpers";
import { stub } from "sinon";
import { pleaseMockThisFactory } from "../pleaseMockThisFactory";

/**
 * Workers namespace - native worker processes declared in pptb.config.json
 */
export class WorkersAPIMock implements WorkersAPI {
    connect: SinonMethodStub<WorkersAPI['connect']>;
    start: SinonMethodStub<WorkersAPI['start']>;
    send: SinonMethodStub<WorkersAPI['send']>;
    onMessage: SinonMethodStub<WorkersAPI['onMessage']>;
    onExit: SinonMethodStub<WorkersAPI['onExit']>;
    stop: SinonMethodStub<WorkersAPI['stop']>;
    dispose: SinonMethodStub<WorkersAPI['dispose']>;
    constructor() {
        this.connect = stub();
        this.connect.callsFake(pleaseMockThisFactory('toolboxAPI.workers.connect'));
        this.start = stub();
        this.start.callsFake(pleaseMockThisFactory('toolboxAPI.workers.start'));
        this.send = stub();
        this.send.callsFake(pleaseMockThisFactory('toolboxAPI.workers.send'));
        this.onMessage = stub();
        this.onMessage.returns(() => { });
        this.onExit = stub();
        this.onExit.returns(() => { });
        this.stop = stub();
        this.stop.resolves();
        this.dispose = stub();
        this.dispose.resolves();
    }
}
