import type {View} from "./View";
import type {Viewer} from "./Viewer";
import type {Capabilities} from "../core";
import type {SDKError} from "../core";
import type {RendererObject} from "../scene";
import type {SceneModel} from "../scene";
import {PickParams} from "./PickParams";
import {PickResult} from "./PickResult";

/**
 * Defines the contract for the rendering strategy used internally within a {@link Viewer | Viewer}.
 *
 * A Viewer uses an implementation of this internally to allocate and render geometry and materials using an
 * available browser 3D graphics API, such as WebGL or WebGPU.
 *
 * ## Usage
 *
 * ````javascript
 * import {Viewer} from "@xeokit/sdk/viewer";
 *
 * const myViewer = new Viewer({
 *     id: "myViewer",
 *     renderers: new WebGLRenderer({ }) // Or WebGPURenderer, MockRenderer etc.
 * });
 * ````
 */
export interface Renderer {

    /**
     * The Viewer this Renderer is currently attached to.
     */
    get viewer(): Viewer;

    /**
     * Interfaces through which each {@link ViewObject | ViewObject} shows/hides/highlights/selects/xrays/colorizes
     * its {@link scene!SceneObject | SceneObject} within the {@link Renderer | Renderer} that's
     * configured on its {@link Viewer | Viewer}.
     *
     * @internal
     */
    rendererObjects: { [key: string]: RendererObject }

    /**
     * TODO
     */

    //  rendererModels: { [key: string]: RendererModel };

    /**
     * Initializes this Renderer by attaching a {@link Viewer | Viewer}.
     *
     * @internal
     * @param viewer Viewer to attach.
     * @returns *void*
     * * Viewer successfully attached.
     * @returns *{@link core!SDKError | SDKError}*
     * * A Viewer is already attached to this Renderer.
     * * The given Viewer is already attached to another Renderer.
     */
    attachViewer(viewer: Viewer): void | SDKError;

    /**
     * Detaches the {@link Viewer | Viewer} that is currently attached, if any.
     *
     * @internal
     * @returns *void*
     * * Viewer successfully detached.
     * @returns *{@link core!SDKError | SDKError}*
     * * No Viewer is currently attached to this Renderer.
     */
    detachViewer(): SDKError | void;

    /**
     * Gets the capabilities of this Renderer.
     *
     * @param capabilities Returns the capabilities of this WebGLRenderer.
     * @internal
     */
    getCapabilities(capabilities: Capabilities): void;

    /**
     * Gets whether this Renderer supports SAO.
     * @internal
     */
    getSAOSupported(): boolean;

    /**
     * Attaches a {@link View} to this Renderer.
     *
     * The Renderer will then begin rendering each {@link scene!SceneModel | SceneModel} previously or subsequently
     * created with {@link scene!Scene.createModel | Scene.createModel} , for the new View.
     *
     * You can only attach as many Views as indicated in {@link  @xeokit/core!Capabilities.maxViews | Capabilities.maxViews}, as returned by
     * {@link Renderer.getCapabilities | Renderer.getCapabilities}.
     *
     * You must attach a View before you can attach a SceneModel.
     *
     * @internal
     * @param view The View to attach.
     * @returns *void*
     * * Handle to the View within this Renderer. Use this handle to update Renderer state for the View.
     * @returns *{@link core!SDKError | SDKError}*
     * * No Viewer is attached to this Renderer.
     * * Caller attempted to attach too many Views.
     * * The WebGLRenderer failed to initialize for the new View.
     */
    attachView(view: View): SDKError | void;

    /**
     * Detaches the given {@link View} from this Renderer.
     *
     * The Renderer will then cease rendering for that View.
     *
     * @internal
     * @param view The View to detach.
     * @returns *void*
     * * View successfully detached.
     * @returns *{@link core!SDKError | SDKError}*
     * * No Viewer is attached to this Renderer.
     * * View is not currently attachedto this Renderer.
     */
    detachView(view: View): SDKError | void;

    /**
     * Attaches a {@link scene!SceneModel | SceneModel} to this Renderer.
     *
     * This method attaches various hooks to the elements within the SceneModel, through which they can
     * upload state updates to the Renderer.
     *
     * * Sets a {@link scene!RendererModel} on {@link scene!SceneModel.rendererModel | SceneModel.rendererModel}
     * * Sets a {@link scene!RendererObject} on each {@link scene!SceneObject.rendererObject | SceneObject.rendererObject}
     * * Sets a {@link scene!RendererMesh} on each {@link scene!SceneMesh.rendererMesh | SceneMesh.rendererMesh}
     * * Sets a {@link scene!RendererTextureSet} on each {@link scene!SceneTextureSet.rendererTextureSet | SceneTextureSet.rendererTextureSet}
     * * Sets a {@link scene!RendererTexture} on each {@link scene!SceneTexture.rendererTexture | SceneTexture.rendererTexture}
     *
     * Then, when we make any state updates to those components, they will upload the updates into the Renderer.
     *
     * You must first attach a View with {@link Renderer.attachView | Renderer.attachView} before you can attach a SceneModel.
     *
     * @param sceneModel
     * @internal
     * @returns *void*
     * * SceneModel successfully attached.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * SceneModel already attached to this Renderer, or to another Renderer.
     */
    attachSceneModel(sceneModel: SceneModel): void | SDKError;

