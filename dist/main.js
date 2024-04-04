var $gXNCa$axios = require("axios");
var $gXNCa$qs = require("qs");
var $gXNCa$ramda = require("ramda");
var $gXNCa$ramjam = require("ramjam");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
/**
 * wrap axios
 * 
 * @example 
 *   const config = { baseURL: 'http://localhost:3000' }
 *   const http = wrapAxios(config)
 * 
 *   async function request() {
 * 
 *   const [err, updatedUser] = await http.put('/users/42', { name: 'jo' })
 *   }
 * 
 */ 

/**
 * allows the use of async / await without try / catch blocks everywhere 
 * returns a tuple on await a promise to settle 
 * 
 * promise => ...args => [err, success]
 * 
 * @example 
 *   const put = tryPromise(axios.put)
 * 
 *   const [err, updatedUser] = await put('/users/42', { name: 'jo' })
 * 
 */ /**
 * prune the axios error 
 * ensure the same shape for exceptions 
 * default to status 500 for exceptions 
 * 
 *  {
 *    message: string
 *    url: string
 *    data: string
 *    status: number
 *    statusText: string
 *    response_data: string
 *  }
 */ 

const $66f9586ab06e4c5b$var$axiosErrorPaths = [
    [
        "message"
    ],
    [
        "config",
        "url"
    ],
    [
        "config",
        "data"
    ],
    [
        "response",
        "status"
    ],
    [
        "response",
        "statusText"
    ],
    [
        "response",
        "data"
    ]
];
const $66f9586ab06e4c5b$export$958d88d8703fc2c0 = {
    url: undefined,
    data: undefined,
    status: 500,
    statusText: "internal server error",
    response_data: undefined
};
const $66f9586ab06e4c5b$export$4112c8fc5d5c9ceb = (0, $gXNCa$ramda.mergeRight)($66f9586ab06e4c5b$export$958d88d8703fc2c0);
const $66f9586ab06e4c5b$var$makeError = (0, $gXNCa$ramda.pipe)((0, $gXNCa$ramjam.flatPick)($66f9586ab06e4c5b$var$axiosErrorPaths), $66f9586ab06e4c5b$export$4112c8fc5d5c9ceb);
var $66f9586ab06e4c5b$export$2e2bcd8739ae039 = $66f9586ab06e4c5b$var$makeError;


const $f00fb1977beac0c3$var$tryPromise = (promise)=>(...args)=>{
        try {
            const p = promise(...args);
            if (!p instanceof Promise) return [
                undefined,
                result
            ];
            return p.then((result1)=>[
                    undefined,
                    result1
                ]).catch((axiosError)=>{
                return [
                    (0, $66f9586ab06e4c5b$export$2e2bcd8739ae039)(axiosError),
                    undefined
                ];
            });
        } catch (e) {
            return [
                (0, $66f9586ab06e4c5b$export$2e2bcd8739ae039)(e),
                undefined
            ];
        }
    };
var $f00fb1977beac0c3$export$2e2bcd8739ae039 = $f00fb1977beac0c3$var$tryPromise;



const $4fa36e821943b400$var$onSuccess = (0, $gXNCa$ramda.prop)("data");
const $4fa36e821943b400$var$makeGetUrl = (route, query)=>{
    const queryString = (0, ($parcel$interopDefault($gXNCa$qs))).stringify(query);
    return `${route}?${queryString}`;
};
const $4fa36e821943b400$var$create = (config)=>{
    const http = (0, ($parcel$interopDefault($gXNCa$axios))).create({
        withCredentials: true,
        ...config
    });
    http.interceptors.response.use($4fa36e821943b400$var$onSuccess);
    const get = (route, query)=>{
        const url = $4fa36e821943b400$var$makeGetUrl(route, query);
        return (0, $f00fb1977beac0c3$export$2e2bcd8739ae039)(http.get)(url);
    };
    const put = (0, $f00fb1977beac0c3$export$2e2bcd8739ae039)(http.put);
    const post = (0, $f00fb1977beac0c3$export$2e2bcd8739ae039)(http.post);
    const destroy = (0, $f00fb1977beac0c3$export$2e2bcd8739ae039)(http.delete);
    return {
        get: get,
        put: put,
        post: post,
        delete: destroy
    };
};
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$create;


//# sourceMappingURL=main.js.map
