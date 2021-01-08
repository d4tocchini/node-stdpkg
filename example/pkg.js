

require('stdpkg/npm');

pkg(module, function ({init, deps}) {

    init({
        "name": "pag.app",
        "version": "0.0.2",
        "description": "",
        "main": "src/main.js",
        "scripts": {
            "_.build": `
                export npm_config_target=7.0.0
                # The architecture of Electron, see https://electronjs.org/docs/tutorial/support#supported-platforms
                # for supported architectures.
                export npm_config_arch=x64
                export npm_config_target_arch=x64
                # Download headers for Electron.
                export npm_config_disturl=https://electronjs.org/headers
                # Tell node-pre-gyp that we are building for Electron.
                export npm_config_runtime=electron
                # Tell node-pre-gyp to build module from source code.
                export npm_config_build_from_source=true
                # Install all dependencies, and store cache to ~/.electron-gyp.
                cd node_modules/robotjs
                HOME=~/.electron-gyp npm i
            `,
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
    })

    // TODO: REMOVE THIS NONSENSE
    deps({
        "mkdirp":"0.5.1", // !!!!!!!!!!!!  // 1.0.3  returns promise instead of callback
        "tmp":"0.1.0",
        "typedarray":"0.0.6",
        "string_decoder":"1.3.0",
        "static-eval":"2.0.5",
        "string-to-arraybuffer":"1.0.2",
        "randombytes":"2.1.0",
        "safe-buffer":"5.2.0",
        "safer-buffer":"2.1.2",
        "buffer-alloc":"1.2.0",
        "arraybuffer-slice":"0.1.2",
        "uint64be":"2.0.2",
        "signum":"1.0.0",
        "shallow-copy":"0.0.1",
        "set-immediate-shim":"2.0.0",
        "weak-map":"1.0.5",
        "weakmap-shim":"1.1.1",
        "performance-now":"2.1.0",
        "promise-polyfill":"8.1.3",
        "component-emitter": "1.3.0",
        "co": "4.6.0",
        "async": "3.2.0",
        "async-task-mgr": ">=1.1.0",
        "es6-promise": "4.2.8",
        "is-promise":"2.1.0",
        "thunkify": "2.1.2",
        "immediate":"3.2.3",

        "clipboard-js": "0.3.6",

        "classnames": "2.2.6",

        "object-keys":"1.1.1",
        "object-assign":"4.1.1",
        "inherits":"2.0.4",

        "once":"1.4.0",
        "raf":"3.4.1",
    
        // ??
        "kind-of":"6.0.3",
        "wordwrap":"1.0.0",
    
        // TODO: all the bullshit "string.prototype...." etc..
    })



    // color
    deps({
        "color-convert":"2.0.1",
        "color-id":"1.1.0",
        "color-name":"1.1.4",
        "color-normalize":"1.5.0",
        "color-parse":"1.3.8",
        "color-rgba":"2.1.1",
        "color-space":"1.16.0",
        "colormap":"2.3.1",
        "color-alpha":"1.0.4",
        "image-palette":"2.1.0",
        "quantize":"1.0.2",
        "csscolorparser":"1.0.3",
        "tinycolor2":"1.4.1",
        "is-buffer": "2.0.4",
        "number-to-bn":"1.7.0",
    })
    
    // ui
    deps({
        "robotjs": "file:./src/pkg/green-robot.js",
        "react": "file:./src/pkg/react.prebuilt",
        "react-dom": "file:./src/pkg/react-dom.prebuilt",

        "lit-html":"1.1.2",

        "plotly.js": "^1.51.1",
        "textarea-caret": "^3.1.0",
        "material-design-icons": "~3.0.1",
        "material-design-lite": "~1.3.0",
    
        "regl":"1.3.13",
    
        "normalize-svg-path":"1.0.1",

        "@angular/animations": "8.2.14",
        "@angular/common": "8.2.14",
        "@angular/compiler": "8.2.14",
        "@angular/core": "8.2.14",
        "@angular/forms": "8.2.14",
        "@angular/http": "~7.2.15",
        "@angular/platform-browser": "8.2.14",
        "@angular/platform-browser-dynamic": "8.2.14",
        "@angular/router": "8.2.14",
        "angular-plotly.js": "^1.4.2",
    })
    
    // bits & bytes
    deps({
        "bn.js": "5.1.1", // replace...
        "typedarray-pool":"1.2.0",
        "bit-twiddle":"1.0.2",
        "bitfield":"3.0.0",
        "atob-lite":"2.0.0",
    
        "two-product":"1.0.2", // ?
    })

    // json / js
    deps({
        "json-uri-crush": "file:./src/pkg/json-uri-crush",
        "json-stringify-safe":"5.0.1",
        "isarray":"2.0.5",
        "define-properties":"1.1.3",
        "binary-search-bounds":"2.0.4",
        "union-find":"1.0.2",
        "uniq":"1.0.1",
        "object-inspect":"1.7.0",
        "pick-by-alias":"1.2.0",
        "xtend":"4.0.2"
    })

    // js lang
    deps({
        "nan": "2.14.0",
        "bindings": "1.5.0",
        "node-gyp-build":"4.2.1",
        "prebuild-install": "5.3.3",

        "fast-json-stringify":"1.16.4", //https://github.com/fastify/fast-json-stringify#readme
            "escape-string-regexp":"2.0.0",

        "prettier": "1.19.1",
        "acorn":"7.1.1",
        "acorn-globals":"6.0.0",
        "acorn-dynamic-import":"4.0.0",
        "acorn-jsx":"5.2.0",
        "esprima":"4.0.1",
        "estraverse":"4.3.0",
        "esutils":"2.0.3",
        "escodegen":"1.14.1",
        "source-map":"0.7.3",
        "sourcemap-codec":"1.4.6",


        "lodash":"4.17.15",
        "underscore":"1.9.2",

        // ugh
        "tslib": "~1.11.1",
        "zone.js": "~0.10.2",
        "with":"6.0.0",
    })


    // stream
    deps({
        "rxjs": "~6.5.3",
        "rxjs-compat":"6.5.4",

        "multistream":"4.0.0",
        "pump":"3.0.0",
        "stream-to-blob":"2.0.0",
        "stream-to-blob-url":"3.0.0",
        "stream-throttle": "^0.1.3",
        "through":"2.3.8",
        "through2":"3.0.1",
        "readable-stream":"3.6.0",
        "split":"1.0.1",
        "concat-stream":"2.0.0",
        "end-of-stream":"1.4.4",
    
        // media stream
        "mediasource":"2.3.0",
        "videostream":"3.2.1",
    })

    // net
    deps({
        "ws":"7.2.3",
        "socket.io-client": "^2.2.0",
        "socket.io-parser": "3.4.0",

        "express": "4.17.1",
            "compression": "1.7.4", // commpression middleware
            "body-parser": "1.19.0",
        "brotli": "1.3.2",

        "xhr2":"0.2.0",
        "xmlhttprequest-ssl":"1.6.0",
        "addr-to-ip-port":"1.5.1",
        "ip":"1.1.5",
        "ip-set":"1.0.2",
        "load-ip-set":"2.1.0",
        "ipaddr.js":"1.9.1",
        "tunnel-agent":"0.6.0",
        "tough-cookie":"3.0.1",
        "range-parser":"1.2.1",

        "node-easy-cert": "^1.3.1",
    
        "simple-peer":"9.6.2",
        "get-browser-rtc":"1.0.2",

        "postis": "2.2.0", // lightweight postmessage wrapper
    
        "request": "2.88.2",
        "request-promise-native": "1.0.8",
    })

    // p2p
    deps({
        "gun": "file:./src/pkg/gun.dl"
        // "gun-elastic": "0.1.3", // https://github.com/lmangani/gun-elastic
        // "@chaingun/lmdb-adapter": "0.23.7", // https://github.com/chain-gun/chaingun/blob/master/packages/lmdb-adapter/package.json

            // https://github.com/Stefdv/gun-synclist
                // https://github.com/Stefdv/gun-tag
            // https://github.com/chain-gun/chaingun/tree/master/packages
    })
    
    // torrent
    deps({
        "webtorrent": "^0.107.17",
        "chrome-net":"3.3.3",
        "bittorrent-peerid":"1.3.2",
        "bittorrent-protocol":"3.1.1",
        "bittorrent-dht":"9.0.3",
        "bittorrent-tracker":"9.14.4",
        "bencode":"2.0.1",
        "torrent-discovery":"9.2.1",
        "torrent-piece":"2.0.0",
        "parse-torrent":"7.0.1",
        "create-torrent":"4.4.1",
    })

    // storage
    deps({
        "dexie": "^2.0.4",
        "fs-chunk-store":"2.0.1",
        "immediate-chunk-store":"2.1.0",
        "chunk-store-stream":"4.1.0",
        "memory-chunk-store":"1.3.0",
        "localforage":"1.7.3",
        "nedb":"1.8.0"
    })
    
    // eth
    deps({
        "ethjs": "~0.4.0",
        "ethjs-account": "^0.1.4",
        "ethjs-provider-signer": "^0.1.4",
        "ethjs-signer": "0.1.1",
        "ethjs-abi":"0.2.1",
    })
    
    // path
    deps({
        "resolve":"1.15.1",
        "glob":"7.1.6",
    
        // codecs
        "punycode":"2.1.1",
        "qrcodejs2": "0.0.2",
        "qrcode-npm": "0.0.3",
        "iconv-lite": "0.5.1",// Convert character encodings in pure javascript.

        "mime-types": "2.1.26",
        "pug": "^2.0.4",
        "juicer": "^0.6.15", // template engine

    })
    
    // crypto
    deps({
        "simple-sha1":"3.0.1"
    })
    
    // tree-lik algos
    deps({
        "functional-red-black-tree":"1.0.1",
        "kdbush":"3.0.0",
        "point-cluster":"3.1.8",
        "marching-simplex-table":"1.0.0",
        "simplicial-complex":"1.0.0",
    })
    
    // time
    deps({
        "ms":"2.1.2",
        "moment":"2.24.0",
    })

    // electron
    deps({
        "electron-conf": "file:./src/pkg/electron-conf",
        "electron-vibrancy": "file:./src/pkg/electron-vibrancy",
    })

    // cli
    deps({
        "node-pty": "file:./src/pkg/node-pty",
        "xterm":"4.4.0",

        // BREAKS
        // "minimist":"1.2.0",
        // "yargs":"13.1.0",
        // "commander":"3.0.2",
        "colorful": "2.1.0",
        "window-size":"1.1.1",
        // "inquirer": "^5.2.0",
    })
});


/*

https://github.com/WorldBrain/Memex
Browser Extension to full-text search your browsing history & bookmarks. https://worldbrain.io


*/