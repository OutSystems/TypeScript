// @module: commonjs
// @traceResolution: true

// @filename: c:/git/bigsolution/ProjectA/src/js/tsconfig.json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "ProjectB/*": [
                "../../../ProjectB/src/js/*",
                "../../../ProjectB/src/dts/*",
            ]
        },
        "rootDir": ".",
        "noEmitOutsideRoot": true,
    }
}

// @filename: c:/git/bigsolution/ProjectA/src/js/subdir/a.ts
/* this file must be emitted */
import { x } from "ProjectB/fileFromB";
import { z } from "ProjectB/fileThatNeedsAnother";
export var y = x;

// @filename: c:/git/bigsolution/ProjectB/src/js/fileFromB.ts
/* this file must not be emitted */
export var x = 1;

// @filename: c:/git/bigsolution/ProjectB/src/js/fileThatNeedsAnother.ts
/* this file must not be emitted */
import { w } from "./anotherFromB";
export var z = w;

// @filename: c:/git/bigsolution/ProjectB/src/js/anotherFromB.ts
/* this file must not be emitted */
export var w = 1;