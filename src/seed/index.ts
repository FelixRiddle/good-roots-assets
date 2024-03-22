import AppModel from "felixriddle.ts-app-models";

import Properties from "./Properties";
import seedAllModels from "./seeder";

/**
 * Seed all
 * 
 * Properties, users, etc.
 */
export default async function seedAll() {
    // const props = new Properties();
    // console.log(`Properties: `, props.getProperties());
    seedAllModels();
}
