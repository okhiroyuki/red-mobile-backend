/*
Copyright 2023 Total Pave Inc.
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

/*
Install via `after_prepare` hook:
<hook type="after_prepare" src="hooks/stripExtraWriteExternalStoragePerm.js" />
*/

const FS = require("fs");
const Path = require("path");

let path = Path.resolve("platforms/android/app/src/main/AndroidManifest.xml");

let manifest = FS.readFileSync(path, {
  encoding: "utf-8",
});

// Strips ALL occurrences of <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
// If you have several conflicts (of different maxSDKVersion, or in different formats) then the regex
// may need to be adjusted, or repeated for each format.
manifest = manifest.replace(
  /^(\s)+<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" \/>$/gm,
  "",
);

FS.writeFileSync(path, manifest);
