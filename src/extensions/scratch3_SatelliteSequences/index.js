/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const MathUtil = require('../../util/math-util');
const Scratch3LooksBlocks = require('../../blocks/scratch3_looks');
// const buffer = require('arraybuffer-loader!./Assets/satellite2.svg');
// const svg = new Uint8Array(buffer);
const svgData = require('./Assets/satellite2.svg');
const timer = require('../../util/timer');
const time = new timer();
// const png = require('./Assets/satellite2.png');
// const buffer = require('arraybuffer-loader!./Assets/satellite2.svg');
// const Scratch = window;
// const ScratchRender = require('scratch-render');
// const reader = new FileReader();
// const ScratchSVGRenderer = require('scratch-svg-renderer');
// const svg = require('./Assets/satellite2.svg');
// import svg from './Assets/satellite2.svg';
// eslint-disable-next-line no-console
// const Base64Util = require('../../util/base64-util');
// const fs = require('fs');


class Scratch3Satellite {
    constructor (runtime) {
        this.runtime = runtime;
        const vm = window.vm;
        const storage = runtime.storage;

        // const buffer = require('arraybuffer-loader!./Assets/satellite2.svg');
        // // eslint-disable-next-line no-console
        // console.log(buffer, 'buffer');
        // const svgg = new Uint8Array(buffer);
        // // eslint-disable-next-line no-console
        // console.log(svgg, 'svgggg');


        const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" width="480px" height="360px" viewBox="0 0 210 297" version="1.1" id="svg2053">
                        <g>
                            <path
                            d="m -117.17262,-21.166662 h 480.7857 V 339.4226 h -480.7857 z"
                            id="rect2618"
                            fill ='#000000'
                            stroke-width= '11.1346' />
                        </g>
                      </svg>`;

        const svg =
            `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="210.0" height="297.0" viewBox="0 0 210 297" version="1.1" id="Layer_1">
            <g>
              <path
                 d="m 116.22778,80.967667 a 5.037159,5.037159 0 0 1 -5.03716,5.037159 5.037159,5.037159 0 0 1 -5.03716,-5.037159 5.037159,5.037159 0 0 1 5.03716,-5.037159 5.037159,5.037159 0 0 1 5.03716,5.037159"
                 id="path2842"
                 fill="#FF0000"
                 strokeWidth="11"
                  />
              <path
                 d="m 178.91242,110.2578 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-0"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 195.51641,138.8017 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-8"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 201.29979,169.7709 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03715 5.0371594,5.0371594 0 0 1 5.03716,5.03715"
                 id="path2842-85"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 120.39316,260.06665 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-07"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 195.70298,202.04607 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-04"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 180.59151,228.53775 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-4"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 154.84598,249.99236 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03715 5.0371594,5.0371594 0 0 1 -5.03716,-5.03715 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-9"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 82.460164,252.79074 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.037159,-5.03716 5.0371594,5.0371594 0 0 1 5.037159,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-6"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 55.408757,232.08244 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.037159,-5.03716 5.0371594,5.0371594 0 0 1 5.037159,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-03"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 37.498856,204.6579 a 5.0371594,5.0371594 0 0 1 -5.037159,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.037159,5.03716"
                 id="path2842-80"
                 fill="#000000"
                 strokeWidth="11"/>
              <path
                 d="m 31.342314,171.2634 a 5.0371594,5.0371594 0 0 1 -5.037159,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.037159,5.03716"
                 id="path2842-5"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 37.312291,138.24202 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.037159,-5.03716 5.0371594,5.0371594 0 0 1 5.037159,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-83"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 52.423771,111.56374 a 5.0371594,5.0371594 0 0 1 -5.037159,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.037159,5.03716"
                 id="path2842-87"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 80.967671,89.362923 a 5.0371594,5.0371594 0 0 1 -5.03716,5.037159 5.0371594,5.0371594 0 0 1 -5.037159,-5.037159 5.0371594,5.0371594 0 0 1 5.037159,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,5.03716"
                 id="path2842-82"
                 fill="#000000"
                 strokeWidth="11" />
              <path
                 d="m 151.67446,89.176376 a 5.0371594,5.0371594 0 0 1 -5.03716,5.03716 5.0371594,5.0371594 0 0 1 -5.03716,-5.03716 5.0371594,5.0371594 0 0 1 5.03716,-5.037159 5.0371594,5.0371594 0 0 1 5.03716,5.037159"
                 id="path2842-06"
                 fill="#000000"
                 strokeWidth="11" />
            </g>
          </svg>
          `;
        const encoder = new TextEncoder();
        const newSVG = encoder.encode(svg);
        // eslint-disable-next-line no-console
        console.log(newSVG, 'encodedSVG');
        const encoder2 = new TextEncoder();
        const newSVG2 = encoder2.encode(svg2);

        const costume1 = {};
        costume1.asset = storage.createAsset(
            storage.AssetType.ImageVector,
            storage.DataFormat.SVG,
            newSVG,
            null,
            true // generate md5
        );
        costume1.dataFormat = storage.DataFormat.SVG;
        costume1.assetId = costume1.asset.assetId;
        costume1.md5 = `${costume1.assetId}.${costume1.dataFormat}`;
        costume1.name = 'Satellite1';
        costume1.rotationCenterX = 28;
        costume1.rotationCenterY = 23;

        const costume2 = {};
        costume2.asset = storage.createAsset(
            storage.AssetType.ImageVector,
            storage.DataFormat.SVG,
            newSVG2,
            null,
            true
        );
        costume2.dataFormat = storage.DataFormat.SVG;
        costume2.assetId = costume2.asset.assetId;
        costume2.md5 = `${costume2.assetId}.${costume2.dataFormat}`;
        costume2.name = 'backdrop1';
        costume2.rotationCenterX = 240;
        costume2.rotationCenterY = 180;

        const newProject = {
            targets: [
                {
                    isStage: true,
                    name: 'Stage',
                    variables: {'`jEk@4|i[#Fk?(8x)AV.-my variable': ['my variable', 0]},
                    lists: {},
                    broadcasts: {},
                    blocks: {},
                    comments: {},
                    currentCostume: 0,
                    costumes: [costume2],
                    sounds: [],
                    volume: 100,
                    layerOrder: 0,
                    tempo: 60,
                    videoTransparency: 50,
                    videoState: 'on',
                    textToSpeechLanguage: null
                },
                {
                    isStage: false,
                    name: 'Satellite1',
                    variables: {},
                    lists: {},
                    broadcasts: {},
                    blocks: {},
                    comments: {},
                    currentCostume: 0,
                    costumes: [costume1],
                    sounds: [],
                    volume: 100,
                    layerOrder: 1,
                    visible: true,
                    x: 0,
                    y: 0,
                    size: 150,
                    direction: 90,
                    draggable: false,
                    rotationStyle: 'all around'
                }
            ],
            monitors: [],
            extensions: [],
            meta: {
                semver: '3.0.0',
                vm: '0.2.0',
                agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
            }
        };
        vm.loadProject(JSON.stringify(newProject));
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
                    text: 'Move Clockwise [LOOPS] Loop(s) at speed [DURATION]',
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
                    opcode: 'counterClockwiseByLoop',
                    blockType: BlockType.COMMAND,
                    text: 'Move CounterClockwise [LOOPS] Loop(s)',
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

    startSequence (args, util) {
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

    // clockwiseByLoop (args, util) {
    //     const amount = Cast.toNumber(16) * Cast.toNumber(args.LOOPS);
    //     const times = Math.round(Cast.toNumber(amount));

    //     if (typeof util.stackFrame.loopCounter === 'undefined') {
    //         util.stackFrame.loopCounter = times;
    //     }

    //     this.startSequence(args, util);
    //     // eslint-disable-next-line no-console
    //     console.log(util, 'util');

    //     util.stackFrame.loopCounter--;

    //     if (util.stackFrame.loopCounter > 0) {
    //         util.startBranch(1, true);
    //     }
    // }

    clockwiseByLoop (args, util) {
        const amount = Cast.toNumber(16) * Cast.toNumber(args.LOOPS);

        if (typeof util.stackFrame.loopCounter === 'undefined') {
            util.stackFrame.loopCounter = amount;
        }

        // this.startReverseSequence(util);
        // util.stackFrame.loopCounter--;

        if (util.stackFrame.loopCounter > 0) {
            this.startSequence(args, util);
        }

        // while (amount > 0) {
        //     // eslint-disable-next-line no-console
        //     console.log(amount, 'amount');
        //     util.startBranch(1, true);
        //     this._setCostume(
        //         util.target, util.target.currentCostume + 1, true
        //     );
        //     amount--;
        // }
    }

    wait (args, util) {
        if (util.stackTimerNeedsInit()) {
            const duration = Math.max(0, 1000 * Cast.toNumber(args.DURATION));

            util.startStackTimer(duration);
            this.runtime.requestRedraw();
            util.yield();
        } else if (!util.stackTimerFinished()) {
            util.yield();
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
