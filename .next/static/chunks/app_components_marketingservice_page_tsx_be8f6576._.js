(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/marketingservice/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarketingService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const images = [
    '/slider/s1.jpg',
    '/slider/s2.jpg',
    '/slider/s3.jpg'
];
const marketingtabs = [
    {
        label: 'Digital Marketing',
        title: 'Digital Marketing Overview',
        description: 'At IMSS, we craft tailored digital marketing strategies that help your brand stand out, attract the right audience, and generate measurable results. From SEO to PPC, we do it all.',
        points: [
            'Search Engine Optimization (SEO)',
            'Social Media Marketing (SMM)',
            'Google Ads (PPC)',
            'Email & SMS Campaigns',
            'Content Marketing'
        ],
        image: '/service.img/digital-marketing1.png'
    },
    {
        label: 'Social Media',
        title: 'Social Media Management',
        description: 'We manage your brand’s presence across Facebook, Instagram, LinkedIn, and TikTok. Our strategy includes content calendars, designs, engagement, and ads that connect and convert.',
        image: '/service.img/social-media1.png'
    },
    {
        label: 'Brand Strategy',
        title: 'Brand Strategy',
        description: 'We help you build a brand that connects. From discovery sessions to visual identity, we define what makes you unique and guide your messaging across all channels.',
        image: '/service.img/brand1.png'
    },
    {
        label: 'SMS & Email',
        title: 'SMS & Email Campaigns',
        description: 'We create professional, personalized SMS and email campaigns that drive engagement, promote offers, and bring customers back. Includes design, automation, and A/B testing.',
        image: '/service.img/social-management1.png'
    },
    {
        label: 'Advertising',
        title: 'Advertising Services',
        description: 'We offer both digital and print advertising services — from Google, Facebook, and YouTube ads to banners and flyers. Perfect for awareness, reach, and conversions.',
        image: '/service.img/adverticing1.png'
    },
    {
        label: 'Door-to-Door',
        title: 'Door-to-Door Advertising',
        description: 'Our door-to-door team helps distribute your flyers, brochures, and offers directly to customers in your local area — with tracking, reporting, and targeting options.',
        image: '/service.img/door-to-door1.png'
    },
    {
        label: 'Email Campaigns',
        title: 'Email Campaign Strategy',
        description: 'Send well-crafted email newsletters that engage users, drive clicks, and nurture customer relationships with measurable performance.',
        image: '/service.img/email.png'
    },
    {
        label: 'Local SEO',
        title: 'Local SEO Optimization',
        description: 'Get found by nearby customers through Google Business Profile optimization, map packs, and geo-targeted content.',
        image: '/service.img/seo.png'
    }
];
function MarketingService() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [marketingSelected, setMarketingSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(marketingtabs[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketingService.useEffect": ()=>{
            const interval = setInterval({
                "MarketingService.useEffect.interval": ()=>{
                    setIndex({
                        "MarketingService.useEffect.interval": (prev)=>(prev + 1) % images.length
                    }["MarketingService.useEffect.interval"]);
                }
            }["MarketingService.useEffect.interval"], 5000);
            return ({
                "MarketingService.useEffect": ()=>clearInterval(interval)
            })["MarketingService.useEffect"];
        }
    }["MarketingService.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[500px] overflow-hidden mt-[80px]",
                children: [
                    images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 w-full h-full bg-center bg-cover",
                            style: {
                                backgroundImage: `url(${img})`
                            },
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: index === i ? 1 : 0
                            },
                            transition: {
                                duration: 1
                            }
                        }, i, false, {
                            fileName: "[project]/app/components/marketingservice/page.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 z-10"
                    }, void 0, false, {
                        fileName: "[project]/app/components/marketingservice/page.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                className: "text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-4",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.5
                                },
                                children: "Innovative Marketing Solutions That Drive Growth"
                            }, void 0, false, {
                                fileName: "[project]/app/components/marketingservice/page.tsx",
                                lineNumber: 104,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-white text-lg md:text-2xl max-w-4xl drop-shadow-sm mb-6",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.8
                                },
                                children: [
                                    "At ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "IMSS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/marketingservice/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 24
                                    }, this),
                                    ", we combine technology and strategy to deliver powerful digital marketing, branding, and IT solutions."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/marketingservice/page.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: "/components/request",
                                className: "bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-600 hover:text-white transition shadow-lg",
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1
                                },
                                children: "Get Your Free Marketing Consultation"
                            }, void 0, false, {
                                fileName: "[project]/app/components/marketingservice/page.tsx",
                                lineNumber: 120,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/marketingservice/page.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/marketingservice/page.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "marketing",
                className: "px-4 py-20 text-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-tr from-orange-700 via-orange-500 to-orange-800 p-2 text-white rounded-full border-2 border-orange-600",
                        children: "Digital Marketing Services"
                    }, void 0, false, {
                        fileName: "[project]/app/components/marketingservice/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12",
                        children: marketingtabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setMarketingSelected(tab),
                                className: `px-4 py-2 rounded-lg font-medium transition ${marketingSelected.label === tab.label ? 'bg-white text-black border-2 border-black shadow-lg' : 'bg-orange-600 text-white hover:bg-orange-800'}`,
                                whileHover: {
                                    scale: 1.05
                                },
                                children: tab.label
                            }, tab.label, false, {
                                fileName: "[project]/app/components/marketingservice/page.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/marketingservice/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-800 px-10 py-5 rounded-4xl max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: marketingSelected.image,
                                alt: marketingSelected.title,
                                width: 400,
                                height: 300,
                                className: "rounded-xl w-auto object-cover "
                            }, void 0, false, {
                                fileName: "[project]/app/components/marketingservice/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-4",
                                        children: marketingSelected.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/marketingservice/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4",
                                        children: marketingSelected.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/marketingservice/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    marketingSelected.points && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-5 space-y-2",
                                        children: marketingSelected.points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: point
                                            }, i, false, {
                                                fileName: "[project]/app/components/marketingservice/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/marketingservice/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/components/contact-form",
                                        className: "inline-block mt-6 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow  hover:text-white transition",
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/marketingservice/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/marketingservice/page.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/marketingservice/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/marketingservice/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/marketingservice/page.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(MarketingService, "Kb+DnlkC/xTCiIru6Dz2x6XlZTE=");
_c = MarketingService;
var _c;
__turbopack_context__.k.register(_c, "MarketingService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_marketingservice_page_tsx_be8f6576._.js.map