/**
 * #### Geometry de/compression utilities library
 *
 * * Used internally within {@link SceneModel.createGeometry} to compress geometry and use less GPU memory
 * * Provided here for when we want to pre-compress our geometry offline and use {@link SceneModel.createGeometryCompressed} instead
 * * Combines duplicate positions
 * * Converts positions to relative-to-center (RTC) coordinates
 * * Quantizes positions and UVs as 16-bit unsigned ints
 * * Splits geometry into buckets to enable indices to use minimum bits for storage
 * * Generates indices for wireframe edge rendering
 * * Ignores normals (auto-generated in our shaders)
 *
 * See below for a brief idea of how we use this library in context. See {@link compressGeometryParams} for full usage.
 *
 * ````javascript
 * import {Viewer} from "@xeokit/viewer";
 * import {WebGLRenderer} from "@xeokit/webgl";
 * import {TrianglesPrimitive} from "@xeokit/core/constants";
 * import {compressGeometryParams} from "@xeokit/math/compression";
 *
 * const myViewer = new Viewer({
 *     id: "myViewer",
 *     renderer: new WebGLRenderer({
 *         //...
 *     })
 * });
 *
 * const view1 = myViewer.createView({
 *     id: "myView",
 *     canvasId: "myCanvas1"
 * });
 *
 * view1.camera.eye = [-3.933, 2.855, 27.018];
 * view1.camera.look = [4.400, 3.724, 8.899];
 * view1.camera.up = [-0.018, 0.999, 0.039];
 *
 * const mySceneModel = myViewer.scene.createModel({
 *     id: "myModel"
 * });
 *
 * const compressedGeometryParams = compressGeometryParams({
 *      id: "myBoxGeometry",
 *      primitive: TrianglesPrimitive,
 *      positions: [202, 202, 202, 200, 202, 202, ...],
 *      indices: [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, ...]
 * });
 *
 * mySceneModel.createGeometryCompressed(compressedGeometryParams);
 *
 * mySceneModel.createMesh({
 *     id: "myMesh",
 *     geometryId: "myGeometry",
 *     //...
 * });
 *
 * mySceneModel.createObject({
 *     id: "myObject1",
 *     meshIds: ["myMesh"],
 *     //...
 * });
 *
 * mySceneModel.createObject({
 *     id: "myObject2",
 *     meshIds: ["myMesh"],
 *     //...
 * });
 *
 * mySceneModel.build();
 * ````
 *
 * @module @xeokit/math/compression
 */
export * from "./compression/GeometryBucketParams";
export * from "./compression/GeometryCompressedParams";
export * from "./compression/GeometryParams";
export * from "./compression/compression";