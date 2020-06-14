/* eslint-disable no-loop-func */
/* eslint-disable no-return-assign */
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
const Lights = require('./Assets/newCostume');
const original = require('./Assets/originalCostume');
const prevPositions = [];
let continueColor = [];
// let currentTarget = '';


class Scratch3Satellite {
    constructor (runtime) {
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
            const duration = Math.max(0, 10 * Cast.toNumber(args.DURATION));
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
    }

    newCostume (args, util) {
        const newCostumeSVG = original.originalCostume;
        const copyOfCostume = {};
        Object.assign(copyOfCostume, newCostumeSVG);
        const light = Cast.toString(args.LIGHT);
        let color = '';
        const splitForFilter = light.split('#');
        const filteredList = splitForFilter.filter(e => e === 0 || e);
        let length = filteredList.length;
        if (length > 1) {
            if (prevPositions.length > 0) {
                prevPositions.length = 0;
            }
            let i = 0;
            while (length > 0) {
                const stringToEdit = filteredList[i];
                prevPositions.push(stringToEdit);
                const splitString = stringToEdit.split(',');
                const filteredString = splitString.filter(e => e === 0 || e);
                const theColor = filteredString.splice(0, 1);
                color = theColor;
                // eslint-disable-next-line no-loop-func
                filteredString.map(item => copyOfCostume[`Light${item}`] = `"#${color}"`);
                continueColor.push(color);
                i++;
                length--;
            }
        } else {
            if (prevPositions.length > 0) {
                prevPositions.length = 0;
            }
            const toSplit = light.toString();
            prevPositions.push(light);
            const stringToEdit = toSplit.split(',');
            const filteredString = stringToEdit.filter(e => e === 0 || e);
            const theColor = filteredString.splice(0, 1);
            color = theColor;
            // eslint-disable-next-line no-loop-func
            filteredString.map(item => copyOfCostume[`Light${item}`] = `"${color}"`);
        }
        const svg = Object.values(copyOfCostume).join('');
        vm.updateSvg(util.target.currentCostume, svg, 28, 23);
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
                copyOfCostume[`Light${newPosition}`] = `"${color}"`;
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
