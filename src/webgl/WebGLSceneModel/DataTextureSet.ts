import {DataTexture} from "../lib/DataTexture";

export class DataTextureSet {

    positions: DataTexture; // All quantized positions for a Layer
    indices_8Bits: DataTexture; // All 8-bit indices
    indices_16Bits: DataTexture; // All 16-bit indices
    indices_32Bits: DataTexture; // All 32-bt indices
    edgeIndices_8Bits: DataTexture; // All 8-bit edge indices
    edgeIndices_16Bits: DataTexture; // All 16-bit edges indices
    edgeIndices_32Bits: DataTexture; // All 32-bit edges indices
    indices: { [key: number]: DataTexture }; // All 8, 16, and 32-bit indices
    edgeIndices: { [key: number]: DataTexture }; // All 8, 16 and 32-bit indices
    eachMeshAttributes: DataTexture; // For each mesh, a set of attributes including color, opacity, visibility etc
    eachMeshMatrices: DataTexture; // For each mesh, a positions decompression matrix and a modeling matrix
    eachEdgeOffset: DataTexture;
    eachPrimitiveMesh_8Bits: DataTexture;
    eachPrimitiveMesh_16Bits: DataTexture;
    eachPrimitiveMesh_32Bits: DataTexture;
    eachPrimitiveMesh: { [key: number]: DataTexture };
    eachEdgeMesh_8Bits: DataTexture;
    eachEdgeMesh_16Bits: DataTexture;
    eachEdgeMesh_32Bits: DataTexture;
    eachEdgeMesh: { [key: number]: DataTexture };
    #finalized: boolean;

    constructor() {
        this.positions = null;
        this.indices_8Bits = null;
        this.indices_16Bits = null;
        this.indices_32Bits = null;
        this.edgeIndices_8Bits = null;
        this.edgeIndices_16Bits = null;
        this.edgeIndices_32Bits = null;
        this.eachMeshAttributes = null;
        this.eachMeshMatrices = null;
        this.eachPrimitiveMesh_8Bits = null;
        this.eachPrimitiveMesh_16Bits = null;
        this.eachPrimitiveMesh_32Bits = null;
        this.eachEdgeMesh_8Bits = null;
        this.eachEdgeMesh_16Bits = null;
        this.eachEdgeMesh_32Bits = null;
        this.eachEdgeOffset = null;
        this.#finalized = false;
    }

    finalize() {
        this.indices = {
            8: this.indices_8Bits,
            16: this.indices_16Bits,
            32: this.indices_32Bits,
        };
        this.eachPrimitiveMesh = {
            8: this.eachPrimitiveMesh_8Bits,
            16: this.eachPrimitiveMesh_16Bits,
            32: this.eachPrimitiveMesh_32Bits,
        };
        this.edgeIndices = {
            8: this.edgeIndices_8Bits,
            16: this.edgeIndices_16Bits,
            32: this.edgeIndices_32Bits,
        };
        this.eachEdgeMesh = {
            8: this.eachEdgeMesh_8Bits,
            16: this.eachEdgeMesh_16Bits,
            32: this.eachEdgeMesh_32Bits,
        };
        this.#finalized = true;
    }

    destroy() {
        this.positions.destroy();
        this.indices_8Bits.destroy();
        this.indices_16Bits.destroy();
        this.indices_32Bits.destroy();
        this.edgeIndices_8Bits.destroy();
        this.edgeIndices_16Bits.destroy();
        this.edgeIndices_32Bits.destroy();
        this.eachMeshMatrices.destroy();
        this.eachMeshAttributes.destroy();
        this.eachEdgeOffset.destroy();
        this.eachPrimitiveMesh_8Bits.destroy();
        this.eachPrimitiveMesh_16Bits.destroy();
        this.eachPrimitiveMesh_32Bits.destroy();
        this.eachEdgeMesh_8Bits.destroy();
        this.eachEdgeMesh_16Bits.destroy();
        this.eachEdgeMesh_32Bits.destroy();
    }
}