    /**
     * Detaches a {@link scene!SceneModel | SceneModel} from this Renderer.
     *
     * Detaches and destroys the {@link scene!RendererModel}, {@link scene!RendererObject} and
     * {@link scene!RendererMesh},
     * {@link scene!RendererTexture} instances that were attached in {@link Renderer.attachSceneModel}.
     *
     * @internal
     * @param sceneModel The SceneModel
     * @returns *void*
     * * SceneModel successfully detached.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * The SceneModel is not attached to this Renderer.
     */
    detachSceneModel(sceneModel: SceneModel): void | SDKError;

    /**
     * Enable/disable rendering of transparent objects for the given View.
     *
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @param enabled Whether to enable or disable transparent objects for the View.
     * @internal
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    setTransparentEnabled(viewIndex: number, enabled: boolean): void | SDKError;

    /**
     * Enable/disable edge enhancement for the given View.
     *
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @param enabled Whether to enable or disable edges for the View.
     * @internal
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    setEdgesEnabled(viewIndex: number, enabled: boolean): void | SDKError;

    /**
     * Enable/disable scaleable ambient obscurrance SAO for the given View.
     *
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @param enabled Whether to enable or disable SAO for the View.
     * @internal
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    setSAOEnabled(viewIndex: number, enabled: boolean): void | SDKError;

    /**
     * Enable/disable physically-based rendering (PBR) for the given View.
     *
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @param enabled Whether to enable or disable PBR for the View.
     * @internal
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    setPBREnabled(viewIndex: number, enabled: boolean): void | SDKError;

    /**
     * Indicates that the renderers needs to render a new frame for the given View.
     *
     * @internal
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    setImageDirty(viewIndex?: number): void | SDKError;

    /**
     * Clears the renderer for the given view.
     *
     * @internal
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    clear(viewIndex: number): void | SDKError;

    /**
     * Triggers a rebuild of the shaders within this Renderer for the given View.
     * @internal
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    setNeedsRebuild(viewIndex: number): void | SDKError;

    /**
     * Gets if a new frame needs to be rendered for the given View.
     * @internal
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @returns *boolean*
     * * True if a new frame needs to be rendered for the View.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    getNeedsRender(viewIndex: number): SDKError | boolean;

    /**
     * Renders a frame for a View.
     *
     * @param params Rendering params.
     * @param [params.force=false] True to force a render, else only render if needed.
     * @internal
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @returns *{@link core!SDKError | SDKError}*
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     */
    render(viewIndex: number, params: { force?: boolean; }): void | SDKError;

    /**
     * Picks a ViewerObject within a View.
     *
     * @param viewIndex Handle to the View, returned earlier by {@link Renderer.attachView | Renderer.attachView}.
     * @internal
     * @param viewIndex Handle to the View, returned earlier by {@xeokit/Renderer.attachView | Renderer.attachView}.
     * @param pickParams Picking parameters.
     * @param pickResult Picking results, when caller wants to manage them externally.
     * @throws {@link core!SDKError | SDKError}
     * * No View is currently attached to this Renderer.
     * * Can't find a View attached to this Renderer with the given handle.
     * * Illegal picking parameters given.
     * @returns {@link PickResult}
     * * Picking attempt completed.
     */
    pick(viewIndex: number, pickParams: PickParams, pickResult?: PickResult):  PickResult | null;

    /**
     * Enters snapshot mode for the given View.
     *
     * @param viewIndex
     * @param params
     */
    beginSnapshot(viewIndex: number, params?: {
        width: number,
        height: number
    });

    /**
     * When in snapshot mode, renders a frame of the current Scene state to the snapshot canvas.
     */
    renderSnapshot();

    /**
     * When in snapshot mode, gets an image of the snapshot canvas.
     *
     * @returns {String} The image data URI.
     */
    readSnapshot(params): string;

    /**
     * Returns an HTMLCanvas containing an image of the snapshot canvas.
     *
     * - The HTMLCanvas has a CanvasRenderingContext2D.
     * - Expects the caller to draw more things on the HTMLCanvas (annotations etc).
     *
     * @returns {HTMLCanvasElement}
     */
    readSnapshotAsCanvas(params): HTMLCanvasElement;

    /**
     * Exits snapshot mode.
     *
     * Switches rendering back to the main canvas.
     */
    endSnapshot();
}
