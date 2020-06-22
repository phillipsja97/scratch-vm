/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable linebreak-style */
const original = require('./Assets/originalCostume');
const Cast = require('../../util/cast');

class Parse {

    parseInput (input, prevPositions, color) {
        return new Promise(resolve => {
            const newCostumeSVG = original.originalCostume;
            const copyOfCostume = {};
            Object.assign(copyOfCostume, newCostumeSVG);
            const costumesArray = [];
            // const timingArray = [];
            if (input.includes(',')) {
                if (prevPositions.length > 0) {
                    prevPositions.length = 0;
                }
                let i = 0;
                let k = 1;
                const splitForFilter = input.split(',');
                const filteredList = splitForFilter.filter(e => e === 0 || e);
                let length = filteredList.length;
                while (length > 0) {
                    // const newCostumeSVG = original.originalCostume;
                    // let copyOfCostume = {};
                    // Object.assign(copyOfCostume, newCostumeSVG);
                    const stringToEdit = filteredList[i];
                    // prevPositions.push(stringToEdit);
                    const splitString = stringToEdit.split(' ');
                    const filteredString = splitString.filter(e => e === 0 || e);
                    const theColor = filteredString.splice(0, 1);
                    // timing = filteredString.pop();
                    // timingArray.push(timing);
                    // theTime = timingArray[0];
                    color = theColor;
                    // eslint-disable-next-line no-invalid-this
                    const positions = this.convertBase(filteredString);
                    const absolute = positions.map(pos => +pos + Cast.toNumber(1));
                    // eslint-disable-next-line no-loop-func
                    absolute.map(item => copyOfCostume[`Light${item}`] = `"#${color}"`);
                    absolute.unshift(Cast.toString(color));
                    prevPositions.push(absolute.toString());
                    const svg = Object.values(copyOfCostume).join('');
                    costumesArray.push(svg);
                    // vm.updateSvg(util.target.currentCostume, svg, 28, 23);
                    i++;
                    k++;
                    length--;
                    // copyOfCostume = {};
                }
            }
            resolve(copyOfCostume);
        });
    }

    parseSingleInput (input, prevPositions, color) {
        return new Promise(resolve => {
            const newCostumeSVG = original.originalCostume;
            const copyOfCostume = {};
            Object.assign(copyOfCostume, newCostumeSVG);
            if (prevPositions.length > 0) {
                prevPositions.length = 0;
            }
            // const newCostumeSVG = original.originalCostume;
            // const copyOfCostume = {};
            // Object.assign(copyOfCostume, newCostumeSVG);
            const toSplit = input.toString();
            // prevPositions.push(light);
            const stringToEdit = toSplit.split(' ');
            const filteredString = stringToEdit.filter(e => e === 0 || e);
            const theColor = filteredString.splice(0, 1);
            // timing = filteredString.pop();
            // timingArray.push(timing);
            color = theColor;
            // eslint-disable-next-line no-invalid-this
            const positions = this.convertBase(filteredString);
            const absolute = positions.map(pos => +pos + Cast.toNumber(1));
            absolute.map(item => copyOfCostume[`Light${item}`] = `"#${color}"`);
            absolute.unshift(Cast.toString(color));
            prevPositions.push(absolute.toString());
            // eslint-disable-next-line no-console
            // console.log(theTime, 'timingfromparse');
            // eslint-disable-next-line no-loop-func
            // filteredString.map(item => copyOfCostume[`Light${item}`] = `"${color}"`);
            resolve(copyOfCostume);
        });
    }

    parseMultipleInput (input, prevPositions, color) {
        return new Promise(resolve => {
            const costumesArray = [];
            // const timingArray = [];
            if (prevPositions.length > 0) {
                prevPositions.length = 0;
            }
            // eslint-disable-next-line no-console
            console.log(input, 'input');
            let i = 0;
            const splitForFilter = input.split(',');
            const filteredList = splitForFilter.filter(e => e === 0 || e);
            let length = filteredList.length;
            while (length > 0) {
                const newCostumeSVG = original.originalCostume;
                const copyOfCostume = {};
                Object.assign(copyOfCostume, newCostumeSVG);
                const stringToEdit = filteredList[i];
                // prevPositions.push(stringToEdit);
                const splitString = stringToEdit.split(' ');
                const filteredString = splitString.filter(e => e === 0 || e);
                const theColor = filteredString.splice(0, 1);
                // timing = filteredString.pop();
                // timingArray.push(timing);
                // theTime = timingArray[0];
                color = theColor;
                // eslint-disable-next-line no-invalid-this
                const positions = this.convertBase(filteredString);
                const absolute = positions.map(pos => +pos + Cast.toNumber(1));
                // eslint-disable-next-line no-loop-func
                absolute.map(item => copyOfCostume[`Light${item}`] = `"#${color}"`);
                absolute.unshift(Cast.toString(color));
                prevPositions.push(absolute.toString());
                const svg = Object.values(copyOfCostume).join('');
                costumesArray.push(svg);
                // vm.updateSvg(util.target.currentCostume, svg, 28, 23);
                i++;
                length--;
                // copyOfCostume = {};
            }
            resolve(costumesArray);
        });
    }

    convertBase (hex) {
        const convert = (baseFrom, baseTo) => number => parseInt(number, baseFrom).toString(baseTo);
        const hex2bin = convert(16, 2);
        const result = hex2bin(hex);
        let newResult = '';
        if (result.length < 16){
            newResult = result.padStart(16, 0);
        } else {
            newResult = result;
        }
        return this.tracePosition(newResult);
    }

    tracePosition (binary) {
        const binaryString = binary;
        const splittedString = binaryString.split('');
        const filtered = splittedString.filter(Number);
        let length = filtered.length;
        const tempPositions = [];
        while (length > 0) {
            const indexOfPosition = splittedString.indexOf('1');
            const value = indexOfPosition;
            splittedString.splice(indexOfPosition, 1, '0');
            tempPositions.push(value);
            length--;
        }
        return tempPositions;
    }
}

module.exports = Parse;
