import { bindNode } from 'matreshka';

export default {
    className: (element, value) => {
        element.className = value; // eslint-disable-line no-param-reassign
    },

    bind: (element, value) => {
        const owner = value.owner;

        if (!owner) {
            throw Error('binding owner is missing');
        }

        for (const [bindKey, binders] of Object.entries(value)) {
            if (bindKey !== 'owner') {
                if (binders && 'length' in binders) {
                    for (const binder of binders) {
                        bindNode(owner, bindKey, element, binder);
                    }
                } else {
                    bindNode(owner, bindKey, element, binders);
                }
            }
        }
    }
};
