import type {SceneGeometry, SceneMesh} from "../scene";

/**
 * Represents an intersecting {@link scene!SceneMesh | SceneMesh} within a {@link RayPickResult}.
 *
 * See {@link "collision!pick"} for usage.
 */
export interface MeshHit {

    /**
     * The {@link scene!SceneMesh | SceneMesh} that was picked.
     */
    mesh: SceneMesh;

    /**
     * The {@link scene!SceneGeometry | SceneGeometry} belonging to the {@link scene!SceneMesh | SceneMesh} that was picked.
     */
    geometry: SceneGeometry;
}
