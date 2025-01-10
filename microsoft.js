// =====================navbar content==========================
let navbar = document.querySelector(".navbar");
let leftContainer = document.createElement("div");
leftContainer.classList.add("leftContainer");
let microsoftImageTag = document.createElement("img");
microsoftImageTag.setAttribute("src", "/Assets/img1.png");
microsoftImageTag.classList.add("microsoftImageTag");
leftContainer.append(microsoftImageTag);

let navLeftData = ["Microsoft 365", "Teams", "Windows", "Surface", "Xbox", "Support"];
navLeftData.map((element) => {
    let anchorTag = document.createElement("a");
    anchorTag.append(element);
    leftContainer.append(anchorTag);
})

let rightContainer = document.createElement("div");
rightContainer.classList.add("rightContainer");
let paragraph = document.createElement("p");
paragraph.innerHTML = "All Microsoft";
paragraph.classList.add("paragraph");
rightContainer.append(paragraph);
let navRightData = [
    {
        img: "/Assets/search.png"
    },
    {
        img: "/Assets/cart.png"
    },
    {
        img: "/Assets/login.png"
    }
]
navRightData.map((element) => {
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", element.img);
    rightContainer.append(imgTag);
})
navbar.append(leftContainer, rightContainer);

// ===================  main content======================

let mainContainer = document.querySelector(".mainContainer");
let leftMainContainer = document.createElement("div");
leftMainContainer.classList.add("leftMainContainer");

let paragraphMain = document.createElement("p");
paragraphMain.classList.add("paragraphMain");
paragraphMain.innerHTML = "<h2>Surface Laptop 5</h2> <br> Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11"
let button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "Learn More"
leftMainContainer.append(paragraphMain, button);

let rightMainContainer = document.createElement("div");
let imgRightTag = document.createElement("img");
imgRightTag.classList.add("imgRightTag")
imgRightTag.setAttribute("src", "/Assets/suface lp.avif")
rightMainContainer.append(imgRightTag);
mainContainer.append(leftMainContainer, rightMainContainer);

// ================Second Container============================
let secondContainerData = [
    {
        img: "/Assets/micro1.png",
        link: "https://www.microsoft.com/en-in/microsoft-365/buy/compare-all-microsoft-365-products?icid=MSCOM_QL_M365",
        para: "Choose your Microsoft 365"
    },
    {
        img: "/Assets/surface.jfif",
        link: "https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface",
        para: "Explore Surface devices"
    },
    {
        img: "/Assets/xbox.png",
        link: "https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox",
        para: "Buy Xbox games and consoles"
    },
    {
        img: "/Assets/micro1.png",
        link: "https://www.microsoft.com/en-in/windows/get-windows-11?icid=MSCOM_QL_Windows",
        para: "Get Windows 11"
    },
]

let secondContainer = document.querySelector(".secondContainer")
secondContainerData.map((element) => {
    let divBox = document.createElement("div");
    divBox.classList.add("divBox");
    let imgBoxTag = document.createElement("img");
    imgBoxTag.classList.add("imgBoxTag")
    imgBoxTag.setAttribute("src", element.img)

    let anchorBoxTag = document.createElement("a");
    anchorBoxTag.setAttribute("href", element.link)
    anchorBoxTag.innerHTML = element.para;

    secondContainer.append(divBox);
    divBox.append(imgBoxTag, anchorBoxTag);

})

// =========================== part 3  =================================================
thirdContainerData = [
    {
        img: "/Assets/slap.jfif",
        heading: "Surface Laptop Studio",
        para: "Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.",
        link: "https://www.microsoft.com/en-in/windows/windows-11?icid=mscom_marcom_CPH4a_Win11PChlth#pchealthcheck",
        button: "See if your PC ready ",
    },
    {
        img: "/Assets/mimg.jfif",
        heading: "Microsoft 365",
        para: "Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps.",
        link: "https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf?icid=mscom_marcom_CPH1a_M365Personal",
        button: "For one person",
    },
    {
        img: "/Assets/xbox sx.jfif",
        heading: "Xbox Series X",
        para: "The fastest, most powerful Xbox ever.",
        link: "https://www.xbox.com/en-in/consoles/xbox-series-x?icid=mscom_marcom_CPH2a_XboxSeriesX",
        button: "Shop Xbox Series X",
    },
    {
        img: "/Assets/xbox ss.jfif",
        heading: "Xbox Series S",
        para: "Next-gen performance in the smallest Xbox ever.",
        link: "https://www.xbox.com/en-in/consoles/xbox-series-s?icid=mscom_marcom_CPH3a_XboxSeriesS",
        button: "Shop Xbox Series S",
    },
]
let thirdMainContainer = document.querySelector(".thirdMainContainer");
let thirdContainer = document.createElement("div");
thirdContainer.classList.add("thirdContainer");
thirdMainContainer.append(thirdContainer);

