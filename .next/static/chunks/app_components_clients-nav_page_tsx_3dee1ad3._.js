(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/clients-nav/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// pages/clients/index.js
__turbopack_context__.s({
    "default": (()=>ClientsAllDetailsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const clientsData = [
    {
        id: 1,
        name: 'Client A',
        logo: '/logos/logo1.png',
        description: 'Client A is a leading tech solutions provider with global reach.',
        website: 'https://client-a.com'
    },
    {
        id: 2,
        name: 'Client B',
        logo: '/logos/logo2.png',
        description: 'Client B is a well-known e‑commerce brand trusted worldwide.',
        website: 'https://client-b.com'
    },
    {
        id: 3,
        name: 'Client C',
        logo: '/logos/logo3.png',
        description: 'Client C specializes in mobile app development and innovation.',
        website: 'https://client-c.com'
    },
    {
        id: 4,
        name: 'Client D',
        logo: '/logos/logo4.png',
        description: 'Client D provides consulting and digital transformation services.',
        website: 'https://client-d.com'
    },
    {
        id: 5,
        name: 'Client E',
        logo: '/logos/logo5.png',
        description: 'Client E is a market leader in cloud computing.',
        website: 'https://client-e.com'
    },
    {
        id: 6,
        name: 'Client F',
        logo: '/logos/logo6.png',
        description: 'Client F offers innovative AI solutions globally.',
        website: 'https://client-f.com'
    },
    {
        id: 7,
        name: 'Client G',
        logo: '/logos/logo7.png',
        description: 'Client G specializes in cybersecurity and risk management.',
        website: 'https://client-g.com'
    },
    {
        id: 8,
        name: 'Client H',
        logo: '/logos/logo8.png',
        description: 'Client H provides world-class consulting services.',
        website: 'https://client-h.com'
    },
    {
        id: 9,
        name: 'Client I',
        logo: '/logos/logo9.png',
        description: 'Client I develops mobile games with millions of users.',
        website: 'https://client-i.com'
    },
    {
        id: 10,
        name: 'Client J',
        logo: '/logos/logo10.png',
        description: 'Client J is an e-commerce platform with fast delivery.',
        website: 'https://client-j.com'
    }
];
function ClientsAllDetailsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-gray-50 py-10 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold text-center mb-12 text-white bg-orange-600 py-3 rounded-full",
                children: "Our Clients"
            }, void 0, false, {
                fileName: "[project]/app/components/clients-nav/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-12 max-w-5xl mx-auto",
                children: clientsData.map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "bg-white rounded-xl shadow-lg p-6 md:p-8",
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: index * 0.1
                        },
                        viewport: {
                            once: true
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-center md:space-x-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: client.logo,
                                        alt: client.name,
                                        width: 120,
                                        height: 120,
                                        className: "h-auto w-a object-contain mx-auto",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/clients-nav/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/clients-nav/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center md:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-2",
                                            children: client.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/clients-nav/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 mb-4",
                                            children: client.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/clients-nav/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/clients-nav/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/clients-nav/page.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, client.id, false, {
                        fileName: "[project]/app/components/clients-nav/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/clients-nav/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/clients-nav/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c = ClientsAllDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "ClientsAllDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_clients-nav_page_tsx_3dee1ad3._.js.map