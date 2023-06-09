import * as core from '@tiptap/core';
import * as state from '@tiptap/pm/state';

class Bard {
    constructor(instance) {
        this.instance = instance;
        this.extensionCallbacks = [];
        this.extensionReplacementCallbacks = [];
        this.buttonCallbacks = [];
    }

    /** @deprecated */
    extend(callback) {
        this.addExtension(callback);
    }

    addExtension(callback) {
        this.extensionCallbacks.push(callback);
    }

    replaceExtension(name, callback) {
        this.extensionReplacementCallbacks.push({ name, callback });
    }

    buttons(callback) {
        this.buttonCallbacks.push(callback);
    }

    get tiptap() {
        return {
            core,
            pm: {
                state
            }
        };
    }
}

export default Bard;