thirdContainerData.map((element) => {
    let divBoxContainer = document.createElement("div");
    divBoxContainer.classList.add("divBoxContainer");

    let imgBoxCotainer = document.createElement("img");
    imgBoxCotainer.classList.add("imgBoxCotainer")
    imgBoxCotainer.setAttribute("src", element.img);

    let headingTag = document.createElement("h2");
    headingTag.innerHTML = element.heading;

    let para = document.createElement("p");
    para.classList.add("para");
    para.innerHTML = element.para;

    let buttonAnchor = document.createElement("a");
    buttonAnchor.setAttribute("href", element.link);

    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = element.button;


    thirdContainer.append(divBoxContainer);
    buttonAnchor.append(btn);
    divBoxContainer.append(imgBoxCotainer, headingTag, para, buttonAnchor);
})

// ========================== part 4 ==============================

let linkData = [
    {
        link: "https://www.microsoft.com/en-in/surface/devices/surface-laptop-7th-edition?icid=mscom_marcom_MPH1a_SurfaceLaptop7Edition_FY24SpringSurface",
        tag: "New",
        heading: "Meet Surface Laptop",
        paragraph: "Unlock AI features like Live Captions and Cocreater with this exceptionally powerful Laptop",
        button: "Learn More"
    }
];
let fourthContainer = document.querySelector(".fourthContainer");
let fourtSubContainer = document.createElement("div");
fourtSubContainer.classList.add("fourtSubContainer");

linkData.map((element) => {
    let linkFourth = document.createElement("a");
    linkFourth.setAttribute("href", element.link);

    let imgContainer = document.createElement("img");
    imgContainer.classList.add("imgContainer");
    imgContainer.setAttribute("src", "/Assets/copilot1.avif");

    let subContainerLink = document.createElement("a");
    subContainerLink.setAttribute("href", element.link);

    let subContainer = document.createElement("div");
    subContainer.classList.add("subContainer");

    let subTag = document.createElement("p");
    subTag.innerHTML = element.tag;
    subTag.classList.add("subTag");

    let subHeading = document.createElement("h1");
    subHeading.innerHTML = element.heading;

    let subParagraph = document.createElement("p");
    subParagraph.innerHTML = element.paragraph;

    let subButton = document.createElement("button");
    subButton.innerHTML = element.button;
    subButton.classList.add("subButton");

    fourthContainer.append(fourtSubContainer);
    linkFourth.append(imgContainer)
    subContainerLink.append(subButton);
    subContainer.append(subTag, subHeading, subParagraph, subContainerLink);
    fourtSubContainer.append(linkFourth, subContainer);
});

// =============================== part 5 ========================================
let fifthContainerData = [
    {
        img: "/Assets/surface-business.avif",
        heading: "Surface for Business",
        paragraph: "No matter what you do, there’s a Surface to help you do it.",
        link: "https://www.microsoft.com/en-in/surface/business?icid=mscom_marcom_CPW1a_SurfaceforBusiness",
        button: "Shop now",
    },
    {
        img: "Assets/microsoft365.avif",
        heading: "Microsoft 365 Copilot",
        paragraph: "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
        link: "https://www.microsoft.com/en-in/microsoft-365/business/copilot-for-microsoft-365?icid=mscom_marcom_CPW2a_M365forBusiness_Copilot",
        button: "Learn more",
    },
    {
        img: "Assets/Windows-11.jpg",
        heading: "Windows 11 for business",
        paragraph: "Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.",
        link: "https://www.microsoft.com/en-in/windows/business?icid=mscom_marcom_CPW3a_Windows11forBusiness",
        button: "Learn more",
    },
    {
        img: "Assets/Content-Card.avif",
        heading: "Get Microsoft Teams for your business",
        paragraph: "Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.",
        link: "https://www.microsoft.com/en-in/microsoft-teams/small-medium-business?icid=mscom_marcom_CPW4a_TeamsForBusiness",
        button: "Find the right plan for your business",
    },
]
let fifthMainContainer = document.querySelector(".fifthContainer");
let fifthSubContainer = document.createElement("div")
fifthSubContainer.innerHTML = "<h1>For business</h1>";
fifthSubContainer.classList.add("fifthSubContainer");
fifthMainContainer.append(fifthSubContainer);

