import type { RendererTexture } from "./RendererTexture";
/**
 * Interface through which a {@link @xeokit/scene!TextureSet | TextureSet} loads updated texture data
 * into a {@link @xeokit/viewer!Viewer | Viewer's} {@link @xeokit/viewer!Renderer | Renderer}.
 *
 * This loads the updated texture data into all the {@link @xeokit/viewer!View | View} belonging to the Viewer.
 *
 * This exists at {@link @xeokit/scene!TextureSet.rendererTextureSet} when the {@link @xeokit/scene!SceneModel} has been added
 *  to a {@link @xeokit/viewer!Viewer | Viewer}.
 *
 * @internal
 */
export interface RendererTextureSet {
    /**
     * Interface through which the color {@link @xeokit/scene!Texture | Texture} in this set loads content updates
     * into a {@link @xeokit/viewer!Viewer | Viewer's} {@link @xeokit/viewer!Renderer | Renderer}.
     */
    readonly colorRendererTexture: RendererTexture;
    /**
     * Interface through which the metallic-roughness {@link @xeokit/scene!Texture | Texture} in this set loads content updates
     * into a {@link @xeokit/viewer!Viewer | Viewer's} {@link @xeokit/viewer!Renderer | Renderer}.
     */
    readonly metallicRoughnessRendererTexture: RendererTexture;
    /**
     * Interface through which the emissive {@link @xeokit/scene!Texture | Texture} in this set loads content updates
     * into a {@link @xeokit/viewer!Viewer | Viewer's} {@link @xeokit/viewer!Renderer | Renderer}.
     */
    readonly emissiveRendererTexture: RendererTexture;
    /**
     * Interface through which the ambient occlusion {@link @xeokit/scene!Texture | Texture} in this set loads content updates
     * into a {@link @xeokit/viewer!Viewer | Viewer's} {@link @xeokit/viewer!Renderer | Renderer}.
     */
    readonly occlusionRendererTexture: RendererTexture;
}