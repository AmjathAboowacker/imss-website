module.exports = {

"[project]/app/components/itservicess/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeroSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const images = [
    '/slider/s1.jpg',
    '/slider/s2.jpg',
    '/slider/s3.jpg'
];
const itTabs = [
    {
        label: 'Website Design & Development',
        title: 'Custom Web Design & Development',
        description: 'We create fast, responsive, SEO-friendly websites tailored to your business goals.',
        features: [
            'Modern UI/UX design',
            'E-commerce and CMS integration',
            'Performance optimization',
            'SEO and analytics setup',
            'Built with React, Next.js, Tailwind'
        ],
        image: '/itservices/website.png'
    },
    {
        label: 'Mobile App',
        title: 'Cross-Platform Mobile App Development',
        description: 'Build Android & iOS apps using React Native or Flutter with smooth performance and elegant UI.',
        features: [
            'Cross-platform support',
            'Push notifications',
            'Payment gateway integration',
            'Offline mode and local storage',
            'Real-time updates with API'
        ],
        image: '/itservices/mobile.png'
    },
    {
        label: 'ERP & POS System',
        type: 'erp_pos',
        title: 'Integrated ERP & POS System',
        description: 'Manage all business operations and sales in one combined solution.',
        features: [
            'Inventory & sales tracking',
            'Financial & accounting tools',
            'Role-based access',
            'Barcode, billing & invoicing',
            'Cloud reports & multi-branch support'
        ],
        image: '/itservices/erp-pos.png',
        showCombinedPackages: true
    },
    {
        label: 'LMS System',
        title: 'Learning Management System (LMS)',
        description: 'Provide online learning, assignments, tracking, and user roles with a powerful LMS platform.',
        features: [
            'Student, teacher, and admin roles',
            'Assignments and quizzes',
            'Video course hosting',
            'Certificates and progress tracking',
            'Mobile-friendly & SCORM compatible'
        ],
        image: '/itservices/lms02.png'
    },
    {
        label: 'Car Service Mechanic Management',
        title: 'Auto Service Management System',
        description: 'Track service history, parts, payments, and customer profiles in your auto workshop with ease.',
        features: [
            'Service history management',
            'Parts inventory tracking',
            'Technician scheduling',
            'SMS/email service reminders',
            'Multi-location garage support'
        ],
        image: '/itservices/car.png'
    },
    {
        label: 'Renter Management',
        title: 'Tenant & Rental Management System',
        description: 'Automate rent collection, lease agreements, maintenance tickets, and reminders in one place.',
        features: [
            'Digital lease management',
            'Payment history and receipts',
            'Maintenance ticket system',
            'Rent due reminders',
            'Monthly income reports'
        ],
        image: '/itservices/renter.png'
    },
    {
        label: 'Hotel, Restaurant & Bar Management',
        title: 'All-in-One Hospitality Management',
        description: 'Simplify booking, dining, room service, kitchen orders, and billing with our hospitality system.',
        features: [
            'Order Management',
            'Food Menue Management',
            'Table Management',
            'Rooms Management',
            'Employee Management',
            'Inventory Management',
            'Financial Accounting',
            'Customer Management',
            'Bar Inventory Management',
            'Branch Management',
            'User Management',
            'Reprts & Analytics'
        ],
        image: '/itservices/hotel.png'
    },
    {
        label: 'ERP & Accounting',
        title: 'ERP and Accounting Solutions',
        description: 'Deploy secure cloud servers, backups, IT monitoring, and DevOps support with enterprise-grade reliability.',
        features: [
            'Ledger and tax management',
            'Invoice generation',
            'Bank reconciliation',
            'User role permissions',
            'Cloud hosting & backups'
        ],
        image: '/itservices/erp.png'
    }
];
function HeroSlider() {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [itSelected, setItSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(itTabs[0]);
    const [erpMode, setErpMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('online');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev + 1) % images.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[300px] md:h-[500px] overflow-hidden mt-[80px]",
                children: [
                    images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            fileName: "[project]/app/components/itservicess/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 z-10"
                    }, void 0, false, {
                        fileName: "[project]/app/components/itservicess/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                className: "text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-4",
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
                                children: "Innovative IT Solutions That Drive Growth"
                            }, void 0, false, {
                                fileName: "[project]/app/components/itservicess/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "IMSS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/itservicess/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 16
                                    }, this),
                                    ", we combine technology and strategy to deliver powerful digital marketing, branding, and IT solutions."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/itservicess/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
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
                                fileName: "[project]/app/components/itservicess/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/itservicess/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/itservicess/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "it",
                className: "px-4 py-20 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-tr from-orange-700 via-orange-500 to-orange-800 p-2 text-white rounded-full border-2 border-orange-600",
                        children: "IT Services"
                    }, void 0, false, {
                        fileName: "[project]/app/components/itservicess/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12",
                        children: itTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setItSelected(tab),
                                className: `px-4 py-2 rounded-lg font-medium transition ${itSelected.label === tab.label ? 'bg-white text-black border-2 border-black shadow-lg' : 'bg-orange-600 text-white hover:bg-orange-700'}`,
                                whileHover: {
                                    scale: 1.05
                                },
                                children: tab.label
                            }, tab.label, false, {
                                fileName: "[project]/app/components/itservicess/page.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/itservicess/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-800 px-10 py-5 rounded-4xl max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: itSelected.image,
                                alt: itSelected.title,
                                width: 300,
                                height: 300,
                                className: "rounded-xl w-auto h-auto object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/components/itservicess/page.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-4",
                                        children: itSelected.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/itservicess/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4",
                                        children: itSelected.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/itservicess/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside space-y-1 text-white/90",
                                        children: itSelected.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: feature
                                            }, idx, false, {
                                                fileName: "[project]/app/components/itservicess/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/itservicess/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/components/request",
                                        className: "inline-block mt-6 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow transition",
                                        children: "Download Now"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/itservicess/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    itSelected.type === 'erp_pos' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-6xl mx-auto mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 justify-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/components/product/price/online",
                                                    className: `px-6 py-2 rounded-full font-semibold transition ${erpMode === 'online' ? 'bg-orange-500 text-white' : 'bg-white text-black hover:bg-gray-200'}`,
                                                    onClick: ()=>setErpMode('online'),
                                                    children: "Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/itservicess/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/components/product/price/offline",
                                                    className: `px-6 py-2 rounded-full font-semibold transition ${erpMode === 'offline' ? 'bg-orange-500 text-white' : 'bg-white text-black hover:bg-gray-200'}`,
                                                    onClick: ()=>setErpMode('offline'),
                                                    children: "Offline"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/itservicess/page.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/itservicess/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/itservicess/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/itservicess/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/itservicess/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/itservicess/page.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/itservicess/page.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_components_itservicess_page_tsx_8c8e979c._.js.map