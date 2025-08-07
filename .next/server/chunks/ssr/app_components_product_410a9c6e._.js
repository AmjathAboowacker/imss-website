module.exports = {

"[project]/app/components/product/price/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PricePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function PricePage() {
    const [isMonthly, setIsMonthly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold text-gray-800 mb-2",
                        children: [
                            "Our ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-600",
                                children: "ERP Offline Pricing Plans"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/price/page.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/price/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: "Choose an ERP Offline plan that fits your business needs. Upgrade anytime!"
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/price/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/price/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex border-2 border-orange-600 rounded-full overflow-hidden shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMonthly(true),
                            className: `px-5 py-2 text-sm font-medium transition-all duration-300 ${isMonthly ? 'bg-orange-600 text-white' : 'text-orange-600 bg-white hover:bg-orange-50'}`,
                            children: "Monthly"
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/price/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMonthly(false),
                            className: `px-5 py-2 text-sm font-medium transition-all duration-300 ${!isMonthly ? 'bg-orange-600 text-white' : 'text-orange-600 bg-white hover:bg-orange-50'}`,
                            children: "Daily"
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/price/page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/product/price/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/product/price/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-8",
                children: plans.map((plan, idx)=>{
                    // Calculate the price
                    const priceValue = isMonthly ? (plan.daily * 30).toFixed(2) : plan.daily.toFixed(2);
                    const priceUnit = isMonthly ? '/month' : '/day';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.03
                        },
                        className: `relative rounded-2xl border shadow-lg transition-all overflow-hidden ${plan.highlight ? 'border-yellow-400 bg-yellow-50' : 'bg-white'}`,
                        children: [
                            plan.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md",
                                children: "Most Popular"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/price/page.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-center text-gray-800 mb-2",
                                        children: plan.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/price/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-3xl font-extrabold text-blue-700 mb-6",
                                        children: [
                                            `Rs. ${priceValue}`,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: priceUnit
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/product/price/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/product/price/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-sm text-gray-700 mb-6 space-y-3 flex-1 overflow-auto max-h-64",
                                        children: plan.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-500",
                                                        children: "✔"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/product/price/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/product/price/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/components/product/price/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/price/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/components/request",
                                        className: `w-full block text-center py-3 px-4 rounded-xl text-white font-medium transition-all duration-300 ${plan.highlight ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}`,
                                        children: [
                                            "Get ",
                                            plan.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/product/price/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/product/price/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/components/product/price/page.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/components/product/price/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/product/price/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/product/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$product$2f$price$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/product/price/page.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const products = [
    {
        id: 1,
        name: 'Inventory Management',
        short: 'Inventory Management System',
        full: 'CloudX Pro offers scalable cloud storage with zero downtime, automated backups, and advanced encryption.',
        features: [
            'Real-time stock level tracking',
            'Barcode/RFID scanning integration',
            'Low stock alerts and restocking automation',
            'Multi-warehouse support'
        ],
        image: '/products/inventory02.png'
    },
    {
        id: 2,
        name: 'Sales & Customer',
        short: 'Sales & Customer Management System',
        full: 'SecurePay offers PCI-compliant APIs for web/mobile apps, supporting multi-currency and real-time fraud detection.',
        features: [
            'Integrated CRM with contact management',
            'Sales pipeline and opportunity tracking',
            'Automated invoice and billing',
            'Real-time transaction monitoring'
        ],
        image: '/products/sales.png'
    },
    {
        id: 3,
        name: 'Financial Accounting',
        short: 'Financial Accounting System',
        full: 'IMSS ERP integrates HR, payroll, inventory, and accounting modules in a seamless, user-friendly dashboard.',
        features: [
            'Double-entry accounting system',
            'Budgeting and forecasting tools',
            'Tax calculation and compliance',
            'Bank reconciliation and audit logs'
        ],
        image: '/products/financial.png'
    },
    {
        id: 4,
        name: 'Profit Analysis',
        short: 'Profit analysis tool',
        full: 'Profit Analysis provides insights into revenue streams, cost management, and profitability metrics for informed decision-making.',
        features: [
            'Revenue stream segmentation',
            'Cost trend analysis',
            'Profit margin tracking',
            'Visual dashboards and reports'
        ],
        image: '/products/profit02.png'
    },
    {
        id: 5,
        name: 'Comprehensive Reporting',
        short: 'Comprehensive Reporting System',
        full: 'Comprehensive Reporting provides advanced analytics and reporting tools for HR, finance, and operations.',
        features: [
            'Custom report builder',
            'Data visualization tools',
            'Cross-department insights',
            'Scheduled email reports'
        ],
        image: '/products/reporting.png'
    },
    {
        id: 6,
        name: 'Purchasing Approval',
        short: 'Purchasing Approval System',
        full: 'Purchasing Approval streamlines the procurement process with automated workflows, approval routing, and budget tracking.',
        features: [
            'Multi-level approval workflows',
            'Budget vs spend monitoring',
            'Purchase request automation',
            'Audit trail for compliance'
        ],
        image: '/products/purchasing02.png'
    },
    {
        id: 7,
        name: 'Voucher Management',
        short: 'Voucher Management System',
        full: 'Voucher Management System streamlines the process of creating, distributing, and redeeming vouchers for educational institutions.',
        features: [
            'Bulk voucher generation',
            'Student-wise tracking',
            'Usage and redemption reports',
            'Custom expiration rules'
        ],
        image: '/products/vouchar.png'
    },
    {
        id: 8,
        name: 'Leader Management',
        short: 'Leader Management System',
        full: 'Leader Management System provides tools for tracking and managing team performance, goals, and feedback.',
        features: [
            'Performance goal tracking',
            'Leaderboard and KPIs',
            'Team feedback and review',
            'Quarterly performance analysis'
        ],
        image: '/products/leader.png'
    }
];
function ProductPage() {
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const selected = products.find((p)=>p.id === selectedId);
    const detailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSelect = (id)=>{
        setSelectedId(id);
        detailRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-6xl mx-auto px-4 py-16 mt-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl font-bold text-center mb-10",
                children: "Our Software Products"
            }, void 0, false, {
                fileName: "[project]/app/components/product/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-orange-200 p-6 rounded-xl shadow mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: detailRef,
                        className: "flex flex-col md:flex-row gap-6 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: selected.image,
                                alt: selected.name,
                                width: 300,
                                height: 300,
                                className: "rounded-xl object-cover w-auto h-auto px-20"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-black mb-2",
                                        children: selected.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-black mb-4",
                                        children: selected.full
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    selected.features && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside text-black mb-4 space-y-1",
                                        children: selected.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: feature
                                            }, index, false, {
                                                fileName: "[project]/app/components/product/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/components/request",
                                        className: "inline-block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition",
                                        children: "Request Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/product/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$product$2f$price$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/components/product/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSelect(product.id),
                        className: `border rounded-xl p-3 text-center transition hover:shadow ${selectedId === product.id ? 'border-blue-600 bg-white shadow-md' : 'bg-white'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: product.image,
                                alt: product.name,
                                width: 100,
                                height: 100,
                                className: "mx-auto mb-2 object-contain w-auto h-auto"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/page.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-semibold text-gray-800",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/app/components/product/page.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/product/page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/product/page.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_components_product_410a9c6e._.js.map