let parentContainer = document.createElement("div")
parentContainer.classList.add("parentContainer");

fifthContainerData.map((element) => {
    let parentBox = document.createElement("div");
    parentBox.classList.add("parentBox");

    let parentImgBox = document.createElement("img");
    parentImgBox.setAttribute("src", element.img);
    parentImgBox.classList.add("parentImgBox")

    let parentSecondContainer = document.createElement("div");
    parentSecondContainer.classList.add("parentSecondContainer")

    let parentHeadingBox = document.createElement("h2");
    parentHeadingBox.innerHTML = element.heading;

    let parentParagraphBox = document.createElement("p");
    parentParagraphBox.innerHTML = element.paragraph;

    let parentButtonLink = document.createElement("a");
    parentButtonLink.setAttribute("href", element.link);

    let parentButtonBox = document.createElement("button");
    parentButtonBox.classList.add("parentButtonBox");
    parentButtonBox.innerHTML = element.button;

    parentButtonLink.append(parentButtonBox);
    parentSecondContainer.append(parentHeadingBox, parentParagraphBox)
    parentBox.append(parentImgBox, parentSecondContainer, parentButtonLink);
    parentContainer.append(parentBox);
    fifthSubContainer.append(parentContainer);

})

//  ============================== part 6 ======================================
let sixthUpContainerData = [
    {
        paragraph: "Follow Microsoft",
        Link: "https://www.facebook.com/MicrosoftIndia",
        Img: "Assets/Facebook 2x.avif",

    },
    {
        Link: "https://twitter.com/microsoftindia",
        Img: "Assets/icon-MSCOM-X-64x64.webp",
        paragraph: "",
    },
    {
        Link: "https://www.youtube.com/user/IndiaMicrosoftVideos",
        Img: "Assets/YouTube 2x.webp",
        paragraph: "",
    }
]
let sixthContainer = document.querySelector(".sixthContainer");
let sixthUpContainer = document.createElement("div");
sixthUpContainer.classList.add("sixthUpContainer");


sixthUpContainerData.map((element) => {
    let sixthUpParagraph = document.createElement("p");
    sixthUpParagraph.innerHTML = element.paragraph;
    sixthUpParagraph.classList.add("sixthUpParagraph");

    let sixthUpLink = document.createElement("a");
    sixthUpLink.setAttribute("href", element.Link);
    let sixthUpImg = document.createElement("img");
    sixthUpImg.setAttribute("src", element.Img);
    sixthUpImg.classList.add("sixthUpImg");

    sixthUpLink.append(sixthUpImg);
    sixthUpContainer.append(sixthUpParagraph, sixthUpLink);
})
// ========================== data for footer =============================
let whatNewsContainerData = [

    {
        link: "",
        paragraph: "What's new",
    },
    {
        link: "https://www.microsoft.com/en-in/surface/devices/surface-pro-11th-edition",
        paragraph: "Surface Pro",
    },
    {
        link: "https://www.microsoft.com/en-in/surface/devices/surface-laptop-7th-edition",
        paragraph: "Surface Laptop",
    },
    {
        link: "https://www.microsoft.com/en-in/microsoft-copilot",
        paragraph: "Microsoft Copilot",
    },
    {
        link: "https://www.microsoft.com/en-in/microsoft-365",
        paragraph: "Microsoft 365",
    },
    {
        link: "https://www.microsoft.com/en-in/microsoft-products-and-apps",
        paragraph: "Explore Microsoft products",
    },
    {
        link: "https://www.microsoft.com/en-in/windows/windows-11-apps?icid=IN_UHF_Footer_Windows11apps",
        paragraph: "Windows 11 apps",
    },
]

