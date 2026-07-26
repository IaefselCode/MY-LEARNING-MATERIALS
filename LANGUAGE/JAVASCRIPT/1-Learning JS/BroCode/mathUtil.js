export const PI = 3.14159;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}

export function getVolume(radius){
    return 4*PI*radius*radius;
}
//I can reuse these variables and functions for any javascript program that i have
//And we need to make sure that we prefex each variable or function or anything else with the export keyword
//So that we can import else were