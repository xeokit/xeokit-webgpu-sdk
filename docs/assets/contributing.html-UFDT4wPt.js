import{_ as o}from"./xeokit_datamodel_icon-TD9Or4yz.js";import{_ as i,r,o as l,c as d,a as e,b as n,d as s,e as t}from"./app-JCdQmiM0.js";const c={},p=e("img",{style:{padding:"50px"},src:o},null,-1),h={href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>After cloning the repository, run:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),m={href:"https://classic.yarnpkg.com/docs/workspaces/",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To run an arbitrary command across all packages:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lerna <span class="token builtin class-name">exec</span> -- <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pull-requests" tabindex="-1"><a class="header-anchor" href="#pull-requests"><span>Pull requests</span></a></h3><p>Before adding new features or packages to the repository, please open an issue on GitHub to discuss your proposal. Some features may not fit the current scope of the project, or may be more than we are able to maintain long-term. Even if a feature does not end up in this repository, custom extensions and functions can be defined and used externally. Changes including test coverage are strongly preferred.</p>`,5),b={href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/stackgl/headless-gl",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"dependencies",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dependencies"},[e("span",null,"Dependencies")])],-1),v=e("p",null,[n("We recommend compiling with Node.js v12.x, which is the latest version with a prebuilt binary for "),e("code",null,"gl"),n(" as of April 2020.")],-1),_=e("p",null,[n("Runtime dependencies should be installed only to the sub-package in which they are needed. Any devDependencies are shared across all packages, and should be installed in the project root. Pull requests should omit any changes to "),e("code",null,"dist/*"),n(" artifacts.")],-1),y=e("h3",{id:"documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation"},[e("span",null,"Documentation")])],-1),x={href:"https://typedoc.org/",target:"_blank",rel:"noopener noreferrer"},w=t(`<ul><li><code>@internal</code> methods and classes are (1) hidden from documentation, and (2) not included in TypeScript definitions for the package. This code is intended only for use within the defining package.</li><li><code>@hidden</code> methods and classes are hidden from documentation, but still included in TypeScript definitions for the package. This code is not intended for wide use, but may be necessary for other packages in the xeokit-sdk monorepo.</li></ul><h3 id="releasing" tabindex="-1"><a class="header-anchor" href="#releasing"><span>Releasing</span></a></h3><blockquote><p>NOTE: Only the maintainer can create new releases.</p></blockquote><p>All packages are published together. To create a standard release:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lerna publish <span class="token punctuation">[</span> patch <span class="token operator">|</span> minor <span class="token operator">|</span> major <span class="token punctuation">]</span> --force-publish <span class="token string">&quot;*&quot;</span> <span class="token parameter variable">--otp</span> <span class="token operator">&lt;</span>OTP<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To create an alpha release:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lerna publish prerelease --dist-tag next --force-publish <span class="token string">&quot;*&quot;</span> <span class="token parameter variable">--otp</span> <span class="token operator">&lt;</span>OTP<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function T(q,D){const a=r("ExternalLinkIcon");return l(),d("div",null,[p,e("p",null,[n("The xeokit SDK consists of multiple NPM packages, managed in one repository with "),e("a",h,[n("Lerna"),s(a)]),n(". All code, excluding Node.js-based tests, is written in TypeScript.")]),u,e("p",null,[n("The project relies on "),e("a",m,[n("Yarn workspaces"),s(a)]),n(" and will not build with npm. To build and test all code, run:")]),g,e("p",null,[n("New features should be compatible with both Node.js and Web, though exceptions may be possible in certain situations. To accomplish that, any platform-specific resources (like instances of "),e("a",b,[n("HTMLCanvasElement"),s(a)]),n(" or "),e("a",f,[n("headless-gl"),s(a)]),n(") are passed into API functions by the user, rather than being created by the API directly.")]),k,v,_,y,e("p",null,[n("Documentation and examples are written in JSDoc comments on the relevant classes and methods, processed with "),e("a",x,[n("TypeDoc"),s(a)]),n(", and rendered to the default TypeDoc theme. Additions and clarification are welcome, and examples may be added inline alongside class documentation. Certain JSDoc tags have notable meanings within this project:")]),w])}const S=i(c,[["render",T],["__file","contributing.html.vue"]]),A=JSON.parse('{"path":"/contributing.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Pull requests","slug":"pull-requests","link":"#pull-requests","children":[]},{"level":3,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":3,"title":"Documentation","slug":"documentation","link":"#documentation","children":[]},{"level":3,"title":"Releasing","slug":"releasing","link":"#releasing","children":[]}],"git":{"updatedTime":1709251115000,"contributors":[{"name":"DhivinX","email":"d.szaradowski@gmail.com","commits":1}]},"filePathRelative":"contributing.md"}');export{S as comp,A as data};