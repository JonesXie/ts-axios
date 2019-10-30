(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jest-安装和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jest-安装和配置"}},[t._v("#")]),t._v(" Jest 安装和配置")]),t._v(" "),a("h2",{attrs:{id:"jest-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jest-安装"}},[t._v("#")]),t._v(" Jest 安装")]),t._v(" "),a("p",[t._v("由于我们的项目是使用 "),a("code",[t._v("typescript-library-starter")]),t._v(" 初始化的，已经内置了 Jest 的安装，但是安装的版本却不是最新的，我们可以对 "),a("code",[t._v("package.json")]),t._v(" 中的相关依赖版本做修改，重新安装。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@types/jest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^24.0.13"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^24.8.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest-config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^24.8.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ts-jest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^24.0.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typescript"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.4.5"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意，这里都是目前最新的版本，未来如果有版本升级的话，可以自行更新到最新版本。")])]),t._v(" "),a("p",[t._v("更改版本后，在命令行再次执行 "),a("code",[t._v("npm install")]),t._v(" 即可安装到相应版本。")]),t._v(" "),a("h2",{attrs:{id:"jest-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jest-配置"}},[t._v("#")]),t._v(" Jest 配置")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("package.json")]),t._v(" 文件中有 "),a("code",[t._v("jest")]),t._v(" 字段，对应 Jest 配置：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('".(ts|tsx)"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-jest"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testEnvironment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsdom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testRegex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test/.*\\\\.(test|spec)\\\\.(ts)$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleFileExtensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tsx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coverageThreshold"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"global"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"branches"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"functions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lines"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statements"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"collectCoverageFrom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/*.{js,ts}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/*.{js,ts}"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"setupFilesAfterEnv"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rootDir>/test/boot.ts"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("接下来，我们就分别来看这几个配置的含义。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jestjs.io/docs/en/configuration#transform-object-string-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("transform"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("简单地说就是一种转换器配置，比如我们这里的")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('".(ts|tsx)"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-jest"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("表示的就是使用 "),a("code",[t._v("ts-jest")]),t._v(" 工具把 "),a("code",[t._v(".ts")]),t._v(" 和 "),a("code",[t._v(".tsx")]),t._v(" 文件内容转换成 JavaScript，因为我们也是使用 TypeScript 编写测试代码，而 Node.js 是不能直接支持 TypeScript 的，所以需要配置转换器。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jestjs.io/docs/en/configuration#testenvironment-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("testEnvironment"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("测试环境。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testEnvironment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsdom"')]),t._v("\n")])])]),a("p",[t._v("表示它是一个类浏览器的测试环境，我们可以使用浏览器环境中的一些 API。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jestjs.io/docs/en/configuration#testregex-string-array-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("testRegex"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("要测试文件的正则表达式。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testRegex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test/.*\\\\.(test|spec)\\\\.(ts)$"')]),t._v("\n")])])]),a("p",[t._v("表示 "),a("code",[t._v("test")]),t._v(" 目录下所有以 "),a("code",[t._v(".test.ts")]),t._v(" 和 "),a("code",[t._v(".spec.ts")]),t._v(" 的文件都需要跑测试。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jestjs.io/docs/en/configuration#modulefileextensions-array-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("moduleFileExtensions"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("模块文件扩展名，当你去引入一个模块并没有指定扩展名的时候，它会依次尝试去添加这些扩展名去找你引入的模块文件。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleFileExtensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tsx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("表示优先找 "),a("code",[t._v(".ts")]),t._v(" 的模块、然后是 "),a("code",[t._v(".tsx")]),t._v("，最后是 "),a("code",[t._v(".js")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jestjs.io/docs/en/configuration#coveragethreshold-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("coverageThreshold"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("测试覆盖率的阈值设定，当我们的测试覆盖率达不到阈值的时候，测试会失败。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coverageThreshold"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"global"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"branches"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"functions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lines"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statements"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("表示全局的代码分支覆盖率要达到 "),a("code",[t._v("90%")]),t._v("，方法覆盖率要达到 "),a("code",[t._v("95%")]),t._v("，代码行数覆盖率达到 "),a("code",[t._v("95%")]),t._v("，声明覆盖率达到 "),a("code",[t._v("95%")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jestjs.io/docs/en/configuration#collectcoveragefrom-array",target:"_blank",rel:"noopener noreferrer"}},[t._v("collectCoverageFrom"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("收集指定文件的测试覆盖率(即使你没为这些文件编写测试)，它的值为 "),a("a",{attrs:{href:"https://github.com/jonschlinkert/micromatch",target:"_blank",rel:"noopener noreferrer"}},[t._v("glob patterns"),a("OutboundLink")],1),t._v(" 类型。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"collectCoverageFrom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/*.{js,ts}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/*.{js,ts}"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("表示收集 "),a("code",[t._v("src")]),t._v(" 目录以及它的所有子目录中的 "),a("code",[t._v("js")]),t._v(" 和 "),a("code",[t._v("ts")]),t._v(" 文件的测试覆盖率。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jestjs.io/docs/en/configuration#setupfilesafterenv-array",target:"_blank",rel:"noopener noreferrer"}},[t._v("setupFilesAfterEnv"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("测试框架安装后立即执行的代码文件列表。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"setupFilesAfterEnv"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rootDir>/test/boot.ts"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("表示每次跑具体测试代码之前会先运行 "),a("code",[t._v("<rootDir>/test/boot.ts")]),t._v(" 中的代码，"),a("code",[t._v("<rootDir>")]),t._v(" 表示当前项目的根目录。这个配置在之后的章节我们会具体介绍。")]),t._v(" "),a("p",[t._v("其他关于 Jest 的配置，感兴趣的同学可以去"),a("a",{attrs:{href:"https://jestjs.io/docs/en/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("做扩展学习。")]),t._v(" "),a("p",[t._v("至此，我们学习了 Jest 的安装和配置，下节课我们就开始编写 "),a("code",[t._v("ts-axios")]),t._v(" 库的单元测试。")])])}),[],!1,null,null,null);s.default=r.exports}}]);