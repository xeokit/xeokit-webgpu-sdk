
import type {FloatArrayParam} from "../math";
import type {SDKError} from "../core";
import {RendererModel} from "./RendererModel";


/**
 * Interface through which a {@link viewer!ViewObject | ViewObject} controls the appearance of
 * a {@link SceneObject | SceneObject} in a {@link viewer!Viewer | Viewer}.
 *
 * When a {@link Scene | Scene} is attached to a {@link viewer!Viewer | Viewer}, the Viewer
 * attaches a RendererObject to each of the Scene's {@link SceneObject | SceneObjects}, to provide
 * an interface through which the Viewer's {@link viewer!ViewObject | ViewObject} can control the appearance of
 * the SceneObject within a {@link viewer!View | View}.
 *
 * Internally, the Viewer's {@link viewer!Renderer} attaches these
 * to {@link SceneObject.rendererObject | SceneObject.rendererObject} and
 * {@link viewer!ViewObject.rendererObject | ViewObject.rendererObject}. When we update properties
 * like {@link viewer!ViewObject.visible | ViewObject.visible}, this interface will upload those
 * updates into the {@link viewer!Renderer}.
 *
 * @internal
 */
export interface RendererObject {

    /**
     * Unique ID of this RendererObject.
     * @internal
     */
    readonly id: string;

    /**
     * The {@link RendererModel | RendererModel} that contains this RendererObject.
     * @internal
     */
    readonly rendererModel: RendererModel;

    /**
     * The axis-aligned World-space 3D boundary of this RendererObject.
     * @internal
     */
    readonly aabb: FloatArrayParam;

    /**
     * The ID of a {@link viewer!ViewLayer | ViewLayer} for the {@link viewer!ViewObject} to exclusively appear in.
     * @internal
     */
    readonly layerId: string | null;

    /**
     * Sets the visibility of the {@link viewer!ViewObject} in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param visible Whether to make the {@link viewer!ViewObject} visible.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setVisible(viewHandle: number, visible: boolean): void | SDKError;

    /**
     * Sets whether the {@link viewer!ViewObject} appears highlighted in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param highlighted Whether to make the {@link viewer!ViewObject} highlighted.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setHighlighted(viewHandle: number, highlighted: boolean): void | SDKError;

    /**
     * Sets whether the {@link viewer!ViewObject} appears X-rayed in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param xrayed Whether to make the {@link viewer!ViewObject} X-rayed.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setXRayed(viewHandle: number, xrayed: boolean): void | SDKError;

    /**
     * Sets whether the {@link viewer!ViewObject} appears selected in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param selected Whether to make the {@link viewer!ViewObject} selected.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setSelected(viewHandle: number, selected: boolean): void | SDKError;

    /**
     * Sets whether the {@link viewer!ViewObject} is visually culled from the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param culled Whether to cull the {@link viewer!ViewObject} in the {@link viewer!View | View}.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setCulled(viewHandle: number, culled: boolean): void | SDKError;

    /**
     * Sets whether section plane clipping is applied to the {@link viewer!ViewObject} in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param clippable Whether to make the {@link viewer!ViewObject} in the {@link viewer!View | View} clippable.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setClippable(viewHandle: number, clippable: boolean): void | SDKError;

    /**
     * Sets whether the {@link viewer!ViewObject} is included in boundary calculations/collisions in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param collidable Whether to make the {@link viewer!ViewObject} in the {@link viewer!View | View} collidable.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setCollidable(viewHandle: number, collidable: boolean): void | SDKError;

    /**
     * Sets whether the {@link viewer!ViewObject} is pickable in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param pickable Whether to make the {@link viewer!ViewObject} in the {@link viewer!View | View} pickable.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setPickable(viewHandle: number, pickable: boolean): void | SDKError;

    /**
     * Colorizes the {@link viewer!ViewObject} in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param color Color to set the {@link viewer!ViewObject} in the {@link viewer!View | View} to.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setColorize(viewHandle: number, color?: FloatArrayParam): void | SDKError;

    /**
     * Sets the opacity of the {@link viewer!ViewObject} in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param opacity Opacity to set the {@link viewer!ViewObject} in the {@link viewer!View | View} to.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setOpacity(viewHandle: number, opacity?: number): void | SDKError;

    /**
     * Sets a translation to apply to the {@link viewer!ViewObject} in the given {@link viewer!View | View}.
     *
     * @internal
     * @param viewHandle Handle to the {@link viewer!View | View}, which was returned by {@link viewer!Renderer.attachView | Renderer.attachView}.
     * @param offset Offset to apply to the {@link viewer!ViewObject} in the {@link viewer!View | View}.
     * @returns *void*
     * * Success.
     * @returns *{@link core!SDKError | SDKError}*
     * * No {@link viewer!View | View} found in the Renderer for the given handle.
     */
    setOffset(viewHandle: number, offset: FloatArrayParam): void | SDKError;
}

