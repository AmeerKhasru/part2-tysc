// v1-module-config theke import (conflict rokar jonno alias use kora holo)
import { greetings as v1Greetings } from './v1-module-config';

// v2-module theke import
import { v2Greetings } from './v2-union';

console.log("--- Main script.ts started ---");

// Ekhon duti function-i call korte parbe
v1Greetings();
v2Greetings();