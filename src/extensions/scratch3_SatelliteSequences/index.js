/* eslint-disable no-loop-func */
/* eslint-disable no-return-assign */
const EventEmitter = require('events');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const MathUtil = require('../../util/math-util');
const Scratch3LooksBlocks = require('../../blocks/scratch3_looks');
const original = require('./Assets/originalCostume');
const vm = window.vm;
const prevPositions = [];
let time = 0;


class Scratch3Satellite extends EventEmitter {
    constructor (runtime) {
        super();
        this.runtime = runtime;
        const storage = runtime.storage;

        const backdropCostume = `<svg version="1.1" width="2" height="2" viewBox="-1 -1 2 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <!-- Exported by Scratch - http://scratch.mit.edu/ -->
                                         </svg>`;

        const encoder = new TextEncoder();
        const newSVG2 = encoder.encode(backdropCostume);
        const mainSVG = original.originalCostume;
        const svg = Object.values(mainSVG).join('');
        const newSVG = Cast.toString(svg);
        const costume1SVG = encoder.encode(newSVG);

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
                    opcode: 'startBlock',
                    blockType: BlockType.COMMAND,
                    text: 'Click To Start Sequence'
                },
                {
                    opcode: 'newCostume',
                    blockType: BlockType.COMMAND,
                    text: 'Set [LIGHT]',
                    arguments: {
                        LIGHT: {
                            type: ArgumentType.LIGHT,
                            defaultValue: 'Light1'
                        }
                    }
                },
                {
                    opcode: 'addLight',
                    blockType: BlockType.REPORTER,
                    text: 'Add Light [LIGHT] and [LIGHT2]',
                    arguments: {
                        LIGHT: {
                            type: ArgumentType.LIGHT
                        },
                        LIGHT2: {
                            type: ArgumentType.LIGHT
                        }
                    }
                },
                {
                    opcode: 'sequenceSpeed',
                    blockType: BlockType.COMMAND,
                    text: 'Wait For [DURATION] Seconds',
                    arguments: {
                        DURATION: {
                            type: ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: 'rotateOneClockwise',
                    blockType: BlockType.COMMAND,
                    text: 'Rotate One Spot Clockwise'
                },
                // {
                //     opcode: 'sequenceToParse',
                //     blockType: BlockType.COMMAND,
                //     text: 'Sequence Test 2 [STRING]',
                //     arguments: {
                //         STRING: {
                //             type: ArgumentType.STRING
                //         }
                //     }
                // },
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
            ]
        };
    }

    sequenceSpeed (args, util) {
        if (util.stackTimerNeedsInit()) {
            const duration = Cast.toNumber(args.DURATION) * 1000;
            // eslint-disable-next-line no-console
            console.log(duration, 'duration');
            util.startStackTimer(duration);
            this.runtime.requestRedraw();
            util.yield();
        } else if (!util.stackTimerFinished()) {
            util.yield();
        }
    }

    updateSvg (costumeIndex, svg, rotationCenterX, rotationCenterY) {
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
                // this.clearCostume(copyOfCostumeToBeChanged);
            }
            arrayLength--;
            k++;
        }

        
    }

    startBlock (args, util) {
        time = 0;
        this.newCostume(args, util);
    }

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

    // sequenceToParse (args, util) {
    //     const seq = args.STRING;
    //     // eslint-disable-next-line no-console
    //     console.log(seq, 'seq');
    //     const Parse = require('./parse-sequence');
    //     const parser = new Parse();
    //     const color = '';
    //     const stringSplit = seq.split(',');
    //     const filteredList = stringSplit.filter(e => e === 0 || e);
    //     let arrayLength = filteredList.length;
    //     let k = 0;
    //     // let time = 0;
    //     while (arrayLength > 0) {
    //         if (filteredList[k].includes('L')) {
    //             const newTime = filteredList[k].slice(14);
    //             const copyOfCostume = parser.parseSingleInput(filteredList[k], prevPositions, color);
    //             setTimeout(() => {
    //                 const svg = Object.values(copyOfCostume).join('');
    //                 this.updateSvg(util.target.currentCostume, svg, 28, 23);
    //                 // eslint-disable-next-line no-console
    //                 console.log(this.runtime.targets[1].visible, 'runtime');
    //                 if (this.runtime.targets[1].visible) {
    //                     this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this);
    //                     this.runtime.requestRedraw();
    //                     // eslint-disable-next-line no-console
    //                     console.log('did we hit here?');
    //                 }
    //             }, time += Cast.toNumber(newTime));

    //         } else {
    //             const newCostumeSVG2 = original.originalCostume;
    //             const copyOfCostumeToBeChanged = {};
    //             Object.assign(copyOfCostumeToBeChanged, newCostumeSVG2);
    //             const delayTime = filteredList[k].slice(2);
    //             prevPositions.length = 0;
    //             setTimeout(() => {
    //                 const svg = Object.values(copyOfCostumeToBeChanged).join('');
    //                 this.updateSvg(util.target.currentCostume, svg, 28, 23);
    //                 // const need = new RenderedTarget();
    //                 // eslint-disable-next-line no-console
    //                 console.log(this.runtime.targets[1].visible, 'runtime');
    //                 if (this.runtime.targets[1].visible) {
    //                     this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this);
    //                     this.runtime.requestRedraw();
    //                     // eslint-disable-next-line no-console
    //                     console.log(this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this), 'event');
    //                 }
    //                 // if (this.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, this)) {
    //                 //     this.runtime.requestRedraw();
    //                 // }
    //             }, time += Cast.toNumber(delayTime));
    //         }
    //         arrayLength--;
    //         k++;
    //     }
    // }

    // clearCostume (costume) {
    //     const newCostumeSVG = original.originalCostume;
    //     const clearCostume = {};
    //     Object.assign(clearCostume, newCostumeSVG);
    //     const svg = Object.values(clearCostume).join('');
    //     costume = svg;
    //     return costume;
    // }

    // equalTiming (timing) {
    //     const firstResult = timing[0];
    //     // eslint-disable-next-line no-console
    //     console.log(timing, 'timing');
    //     // eslint-disable-next-line no-console
    //     console.log(firstResult, 'firstREsult');
    //     let result = true;
    //     for (let i = 0; i < timing.length; i++) {
    //         if (timing[i] !== firstResult) {
    //             result = false;
    //             break;
    //         }
    //     }
    //     // eslint-disable-next-line no-console
    //     console.log(result, 'result');
    //     return result;
    // }

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
