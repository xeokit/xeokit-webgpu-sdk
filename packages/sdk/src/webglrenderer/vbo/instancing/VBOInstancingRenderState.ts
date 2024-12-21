import {WebGLArrayBuf} from "../../../webglutils";
import {FloatArrayParam} from "../../../math";
import {SceneGeometry} from "../../../scene";

/**
 * @private
 */
export interface VBOInstancingRenderState {
    numEdgeIndices: number;
    numIndices: number;
    obb: FloatArrayParam;
    sceneGeometry: SceneGeometry;
    uvDecodeMatrix: FloatArrayParam;
    colorTextureSupported: boolean;
    uvBuf: WebGLArrayBuf;
    metallicRoughnessBuf: WebGLArrayBuf;
    textureSet: any;
    normalsBuf: WebGLArrayBuf;
    edgeIndicesBuf: WebGLArrayBuf;
    numVertices: number;
    pickColorsBuf: WebGLArrayBuf;
    positionsDecompressScale: FloatArrayParam,
    positionsDecompressOffset: FloatArrayParam,
    offsetsBuf: WebGLArrayBuf;
    colorsBuf: WebGLArrayBuf[];
    flagsBufs: WebGLArrayBuf[];
    origin: FloatArrayParam;
    positionsBuf: WebGLArrayBuf;
    indicesBuf: WebGLArrayBuf;
    modelMatrixBuf: WebGLArrayBuf;
    modelMatrixCol0Buf: WebGLArrayBuf;
    modelMatrixCol1Buf: WebGLArrayBuf;
    modelMatrixCol2Buf: WebGLArrayBuf;
    modelNormalMatrixCol0Buf: WebGLArrayBuf;
    modelNormalMatrixCol1Buf: WebGLArrayBuf;
    modelNormalMatrixCol2Buf: WebGLArrayBuf;

    saoSupported: boolean;
    pbrSupported: boolean;
    numInstances: number;


}
