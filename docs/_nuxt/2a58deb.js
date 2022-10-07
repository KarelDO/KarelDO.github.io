(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{268:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("04b3a131",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(268)},274:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".avatar-img{background-image:url(/assets/karel_background_2-min.png);background-size:contain}.png-drop-shadow{filter:drop-shadow(6px 6px 16px rgba(34,34,34,.5))}.custom-full-height{height:100vh}",""]),o.locals={},t.exports=o},280:function(t,e,n){"use strict";n.r(e);var o=n(277),r=n(272),l=o.a.timeline({paused:!0}),c=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(c,"px"));var d={methods:{scrollToAbout:function(){var t=this.$refs.about;t&&Object(r.elementScrollIntoView)(t,{behavior:"smooth"})}},mounted:function(){var t=this.$refs,e=t.avatarImg,n=t.wavingHand,o=t.bio,r=t.buttons,c=(t.featured,t.update),d=t.text1,v=t.text2,f=t.text3,h=t.text4,_=t.text5;l.from(e,1,{x:-50,y:-50,rotation:-10,opacity:0,ease:"power2.out"},"+=0.25"),l.from(n,1,{x:50,y:5,rotation:90,opacity:0,ease:"power2.out"},"-=1.0"),l.to(n,1,{y:-3,rotation:3,ease:"slow(0.7, 0.7, false)",yoyo:!0,repeat:-1}),l.from(o,1,{y:50,opacity:0,ease:"power2.out"},"-=1.5"),l.from(r,1,{y:50,opacity:0,ease:"power2.out"},"-=0.5"),l.from(c,1,{x:-50,opacity:0,ease:"power2.out"},"-=1."),l.from(d,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.from(v,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.from(f,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.from(h,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.from(_,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.play()}},v=(n(273),n(26)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"pt-10 mt-12 flex flex-col justify-around items-center sm:flex-row sm:h-1/3 sm:justify-start"},[e("div",{staticClass:"sm:mt-0"},[e("div",[e("div",{ref:"avatarImg",staticClass:"avatar-img h-52 w-52 sm:h-60 sm:w-60 rounded-full",attrs:{alt:"profile-picture"}})])]),t._v(" "),e("div",{ref:"bio",staticClass:"text-lg font-color-1 sm:ml-8 mt-8 sm:mt-0"},[t._m(0),t._v(" "),e("p",{staticClass:"mt-4 text-gray-500"},[t._v("Contact: karel[dot]doosterlinck[at]ugent[dot]be")]),t._v(" "),e("div",{staticClass:"flex mt-5 flex-row justify-around sm:justify-start"},[e("nuxt-link",{attrs:{to:"/research"}},[e("button",{staticClass:"bg-color-1 w-40 h-10 rounded-xl text-white text-lg focus:outline-none transform ease-in duration-75 hover:scale-110"},[t._v("\n            View research\n          ")])])],1)])]),t._v(" "),e("div",{ref:"about",staticClass:"flex flex-col text-left",attrs:{id:"about"}},[e("div",{ref:"update"},[e("div",{ref:"topBanner",staticClass:"border-color-1 bg-color-2 border-3 rounded-xl px-6 py-4 mt-10 text-lg"},[e("p",{staticClass:"font-color-1 opacity-80 font-bold text-lg"},[t._v("Updates")]),t._v(" "),t._m(1)])]),t._v(" "),e("div",{ref:"text1",staticClass:"mt-8"},[e("p",{staticClass:"text-lg font-color-1 font-semibold"},[t._v("Short bio")]),t._v(" "),t._m(2)]),t._v(" "),e("div",{ref:"text2",staticClass:"mt-8"},[e("p",{staticClass:"text-lg font-color-1 font-semibold"},[t._v("Research")]),t._v(" "),e("p",{staticClass:"text-lg font-color-1"},[t._v("\n        Currently, my research focusses on explainable, causally-motivated AI. Applying ideas from causal inference to\n        machine learning, I aim to develop more interpretable and robust models. My overall goal is to build\n        techniques that allow for intuitive inspection and editing of model behavior.\n\n\n        At the Stanford NLP group, I've been working on a causally-motivated benchmark for interpretability\n        techniques. Currently, we are using this new resource to guide the development of new state-of-the-art model\n        explanation techniques.\n        "),e("nuxt-link",{staticClass:"underline",attrs:{to:"/research"}},[t._v("\n          View my initial work")]),t._v(".\n      ")],1)]),t._v(" "),e("div",{ref:"text4",staticClass:"mt-8"},[e("p",{staticClass:"text-lg font-color-1 font-semibold"},[t._v("Hobbies")]),t._v(" "),t._m(3)]),t._v(" "),e("div",{ref:"text5",staticClass:"mt-8"},[e("p",{staticClass:"text-lg font-color-1 font-semibold"},[t._v("Contact me!")]),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t._self._c;return e("p",[e("span",{staticClass:"font-bold"},[t._v("Hello there!")]),t._v(" I’m a Ph.D. student in\n        "),e("span",{staticClass:"font-bold"},[t._v("NLP")]),t._v(" at Ghent University. I'm passionate\n        about "),e("span",{staticClass:"font-bold"},[t._v("Machine Learning")]),t._v(" and\n        "),e("span",{staticClass:"font-bold"},[t._v("Explainable AI")]),t._v(". Currently, I'm a visiting researcher at the "),e("span",{staticClass:"font-bold"},[t._v("Stanford NLP Group")]),t._v(".\n      ")])},function(){var t=this,e=t._self._c;return e("table",{staticClass:"table-auto"},[e("tbody",[e("tr",[e("td",{staticClass:"whitespace-nowrap align-top text-gray-500 pr-4"},[t._v(" Sep. '22")]),t._v(" "),e("td",[e("a",{staticClass:"underline",attrs:{href:"https://arxiv.org/abs/2209.14279"}},[t._v("\n                  New paper on arXiv!")]),t._v("\n                Causal Proxy Models for Concept-Based Model Explanations")])]),t._v(" "),e("tr",[e("td",{staticClass:"whitespace-nowrap align-top text-gray-500 pr-4"},[t._v("Sep. '22")]),t._v(" "),e("td",[t._v("Paper (CEBaB) got accepted to NeurIPS 2022!")])]),t._v(" "),e("tr",[e("td",{staticClass:"whitespace-nowrap align-top text-gray-500 pr-4"},[t._v(" July '22")]),t._v(" "),e("td",[t._v("Gave a talk about CEBaB at the Stanford NLP Group.\n                "),e("a",{staticClass:"underline",attrs:{href:"/assets/cebab-nlp-lunch-Karel.pdf",download:"cebab-nlp-lunch-Karel"}},[t._v("\n                  Slides available here.")])])]),t._v(" "),e("tr",[e("td",{staticClass:"whitespace-nowrap align-top text-gray-500 pr-4"},[t._v(" May '22 ")]),t._v(" "),e("td",[e("a",{staticClass:"underline",attrs:{href:"https://arxiv.org/abs/2205.14140"}},[t._v("\n                  New paper on arXiv!")]),t._v("\n                CEBaB: Estimating the Causal Effects of Real-World Concepts on NLP\n                Model Behavior.")])]),t._v(" "),e("tr",[e("td",{staticClass:"whitespace-nowrap align-top text-gray-500 pr-4"},[t._v(" Jan. '22")]),t._v(" "),e("td",[t._v(" I'm currently at the\n                "),e("a",{staticClass:"underline",attrs:{href:"https://nlp.stanford.edu/"}},[t._v("\n                  Stanford NLP group")]),t._v("\n                for one year under guidance of\n                "),e("a",{staticClass:"underline",attrs:{href:"https://web.stanford.edu/~cgpotts/"}},[t._v("\n                  prof. Christopher Potts")]),t._v(".\n              ")])]),t._v(" "),e("tr",[e("td",{staticClass:"whitespace-nowrap align-top text-gray-500 pr-4"},[t._v("Nov. '21")]),t._v(" "),e("td",[t._v(" Started my Ph.D. at Ghent University.")])])])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-lg font-color-1"},[t._v("\n        Hi! I’m a first-year PhD student passionate about Machine Learning,\n        Natural Language Processing and explainable/causal AI. I work at the\n        "),e("a",{staticClass:"underline",attrs:{href:"https://ugentt2k.github.io"}},[t._v("\n          Text to Knowledge")]),t._v("\n        research group at Ghent University under supervision of\n        "),e("a",{staticClass:"underline",attrs:{href:"http://users.atlantis.ugent.be/cdvelder/"}},[t._v("\n          prof. Chris Develder")]),t._v("\n        and\n        "),e("a",{staticClass:"underline",attrs:{href:"https://tdmeeste.github.io/publications.html"}},[t._v("\n          prof. Thomas Demeester")]),t._v(". I'm currently at the\n        "),e("a",{staticClass:"underline",attrs:{href:"https://nlp.stanford.edu/"}},[t._v("\n          Stanford NLP group")]),t._v("\n        for one year under guidance of\n        "),e("a",{staticClass:"underline",attrs:{href:"https://web.stanford.edu/~cgpotts/"}},[t._v("\n          prof. Christopher Potts")]),t._v(".\n      ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-lg font-color-1"},[t._v("\n        Some other hobbies include cooking, camping and occasionally skiing. Some recent books I enjoyed include\n        "),e("span",{staticClass:"italic"},[t._v("The Worldly Philosophers")]),t._v(",\n        "),e("span",{staticClass:"italic"},[t._v("Factfulness")]),t._v(",\n        "),e("span",{staticClass:"italic"},[t._v("21 lessons for the 21st century")]),t._v(",\n        "),e("span",{staticClass:"italic"},[t._v("Sapiens")]),t._v(", and\n        "),e("span",{staticClass:"italic"},[t._v("Educated")]),t._v("\n        Previously, I spent a lot of my time practicing music. I play\n        classical guitar and I sung in a choir, which gave me the opportunity\n        to visit Mexico, Japan, Bulgaria, and Rome.\n      ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-lg font-color-1"},[t._v("\n        Feel free to reach out on\n        "),e("a",{staticClass:"underline",attrs:{href:"https://twitter.com/KarelDoostrlnck"}},[t._v("Twitter")]),t._v("\n        or\n        "),e("a",{staticClass:"underline",attrs:{href:"https://www.linkedin.com/in/karel-doosterlinck/"}},[t._v("LinkedIn")]),t._v(". My work email is\n        "),e("span",{staticClass:"italic"},[t._v("karel[dot]doosterlinck[at]ugent[dot]be")]),t._v(".\n      ")])}],!1,null,null,null);e.default=component.exports}}]);