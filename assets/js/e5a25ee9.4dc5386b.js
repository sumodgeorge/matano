"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[7092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={title:"Authoring detections",sidebar_position:2},a=void 0,c={unversionedId:"detections/authoring",id:"detections/authoring",title:"Authoring detections",description:"Each detection you create occupies a directory under the detections/ directory in your Matano directory.",source:"@site/docs/detections/authoring.md",sourceDirName:"detections",slug:"/detections/authoring",permalink:"/docs/detections/authoring",draft:!1,editUrl:"https://github.com/matanolabs/matano/tree/main/website/docs/detections/authoring.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Authoring detections",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Detections",permalink:"/docs/detections/"},next:{title:"Matano CLI reference",permalink:"/docs/reference/cli-reference"}},l={},d=[{value:"Detection script",id:"detection-script",level:2},{value:"Returning values from your detection",id:"returning-values-from-your-detection",level:3},{value:"Deduping alerts",id:"deduping-alerts",level:3},{value:"Detection configuration file (<code>detection.yml</code>)",id:"detection-configuration-file-detectionyml",level:2},{value:"Python requirements",id:"python-requirements",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each detection you create occupies a directory under the ",(0,o.kt)("inlineCode",{parentName:"p"},"detections/")," directory in your Matano directory."),(0,o.kt)("p",null,"A detection directory has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-matano-directory\n\u251c\u2500\u2500 detections\n\u2502   \u2514\u2500\u2500 my_detection\n\u2502       \u251c\u2500\u2500 detect.py\n\u2502       \u251c\u2500\u2500 requirements.txt\n\u2502       \u2514\u2500\u2500 detection.yml\n")),(0,o.kt)("h2",{id:"detection-script"},"Detection script"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Detection scripts")," are Python programs containing the logic of your detection. To create a detection script, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"detect.py")," in your detection directory."),(0,o.kt)("p",null,"Inside the detection script, you define the following functions:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"detect")," function is the python function that is invoked for your detection. The function will be invoked with a data record."),(0,o.kt)("p",null,"The function has the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"def detect(record):\n    ...\n")),(0,o.kt)("p",null,"Your detection must terminate in ",(0,o.kt)("strong",{parentName:"p"},"1 second"),"."),(0,o.kt)("h3",{id:"returning-values-from-your-detection"},"Returning values from your detection"),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"detect")," function must return a boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," to signal an alert. A return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," will be interpreted as no alert for detection on that record."),(0,o.kt)("h3",{id:"deduping-alerts"},"Deduping alerts"),(0,o.kt)("p",null,"You can dedupe alerts using a dedupe string."),(0,o.kt)("h2",{id:"detection-configuration-file-detectionyml"},"Detection configuration file (",(0,o.kt)("inlineCode",{parentName:"h2"},"detection.yml"),")"),(0,o.kt)("p",null,"Each detection requires a configuration file named ",(0,o.kt)("inlineCode",{parentName:"p"},"detection.yml"),". The file has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'name: "my_detection" # The name of the detection\nlog_sources: # An array of log sources for which to run the detection\n    - "main-cloudtrail-logs"\n    - "my-zeek-logs"\n')),(0,o.kt)("h2",{id:"python-requirements"},"Python requirements"),(0,o.kt)("p",null,"You can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file to the detection directory to make PyPI dependencies available to your detection program. The listed dependencies will be installed and made available to your program."))}s.isMDXComponent=!0}}]);