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

import { EventsAPI } from "@pptb/types/toolboxAPI";
import { SinonMethodStub } from "./helpers";
import { stub } from "sinon";

/**
 * Events namespace - tool-specific event handling
 */
export class EventsAPIMock implements EventsAPI {
    getHistory: SinonMethodStub<EventsAPI['getHistory']>;
    on: SinonMethodStub<EventsAPI['on']>;
    off: SinonMethodStub<EventsAPI['off']>;
    constructor() {
        this.on = stub();
        this.on.returns();
        this.off = stub();
        this.off.returns();
        this.getHistory = stub();
        this.getHistory.resolves([]);
    }
}
