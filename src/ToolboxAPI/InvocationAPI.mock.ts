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

import { InvocationAPI } from "@pptb/types/toolboxAPI";
import { SinonMethodStub } from "./helpers";
import { stub } from "sinon";
import { pleaseMockThisFactory } from "../pleaseMockThisFactory";

export class InvocationAPIMock implements InvocationAPI {
    findToolsByCapability: SinonMethodStub<InvocationAPI['findToolsByCapability']>;
    getKnownCapabilityTags:  SinonMethodStub<InvocationAPI['getKnownCapabilityTags']>;
    getLaunchContext: SinonMethodStub<InvocationAPI['getLaunchContext']>;
    launchTool: SinonMethodStub<InvocationAPI['launchTool']>;
    returnData: SinonMethodStub<InvocationAPI['returnData']>;
    constructor() {
        this.findToolsByCapability = stub();
        this.findToolsByCapability.callsFake(pleaseMockThisFactory('toolboxAPI.InvocationAPI.findToolsByCapability'));
        this.getKnownCapabilityTags = stub();
        this.getKnownCapabilityTags.callsFake(pleaseMockThisFactory('toolboxAPI.InvocationAPI.getKnownCapabilityTags'));
        this.getLaunchContext = stub();
        this.getLaunchContext.callsFake(pleaseMockThisFactory('toolboxAPI.InvocationAPI.getLaunchContext'));
        this.launchTool = stub();
        this.launchTool.callsFake(pleaseMockThisFactory('toolboxAPI.InvocationAPI.launchTool'));
        this.returnData = stub();
        this.returnData.callsFake(pleaseMockThisFactory('toolboxAPI.InvocationAPI.returnData'));
    }
}