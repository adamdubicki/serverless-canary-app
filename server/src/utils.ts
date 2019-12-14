/**
 * Based off this article:
 * https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript
 * Transform an object into lowerCamelCase
 * from UpperCamelCase. This keeps the response objects in the same
 * case-ing as our code for easier parsing.
 *
 * @param o - An object or primitive to recursively call
 * @returns The same object with all keys with the first char to lowercase
 */
export const keysToLowerCamelCase = (o: any): any => {
  if (isObject(o)) {
    const newObject: any = {};
    Object.keys(o).forEach((key: string) => {
      newObject[firstCharacterToLowercase(key)] = keysToLowerCamelCase(o[key]);
    });
    return newObject;
  } else if (Array.isArray(o)) {
    return o.map(i => keysToLowerCamelCase(i));
  }

  return o;
};

/**
 * Helper function for determining if a thing is an array
 *
 * @param a: A thing which we want to determine if it as an array
 * @returns true/false if an array
 */
const isArray = (a: any): boolean => Array.isArray(a);

/**
 * Helper function for determining if a thing is an object
 *
 * @param a: A thing which we want to determine if it as an object
 * @returns true/false if an object
 */
const isObject = (o: any): boolean =>
  o === Object(o) && !isArray(o) && typeof o !== 'function';

/**
 * Transform the first character in a string to lowercase
 *
 * @param s: A string to transform
 * @returns the same string with the first letter to lowercase
 */
const firstCharacterToLowercase = (s: string): string =>
  `${s.charAt(0).toLowerCase()}${s.substring(1)}`;

/**
 * A class decorator for enforcing static
 * properties on an interface.
 */
export const StaticImplements = <T>() =>
  <U extends T>(constructor: U) => constructor