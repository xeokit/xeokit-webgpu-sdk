import {FloatArrayParam} from "../math";
import {PerspectiveProjectionParams} from "./PerspectiveProjectionParams";
import {OrthoProjectionParams} from "./OrthoProjectionParams";
import {FrustumProjectionParams} from "./FrustumProjectionParams";
import {CustomProjectionParams} from "./CustomProjectionParams";

/**
 * Configures the View's {@link Camera}.
 *
 * * Returned by {@link Camera.getJSON | Camera.getJSON}
 * * Located at {@link ViewParams.camera | ViewParams.camera}
 */
export interface CameraParams {


    eye?: FloatArrayParam;
    look?: FloatArrayParam;
    up?: FloatArrayParam;
    worldAxis?: FloatArrayParam;
    worldUp?: FloatArrayParam;
    worldRight?: FloatArrayParam;
    worldForward?: FloatArrayParam;
    gimbalLock?: boolean;
    constrainPitch?: boolean;
    projectionType?: number;
    perspectiveProjection?: PerspectiveProjectionParams;
    orthoProjection?: OrthoProjectionParams;
    frustumProjection?: FrustumProjectionParams;
    customProjection?: CustomProjectionParams;

}
