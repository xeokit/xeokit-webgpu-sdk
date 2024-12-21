/**
 * Compressed texture data.
 *
 * * Created by a {@link core!TextureTranscoder.transcode | TextureTranscoder.transcode} from transcoded texture data.
 */
export interface TextureCompressedParams {
    mipmaps: {
        data: Uint8Array;
        width: number;
        height: number
    }[],
    props: {
        wrapS: number;
        wrapT: number;
        wrapR: number;
        unpackAlignment: number;
        flipY: boolean;
        type: number;
        internalFormat: number;
        format: number;
        minFilter: number;
        magFilter: number;
        encoding: number;
        premultiplyAlpha: boolean;
    }
}
