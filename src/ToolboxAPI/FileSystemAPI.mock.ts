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

import { FileSystemAPI } from "@pptb/types/toolboxAPI";
import { stub } from "sinon";
import { SinonMethodStub } from "./helpers";

/**
 * FileSystem namespace - filesystem operations for tools
 */
class FileSystemAPIMock implements FileSystemAPI {
    readText: SinonMethodStub<FileSystemAPI['readText']>;
    readBinary: SinonMethodStub<FileSystemAPI['readBinary']>;
    exists: SinonMethodStub<FileSystemAPI['exists']>;
    stat: SinonMethodStub<FileSystemAPI['stat']>;
    readDirectory: SinonMethodStub<FileSystemAPI['readDirectory']>;
    writeText: SinonMethodStub<FileSystemAPI['writeText']>;
    createDirectory: SinonMethodStub<FileSystemAPI['createDirectory']>;
    saveFile: SinonMethodStub<FileSystemAPI['saveFile']>;
    selectPath: SinonMethodStub<FileSystemAPI['selectPath']>;
    constructor() {
        this.readText = stub();
        this.readText.resolves("");
        this.readBinary = stub();
        this.readBinary.rejects("Please mock this yourselves. We don't want a dependency on node types");
        this.exists = stub();
        this.exists.resolves(false);
        this.stat = stub();
        this.stat.resolves({ type: "file", size: 0, mtime: new Date().toISOString() });
        this.readDirectory = stub();
        this.readDirectory.resolves([]);
        this.writeText = stub();
        this.writeText.resolves();
        this.createDirectory = stub();
        this.createDirectory.resolves();
        this.saveFile = stub();
        this.saveFile.resolves(null);
        this.selectPath = stub();
        this.selectPath.resolves(null);
    }
}

export default FileSystemAPIMock;