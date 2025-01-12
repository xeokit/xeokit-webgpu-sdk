import type {DataModel} from "../data";
import {IfcRelAggregates, ifcTypeCodes} from "../ifctypes";
import {MetaModelParams} from "./MetaModelParams";


/**
 * Loads a legacy xeokit meta model into a {@link data!DataModel | DataModel}.
 *
 * Expects {@link data!DataModel.built | DataModel.built} and
 * {@link data!DataModel.destroyed | DataModel.destroyed} to be ````false````
 *
 * See {@link "metamodel" | @xeokit/model} for usage.
 *
 * @param params - Loading parameters.
 * @param params.fileData - [XKT](https://xeokit.github.io/sdk/docs/pages/GLOSSARY.html#xkt) file data
 * @param params.dataModel - DataModel to load into.
 * @returns {Promise} Resolves when metadata has been loaded.
 * @throws *{@link core!SDKError | SDKError}*
 * * If the DataModel has already been destroyed.
 * * If the DataModel has already been built.
 */
export function loadMetaModel(params: {
    fileData: MetaModelParams;
    dataModel: DataModel;
}): Promise<void> {
    if (!params) {
        return Promise.reject("Parameter expected: params");
    }
    const {fileData, dataModel} = params;
    if (!fileData) {
        return Promise.reject("Argument expected: fileData");
    }
    if (!dataModel) {
        return Promise.reject("Parameter expected: params.dataModel");
    }
    if (dataModel.destroyed) {
        return Promise.reject("DataModel already destroyed");
    }
    if (dataModel.built) {
        return Promise.reject("DataModel already built");
    }
    //////////////////////////////////
    // TODO: Property set decompression
    //////////////////////////////////
    if (fileData.propertySets) {
        for (let i = 0, len = fileData.propertySets.length; i < len; i++) {
            const propertySetData = fileData.propertySets[i];
            if (!propertySetData.properties) { // HACK: https://github.com/Creoox/creoox-ifc2gltfcxconverter/issues/8
                propertySetData.properties = [];
            }
            let propertySet = dataModel.propertySets[propertySetData.id];
            if (!propertySet) {
                dataModel.createPropertySet({
                    id: propertySetData.id,
                    type: propertySetData.type,
                    name: propertySetData.name,

                    /////////////////////////////////////////
                    // FIXME: Properties not translated right here
                    /////////////////////////////////////////

                    properties: propertySetData.properties
                });
            }
        }
    }
    if (fileData.metaObjects) {
        for (let i = 0, len = fileData.metaObjects.length; i < len; i++) {
            const metaObjectData = fileData.metaObjects[i];
            const id = metaObjectData.id;
            let dataObject = dataModel.objects[id];
            if (!dataObject) {
                const originalSystemId = metaObjectData.originalSystemId;
                const propertySetIds = metaObjectData.propertySets || metaObjectData.propertySetIds;
                const type = ifcTypeCodes[metaObjectData.type];
                dataModel.createObject({
                    id,
                    originalSystemId,
                    type,
                    name: metaObjectData.name,
                    propertySetIds
                });
                if (metaObjectData.parent) {
                    dataModel.createRelationship({
                        relatingObjectId: metaObjectData.parent,
                        relatedObjectId: id,
                        type: IfcRelAggregates
                    })
                }
            }
        }
    }
    return Promise.resolve();
}
