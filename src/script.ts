
import * as v2uninon from './v2-union.js';
import { greetings} from './v1-module-config.js';
import * as aliasVsInterface from './v3-alias-vs-interface.js';

console.log("--- Main script.ts started ---");


greetings();



console.log("Status 1:", v2uninon.status1);
console.log("Status 2:", v2uninon.status2);
console.log("Status 3:", v2uninon.status3);
console.log("Value 1:", v2uninon.value1);
console.log("Value 2:", v2uninon.value2);


console.log("Point 3D:", aliasVsInterface.point3D);
