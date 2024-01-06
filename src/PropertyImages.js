import fs from "node:fs";
import path from 'path';
import { fileURLToPath } from 'url';

export default class PropertyImages {
    constructor() {
        
    }
    
    /**
     * Get all
     */
    getAll() {
        let result = {};
        
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const propertyImages = `${__dirname}/../images/properties`;
        
        const folders = fs.readdirSync(propertyImages);
        
        for(let entry of folders) {
            const images = fs.readdirSync(`${propertyImages}/${entry}`);
            result[entry] = images;
        }
        
        return result;
    }
}
