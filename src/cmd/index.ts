import { ArgumentParser } from "argparse";

import runAllTests from "../test/index";

const parser = new ArgumentParser({
    description: "Argparse example"
});

// Data for testing
parser.add_argument("--seed-users", {
    help: "Insert users into the database",
    action: "store_true"
});

parser.add_argument("--test", {
    help: "Run all tests",
    action: "store_true"
});

/**
 * Execute commands
 */
export default async function executeCommands() {
    // Parse arguments
    const args = parser.parse_args();
    
    console.log(args);
    if(args.test) {
        runAllTests();
    }
    
    // process.exit(0);
};

executeCommands();