let whatNewsContainerData1 = [
    {
        link: "",
        paragraph: "Microsoft Store",
    },
    {
        link: "https://account.microsoft.com/",
        paragraph: "Account profile",
    },
    {
        link: "https://www.microsoft.com/en-in/download",
        paragraph: "Download Center",
    },
    {
        link: "https://go.microsoft.com/fwlink/?linkid=2139749",
        paragraph: "Microsoft Store Support",
    },
    {
        link: "https://go.microsoft.com/fwlink/p/?LinkID=824764&clcid=0x4009",
        paragraph: "Returns",
    },
    {
        link: "https://account.microsoft.com/orders",
        paragraph: "Order tracking",
    },
]
let whatNewsContainerData2 = [
    {
        link: "",
        paragraph: "Education",
    },
    {
        link: "https://www.microsoft.com/en-in/education",
        paragraph: "Microsoft in Education",
    },
    {
        link: "https://www.microsoft.com/en-in/education/devices/overview",
        paragraph: "Devices for Education",
    },
    {
        link: "https://www.microsoft.com/en-in/education/products/teams",
        paragraph: "Microsoft Teams for Education",
    },
    {
        link: "https://www.microsoft.com/en-in/education/products/microsoft-365",
        paragraph: "Microsoft 365 Education",
    },
    {
        link: "https://www.microsoft.com/en-in/education/products/office",
        paragraph: "Office Education",
    },
    {
        link: "https://education.microsoft.com/",
        paragraph: "Educator training for development",
    },
    {
        link: "https://www.microsoft.com/en-us/store/b/education",
        paragraph: "Deals for students and parents",
    },
    {
        link: "https://azure.microsoft.com/en-in/free/students/",
        paragraph: "Azure for students",
    },
]
let whatNewsContainerData3 = [
    {
        link: "",
        paragraph: "Business",
    },
    {
        link: "https://www.microsoft.com/en-in/microsoft-cloud",
        paragraph: "Microsoft Cloud",
    },
    {
        link: "https://www.microsoft.com/en-in/security",
        paragraph: "Microsoft Security",
    },
    {
        link: "https://azure.microsoft.com/en-in/",
        paragraph: "Azure",
    },
    {
        link: "https://www.microsoft.com/en-in/dynamics-365",
        paragraph: "Dynamics-365",
    },
    {
        link: "https://www.microsoft.com/en-in/microsoft-365/business",
        paragraph: "microsoft-365",
    },
    {
        link: "https://about.ads.microsoft.com/en-in",
        paragraph: "microsoft Advertising",
    },
    {
        link: "https://www.microsoft.com/en-in/microsoft-365/copilot/copilot-for-work",
        paragraph: "microsoft 365 copilot",
    },
    {
        link: "https://www.microsoft.com/en-in/microsoft-teams/group-chat-software",
        paragraph: "microsoft-teams",
    },
]
let whatNewsContainerData4 = [
    {
        link: "",
        paragraph: "Developer & IT",
    },
    {
        link: "https://developer.microsoft.com/en-in/",
        paragraph: "Microsoft Developer",
    },
    {
        link: "https://learn.microsoft.com/docs/",
        paragraph: "Documentation",
    },
    {
        link: "https://learn.microsoft.com/",
        paragraph: "Microsoft Learn",
    },
    {
        link: "https://techcommunity.microsoft.com/",
        paragraph: "Microsoft techcommunity ",
    },
    {
        link: "https://azuremarketplace.microsoft.com/en-in/",
        paragraph: "azuremarketplace",
    },
    {
        link: "https://appsource.microsoft.com/en-in/",
        paragraph: "AppSource",
    },
    {
        link: "https://www.microsoft.com/en-in/power-platform",
        paragraph: "Microsoft Power Platform",
    },
    {
        link: "https://azuremarketplace.microsoft.com/en-in/",
        paragraph: "Visual Studio",
    },
]
let whatNewsContainerData5 = [
    {
        link: "",
        paragraph: "Company",
    },
    {
        link: "https://careers.microsoft.com/",
        paragraph: "Careers",
    },
    {
        link: "https://www.microsoft.com/about",
        paragraph: "About Microsoft",
    },
    {
        link: "https://news.microsoft.com/en-in",
        paragraph: "Company News",
    },
    {
        link: "https://privacy.microsoft.com/en-in",
        paragraph: "privacy at microsoft",
    },
    {
        link: "https://www.microsoft.com/investor/default.aspx",
        paragraph: "Investors",
    },
    {
        link: "https://www.microsoft.com/en-in/security/default.aspx",
        paragraph: "Security",
    },
    {
        link: "https://www.microsoft.com/en-in/sustainability/",
        paragraph: "sustainability ",
    },
]
let sixthDownContainer = document.createElement("div");
sixthDownContainer.classList.add("sixthDownContainer");

