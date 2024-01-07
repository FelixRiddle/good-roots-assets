import PropertyImages from "./src/PropertyImages.js";
import { seedProperties } from "./src/seed/property.js";

const propertyImages = new PropertyImages();
propertyImages.getAll();

seedProperties();
