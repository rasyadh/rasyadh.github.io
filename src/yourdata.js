// About Image
import photo from "./images/rasyadh.jpeg"

// Skills Icons
import swiftIcon from "./images/swift.svg"
import xcodeIcon from "./images/xcode.svg"
import flutterIcon from "./images/flutter.svg"
import reactjsIcon from "./images/reactjs.svg"
import pythonIcon from "./images/python.svg"
import designIcon from "./images/design.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import behanceIcon from "./images/behance.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "rasyadh",
  headerTagline: [
    //Line 1 For Header
    "❝",
    //Line 2 For Header
    "Rasyadh",
    //Line 3 For Header
    "Abdul Aziz",
  ],
  //   Header Paragraph
  headerParagraph:
    "I tell compouters what to do.",

  //Contact Email
  contactEmail: "rasyadhabdulaziz@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Bukalapak iOS App", //Project Title - Add Your Project Title Here
      para:
        "Bukalapak Bikin Asik Aplikasi belanja online terlengkap.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/67/d1/3c/67d13cd9-ac9d-b98e-5132-e919e0e4a5f9/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
      //Project URL - Add Your Project Url Here
      url: "https://apps.apple.com/id/app/bukalapak-jual-beli-online/id1003169137#?platform=iphone",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Daxium iOS App", //Project Title - Add Your Project Title Here
      para:
        "Daxium Team is a collaborative platform to ensure effective teamwork. Your private and group conversations, your corporate news, are thus centralized in the same shared workspace that you can take with you to your smartphone.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/0b/2c/a2/0b2ca201-2baf-e292-d30c-58e6d218fb1a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.png",
      //Project URL - Add Your Project Url Here
      url: "https://apps.apple.com/us/app/daxium-team/id1470940099",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Needtip iOS App", //Project Title - Add Your Project Title Here
      para:
        "It’s a platform where you can find any item that you cannot get inside your country, from snacks, fashion item to exclusive merchandise hand carried by trustworthy travellers and sent it to your home.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://play-lh.googleusercontent.com/uShUZDHSZ4oZv3aJKwMVMDuKKgZMhMdYz3N_Gky8ccvLqj6c7Cu_LiO_-FOKy1l_ZLM=s360-rw",
      //Project URL - Add Your Project Url Here
      url: "http://www.needtip.co",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Legoas iOS App", //Project Title - Add Your Project Title Here
      para:
        "Marketplace in Indonesia to sell and buy auction vehicles.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "data:image/jpeg;base64,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",
      //Project URL - Add Your Project Url Here
      url: "https://www.legoas.co.id",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Cloud Node Platform", //Project Title - Add Your Project Title Here
      para:
        "Cloud Node Platform Division PT. Telekomunikasi Indonesia.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "data:image/png;base64,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",
      //Project URL - Add Your Project Url Here
      url: "https://www.telkomtesthouse.co.id/",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Surabaya Icon Monoline Design", //Project Title - Add Your Project Title Here
      para:
        "Iconic place, statue, and monument in Surabaya.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://mir-s3-cdn-cf.behance.net/projects/404/3f042c47733977.Y3JvcCwyNTYzLDIwMDYsMTcyMSww.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://www.behance.net/gallery/47733977/Surabaya-Iconic-Monoline-Design",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi, i'm a software engineer with speciality on iOS app development. Love to code and passionate to build a great user interface and experience on mobile platform. Very excited and curious to learn something new.",
  aboutParaTwo:
    "Even so, I kinda have a love-hate relationship with coding, but I think everyone has too.",
  aboutParaThree: "Currently working as iOS Engineer, and it has been that way for a couple of years.",
  aboutImage:
    photo,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: swiftIcon,
      para:
        "Mainly used Swift for iOS Development",
    },
    {
      id: 2,
      img: xcodeIcon,
      para:
        "Xcode IDE, this one mandatory tho",
    },
    {
      id: 3,
      img: flutterIcon,
      para:
        "Working on hybrid mobile app using Flutter",
    },
    {
      id: 4,
      img: pythonIcon,
      para:
        "Scripting and Computer Vison on Python",
    },
    {
      id: 5,
      img: reactjsIcon,
      para:
        "Building web app with React Js",
    },
    {
      id: 6,
      img: designIcon,
      para:
        "Designing from illustration to UI interface",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Experience",
  promotionPara:
    "Currently working at Bukalapak, one of the biggest tech companies in Indonesia. Taking a role as iOS Engineer, delivering the best marketplace experience on your phone. Been working on several tech companies such as a software agency at Twiscode Pte. Ltd. as iOS Engineer and an Web Developer intern at PT. Telekomunikasi Indonesia.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Hit me up on these channels",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/rasyadh",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/rasyadh",
    },
    {
      img: behanceIcon,
      url: "https://www.behance.net/rasyadh",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/rasyadh_",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
