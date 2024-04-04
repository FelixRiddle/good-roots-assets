export const PROPERTIES_QUANTITY = 21;

/**
 * Class to create properties with a given configuration
 */
export default class Properties {
    
    /**
     * Properties
     * 
     */
    constructor() {
    }
    
    /**
     * Seed properties
     */
    getProperties() {
        // Create some property
        const property = {
            title: "Luxury house",
            description: "This is a luxury house",
            rooms: 3,
            parking: 2,
            bathrooms: 3,
            street: 'Norris Road 1223',
            latitude: 35.0831751,
            longitude: -90.022207,
            priceId: 5,
            categoryId: 4,
            published: true,
        };
        
        let properties = [];
        for(let i = 0; i <= PROPERTIES_QUANTITY; i++) {
            // Deep clone
            const newProperty = JSON.parse(JSON.stringify(property));
            newProperty.title = `Luxury house ${i + 1}`;
            
            properties.push(newProperty);
        }
        
        return properties;
    }
}
