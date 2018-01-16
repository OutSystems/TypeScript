//// [tests/cases/compiler/noEmitOutsideRoot.ts] ////

//// [a.ts]
/* this file must be emitted */
import { x } from "ProjectB/fileFromB";
import { z } from "ProjectB/fileThatNeedsAnother";
export var y = x;

//// [fileFromB.ts]
/* this file must not be emitted */
export var x = 1;

//// [fileThatNeedsAnother.ts]
/* this file must not be emitted */
import { w } from "./anotherFromB";
export var z = w;

//// [anotherFromB.ts]
/* this file must not be emitted */
export var w = 1;

//// [a.js]
"use strict";
exports.__esModule = true;
/* this file must be emitted */
var fileFromB_1 = require("ProjectB/fileFromB");
exports.y = fileFromB_1.x;
