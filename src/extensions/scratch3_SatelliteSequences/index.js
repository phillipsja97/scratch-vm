/* eslint-disable linebreak-style */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const Color = require('../../util/color');
const MathUtil = require('../../util/math-util');
const Clone = require('../../util/clone');
// const RenderedTarget = require('../../sprites/rendered-target');
// const VirtualMachine = require('../../virtual-machine');
// const vm = new VirtualMachine();
// const ScratchStorage = require('scratch-storage');
// const storage = new ScratchStorage();
const Scratch3LooksBlocks = require('../../blocks/scratch3_looks');
const Scratch3ControlBlocks = require('../../blocks/scratch3_control');
// const svg = require('./Assets/satellite2.svg');
// const png = require('./Assets/satellite2.png');
// const buffer = require('arraybuffer-loader!./Assets/satellite2.svg');
// const Scratch = window.Scratch = window.Scratch || {};
// const ScratchRender = require('scratch-render');
// const ScratchSVGRenderer = require('scratch-svg-renderer');
// const fs = require('fs');


class Scratch3Satellite {
    constructor (runtime) {
        this.runtime = runtime;
        // const canvas = document.createElement('canvas');
        // vm.attachStorage(storage);
        // eslint-disable-next-line no-console
        // console.log(fs);
        // const stage = vm.runtime.targets;
        // eslint-disable-next-line no-console
        // const vector = new Uint8Array(buffer);
        // eslint-disable-next-line no-console
        // console.log(vector, 'vector');
        // const dataURL = new Buffer(fs.readFileSync(svg));
        // let _TextEncoder;
        // if (typeof TextEncoder === 'undefined') {
        //     _TextEncoder = require('text-encoding').TextEncoder;
        // } else {
        //     /* global TextEncoder */
        //     _TextEncoder = TextEncoder;
        // }
        // vm.attachV2BitmapAdapter(new ScratchSVGRenderer.BitmapAdapter());
        // const dataURL = canvas.toDataURL(png);
        // eslint-disable-next-line no-console
        // console.log(dataURL, 'data');
        // const data = runtime.v2BitmapAdapter.convertDataURIToBinary(dataURL);
        // eslint-disable-next-line no-console
        // console.log(binary);
        // // const costume = Scratch.createVMAsset(binary);
        // const costume = {};
        // costume.asset = storage.createAsset(
        //     storage.AssetType.ImageBitmap,
        //     storage.DataFormat.PNG,
        //     data,
        //     null,
        //     true // generate md5
        // );
        // costume.dataFormat = storage.DataFormat.PNG;
        // costume.assetId = costume.asset.assetId;
        // costume.md5 = `${costume.assetId}.${costume.dataFormat}`;
        // costume.name = 'Satellite1';
        // costume.rotationCenterX = 28;
        // costume.rotationCenterY = 23;
        // const renderer = new ScratchRender(canvas);
        // Scratch.renderer = renderer;
        // vm.attachRenderer(renderer);
        // const newSprite = {
        //     name: 'Satellite',
        //     isStage: false,
        //     x: -89, // x/y will be randomized below
        //     y: 127,
        //     visible: true,
        //     size: 100,
        //     rotationStyle: 'all around',
        //     direction: 90,
        //     draggable: true,
        //     currentCostume: 0,
        //     variables: {},
        //     lists: {},
        //     broadcasts: {},
        //     blocks: {},
        //     comments: {},
        //     costumes: [costume],
        //     sounds: [], // TODO are all of these necessary?
        //     objName: 'Satellite'
        // };
        // vm.addSprite(JSON.stringify(newSprite));
    }

    static get STATE_KEY () {
        return 'Scratch.Satellite';
    }

    static get DEFAULT_STATE () {
        return {
            color: 66.66,
            saturation: 100,
            brightness: 100,
            transparency: 0
            // penAttributes: {
            //     color4f: [0, 0, 1, 1],
            //     diameter: 1
            // }
        };
    }

    _getSatelliteState (target) {
        let satelliteState = target.getCustomState(Scratch3Satellite.STATE_KEY);
        if (!satelliteState) {
            satelliteState = Clone.simple(Scratch3Satellite.DEFAULT_PEN_STATE);
            target.setCustomState(Scratch3Satellite.STATE_KEY, satelliteState);
        }
        return satelliteState;
    }

