const _mdlset = new Set();
// const _mdlstack = new Set();

global.std = std;
global.stddef = stddef;
global.include = include;
global.force_include = force_include;
global.did_include = did_include

function std(base) {
    return (global.hasOwnProperty(base))
        ? global[base]
        : global[base] = (function(){}).prototype
    ;
}

function stddef(base, x) {
    return global[base] = x;
}

// function std_can_def(base) {
//     _mdlstack.has
// }

function include(mdl) {
    if (!did_include(mdl))
        force_include(mdl)
}

function force_include(mdl) {
    // _mdlstack.add(mdl);
    const base = mdl_get_base(mdl);
    if (base === mdl)
        _mdl_load_base(mdl);
    else {
        if (!did_include(base)) _mdl_load_base(base);
        _mdl_load(mdl);
    }
    // _mdlstack.delete(mdl);
}

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
    return require(`${__dirname}/../../std/${mdl}`)
}


