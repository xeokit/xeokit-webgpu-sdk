import type {FloatArrayParam} from "@xeokit/math/math";
import type {Geometry} from "./Geometry";
import type {TextureSet} from "./TextureSet";

/**
 * Represents a mesh.
 *
 * * Stored in {@link Model.meshes}
 * * Created with {@link BuildableModel.createMesh}
 * * Referenced by {@link XKTObject.meshes}
 */
export interface Mesh {

    /**
     * Unique ID of this Mesh.
     *
     * Mesh is stored by this ID in {@link Model.meshes}.
     */
    id: string;

    /**
     * {@link Geometry} used by this Mesh.
     */
    geometry: Geometry;

    /**
     * {@link TextureSet} used by this Mesh.
     */
    textureSet?: TextureSet;

    /**
     * Modeling transform for this Mesh.
     */
    matrix: FloatArrayParam;

    /**
     * RGB color for this Mesh.
     *
     * Range is [0..1, 0..1, 0.1].
     */
    color: FloatArrayParam;

    /**
     * PBR metallness factor for this Mesh.
     *
     * Range is [0..1].
     */
    metallic: number;

    /**
     * PBR roughness factor for this Mesh.
     *
     * Range is [0..1].
     */
    roughness: number;

    /**
     * Opacity factor for this Mesh.
     *
     * Range is [0..1].
     */
    opacity: number;
}