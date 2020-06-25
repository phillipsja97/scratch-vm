/* eslint-disable no-loop-func */
/* eslint-disable no-return-assign */
const EventEmitter = require('events');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const MathUtil = require('../../util/math-util');
const Clone = require('../../util/clone');
const Timer = require('../../util/Timer');
const Scratch3LooksBlocks = require('../../blocks/scratch3_looks');
const vm = window.vm;
const costumeData = require('./Assets/Satellites');
const newCostume = require('./Assets/newCostume');
// const originalCostume = newCostume.newCostume;
const load = require('../../import/load-costume');
const RenderedTarget = require('../../sprites/rendered-target');
const Lights = require('./Assets/newCostume');
const original = require('./Assets/originalCostume');
const Conversion = require('./parse-sequence');
const prevPositions = [];
let theTime = '';
let time = 0;
// let currentTarget = '';


class Scratch3Satellite extends EventEmitter {
    constructor (runtime) {
        super();
        this.runtime = runtime;
        // const vm = window.vm;
        const storage = runtime.storage;
        // eslint-disable-next-line no-console
        console.log(original.originalCostume, 'orginal');
        // This is the base branch code.

        const backdropCostume = `<svg version="1.1" width="2" height="2" viewBox="-1 -1 2 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <!-- Exported by Scratch - http://scratch.mit.edu/ -->
                                         </svg>`;

        const encoder = new TextEncoder();
        const newSVG2 = encoder.encode(backdropCostume);
        const mainSVG = original.originalCostume;
        const svg = Object.values(mainSVG).join('');
        // eslint-disable-next-line no-console
        // console.log(svg, 'svg');
        const newSVG = Cast.toString(svg);
        const costume1SVG = encoder.encode(newSVG);
        // eslint-disable-next-line no-console
        console.log(costume1SVG, 'costume1SVG');
        // const costume2SVG = encoder.encode(costumeData.costumes[1]);
        // const costume3SVG = encoder.encode(costumeData.costumes[2]);
        // const costume4SVG = encoder.encode(costumeData.costumes[3]);
        // const costume5SVG = encoder.encode(costumeData.costumes[4]);
        // const costume6SVG = encoder.encode(costumeData.costumes[5]);
        // const costume7SVG = encoder.encode(costumeData.costumes[6]);
        // const costume8SVG = encoder.encode(costumeData.costumes[7]);
        // const costume9SVG = encoder.encode(costumeData.costumes[8]);
        // const costume10SVG = encoder.encode(costumeData.costumes[9]);
        // const costume11SVG = encoder.encode(costumeData.costumes[10]);
        // const costume12SVG = encoder.encode(costumeData.costumes[11]);
        // const costume13SVG = encoder.encode(costumeData.costumes[12]);
        // const costume14SVG = encoder.encode(costumeData.costumes[13]);
        // const costume15SVG = encoder.encode(costumeData.costumes[14]);
        // const costume16SVG = encoder.encode(costumeData.costumes[15]);

        const costume1Data = {};
        costume1Data.asset = storage.createAsset(
            storage.AssetType.ImageVector,
            storage.DataFormat.SVG,
            costume1SVG,
            null,
            true // generate md5
        );
        costume1Data.dataFormat = storage.DataFormat.SVG;
        costume1Data.assetId = costume1Data.asset.assetId;
        costume1Data.md5 = `${costume1Data.assetId}.${costume1Data.dataFormat}`;
        costume1Data.name = 'Satellite1';
        costume1Data.rotationCenterX = 28;
        costume1Data.rotationCenterY = 23;

        // const costume2Data = {};
        // costume2Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume2SVG,
        //     null,
        //     true // generate md5
        // );
        // costume2Data.dataFormat = storage.DataFormat.SVG;
        // costume2Data.assetId = costume2Data.asset.assetId;
        // costume2Data.md5 = `${costume2Data.assetId}.${costume2Data.dataFormat}`;
        // costume2Data.name = 'Satellite2';
        // costume2Data.rotationCenterX = 28;
        // costume2Data.rotationCenterY = 23;

        // const costume3Data = {};
        // costume3Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume3SVG,
        //     null,
        //     true // generate md5
        // );
        // costume3Data.dataFormat = storage.DataFormat.SVG;
        // costume3Data.assetId = costume3Data.asset.assetId;
        // costume3Data.md5 = `${costume3Data.assetId}.${costume3Data.dataFormat}`;
        // costume3Data.name = 'Satellite3';
        // costume3Data.rotationCenterX = 28;
        // costume3Data.rotationCenterY = 23;

        // const costume4Data = {};
        // costume4Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume4SVG,
        //     null,
        //     true // generate md5
        // );
        // costume4Data.dataFormat = storage.DataFormat.SVG;
        // costume4Data.assetId = costume4Data.asset.assetId;
        // costume4Data.md5 = `${costume4Data.assetId}.${costume4Data.dataFormat}`;
        // costume4Data.name = 'Satellite4';
        // costume4Data.rotationCenterX = 28;
        // costume4Data.rotationCenterY = 23;

        // const costume5Data = {};
        // costume5Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume5SVG,
        //     null,
        //     true // generate md5
        // );
        // costume5Data.dataFormat = storage.DataFormat.SVG;
        // costume5Data.assetId = costume5Data.asset.assetId;
        // costume5Data.md5 = `${costume5Data.assetId}.${costume5Data.dataFormat}`;
        // costume5Data.name = 'Satellite5';
        // costume5Data.rotationCenterX = 28;
        // costume5Data.rotationCenterY = 23;

        // const costume6Data = {};
        // costume6Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume6SVG,
        //     null,
        //     true // generate md5
        // );
        // costume6Data.dataFormat = storage.DataFormat.SVG;
        // costume6Data.assetId = costume6Data.asset.assetId;
        // costume6Data.md5 = `${costume6Data.assetId}.${costume6Data.dataFormat}`;
        // costume6Data.name = 'Satellite6';
        // costume6Data.rotationCenterX = 28;
        // costume6Data.rotationCenterY = 23;

        // const costume7Data = {};
        // costume7Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume7SVG,
        //     null,
        //     true // generate md5
        // );
        // costume7Data.dataFormat = storage.DataFormat.SVG;
        // costume7Data.assetId = costume7Data.asset.assetId;
        // costume7Data.md5 = `${costume7Data.assetId}.${costume7Data.dataFormat}`;
        // costume7Data.name = 'Satellite7';
        // costume7Data.rotationCenterX = 28;
        // costume7Data.rotationCenterY = 23;

        // const costume8Data = {};
        // costume8Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume8SVG,
        //     null,
        //     true // generate md5
        // );
        // costume8Data.dataFormat = storage.DataFormat.SVG;
        // costume8Data.assetId = costume8Data.asset.assetId;
        // costume8Data.md5 = `${costume8Data.assetId}.${costume8Data.dataFormat}`;
        // costume8Data.name = 'Satellite8';
        // costume8Data.rotationCenterX = 28;
        // costume8Data.rotationCenterY = 23;

        // const costume9Data = {};
        // costume9Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume9SVG,
        //     null,
        //     true // generate md5
        // );
        // costume9Data.dataFormat = storage.DataFormat.SVG;
        // costume9Data.assetId = costume9Data.asset.assetId;
        // costume9Data.md5 = `${costume9Data.assetId}.${costume9Data.dataFormat}`;
        // costume9Data.name = 'Satellite9';
        // costume9Data.rotationCenterX = 28;
        // costume9Data.rotationCenterY = 23;

        // const costume10Data = {};
        // costume10Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume10SVG,
        //     null,
        //     true // generate md5
        // );
        // costume10Data.dataFormat = storage.DataFormat.SVG;
        // costume10Data.assetId = costume10Data.asset.assetId;
        // costume10Data.md5 = `${costume10Data.assetId}.${costume10Data.dataFormat}`;
        // costume10Data.name = 'Satellite10';
        // costume10Data.rotationCenterX = 28;
        // costume10Data.rotationCenterY = 23;

        // const costume11Data = {};
        // costume11Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume11SVG,
        //     null,
        //     true // generate md5
        // );
        // costume11Data.dataFormat = storage.DataFormat.SVG;
        // costume11Data.assetId = costume11Data.asset.assetId;
        // costume11Data.md5 = `${costume11Data.assetId}.${costume11Data.dataFormat}`;
        // costume11Data.name = 'Satellite11';
        // costume11Data.rotationCenterX = 28;
        // costume11Data.rotationCenterY = 23;

        // const costume12Data = {};
        // costume12Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume12SVG,
        //     null,
        //     true // generate md5
        // );
        // costume12Data.dataFormat = storage.DataFormat.SVG;
        // costume12Data.assetId = costume12Data.asset.assetId;
        // costume12Data.md5 = `${costume12Data.assetId}.${costume12Data.dataFormat}`;
        // costume12Data.name = 'Satellite12';
        // costume12Data.rotationCenterX = 28;
        // costume12Data.rotationCenterY = 23;

        // const costume13Data = {};
        // costume13Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume13SVG,
        //     null,
        //     true // generate md5
        // );
        // costume13Data.dataFormat = storage.DataFormat.SVG;
        // costume13Data.assetId = costume13Data.asset.assetId;
        // costume13Data.md5 = `${costume13Data.assetId}.${costume13Data.dataFormat}`;
        // costume13Data.name = 'Satellite13';
        // costume13Data.rotationCenterX = 28;
        // costume13Data.rotationCenterY = 23;

        // const costume14Data = {};
        // costume14Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume14SVG,
        //     null,
        //     true // generate md5
        // );
        // costume14Data.dataFormat = storage.DataFormat.SVG;
        // costume14Data.assetId = costume14Data.asset.assetId;
        // costume14Data.md5 = `${costume14Data.assetId}.${costume14Data.dataFormat}`;
        // costume14Data.name = 'Satellite14';
        // costume14Data.rotationCenterX = 28;
        // costume14Data.rotationCenterY = 23;

        // const costume15Data = {};
        // costume15Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume15SVG,
        //     null,
        //     true // generate md5
        // );
        // costume15Data.dataFormat = storage.DataFormat.SVG;
        // costume15Data.assetId = costume15Data.asset.assetId;
        // costume15Data.md5 = `${costume15Data.assetId}.${costume15Data.dataFormat}`;
        // costume15Data.name = 'Satellite15';
        // costume15Data.rotationCenterX = 28;
        // costume15Data.rotationCenterY = 23;

        // const costume16Data = {};
        // costume16Data.asset = storage.createAsset(
        //     storage.AssetType.ImageVector,
        //     storage.DataFormat.SVG,
        //     costume16SVG,
        //     null,
        //     true // generate md5
        // );
        // costume16Data.dataFormat = storage.DataFormat.SVG;
        // costume16Data.assetId = costume16Data.asset.assetId;
        // costume16Data.md5 = `${costume16Data.assetId}.${costume16Data.dataFormat}`;
        // costume16Data.name = 'Satellite16';
        // costume16Data.rotationCenterX = 28;
        // costume16Data.rotationCenterY = 23;

        const backdrop = {};
        backdrop.asset = storage.createAsset(
            storage.AssetType.ImageVector,
            storage.DataFormat.SVG,
            newSVG2,
            null,
            true
        );
        backdrop.dataFormat = storage.DataFormat.SVG;
        backdrop.assetId = backdrop.asset.assetId;
        backdrop.md5 = `${backdrop.assetId}.${backdrop.dataFormat}`;
        backdrop.name = 'backdrop1';
        backdrop.rotationCenterX = 243.00000000000003;
        backdrop.rotationCenterY = 182.96698836567242;

        const newProject = {
            targets: [
                {
                    isStage: true,
                    name: 'Stage',
                    variables: {'`jEk@4|i[#Fk?(8x)AV.-my variable': [ 'my variable', 0]},
                    lists: {},
                    broadcasts: {},
                    blocks: {},
                    comments: {},
                    currentCostume: 0,
                    costumes: [backdrop],
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
                    costumes: [costume1Data],
                    sounds: [],
                    volume: 100,
                    layerOrder: 1,
                    visible: true,
                    x: -109,
                    y: 124,
                    size: 175,
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
                    opcode: 'sequenceSpeed',
                    blockType: BlockType.COMMAND,
                    text: 'Control Speed By [DURATION]',
                    arguments: {
                        DURATION: {
                            type: ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: 'newCostume',
                    blockType: BlockType.COMMAND,
                    text: 'Set [LIGHT]',
                    arguments: {
                        LIGHT: {
                            type: ArgumentType.LIGHT,
                            // menu: 'lights',
                            defaultValue: 'Light1'
                        }
                        // COLOR: {
                        //     type: ArgumentType.COLOR
                        //     // menu: 'lights',
                        //     // defaultValue: 'Light1'
                        // }
                    }
                },
                {
                    opcode: 'addLight',
                    blockType: BlockType.REPORTER,
                    text: 'Add Light [LIGHT] and [LIGHT2]',
                    arguments: {
                        LIGHT: {
                            type: ArgumentType.LIGHT
                            // menu: 'lights',
                            // defaultValue: 'Light1'
                        },
                        LIGHT2: {
                            type: ArgumentType.LIGHT
                            // menu: 'lights',
                            // defaultValue: 'Light1'
                        }
                    }
                },
                {
                    opcode: 'rotateOneClockwise',
                    blockType: BlockType.COMMAND,
                    text: 'Rotate One Spot Clockwise'
                },
                {
                    opcode: 'sequenceToParse',
                    blockType: BlockType.COMMAND,
                    text: 'Sequence Test 2 [STRING]',
                    arguments: {
                        STRING: {
                            type: ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: 'sequence1',
                    blockType: BlockType.REPORTER,
                    text: 'Sequence 1'
                },
                {
                    opcode: 'sequence2',
                    blockType: BlockType.REPORTER,
                    text: 'Sequence 2'
                },
                {
                    opcode: 'sequence3',
                    blockType: BlockType.REPORTER,
                    text: 'Sequence 3'
                },
                {
                    opcode: 'startBlock',
                    blockType: BlockType.COMMAND,
                    text: 'Click To Start Sequence'
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
                            value: 'Light1'
                        },
                        {
                            text: 'Light2',
                            value: 'Light2'
                        },
                        {
                            text: 'Light3',
                            value: 'Light3'
                        },
                        {
                            text: 'Light4',
                            value: 'Light4'
                        },
                        {
                            text: 'Light5',
                            value: 'Light5'
                        },
                        {
                            text: 'Light6',
                            value: 'Light6'
                        },
                        {
                            text: 'Light7',
                            value: 'Light7'
                        },
                        {
                            text: 'Light8',
                            value: 'Light8'
                        },
                        {
                            text: 'Light9',
                            value: 'Light9'
                        },
                        {
                            text: 'Light10',
                            value: 'Light10'
                        },
                        {
                            text: 'Light11',
                            value: 'Light11'
                        },
                        {
                            text: 'Light12',
                            value: 'Light12'
                        },
                        {
                            text: 'Light13',
                            value: 'Light13'
                        },
                        {
                            text: 'Light14',
                            value: 'Light14'
                        },
                        {
                            text: 'Light15',
                            value: 'Light15'
                        },
                        {
                            text: 'Light16',
                            value: 'Light16'
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

    clockwiseByLoop (args, util) {
        const amount = Cast.toNumber(16) * Cast.toNumber(args.LOOPS);

        if (typeof util.stackFrame.loopCounter === 'undefined') {
            util.stackFrame.loopCounter = amount;
        }

        util.stackFrame.loopCounter--;

        if (util.stackFrame.loopCounter >= 0) {
            this.startSequence(args, util);
            util.startBranch(1, true);
        }
    }

    wait (args, util) {
        if (util.stackTimerNeedsInit()) {
            // eslint-disable-next-line no-console
            console.log(args.DURATION, 'duration');
            const duration = Math.max(0, 1000 * Cast.toNumber(args.DURATION));
            // eslint-disable-next-line no-console
            console.log(duration, 'duration');
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
            const duration = Cast.toNumber(args.DURATION);
            // eslint-disable-next-line no-console
            console.log(duration, 'duration');
            util.startStackTimer(duration);
            this.runtime.requestRedraw();
            util.yield();
        } else if (!util.stackTimerFinished()) {
            util.yield();
        }
    }

    sequenceSpeedDependent (util) {
        if (util.stackTimerNeedsInit()) {
            const duration = Math.max(0, 10 * Cast.toNumber(100));
            // eslint-disable-next-line no-console
            console.log(duration, 'duration');
            util.startStackTimer(duration);
            this.runtime.requestRedraw();
            util.yield();
        } else if (!util.stackTimerFinished()) {
            util.yield();
        }
        // eslint-disable-next-line no-console
        console.log(util, 'utilFromSequence');
    }

    updateSvg (costumeIndex, svg, rotationCenterX, rotationCenterY) {
        // return new Promise(resolve => {
        const costume = vm.editingTarget.getCostumes()[costumeIndex];
        if (costume && this.runtime && this.runtime.renderer) {
            costume.rotationCenterX = rotationCenterX;
            costume.rotationCenterY = rotationCenterY;
            this.runtime.renderer.updateSVGSkin(costume.skinId, svg, [rotationCenterX, rotationCenterY]);
            costume.size = this.runtime.renderer.getSkinSize(costume.skinId);
        }
        const storage = this.runtime.storage;
        const encoder = new TextEncoder();
        // If we're in here, we've edited an svg in the vector editor,
        // so the dataFormat should be 'svg'
        costume.dataFormat = storage.DataFormat.SVG;
        costume.bitmapResolution = 1;
        costume.asset = storage.createAsset(
            storage.AssetType.ImageVector,
            costume.dataFormat,
            encoder.encode(svg),
            null,
            true // generate md5
        );
        costume.assetId = costume.asset.assetId;
        costume.md5 = `${costume.assetId}.${costume.dataFormat}`;
        vm.emitTargetsUpdate();
        // resolve(costume);
        // });
    }

    newCostume (args, util) {
        const seq = Cast.toString(args.LIGHT);
        const Parse = require('./parse-sequence');
        const parser = new Parse();
        const color = '';
        const stringSplit = seq.split(',');
        const filteredList = stringSplit.filter(e => e === 0 || e);
        let arrayLength = filteredList.length;
        let k = 0;
        // let time = 0;
        while (arrayLength > 0) {
            if (filteredList[k].includes('L')) {
                const newTime = filteredList[k].slice(14);
                const copyOfCostume = parser.parseSingleInput(filteredList[k], prevPositions, color);

                setTimeout(() => {
                    const svg = Object.values(copyOfCostume).join('');
                    this.updateSvg(util.target.currentCostume, svg, 28, 23);
                }, time += Cast.toNumber(newTime));

            } else {
                const newCostumeSVG2 = original.originalCostume;
                const copyOfCostumeToBeChanged = {};
                Object.assign(copyOfCostumeToBeChanged, newCostumeSVG2);
                prevPositions.length = 0;
                const delayTime = filteredList[k].slice(2);
                setTimeout(() => {
                    const svg = Object.values(copyOfCostumeToBeChanged).join('');
                    this.updateSvg(util.target.currentCostume, svg, 28, 23);
                }, time += Cast.toNumber(delayTime));
                this.clearCostume(copyOfCostumeToBeChanged);
            }
            arrayLength--;
            k++;
        }

        
    }

    startBlock (args, util) {
        time = 0;
        this.newCostume(args, util);
    }

    // newCostume (args, util) {
    //     const color = '';
    //     let time;
    //     const timingArray = [];
    //     const light = Cast.toString(args.LIGHT);
    //     if (light.includes(',')) {
    //         const split = light.split(',');
    //         let length = split.length;
    //         let i = 0;
    //         while (length > 0) {
    //             const string = split[i];
    //             time = string.slice(12);
    //             timingArray.push(time);
    //             // eslint-disable-next-line no-console
    //             console.log(time, 'timing');
    //             length--;
    //             i++;
    //         }
    //         if (this.equalTiming(timingArray)) {
    //             const Parse = require('./parse-sequence');
    //             const parser = new Parse();
    //             // eslint-disable-next-line no-console
    //             console.log(light, 'lights');
    //             const copyOfCostume = parser.parseInput(light, prevPositions, color, theTime);
    //             // eslint-disable-next-line no-console
    //             console.log(copyOfCostume, 'costumecopy');
    //             // eslint-disable-next-line no-console
    //             console.log(theTime, 'timing');
    //             setTimeout(() => {
    //                 const svg = Object.values(copyOfCostume).join('');
    //                 this.updateSvg(util.target.currentCostume, svg, 28, 23);
    //             }, time);
    //             // if (util.stackTimerNeedsInit()) {
    //             //     const duration = Cast.toNumber(time);
    //             //     util.startStackTimer(duration);
    //             //     this.runtime.requestRedraw();
    //             //     util.yield();
    //             // } else if (!util.stackTimerFinished()) {
    //             //     util.yield();
    //             // }
    //         } else {
    //             const Parse = require('./parse-sequence');
    //             const parser = new Parse();
    //             const stringSplit = light.split(',');
    //             const filteredList = stringSplit.filter(e => e === 0 || e);
    //             let arrayLength = filteredList.length;
    //             let k = 0;
    //             time = 0;
    //             // let tempTime = 0;
    //             while (arrayLength > 0) {
    //                 const newTime = filteredList[k].slice(12);
    //                 // if (tempTime > 0) {
    //                 //     newTime = newTime - tempTime;
    //                 // }
    //                 parser.parseSingleInput(filteredList[k], prevPositions, color, theTime)
    //                     .then(copyOfCostume => {
    //                         setTimeout(() => {
    //                             const svg = Object.values(copyOfCostume).join('');
    //                             this.updateSvg(util.target.currentCostume, svg, 28, 23);
    //                         }, time += Cast.toNumber(newTime));
    //                     });
    //                 // tempTime = newTime;
    //                 arrayLength--;
    //                 k++;
    //             }
    //         }
    //     } else {
    //         const Parse = require('./parse-sequence');
    //         const parser = new Parse();
    //         time = light.slice(12);
    //         parser.parseSingleInput(light, prevPositions, color, theTime)
    //             .then(copyOfCostume => {
    //                 setTimeout(() => {
    //                     const svg = Object.values(copyOfCostume).join('');
    //                     this.updateSvg(util.target.currentCostume, svg, 28, 23);
    //                     // eslint-disable-next-line no-console
    //                     console.log(time, 'timing');
    //                 }, time);
    //             });
    //     }
    // }

    myTimer () {
        theTime++;
        // eslint-disable-next-line no-console
        console.log(theTime, 'time');
        return theTime;
    }

    checkTime (time) {
        const actualTime = time / 1000;
        if (actualTime < theTime) {
            return true;
        }
        return false;
    }

    // Focus attention back to setInterval

    sequence1 () {
        const lightsArray = [
            
            'L: 646400 FFFF 100',
            'D: 2000',

            'L: 000000 FFFF 100',
            'D: 300',

            'L: 646400 FFFF 100',
            'D: 600',

            'L: 000000 FFFF 100',
            'D: 300',

            'L: 646400 FFFF 100',
            'D: 600',

            'L: 000000 FFFF 100',
            'D: 100'
        ];
        const seq = lightsArray.join(',');
        return seq;
    }

    sequence2 () {
        const lightsArray = [
            
            
            'L: 646400 FFFF 1',
            'D: 200',

            'L: 000000 FFFF 1',
            'D: 200',

            'L: 000064 FE00 300',

            'L: 006464 00FE 300',

            'L: 646464 0101 300',

            'D: 300',

            'L: 646400 FFFF 1',
            'D: 200',

            'L: 000000 FFFF 1',
            'D: 200',

            'L: 000064 FE00 300',

            'L: 006464 00FE 300',

            'L: 646464 0101 300',
            'D: 200'

        ];
        const seq = lightsArray.join(',');
        return seq;
    }

    sequence3 () {
        const lightsArray = [
           
            'L: 006464 FE00 50',


            'L: 006400 00FE 50',


            'L: 646464 0101 50',
            'D: 50',

            'L: 006464 7E00 50',


            'L: 006400 017F 50',


            'L: 646464 8080 50',
            'D: 150',

            'L: 006464 3F80 50',


            'L: 006400 803F 50',


            'L: 646464 4040 50',
            'D: 150',

            'L: 006464 1FC0 50',


            'L: 006400 C01F 50',


            'L: 646464 2020 50',
            'D: 150',

            'L: 006464 0FE0 50',


            'L: 006400 E00F 50',


            'L: 646464 1010 50',
            'D: 150'
        ];
        const seq = lightsArray.join(',');
        return seq;
    }

    sequenceToParse (args, util) {
        const seq = args.STRING;
        // eslint-disable-next-line no-console
        console.log(seq, 'seq');
        const Parse = require('./parse-sequence');
        const parser = new Parse();
        const color = '';
        const stringSplit = seq.split(',');
        const filteredList = stringSplit.filter(e => e === 0 || e);
        let arrayLength = filteredList.length;
        let k = 0;
        // let time = 0;
        while (arrayLength > 0) {
            if (filteredList[k].includes('L')) {
                const newTime = filteredList[k].slice(14);
                const copyOfCostume = parser.parseSingleInput(filteredList[k], prevPositions, color);
                setTimeout(() => {
                    const svg = Object.values(copyOfCostume).join('');
                    this.updateSvg(util.target.currentCostume, svg, 28, 23);
                    // eslint-disable-next-line no-console
                    console.log(this.runtime.targets[1].visible, 'runtime');
                    if (this.runtime.targets[1].visible) {
                        this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this);
                        this.runtime.requestRedraw();
                        // eslint-disable-next-line no-console
                        console.log('did we hit here?');
                    }
                }, time += Cast.toNumber(newTime));

            } else {
                const newCostumeSVG2 = original.originalCostume;
                const copyOfCostumeToBeChanged = {};
                Object.assign(copyOfCostumeToBeChanged, newCostumeSVG2);
                const delayTime = filteredList[k].slice(2);
                prevPositions.length = 0;
                setTimeout(() => {
                    const svg = Object.values(copyOfCostumeToBeChanged).join('');
                    this.updateSvg(util.target.currentCostume, svg, 28, 23);
                    // const need = new RenderedTarget();
                    // eslint-disable-next-line no-console
                    console.log(this.runtime.targets[1].visible, 'runtime');
                    if (this.runtime.targets[1].visible) {
                        this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this);
                        this.runtime.requestRedraw();
                        // eslint-disable-next-line no-console
                        console.log(this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this), 'event');
                    }
                    // if (this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this)) {
                    //     this.runtime.requestRedraw();
                    // }
                }, time += Cast.toNumber(delayTime));
            }
            arrayLength--;
            k++;
            // const render = new RenderedTarget();
            // if (this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this)) {
            //     this.runtime.requestRedraw();
            //     // eslint-disable-next-line no-console
            //     console.log('did we hit here?');
            // }
            // // eslint-disable-next-line no-console
            // console.log(this.runtime.redrawRequested, 'redraw');
        }
    }

    clearCostume (costume) {
        const newCostumeSVG = original.originalCostume;
        const clearCostume = {};
        Object.assign(clearCostume, newCostumeSVG);
        const svg = Object.values(clearCostume).join('');
        costume = svg;
        return costume;
    }

    equalTiming (timing) {
        const firstResult = timing[0];
        // eslint-disable-next-line no-console
        console.log(timing, 'timing');
        // eslint-disable-next-line no-console
        console.log(firstResult, 'firstREsult');
        let result = true;
        for (let i = 0; i < timing.length; i++) {
            if (timing[i] !== firstResult) {
                result = false;
                break;
            }
        }
        // eslint-disable-next-line no-console
        console.log(result, 'result');
        return result;
    }

    addLight (args) {
        const light1 = Cast.toString(args.LIGHT);
        const light2 = Cast.toString(args.LIGHT2);
        const lights = [];
        lights.push(light1);
        lights.push(light2);
        return lights;
    }

    rotateOneClockwise (args, util) {
        const newCostumeSVG = original.originalCostume;
        const copyOfCostume = {};
        Object.assign(copyOfCostume, newCostumeSVG);
        const newPositions = [];
        let color = '';
        let length = prevPositions.length;
        const tempArray = [];
        if (length > 1) {
            let i = 0;
            while (length > 0) {
                const stringToEdit = prevPositions[i];
                const splitString = stringToEdit.split(',');
                const filteredString = splitString.filter(e => e === 0 || e);
                const theColor = filteredString.splice(0, 1);
                color = theColor;
                tempArray.push(color);
                filteredString.forEach(item => {
                    let newPosition = (+item + Cast.toNumber(1));
                    if (newPosition === 17) {
                        newPosition = 1;
                    }
                    copyOfCostume[`Light${newPosition}`] = `"#${color}"`;
                    tempArray.push(newPosition);
                });
                // eslint-disable-next-line no-loop-func
                i++;
                length--;
                let tempString = tempArray.join();
                newPositions.push(tempString);
                tempString = '';
                tempArray.length = 0;
            }
        } else {
            const singleLine = prevPositions.join();
            const singleString = singleLine.split(',');
            const theColor = singleString.splice(0, 1);
            color = theColor;
            tempArray.push(color);
            // eslint-disable-next-line no-loop-func
            singleString.map(item => {
                let newPosition = (+item + Cast.toNumber(1));
                if (newPosition === 17) {
                    newPosition = 1;
                }
                copyOfCostume[`Light${newPosition}`] = `"#${color}"`;
                tempArray.push(newPosition);
            });
            let tempString = tempArray.join();
            newPositions.push(tempString);
            tempString = '';
            tempArray.length = 0;
        }
        const svg = Object.values(copyOfCostume).join('');
        vm.updateSvg(util.target.currentCostume, svg, 28, 23);
        prevPositions.length = 0;
        // eslint-disable-next-line array-callback-return
        newPositions.map(move => {
            prevPositions.push(move);
        });
    }

}
  

module.exports = Scratch3Satellite;
