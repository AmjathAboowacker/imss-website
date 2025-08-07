(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/product/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
        image: '/products/inventory02.png',
        link: '/downloads/cloudx-pro.pdf'
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
        image: '/products/sales.png',
        link: '/downloads/securepay.pdf'
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
        image: '/products/financial.png',
        link: '/downloads/imss-erp.pdf'
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
        image: '/products/profit02.png',
        link: '/downloads/profit-analysis.pdf'
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
        image: '/products/reporting.png',
        link: '/downloads/hrm-pro.pdf'
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
        image: '/products/purchasing02.png',
        link: '/downloads/purchasing-approval.pdf'
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
        image: '/products/vouchar.png',
        link: '/downloads/voucher-management.pdf'
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
        image: '/products/leader.png',
        link: '/downloads/leader-management.pdf'
    }
];
function ProductPage() {
    _s();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const selected = products.find((p)=>p.id === selectedId);
    const detailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSelect = (id)=>{
        setSelectedId(id);
        detailRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-6xl mx-auto px-4 py-16 mt-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl font-bold text-center mb-10",
                children: "Our Software Products"
            }, void 0, false, {
                fileName: "[project]/app/components/product/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: detailRef,
                    className: "bg-blue-50 p-6 rounded-xl shadow mb-10 flex flex-col md:flex-row gap-6 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: selected.image,
                            alt: selected.name,
                            width: 300,
                            height: 300,
                            className: "rounded-xl object-cover w-auto h-auto px-20"
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/page.tsx",
                            lineNumber: 143,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-blue-700 mb-2",
                                    children: selected.name
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 mb-4",
                                    children: selected.full
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 11
                                }, this),
                                selected.features && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-600 mb-4 space-y-1",
                                    children: selected.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: feature
                                        }, index, false, {
                                            fileName: "[project]/app/components/product/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: selected.link,
                                    download: true,
                                    className: "inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
                                    children: "Download Brochure"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/product/page.tsx",
                            lineNumber: 150,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/product/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/product/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSelect(product.id),
                        className: `border rounded-xl p-3 text-center transition hover:shadow ${selectedId === product.id ? 'border-blue-600 bg-white shadow-md' : 'bg-white'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: product.image,
                                alt: product.name,
                                width: 80,
                                height: 80,
                                className: "mx-auto mb-2 object-contain w-20 h-20"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/page.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-semibold text-gray-800",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/page.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/app/components/product/page.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/product/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/product/page.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(ProductPage, "9OfCccGgNPSBBFc1nbedfhupKqk=");
_c = ProductPage;
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_product_page_tsx_e6633b6e._.js.map