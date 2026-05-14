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

import { SinonStub } from "sinon";

export interface SinonStubGeneric<TGeneric, TArgs extends any[], TReturn> extends SinonStub<TArgs, TReturn> {
        <TGeneric>(...args: TArgs): TReturn;
      /**
         * Makes the stub return the provided @param obj value.
         * @param obj
         */
        returns(obj: TReturn): SinonStubGeneric<TGeneric, TArgs, TReturn>;
}

export type ParameterOfGeneric<T2, T extends <T2>(...args: any) => any> = T extends <T2>(...args: infer P) => any ? P : never ;
export type ReturnTypeOfGeneric<T2, T extends <T2>(...args: any) => any> = T extends <T2>(...args: any) => infer R ? R : never;

export type SinonMethodStub<T extends (...args:any[])=>any> = SinonStub<Parameters<T>, ReturnType<T>>;

export type SinonMethodStubOfGeneric<TGeneric, T extends <TGeneric>(...args:any[])=>any> = SinonStubGeneric<TGeneric, Parameters<T>, ReturnType<T>>;
