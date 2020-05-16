/* eslint-disable linebreak-style */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const TargetType = require('../../extension-support/target-type');
const Cast = require('../../util/cast');
const Color = require('../../util/color');
// const log = require('../../util/log');

class Scratch3NewBlocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'sequence',
            name: 'Satellite Sequence',
            blocks: [
                {
                    opcode: 'startSequence',
                    blockType: BlockType.COMMAND,
                    text: 'Start Sequence 1 with [COLOR]',
                    arguments: {
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#33FFFF'
                        }
                    },
                    filter: [TargetType.SPRITE]
                }
            ],
            menus: {
            }
        };
    }

    startSequence (args) {
        // eslint-disable-next-line no-console
        console.log(args.COLOR, 'default');
        const color = Color.hexToRgb(args.COLOR);
        return color;
    }
}

module.exports = Scratch3NewBlocks;
