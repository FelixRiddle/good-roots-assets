import fs from "node:fs";
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Property images path
 * 
 * @returns {string}
 */
export function propertyImagesPath() {
    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = path.dirname(__filename);
    // const propertyImages = `${__dirname}/../images/properties`;
    // return propertyImages;
    
    return `${__dirname}/../images/properties`;
}

/**
 * Images to absolute path
 * 
 * @param {Array} images
 * @param {string} houseName The house name(the folder containing the images)  
 * @returns 
 */
export function imagesToAbsolutePath(images: Array<string>, houseName: string) {
    const propPath = propertyImagesPath();
    const imagesPath = [];
    for(const image of images) {
        const imagePath = path.resolve(`${propPath}/${houseName}/${image}`);
        imagesPath.push(imagePath);
    }
    
    console.log(`Images path: `, imagesPath);
    return imagesPath;
}

export default class PropertyImages {
    constructor() {
        
    }
    
    /**
     * Get all
     */
    getAll() {
        let result: any = {};
        
        const propertyImages = propertyImagesPath();
        
        const folders = fs.readdirSync(propertyImages);
        
        for(let entry of folders) {
            const entryPath = path.resolve(`${propertyImages}/${entry}`);
            
            const images = fs.readdirSync(entryPath);
            const imagesAbsPath = imagesToAbsolutePath(images, entry);
            
            result[entry] = imagesAbsPath;
        }
        
        return result;
    }
}
