(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{268:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("9a570810",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(268)},274:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".avatar-img{background-image:url(/assets/karel_background_2.png);background-size:contain}.png-drop-shadow{filter:drop-shadow(6px 6px 16px rgba(34,34,34,.5))}.custom-full-height{height:100vh}",""]),o.locals={},t.exports=o},280:function(t,e,n){"use strict";n.r(e);var o=n(277),r=n(272),l=o.a.timeline({paused:!0}),c=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(c,"px"));var d={methods:{scrollToAbout:function(){var t=this.$refs.about;t&&Object(r.elementScrollIntoView)(t,{behavior:"smooth"})}},mounted:function(){var t=this.$refs,e=t.avatarImg,n=t.wavingHand,o=t.bio,r=t.buttons,c=(t.featured,t.update),d=t.text1,v=t.text2,f=t.text3,m=t.text4,h=t.text5;l.from(e,1,{x:-50,y:-50,rotation:-10,opacity:0,ease:"power2.out"},"+=0.25"),l.from(n,1,{x:50,y:5,rotation:90,opacity:0,ease:"power2.out"},"-=1.0"),l.to(n,1,{y:-3,rotation:3,ease:"slow(0.7, 0.7, false)",yoyo:!0,repeat:-1}),l.from(o,1,{y:50,opacity:0,ease:"power2.out"},"-=1.5"),l.from(r,1,{y:50,opacity:0,ease:"power2.out"},"-=0.5"),l.from(c,1,{x:-50,opacity:0,ease:"power2.out"},"-=1."),l.from(d,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.from(v,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.from(f,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.from(m,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.from(h,1,{x:-50,opacity:0,ease:"power2.out"},"<0.25"),l.play()}},v=(n(273),n(26)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"pt-10 flex flex-col h-screen justify-around items-center md:flex-row md:h-1/3 md:justify-start md:mt-12"},[e("div",{staticClass:"mt-6 md:mt-0"},[e("div",[e("div",{ref:"avatarImg",staticClass:"avatar-img h-52 w-52 md:h-60 md:w-60 rounded-full",attrs:{alt:"profile-picture"}})])]),t._v(" "),e("div",{ref:"bio",staticClass:"text-lg font-color-1 text-center md:text-left md:ml-8 md:text-xl"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"hidden mt-5 flex-row md:flex"},[e("nuxt-link",{attrs:{to:"/research"}},[e("button",{staticClass:"bg-color-1 w-40 h-10 rounded-full text-white text-lg focus:outline-none transform ease-in duration-75 hover:scale-110 md:mr-5"},[t._v("\n            View research\n          ")])])],1)]),t._v(" "),e("div",{ref:"buttons",staticClass:"flex flex-col h-1/3 justify-around items-center md:flex-row md:hidden pb-16"},[e("nuxt-link",{attrs:{to:"/resume"}},[e("button",{staticClass:"bg-color-1 w-40 h-10 rounded-full text-white text-lg md:mr-5 transform ease-in duration-75 hover:scale-110",attrs:{to:"/research"}},[t._v("\n          View research\n        ")])]),t._v(" "),e("button",{staticClass:"w-40 h-8 rounded-full font-color-2 text-lg transform ease-in duration-75 hover:scale-110",on:{click:function(e){return t.scrollToAbout()}}},[t._v("\n        About me\n      ")])],1)]),t._v(" "),e("div",{ref:"about",staticClass:"flex flex-col text-left",attrs:{id:"about"}},[e("div",{ref:"update"},[e("div",{ref:"topBanner",staticClass:"border-color-1 bg-color-2 border-3 rounded-xl p-6 mt-10 text-lg"},[e("p",{staticClass:"font-color-1 opacity-80 font-bold text-lg md:text-xl"},[t._v("Updates")]),t._v(" "),t._m(2)])]),t._v(" "),e("div",{ref:"text1",staticClass:"mt-8"},[e("p",{staticClass:"text-lg md:text-xl font-color-1 font-semibold"},[t._v("Short bio")]),t._v(" "),t._m(3)]),t._v(" "),e("div",{ref:"text2",staticClass:"mt-8"},[e("p",{staticClass:"text-lg md:text-xl font-color-1 font-semibold"},[t._v("Research")]),t._v(" "),e("p",{staticClass:"text-lg font-color-1"},[t._v("\n        Currently, my research focusses on explainable, causally-motivated AI. Applying ideas from causal inference to machine learning, I aim to develop more interpretable and robust models. My overall goal is to build techniques that allow for intuitive inspection and editing of model behavior. \n\n        \n        At the Stanford NLP group, I've been working on a causally-motivated benchmark for interpretability techniques. Currently, we are using this new resource to guide the development of new state-of-the-art model explanation techniques.\n        "),e("nuxt-link",{staticClass:"underline",attrs:{to:"/research"}},[t._v("\n          View my initial work")]),t._v(".\n      ")],1)]),t._v(" "),e("div",{ref:"text4",staticClass:"mt-8"},[e("p",{staticClass:"text-lg md:text-xl font-color-1 font-semibold"},[t._v("Hobbies")]),t._v(" "),t._m(4)]),t._v(" "),e("div",{ref:"text5",staticClass:"mt-8"},[e("p",{staticClass:"text-lg md:text-xl font-color-1 font-semibold"},[t._v("Contact me!")]),t._v(" "),t._m(5)])])])}),[function(){var t=this,e=t._self._c;return e("p",[e("span",{staticClass:"font-bold"},[t._v("Hello there!")]),t._v(" I’m a PhD student in\n        "),e("span",{staticClass:"font-bold"},[t._v("NLP")]),t._v(" at Ghent University. I'm passionate\n        about "),e("span",{staticClass:"font-bold"},[t._v("Machine Learning")]),t._v(" and\n        "),e("span",{staticClass:"font-bold"},[t._v("Explainable AI")]),t._v(". Currently, I'm a visiting researcher at the "),e("span",{staticClass:"font-bold"},[t._v("Stanford NLP Group")]),t._v(".\n      ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-center md:text-left mt-5 md:mt-4"},[e("img",{staticClass:"opacity-30 inline mb-1",attrs:{src:"/assets/location.svg",alt:"location-icon"}}),t._v(" "),e("span",{staticClass:"opacity-80"},[t._v("\n          Ghent, Belgium / Stanford, U.S.A.\n          ")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"space-y-1"},[e("li",[e("span",{staticClass:"text-gray-500 mr-2"},[t._v("Sep. '22")]),t._v(" "),e("a",{staticClass:"underline",attrs:{href:"https://arxiv.org/abs/2209.14279"}},[t._v("\n              New paper on arXiv!")]),t._v("\n            Causal Proxy Models for Concept-Based Model Explanations\n          ")]),t._v(" "),e("li",[e("span",{staticClass:"text-gray-500 mr-2"},[t._v("Sep. '22")]),t._v("\n            Paper (CEBaB) got accepted to NeurIPS 2022!\n          ")]),t._v(" "),e("li",[e("span",{staticClass:"text-gray-500 mr-2"},[t._v("July '22")]),t._v("\n            Gave a talk about CEBaB at the Stanford NLP Group.\n            "),e("a",{staticClass:"underline",attrs:{href:"/assets/cebab-nlp-lunch-Karel.pdf",download:"cebab-nlp-lunch-Karel"}},[t._v("\n              Slides available here.")])]),t._v(" "),e("li",[e("span",{staticClass:"text-gray-500 mr-2"},[t._v("May '22")]),t._v(" "),e("a",{staticClass:"underline",attrs:{href:"https://arxiv.org/abs/2205.14140"}},[t._v("\n              New paper on arXiv!")]),t._v("\n            CEBaB: Estimating the Causal Effects of Real-World Concepts on NLP\n            Model Behavior.\n          ")]),t._v(" "),e("li",[e("span",{staticClass:"text-gray-500 mr-2"},[t._v("Jan. '22")]),t._v("\n            I'm currently at the\n            "),e("a",{staticClass:"underline",attrs:{href:"https://nlp.stanford.edu/"}},[t._v("\n              Stanford NLP group")]),t._v("\n            for one year under guidance of\n            "),e("a",{staticClass:"underline",attrs:{href:"https://web.stanford.edu/~cgpotts/"}},[t._v("\n              prof. Christopher Potts")]),t._v(".\n          ")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-lg font-color-1"},[t._v("\n        Hi! I’m a firt-year PhD student passionate about Machine Learning,\n        Natural Language Processing and explainable/causal AI. I work at the\n        "),e("a",{staticClass:"underline",attrs:{href:"https://ugentt2k.github.io"}},[t._v("\n          Text to Knowledge")]),t._v("\n        research group at Ghent University under supervision of\n        "),e("a",{staticClass:"underline",attrs:{href:"http://users.atlantis.ugent.be/cdvelder/"}},[t._v("\n          prof. Chris Develder")]),t._v("\n        and\n        "),e("a",{staticClass:"underline",attrs:{href:"https://tdmeeste.github.io/publications.html"}},[t._v("\n          prof. Thomas Demeester")]),t._v(". I'm currently at the\n        "),e("a",{staticClass:"underline",attrs:{href:"https://nlp.stanford.edu/"}},[t._v("\n          Stanford NLP group")]),t._v("\n        for one year under guidance of\n        "),e("a",{staticClass:"underline",attrs:{href:"https://web.stanford.edu/~cgpotts/"}},[t._v("\n          prof. Christopher Potts")]),t._v(".\n      ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-lg font-color-1"},[t._v("\n        Some other hobbies include cooking, camping and occasionally skiing. Some recent books I enjoyed include\n        "),e("span",{staticClass:"italic"},[t._v("The Worldly Philosophers")]),t._v(",\n        "),e("span",{staticClass:"italic"},[t._v("Factfulness")]),t._v(",\n        "),e("span",{staticClass:"italic"},[t._v("21 lessons for the 21st century")]),t._v(",\n        "),e("span",{staticClass:"italic"},[t._v("Sapiens")]),t._v(", and\n        "),e("span",{staticClass:"italic"},[t._v("Educated")]),t._v("\n        Previously, I spent a lot of my time practicing music. I play\n        classical guitar and I sung in a choir, which gave me the opportunity\n        to visit Mexico, Japan, Bulgaria, and Rome.\n      ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-lg font-color-1"},[t._v("\n        Feel free to reach out on\n        "),e("a",{staticClass:"underline",attrs:{href:"https://twitter.com/KarelDoostrlnck"}},[t._v("Twitter")]),t._v("\n        or\n        "),e("a",{staticClass:"underline",attrs:{href:"https://www.linkedin.com/in/karel-doosterlinck/"}},[t._v("LinkedIn")]),t._v(". My work email is "),e("span",{staticClass:"italic"},[t._v("karel[dot]doosterlinck[at]ugent[dot]be")]),t._v(".\n      ")])}],!1,null,null,null);e.default=component.exports}}]);