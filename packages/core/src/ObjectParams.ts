/**
 * Object creation parameters for {@link BuildableModel.createObject}.
 */
export interface ObjectParams {

    /**
     * Unique ID for the ViewerObject.
     */
    id: string;

    /**
     * IDs of meshes previously created with {@link BuildableModel.createMesh}.
     */
    meshIds: string[];

    /**
     * Causes each {@link View} to put the corresponding {@link ViewObject} into a {@link ViewLayer} with this ID.
     *
     * When you create an object in a model, each {@link View} will automatically create a {@link ViewObject} to
     * represent it. When the object has a {@link ObjectParams.viewLayerId} property, then each View will first ensure that it
     * has a {@link ViewLayer} with this ID, and will register the ViewObject in that ViewLayer.
     *
     * Overrides {@link ViewerModelParams.viewLayerId}.
     */
    viewLayerId?: string;
}