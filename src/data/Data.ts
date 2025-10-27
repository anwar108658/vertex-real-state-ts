// for navBar

export const navBarData = [
    {
        id: 1,
        title: "Find my Agent",
        link: "/"
    },
    {
        id: 2,
        title: "Sell my Property",
        link: "/sell"
    },
    {
        id:3,
        title:"Dubai Transactions",
        link:"/dubai"
    },
    {
        id:4,
        title:"New Projects",
        link:"/newProj"
    }
];

// for menu Navbar

export const menuNavBarData = {
    dropDownMenu:[
        {
            id:1,
            title:"Market Intelligence",
            link:"/market-intelligence",
            subMenu:[
                {
                    id:1,
                    title:"Property Prices",
                    link:"/property-prices"
                },
                {
                    id:2,
                    title:"Trends",
                    link:"/trends"
                }
            ]
        },
        {
            id:2,
            title:"Resources",
            link:"/resources",
            subMenu:[
                {
                    id:1,
                    title:"Blog",
                    link:"/blog"
                },
                {
                    id:2,
                    title:"Guides",
                    link:"/guides"
                }
            ]
        },
        {
            id:3,
            title:"Floor Plans",
            link:"/floor-plans"
        },
        {
            id:4,
            title:"Events",
            link:"/events",
            subMenu:[
                {
                    id:1,
                    title:"Webinars",
                    link:"/webinars"
                },
                {
                    id:2,
                    title:"Workshops",
                    link:"/workshops"
                }
            ]
        }

    ],
    Setting:{
        id:1,
        title:"Site Setting",
        subMenu:[
            {
                id:1,
                title:"Language",
                iconName:"SettingLanguage",
                link:"/language"
            },
            {
                id:2,
                title:"Currency",
                link:"/currency",
                iconName:"SettingCurrency"
            }
        ]   
    }
}
