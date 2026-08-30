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

import { CategoryClient } from "@pptb/types/powerplatformAPI";
import { pleaseMockThisFactory } from "../pleaseMockThisFactory";
import { stub } from "sinon";
import { SinonMethodStub } from "../ToolboxAPI/helpers";

export class CategoryClientMock implements CategoryClient {
    Get: SinonMethodStub<CategoryClient['Get']>;
    Post: SinonMethodStub<CategoryClient['Post']>;
    Put: SinonMethodStub<CategoryClient['Put']>;
    Patch: SinonMethodStub<CategoryClient['Patch']>;
    Delete: SinonMethodStub<CategoryClient['Delete']>;

    constructor() {
        const className = 'powerPlatformAPI.'+ this.constructor.name.replace(/Mock$/, '');
        this.Get = stub();
        this.Get.callsFake(pleaseMockThisFactory(className+ '.Get'));
        this.Post = stub();
        this.Post.callsFake(pleaseMockThisFactory(className+ '.Post'));
        this.Put = stub();
        this.Put.callsFake(pleaseMockThisFactory(className+ '.Put'));
        this.Patch = stub();
        this.Patch.callsFake(pleaseMockThisFactory(className+ '.Patch'));
        this.Delete = stub();
        this.Delete.callsFake(pleaseMockThisFactory(className+ '.Delete'));
    }
}
