#!/usr/bin/env node

import {Data, DataModel} from "../data";
import {Scene, SceneModel} from "../scene";
import {SDKError} from "../core";
import {loadLAS} from "../las";
import {saveXGF, SAVED_XGF_VERSIONS, DEFAULT_SAVED_XGF_VERSION} from "../xgf";

/**
 * @private
 */
function las2xgf(params: {
    fileData: any,
    xgfVersion?: number,
    createDataModel?: boolean
}): Promise<{
    xgfArrayBuffer: ArrayBuffer,
    sceneModel: SceneModel,
    dataModel?: DataModel,
    dataModelJSON: any
}> {
    const {fileData, xgfVersion, createDataModel} = params;
    return new Promise(function (resolve, reject) {
        const scene = new Scene();
        const sceneModel = scene.createModel({
            id: "foo"
        });
        if (sceneModel instanceof SDKError) {
            return reject(sceneModel.message);
        } else {
            if (createDataModel) { // Create default DataModel from LAS
                const data = new Data();
                const dataModel = data.createModel({
                    id: "foo"
                });
                if (dataModel instanceof SDKError) {
                    return reject(dataModel.message);
                } else {
                    loadLAS({
                        fileData,
                        dataModel,
                        sceneModel
                    }).then(() => {
                        sceneModel.build().then(() => {
                            dataModel.build().then(() => {
                                const xgfArrayBuffer = saveXGF({
                                    sceneModel,
                                    xgfVersion
                                });
                                if (xgfArrayBuffer instanceof SDKError) {
                                    return reject(xgfArrayBuffer.message);
                                } else {
                                    const dataModelJSON = dataModel.getJSON();
                                    return resolve({
                                        xgfArrayBuffer,
                                        sceneModel,
                                        dataModel,
                                        dataModelJSON
                                    });
                                }
                            }).catch(reason => {
                                return reject(reason);
                            });
                        }).catch((reason) => {
                            return reject(reason);
                        });
                    }).catch((reason) => {
                        return reject(reason);
                    });
                }
            } else {   // Don't create DataModel
                loadLAS({
                    fileData,
                    sceneModel
                }).then(() => {
                    sceneModel.build().then(() => {
                        const xgfArrayBuffer = saveXGF({
                            sceneModel,
                            xgfVersion
                        });
                        if (xgfArrayBuffer instanceof SDKError) {
                            return reject(xgfArrayBuffer.message);
                        } else {
                            return resolve({
                                xgfArrayBuffer,
                                sceneModel,
                                dataModel: null,
                                dataModelJSON: null
                            });
                        }
                    }).catch(err => {
                        return reject(err);
                    });
                }).catch(err => {
                    return reject(err);
                });
            }
        }
    });
}

/**
 *
 */
export {las2xgf};

/**
 * @private
 */
export const _SAVED_XGF_VERSIONS = SAVED_XGF_VERSIONS; // Make these private for our CLI tool's use only

/**
 * @private
 */
export const _DEFAULT_SAVED_XGF_VERSION = DEFAULT_SAVED_XGF_VERSION;