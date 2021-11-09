const fs = require('fs');
const chalk = require('chalk');

const argv = require('minimist')(process.argv.slice(2));
const findPalindromes = require('./find-palindromes');

function getFileName(parsedArgs) {
    if (!parsedArgs._.length) {
        console.log('');
        console.log(chalk.red('=============================================================================='));
        console.log('💀 ERROR: Exactly one argument needed: The path to the file we want to read.');
        console.log('Example: node app.js "input01.txt"');
        console.log(chalk.red('=============================================================================='));
        console.log('');
        console.log('');
        process.exit(-1);
    }

    return parsedArgs._[0];
}

function readLines(fileName) {
    return fs.readFileSync(fileName, 'UTF-8').split(/\r?\n/);
}

const fileName = getFileName(argv);
const lines = readLines(fileName);

const numberOfPalindromes = findPalindromes(lines);

console.log(`${chalk.bold.greenBright(numberOfPalindromes)} palindromes found in ${fileName}`);