let sixthDownMainContainer = document.createElement("div");
sixthDownMainContainer.classList.add("sixthDownMainContainer");

let sixthDownSubContainer = document.createElement("div");
sixthDownSubContainer.classList.add("sixthDownSubContainer");

function sixthContainerFunction() {
    whatNewsContainerData.map((element) => {
        let sixthDownSubContainerLink = document.createElement("a");
        sixthDownSubContainerLink.setAttribute("href", element.link);
        let sixthDownSubContainerParagraph = document.createElement("p");
        sixthDownSubContainerParagraph.innerHTML = element.paragraph;

        sixthDownSubContainerLink.append(sixthDownSubContainerParagraph);
        sixthDownSubContainer.append(sixthDownSubContainerLink);
        sixthDownMainContainer.append(sixthDownSubContainer);
    })
}
sixthContainerFunction();

let sixthDownMainContainer1 = document.createElement("div");
sixthDownMainContainer1.classList.add("sixthDownContainer");

let sixthDownSubContainer1 = document.createElement("div");
sixthDownSubContainer1.classList.add("sixthDownSubContainer");

whatNewsContainerData1.map((element) => {
    let sixthDownSubContainerLink = document.createElement("a");
    sixthDownSubContainerLink.setAttribute("href", element.link);
    let sixthDownSubContainerParagraph = document.createElement("p");
    sixthDownSubContainerParagraph.innerHTML = element.paragraph;

    sixthDownSubContainerLink.append(sixthDownSubContainerParagraph);
    sixthDownSubContainer1.append(sixthDownSubContainerLink);
    sixthDownMainContainer1.append(sixthDownSubContainer1);
})

let sixthDownMainContainer2 = document.createElement("div");
sixthDownMainContainer2.classList.add("sixthDownContainer");

let sixthDownSubContainer2 = document.createElement("div");
sixthDownSubContainer2.classList.add("sixthDownSubContainer");

whatNewsContainerData2.map((element) => {
    let sixthDownSubContainerLink = document.createElement("a");
    sixthDownSubContainerLink.setAttribute("href", element.link);
    let sixthDownSubContainerParagraph = document.createElement("p");
    sixthDownSubContainerParagraph.innerHTML = element.paragraph;

    sixthDownSubContainerLink.append(sixthDownSubContainerParagraph);
    sixthDownSubContainer2.append(sixthDownSubContainerLink);
    sixthDownMainContainer2.append(sixthDownSubContainer2);
})

let sixthDownMainContainer3 = document.createElement("div");
sixthDownMainContainer3.classList.add("sixthDownContainer");

let sixthDownSubContainer3 = document.createElement("div");
sixthDownSubContainer3.classList.add("sixthDownSubContainer");
whatNewsContainerData3.map((element) => {
    let sixthDownSubContainerLink = document.createElement("a");
    sixthDownSubContainerLink.setAttribute("href", element.link);
    let sixthDownSubContainerParagraph = document.createElement("p");
    sixthDownSubContainerParagraph.innerHTML = element.paragraph;

    sixthDownSubContainerLink.append(sixthDownSubContainerParagraph);
    sixthDownSubContainer3.append(sixthDownSubContainerLink);
    sixthDownMainContainer3.append(sixthDownSubContainer3);
})

let sixthDownMainContainer4 = document.createElement("div");
sixthDownMainContainer4.classList.add("sixthDownContainer");

let sixthDownSubContainer4 = document.createElement("div");
sixthDownSubContainer4.classList.add("sixthDownSubContainer");

whatNewsContainerData4.map((element) => {
    let sixthDownSubContainerLink = document.createElement("a");
    sixthDownSubContainerLink.setAttribute("href", element.link);
    let sixthDownSubContainerParagraph = document.createElement("p");
    sixthDownSubContainerParagraph.innerHTML = element.paragraph;

    sixthDownSubContainerLink.append(sixthDownSubContainerParagraph);
    sixthDownSubContainer4.append(sixthDownSubContainerLink);
    sixthDownMainContainer4.append(sixthDownSubContainer4);
})

let sixthDownMainContainer5 = document.createElement("div");
sixthDownMainContainer5.classList.add("sixthDownContainer");

