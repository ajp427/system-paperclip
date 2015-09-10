import {transpile} from 'paperclip/lib/parsers/default/transpiler';

export function translate(load) {
    return 'module.exports = ' + transpile(load.source) + ';';
}
