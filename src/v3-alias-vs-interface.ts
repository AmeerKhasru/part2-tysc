//Alias vs interface

//Alias 
type Point = {
  x: number;
  y: number;
};
type Point3D = Point & { z: number }; // Intersection type
const point3D: Point3D = { x: 1, y: 2, z: 3 }; // valid

//Interface
interface IPoint {
  x: number;
  y: number;
}
interface IPoint3D extends IPoint {
    z: number;
}

export { Point, Point3D, point3D, IPoint, IPoint3D };