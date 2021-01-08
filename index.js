

const {
    //readFile,
    // readFileSync,
    existsSync,
    // mkdirSync,
    // promises: {
    //     open,
    //     unlink,
    // }
} = require('fs');

global.std = std;
global.stddef = stddef;
global.include = include;
global.force_include = force_include;
global.did_include = did_include

module.exports = stdpkg_module_init;

const _mdlset = new Set();
                        // TODO: ? const _mdlstack = new Set();
const _dirs = [
    // __dirname+'/std'
];

function stdpkg_module_init(dir) {
    const std_dir = dir+'/std';
    _dirs.push(std_dir);

    const std_file = std_dir+"/index.js";
    if (existsSync(std_file))
        require(std_file);
}

function std(base) {
    return (global.hasOwnProperty(base)) ? global[base]
        : global[base] = (function(){}).prototype ;
}

function stddef(base, x) {
    return global[base] = x;
}

function include(mdl) {
    if (!did_include(mdl))
        force_include(mdl)
}

function force_include(mdl) {           // _mdlstack.add(mdl);
    const base = mdl_get_base(mdl);
    if (base === mdl)
        _mdl_load_base(mdl);
    else {
        if (!did_include(base)) _mdl_load_base(base);
        _mdl_load(mdl);
    }
}                                        // _mdlstack.delete(mdl);

function did_include(mdl) {
    return _mdlset.has(mdl)
}

function mdl_get_base(mdl) {
    const i = mdl.indexOf('/');
    return (i >>> 31) ? mdl : mdl.substr(0,i);
}

function _mdl_load_base(base) {
    _mdl_load(base)
    // const result = _mdl_load(base);
    // if (result)
    //     global[base] = result
    // else if (global.hasOwnProperty(base))
    //     global[base] = undefined
}

function _mdl_load(mdl) {
    _mdlset.add(mdl)
    let l = _dirs.length;
    while (l--) {
        _mdl_require(_dirs[l], mdl);
    }
}

function _mdl_require(dir, mdl) {
    var path = `${dir}/${mdl}/index.js`;
    if (existsSync(path)) {
        require(path);
    }
    else if (existsSync(path = `${dir}/${mdl}.js`)) {
        require(path);
    }
}

