/* eslint-disable linebreak-style */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const Color = require('../../util/color');
const MathUtil = require('../../util/math-util');
const RenderedTarget = require('../../sprites/rendered-target');
const Scratch3LooksBlocks = require('../../blocks/scratch3_looks');


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
                    opcode: 'moveSteps',
                    blockType: BlockType.COMMAND,
                    text: 'Start Sequence 1 with [COLOR]',
                    arguments: {
                        COLOR: {
                            type: ArgumentType.COLOR,
                            defaultValue: '#FF3333'
                        }
                    }
                },
                {
                    opcode: 'changeColor',
                    blockType: BlockType.COMMAND,
                    text: 'Start [SEQUENCE] with [EFFECT] [COLOR]',
                    arguments: {
                        COLOR: {
                            type: ArgumentType.COLOR,
                            menu: 'colors',
                            defaultValue: 'colors'
                        },
                        EFFECT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'COLOR'

                        },
                        SEQUENCE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 'Sequence 1',
                            menu: 'sequences'
                        }
                    }
                }
            ],
            menus: {
                sequences: {
                    acceptReporters: true,
                    items: [
                        {
                            text: 'Sequence 1',
                            value: 'Sequence 1'
                        },
                        {
                            text: 'Sequence 2',
                            value: 'Sequence 2'
                        }
                    ]
                },
                colors: {
                    acceptReporters: true,
                    items: [
                        {
                            text: 'Blue',
                            value: 100
                        },
                        {
                            text: 'Yellow',
                            value: 25
                        },
                        {
                            text: 'Green',
                            value: 50
                        },
                        {
                            text: 'Purple',
                            value: 145
                        },
                        {
                            text: 'Red',
                            value: 190
                        }
                    ]
                }
            }
        };
    }

    clampEffect (effect, value) {
        let clampedValue = value;
        switch (effect) {
        case 'ghost':
            clampedValue = MathUtil.clamp(value,
                Scratch3LooksBlocks.EFFECT_GHOST_LIMIT.min,
                Scratch3LooksBlocks.EFFECT_GHOST_LIMIT.max);
            break;
        case 'brightness':
            clampedValue = MathUtil.clamp(value,
                Scratch3LooksBlocks.EFFECT_BRIGHTNESS_LIMIT.min,
                Scratch3LooksBlocks.EFFECT_BRIGHTNESS_LIMIT.max);
            break;
        }
        return clampedValue;
    }

    changeColor (args, util) {
        const effect = Cast.toString(args.EFFECT).toLowerCase();
        let value = Cast.toNumber(args.COLOR);
        value = this.clampEffect(effect, value);
        util.target.setEffect(effect, value);
    }

    moveSteps (args, util) {
        // eslint-disable-next-line no-console
        console.log(util, 'util');
        // eslint-disable-next-line no-console
        const steps = Cast.toNumber(args.STEPS);
        const radians = MathUtil.degToRad(90 - util.target.direction);
        const dx = steps * Math.cos(radians);
        const dy = steps * Math.sin(radians);
        util.target.setXY(util.target.x + dx, util.target.y + dy);
    }

    setXY (x, y, force) {
        if (this.isStage) return;
        if (this.dragging && !force) return;
        const oldX = this.x;
        const oldY = this.y;
        if (this.renderer) {
            const position = this.renderer.getFencedPositionOfDrawable(this.drawableID, [x, y]);
            this.x = position[0];
            this.y = position[1];

            this.renderer.updateDrawablePosition(this.drawableID, position);
            if (this.visible) {
                this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this);
                this.runtime.requestRedraw();
            }
        } else {
            this.x = x;
            this.y = y;
        }
        this.emit(RenderedTarget.EVENT_TARGET_MOVED, this, oldX, oldY, force);
        this.runtime.requestTargetsUpdate(this);
    }
}
  

module.exports = Scratch3NewBlocks;
