(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/product/price/online/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PricePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PricePage() {
    _s();
    const [isMonthly, setIsMonthly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const plans = [
        {
            name: 'Silver',
            daily: 166.66,
            features: [
                'Inventory Management',
                'Add & manage items',
                'Track stock quantities',
                'Barcode generation',
                'Sales & Customer Management',
                'Basic billing',
                'Sales return management',
                'Customer profiles',
                'Comprehensive Reporting',
                'Monthly sales reports',
                'Item-wise stock reports',
                'Purchasing',
                'Manage purchase orders',
                'Automation & Templates',
                'Basic SMS templates',
                'Standard invoice design',
                // New ERP Offline features
                'Offline Data Access & Sync',
                'Local Database Storage',
                'Basic User Roles & Permissions'
            ],
            highlight: false
        },
        {
            name: 'Gold',
            daily: 216.66,
            features: [
                'Includes everything in SILVER, plus:',
                'Advanced Inventory Management',
                'Expiry date tracking',
                'Warehouse & store-based stock control',
                'Sales & Customer Management',
                'Graph-based sales performance',
                'Donut chart for top-selling products',
                'Financial Accounting',
                'Outstanding balance tracking',
                'Profit & Loss statement',
                'Profit Analysis',
                'Daily profit tracking',
                'Bill-wise profit analysis',
                'Reporting',
                'Re-check stock quantities',
                'Registry & daily sales reports',
                'Voucher & Ledger Management',
                'Payment/receive vouchers',
                'Ledger statements & cheque records',
                'Purchasing & Approvals',
                'Purchase return management',
                'Quotation & approval workflows',
                'Automation & Templates',
                'Custom invoice branding',
                'Advanced SMS templates',
                // New ERP Offline features
                'Offline Mode with Auto Sync on Connection',
                'Multi-User Support Offline',
                'Role-Based Access Control'
            ],
            highlight: true
        },
        {
            name: 'Premium',
            daily: 266.66,
            features: [
                'Includes everything in GOLD, plus:',
                'Full Profit Analysis',
                'Customer/supplier-wise profitability',
                'Store/location/category/company-wise profit reports',
                'Employee & Branch Management',
                'Employee roles & access',
                'Task assignments & tracking',
                'Multi-branch support with stock transfer',
                'Production & Discount System',
                'Complete production management',
                'Discount schemes & loyalty programs',
                'Upcoming Enhancements (Coming soon)',
                'AI-powered sales forecasting',
                'Automated inventory alerts',
                'Advanced customer engagement tools (Coming soon)',
                // New ERP Offline features
                'Offline Analytics Dashboard',
                'Custom Offline Workflow Automation',
                'Priority Offline Support & Updates'
            ],
            highlight: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative px-30 py-20 bg-gradient-to-b from-white to-orange-50 mt-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold text-gray-800 mb-2",
                        children: [
                            "Our ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-600",
                                children: "ERP Online Pricing Plans"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/price/online/page.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/price/online/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: "Choose an ERP Online plan that fits your business needs. Upgrade anytime!"
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/price/online/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/price/online/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex border-2 border-orange-600 rounded-full overflow-hidden shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMonthly(true),
                            className: `px-5 py-2 text-sm font-medium transition-all duration-300 ${isMonthly ? 'bg-orange-600 text-white' : 'text-orange-600 bg-white hover:bg-orange-50'}`,
                            children: "Monthly"
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/price/online/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMonthly(false),
                            className: `px-5 py-2 text-sm font-medium transition-all duration-300 ${!isMonthly ? 'bg-orange-600 text-white' : 'text-orange-600 bg-white hover:bg-orange-50'}`,
                            children: "Daily"
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/price/online/page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/product/price/online/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/product/price/online/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-8",
                children: plans.map((plan, idx)=>{
                    // Calculate the price
                    const priceValue = isMonthly ? (plan.daily * 30).toFixed(2) : plan.daily.toFixed(2);
                    const priceUnit = isMonthly ? '/month' : '/day';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.03
                        },
                        className: `relative rounded-2xl border shadow-lg transition-all overflow-hidden ${plan.highlight ? 'border-yellow-400 bg-yellow-50' : 'bg-white'}`,
                        children: [
                            plan.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md",
                                children: "Most Popular"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/price/online/page.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-center text-gray-800 mb-2",
                                        children: plan.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/price/online/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-3xl font-extrabold text-blue-700 mb-6",
                                        children: [
                                            `Rs. ${priceValue}`,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: priceUnit
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/product/price/online/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/product/price/online/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-sm text-gray-700 mb-6 space-y-3 flex-1 overflow-auto max-h-64",
                                        children: plan.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-500",
                                                        children: "✔"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/product/price/online/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/product/price/online/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/components/product/price/online/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/price/online/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/components/request",
                                        className: `w-full block text-center py-3 px-4 rounded-xl text-white font-medium transition-all duration-300 ${plan.highlight ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}`,
                                        children: [
                                            "Get ",
                                            plan.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/product/price/online/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/product/price/online/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/components/product/price/online/page.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/components/product/price/online/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/product/price/online/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(PricePage, "sAj6lXzRTu/jHg/E9AMJtm2n16w=");
_c = PricePage;
var _c;
__turbopack_context__.k.register(_c, "PricePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_product_price_online_page_tsx_7b7bfa66._.js.map