let sixthDownSubContainer5 = document.createElement("div");
sixthDownSubContainer5.classList.add("sixthDownSubContainer");
whatNewsContainerData5.map((element) => {
    let sixthDownSubContainerLink = document.createElement("a");
    sixthDownSubContainerLink.setAttribute("href", element.link);
    let sixthDownSubContainerParagraph = document.createElement("p");
    sixthDownSubContainerParagraph.innerHTML = element.paragraph;

    sixthDownSubContainerLink.append(sixthDownSubContainerParagraph);
    sixthDownSubContainer5.append(sixthDownSubContainerLink);
    sixthDownMainContainer5.append(sixthDownSubContainer5);
})

sixthDownContainer.append(sixthDownMainContainer, sixthDownMainContainer1, sixthDownMainContainer2, sixthDownMainContainer3, sixthDownMainContainer4, sixthDownMainContainer5);


// ====================   last Footer ==========================
let sixthFooterLeftContainerData = [
    {
        image: "Assets/er.jfif",
        link: "https://www.microsoft.com/en-in/locale",
        paragraph: "English(india)",
    },
    {
        image: "Assets/privacy icon.png",
        link: "https://aka.ms/yourcaliforniaprivacychoices",
        paragraph: "Your Privacy Choices",
    },
    {
        image: "",
        link: "https://go.microsoft.com/fwlink/?linkid=2259814",
        paragraph: "Consumer Health Privacy",
    }
]

let sixthFooterRightContainerData = [
    {
        link: "https://support.microsoft.com/contactus",
        paragraph: "Contact Microsoft",
    },
    {
        link: "https://go.microsoft.com/fwlink/?LinkId=521839",
        paragraph: "Privacy",
    },
    {
        link: "https://go.microsoft.com/fwlink/?LinkID=206977",
        paragraph: "Terms of use ",
    },
    {
        link: "https://go.microsoft.com/fwlink/?linkid=2196228",
        paragraph: "Trademarks",
    },
    {
        link: "https://choice.microsoft.com/",
        paragraph: "About our ads",
    }
]

let sixthFooterContainer = document.createElement("div");
sixthFooterContainer.classList.add("sixthFooterContainer");

let sixthFooterLeftContainer = document.createElement("div");
sixthFooterLeftContainer.classList.add("sixthFooterLeftContainer");

sixthFooterLeftContainerData.map((element) => {
    let sixthLeftSubContainer = document.createElement("div");
    sixthLeftSubContainer.classList.add("sixthLeftSubContainer");
    let sixthFooterImg = document.createElement("img");
    sixthFooterImg.setAttribute("src", element.image);
    sixthFooterImg.classList.add("sixthFooterImg");
    let sixthFooterLink = document.createElement("a");
    sixthFooterLink.setAttribute("href", element.link);
    let sixthFooterParagraph = document.createElement("p");
    sixthFooterParagraph.innerHTML = element.paragraph;
    sixthFooterParagraph.classList.add("sixthFooterParagraph");

    sixthFooterLink.append(sixthFooterParagraph);
    sixthLeftSubContainer.append(sixthFooterImg, sixthFooterLink);
    sixthFooterLeftContainer.append(sixthLeftSubContainer);
})

let sixthFooterRightContainer = document.createElement("div");
sixthFooterRightContainer.classList.add("sixthFooterLeftContainer");

let sixthFooterThirdParagraph = document.createElement("p");
sixthFooterThirdParagraph.innerHTML = "© Microsoft 2024";
sixthFooterThirdParagraph.classList.add("sixthFooterParagraph");

sixthFooterRightContainerData.map((element) => {
    let sixthRightSubContainer = document.createElement("div");
    sixthRightSubContainer.classList.add("sixthLeftSubContainer");

    let sixthFooterLink = document.createElement("a");
    sixthFooterLink.setAttribute("href", element.link);
    let sixthFooterParagraph = document.createElement("p");
    sixthFooterParagraph.innerHTML = element.paragraph;
    sixthFooterParagraph.classList.add("sixthFooterParagraph");

    sixthFooterLink.append(sixthFooterParagraph);
    sixthRightSubContainer.append(sixthFooterLink);
    sixthFooterRightContainer.append(sixthRightSubContainer, sixthFooterThirdParagraph);
})
sixthFooterContainer.append(sixthFooterLeftContainer, sixthFooterRightContainer);
sixthContainer.append(sixthUpContainer, sixthDownContainer, sixthFooterContainer);