    getInfo () {
        return {
            id: 'sequence',
            name: 'Satellite Sequence',
            blocks: [
                {
                    opcode: 'clockwiseBySpots',
                    blockType: BlockType.COMMAND,
                    text: 'Move Clockwise [TIMES] Spot(s)',
                    arguments: {
                        TIMES: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'counterClockwiseBySpots',
                    blockType: BlockType.COMMAND,
                    text: 'Move CounterClockwise [TIMES] Spot(s)',
                    arguments: {
                        TIMES: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'randomSteps',
                    blockType: BlockType.COMMAND,
                    text: 'Move random Number of Steps'
                },
                {
                    opcode: 'clockwiseByLoop',
                    blockType: BlockType.COMMAND,
                    text: 'Move Clockwise [LOOPS] Loop(s)',
                    arguments: {
                        TIMES: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 16
                        },
                        LOOPS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'counterClockwiseByLoop',
                    blockType: BlockType.COMMAND,
                    text: 'Move CounterClockwise [LOOPS] Loop(s) at Speed [DURATION]',
                    arguments: {
                        TIMES: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 16
                        },
                        LOOPS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        DURATION: {
                            type: ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: 'chooseColor',
                    blockType: BlockType.COMMAND,
                    text: 'Choose Color [EFFECT] [COLOR]',
                    arguments: {
                        COLOR: {
                            type: ArgumentType.COLOR,
                            menu: 'colors',
                            defaultValue: 'colors'
                        },
                        EFFECT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'COLOR'
                        }
                    }
                },
                {
                    opcode: 'chooseSpotWithColor',
                    blockType: BlockType.COMMAND,
                    text: 'Set [LIGHT] to [COLOR]',
                    arguments: {
                        LIGHT: {
                            type: ArgumentType.LIGHT,
                            menu: 'lights',
                            defaultValue: 'Light1'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR,
                            menu: 'colors',
                            defaultValue: 'Blue'
                        }
                    }
                },
                {
                    opcode: 'sequenceSpeed',
                    blockType: BlockType.COMMAND,
                    text: 'Control Speed By [DURATION]',
                    arguments: {
                        DURATION: {
                            type: ArgumentType.NUMBER
                        }
                    }
                }
            ],
            menus: {
                colors: {
                    acceptReporters: true,
                    items: [
                        {
                            text: 'Blue',
                            value: 110 // 54 - 56
                        },
                        {
                            text: 'Yellow',
                            value: 35 // 17 - 18
                        },
                        {
                            text: 'Green',
                            value: 70 // 35 - 35
                        },
                        {
                            text: 'Purple',
                            value: 155 // 77 - 78
                        },
                        {
                            text: 'Red',
                            value: 200 // 0 - 200
                        }
                    ]
                },
                lights: {
                    acceptReporters: true,
                    items: [
                        {
                            text: 'Light1',
                            value: 0
                        },
                        {
                            text: 'Light2',
                            value: 1
                        },
                        {
                            text: 'Light3',
                            value: 2
                        },
                        {
                            text: 'Light4',
                            value: 3
                        },
                        {
                            text: 'Light5',
                            value: 4
                        },
                        {
                            text: 'Light6',
                            value: 5
                        },
                        {
                            text: 'Light7',
                            value: 6
                        },
                        {
                            text: 'Light8',
                            value: 7
                        },
                        {
                            text: 'Light9',
                            value: 8
                        },
                        {
                            text: 'Light10',
                            value: 9
                        },
                        {
                            text: 'Light11',
                            value: 10
                        },
                        {
                            text: 'Light12',
                            value: 11
                        },
                        {
                            text: 'Light13',
                            value: 12
                        },
                        {
                            text: 'Light14',
                            value: 13
                        },
                        {
                            text: 'Light15',
                            value: 14
                        },
                        {
                            text: 'Light16',
                            value: 15
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

    chooseColor (args, util) {
        const effect = Cast.toString(args.EFFECT).toLowerCase();
        let value = Cast.toNumber(args.COLOR);
        value = this.clampEffect(effect, value);
        util.target.setEffect(effect, value);
    }

    moveSpots (args, util) {
        this._setCostume(
            util.target, util.target.currentCostume + 1, true
        );
    }

    moveReverseSpots (args, util) {
        this._setCostume(
            util.target, util.target.currentCostume - 1, true
        );
    }

    startReverseSequence (util) {
        this._setCostume(
            util.target, util.target.currentCostume - 1, true
        );
    }

    startSequence (util) {
        this._setCostume(
            util.target, util.target.currentCostume + 1, true
        );
    }

    _setCostume (target, requestedCostume, optZeroIndex) {
        if (typeof requestedCostume === 'number') {

            target.setCostume(optZeroIndex ? requestedCostume : requestedCostume - 1);
        } else {
            const costumeIndex = target.getCostumeIndexByName(requestedCostume.toString());

            if (costumeIndex !== -1) {
                target.setCostume(costumeIndex);
            } else if (requestedCostume === 'next costume') {
                target.setCostume(target.currentCostume + 1);
            } else if (requestedCostume === 'previous costume') {
                target.setCostume(target.currentCostume - 1);
            } else if (!(isNaN(requestedCostume) || Cast.isWhiteSpace(requestedCostume))) {
                target.setCostume(optZeroIndex ? Number(requestedCostume) : Number(requestedCostume) - 1);
            }
        }
        return [];
    }

    clockwiseBySpots (args, util) {
        const times = Math.round(Cast.toNumber(args.TIMES));

        if (typeof util.stackFrame.loopCounter === 'undefined') {
            util.stackFrame.loopCounter = times;
        }
        this.moveSpots(args, util);

        util.stackFrame.loopCounter--;

        if (util.stackFrame.loopCounter > 0) {
            util.startBranch(1, true);
        }
    }

    counterClockwiseBySpots (args, util) {
        const times = Math.round(Cast.toNumber(args.TIMES));

        if (typeof util.stackFrame.loopCounter === 'undefined') {
            util.stackFrame.loopCounter = times;
        }
        this.moveReverseSpots(args, util);

        util.stackFrame.loopCounter--;

        if (util.stackFrame.loopCounter > 0) {
            util.startBranch(1, true);
        }
    }

    clockwiseByLoop (args, util) {
        const amount = Cast.toNumber(16) * Cast.toNumber(args.LOOPS);
        const times = Math.round(Cast.toNumber(amount));

        if (typeof util.stackFrame.loopCounter === 'undefined') {
            util.stackFrame.loopCounter = times;
        }
        this.startSequence(util);

        util.stackFrame.loopCounter--;

        if (util.stackFrame.loopCounter > 0) {
            util.startBranch(1, true);
        }
    }

    counterClockwiseByLoop (args, util) {
        const amount = Cast.toNumber(16) * Cast.toNumber(args.LOOPS);
        const times = Math.round(Cast.toNumber(amount));

        if (typeof util.stackFrame.loopCounter === 'undefined') {
            util.stackFrame.loopCounter = times;
        }

        this.startReverseSequence(util);
        util.stackFrame.loopCounter--;

        if (util.stackFrame.loopCounter > 0) {
            util.startBranch(1, true);
        }
    }

    moveOneLoop (times, util) {
        const spots = Cast.toNumber(16);
        this._setCostume(
            util.target, util.target.currentCostume + spots, true
        );
    }

    randomSteps (args, util) {
        const randomIndex = Math.floor(Math.random() * Math.floor(16));
        this._setCostume(
            util.target, randomIndex - 1, true
        );
    }

    chooseSpotWithColor (args, util) {
        util.target.setCostume(args.LIGHT);
        const effect = Cast.toString('color').toLowerCase();
        let value = Cast.toNumber(args.COLOR);
        value = this.clampEffect(effect, value);
        util.target.setEffect(effect, value);
    }

    sequenceSpeed (args, util) {
        if (util.stackTimerNeedsInit()) {
            const duration = Math.max(0, 10 * Cast.toNumber(args.DURATION));

            util.startStackTimer(duration);
            this.runtime.requestRedraw();
            util.yield();
        } else if (!util.stackTimerFinished()) {
            util.yield();
        }
    }
}
  

module.exports = Scratch3Satellite;
