const _mdlset = new Set();

global.include = include;
global.force_include = force_include;
global.did_include = did_include

function include(mdl) {
    if (!did_include(mdl))
        force_include(mdl)
}
function force_include(mdl) {
    const base = mdl_get_base(mdl);
    if (!base)
        _mdl_load_base(mdl)
    else {
        if (!did_include(mdl))
            _mdl_load_base(mdl)
        _mdl_load(mdl)
    }
}
function did_include(mdl) {
    return _mdlset.has(mdl)
}

function _mdl_load_base(mdl) {
    global[mdl] = _mdl_load(mdl)
}
function _mdl_load(mdl) {
    _mdlset.add(mdl)
    return require(`${__dirname}/${mdl}`)
}

function mdl_get_base(mdl) {
    const i = mdl.indexOf('/');
    return (i >>> 31) ? "" : mdl.substr(0,i);
}
