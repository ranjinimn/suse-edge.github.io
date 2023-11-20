"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[9961],{9939:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=a(5893),t=a(1151),i=a(4866),o=a(5162);const s={sidebar_position:1,title:"Create a package (RPM or Container image) using OBS (openSUSE Build Service)"},c=void 0,l={id:"dev_howto/create-package-obs",title:"Create a package (RPM or Container image) using OBS (openSUSE Build Service)",description:"openSUSE Build Service",source:"@site/docs/dev_howto/create-package-obs.mdx",sourceDirName:"dev_howto",slug:"/dev_howto/create-package-obs",permalink:"/docs/dev_howto/create-package-obs",draft:!1,unlisted:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/dev_howto/create-package-obs.mdx",tags:[],version:"current",lastUpdatedBy:"Nicolas Belouin",lastUpdatedAt:1683712774,formattedLastUpdatedAt:"May 10, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create a package (RPM or Container image) using OBS (openSUSE Build Service)"},sidebar:"docs",previous:{title:"Cluster API core concepts",permalink:"/docs/misc/cluster-api-concepts"},next:{title:"Create a simple container image based on Tumbleweed using OBS (openSUSE Build Service)",permalink:"/docs/dev_howto/create-a-simple-container-image-obs"}},d={},u=[{value:"openSUSE Build Service",id:"opensuse-build-service",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create and configure a project",id:"create-and-configure-a-project",level:2},{value:"Create a package",id:"create-a-package",level:2},{value:"RPM package",id:"rpm-package",level:3},{value:"Container image",id:"container-image",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"opensuse-build-service",children:"openSUSE Build Service"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://build.opensuse.org",children:"openSUSE Build Service"})," is the public instance of the ",(0,r.jsx)(n.a,{href:"https://openbuildservice.org/",children:"Open Build Service"})," used for development of the openSUSE distribution and to offer packages from same source for Fedora, Debian, Ubuntu, SUSE Linux Enterprise and other distributions.."]}),"\n",(0,r.jsxs)(n.p,{children:["This service is also able to build container images, using either a ",(0,r.jsx)(n.code,{children:"Dockerfile"})," or a KIWI configuration."]}),"\n",(0,r.jsx)(n.p,{children:"Everyone can create a SUSE IdP account to be able to use this service."}),"\n",(0,r.jsxs)(n.p,{children:["A published container image will be available on ",(0,r.jsx)(n.a,{href:"https://registry.opensuse.org",children:"registry.opensuse.org"})," and a published package would be available at ",(0,r.jsx)(n.a,{href:"https://download.opensuse.org",children:"download.opensuse.org"})]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["In order to use OBS you first need an IdP account (",(0,r.jsx)(n.a,{href:"https://idp-portal.suse.com/univention/self-service/#page=createaccount",children:"sign up here"}),") and you need to log into ",(0,r.jsx)(n.a,{href:"https://build.opensuse.org",children:"build.opensuse.org"})]}),"\n",(0,r.jsxs)(n.p,{children:["You will also need the ",(0,r.jsx)(n.code,{children:"osc"})," (for openSUSE Commander) command as this quickstart will do it the CLI way, but most things can be done in the WebUI if you prefer."]}),"\n",(0,r.jsxs)(n.p,{children:["To install ",(0,r.jsx)(n.code,{children:"osc"}),":"]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{value:"suse",label:"SUSE",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"zypper install osc\n"})})}),(0,r.jsx)(o.Z,{value:"mac",label:"MacOS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"brew install osc\n"})})}),(0,r.jsx)(o.Z,{value:"pip",label:"PIP",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install osc\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"create-and-configure-a-project",children:"Create and configure a project"}),"\n",(0,r.jsx)(n.p,{children:"We are going to create a project under your home namespace, this will bring up your editor to configure it right away."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'osc meta prj -e "home:$USERNAME:$PROJECTNAME"\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you want to use your home project root just specify ",(0,r.jsx)(n.code,{children:"home:$USERNAME"})," here and in following steps"]})}),"\n",(0,r.jsx)(n.p,{children:"In the editor you can now fill the metadata to look similar to this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<project name="home:$USERNAME">\n  <title/>\n  <description/>\n  <person userid="$USERNAME" role="maintainer"/>\n  \x3c!--\n    If you want to build RPM packages you need a block like this one, here for\n    SLE-15 SP4 replace accordingly to the distribution you want to target\n  --\x3e\n  <repository name="sp4">\n    <path project="SUSE:SLE-15-SP4:Update" repository="standard"/>\n    <path project="SUSE:SLE-15-SP4:GA" repository="standard"/>\n    <arch>x86_64</arch>\n    <arch>s390x</arch>\n    <arch>aarch64</arch>\n  </repository>\n  \x3c!-- If you want to build container images you need a block akin to this one --\x3e\n  <repository name="containers">\n    \x3c!--\n        This defines the available source images for the build (here any from\n        registry.suse.com)\n    --\x3e\n    <path project="SUSE:Registry" repository="standard"/>\n    \x3c!--\n        These defines package repositories available during build, I am\n        refering to the one above here so I can use the RPM packages published\n        in this project for the container images of the project\n    --\x3e\n    <path project="home:$USERNAME:$PROJECTNAME" repository="sp4"/>\n    \x3c!-- This is the list of architecture you want to build for --\x3e\n    <arch>x86_64</arch>\n    <arch>s390x</arch>\n    <arch>aarch64</arch>\n  </repository>\n</project>\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you want to build containers you need to tweak the configuration of the project as well:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'osc meta prjconf -e "home:$USERNAME:$PROJECTNAME"\n'})}),"\n",(0,r.jsx)(n.p,{children:"The configration is different whether you want to use KIWI or Dockerfile build system:"}),"\n",(0,r.jsxs)(i.Z,{groupId:"buildtype",children:[(0,r.jsx)(o.Z,{value:"docker",label:"Dockerfile",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'%if "%_repository" == "containers"\nType: docker\nRepotype: none\nPatterntype: none\nBuildEngine: podman\n%endif\n'})})}),(0,r.jsx)(o.Z,{value:"kiwi",label:"Kiwi",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'%if "%_repository" == "containers"\nType: kiwi\nRepotype: none\nPatterntype: none\n%endif\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you want to build containers using both KIWI and ",(0,r.jsx)(n.code,{children:"Dockerfiles"})," in the same project, you need two repositories\nin your project's metadata (with different names) and both snippets in project's configuration (one for each repository)."]})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-package",children:"Create a package"}),"\n",(0,r.jsx)(n.p,{children:"To create a package in your project use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"osc meta pkg -e home:$USERNAME:$PROJECTNAME $PACKAGENAME\n"})}),"\n",(0,r.jsx)(n.p,{children:"There you'll get another XML file to edit, you only have to set a title and description here."}),"\n",(0,r.jsx)(n.p,{children:"Now you can checkout the directory to start adding your files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"osc co home:$USERNAME:$PROJECTNAME/$PACKAGENAME\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now go into the directory and when all is ready you can add your files and commit using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"osc add <files>...\nosc ci\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now let's see the specificities of RPM and Container packages"}),"\n",(0,r.jsx)(n.h3,{id:"rpm-package",children:"RPM package"}),"\n",(0,r.jsxs)(n.p,{children:["An RPM package is defined by the presence of a spec file, I will not go into the details of that file\nas this is way beyond the scope of that quickstart, please refer to ",(0,r.jsx)(n.a,{href:"https://en.opensuse.org/Portal:Packaging",children:"https://en.opensuse.org/Portal:Packaging"})," for more\ndetails about packaging."]}),"\n",(0,r.jsxs)(n.p,{children:["I will however get into more details about the ",(0,r.jsx)(n.code,{children:"_service"})," and ",(0,r.jsx)(n.code,{children:"_constraints"})," special files that may change the\nbehavior of OBS."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"_service"})," file allows one to define automation to happen on said time, for RPM packages these are usually manually triggered.\nIt is then possible to automate fetching a git repository into a tarball, updating the specfile version from git info, vendoring\ngo or rust dependencies, etc...You can get more insight into what is possible here\n",(0,r.jsx)(n.a,{href:"https://en.opensuse.org/openSUSE:Build_Service_Concept_SourceService",children:"https://en.opensuse.org/openSUSE:Build_Service_Concept_SourceService"})," ."]}),"\n",(0,r.jsx)(n.p,{children:"Here is one for a rust project for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="_services"',children:'<services>\n\t<service name="tar_scm" mode="manual">\n\t\t<param name="scm">git</param>\n\t\t<param name="url">https://github.com/project-akri/akri</param>\n\t\t<param name="filename">akri</param>\n\t\t<param name="versionformat">@PARENT_TAG@</param>\n\t\t<param name="versionrewrite-pattern">v(.*)</param>\n\t\t<param name="revision">v0.10.4</param>\n\t</service>\n\t<service name="recompress" mode="manual">\n\t\t<param name="file">*.tar</param>\n\t\t<param name="compression">xz</param>\n\t</service>\n\t<service name="set_version" mode="manual" />\n\t<service name="cargo_vendor" mode="manual">\n\t\t<param name="srcdir">akri</param>\n\t\t<param name="compression">xz</param>\n\t</service>\n</services>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"_constraints"}),' file allow to define "restrictions" about the builder selected by OBS, like for example the disk size, if your build\ncomplains about having not enough space, this is the file you should edit/create.\nSee here for the complete guide: ',(0,r.jsx)(n.a,{href:"https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html",children:"https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html"})]}),"\n",(0,r.jsx)(n.h3,{id:"container-image",children:"Container image"}),"\n",(0,r.jsxs)(n.p,{children:["You can build a container image in two different ways, you can either use a ",(0,r.jsx)(n.code,{children:"Dockerfile"})," or a KIWI configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Each method has their own benefits and drawbacks.\nKiwi supports using the package manager from the host/build system, so it can build base images and derive images which don't contain a package manager,\nlike ",(0,r.jsx)(n.code,{children:"opensuse/busybox"}),". With Dockerfile, it's practically required to use a full base image like ",(0,r.jsx)(n.code,{children:"opensuse/tumbleweed"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"I won't go into details how a Dockerfile or a kiwi build works, I'll just tell about the interaction with OBS."}),"\n",(0,r.jsxs)(n.p,{children:["First the ",(0,r.jsx)(n.code,{children:"kiwi_metainfo_helper"})," service that you can add as a buildtime source service allows to substitute buildtime placeholders to use in you Dockerfile\nor kiwi configuration. You can find a list of the placeholders here: ",(0,r.jsx)(n.a,{href:"https://build.opensuse.org/package/view_file/openSUSE:Factory/obs-service-kiwi_metainfo_helper/README",children:"https://build.opensuse.org/package/view_file/openSUSE:Factory/obs-service-kiwi_metainfo_helper/README"})]}),"\n",(0,r.jsxs)(n.p,{children:["Another useful service is the ",(0,r.jsx)(n.code,{children:"replace_using_package_version"})," service, that allows to replace a placeholder with the version of a RPM package.\nFor example if I have ",(0,r.jsx)(n.code,{children:"foobar"})," package in version ",(0,r.jsx)(n.code,{children:"1.2.3"})," in an available RPM repository, I can use this service to automatically tag an image that has this\npackage installed. Here it would replace ",(0,r.jsx)(n.code,{children:"%PKG_VERSION%"})," to ",(0,r.jsx)(n.code,{children:"1.2"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="_services"',children:'<services>\n\t<service mode="buildtime" name="kiwi_metainfo_helper"/>\n\t<service mode="buildtime" name="replace_using_package_version">\n\t\t<param name="file">Dockerfile</param>\n\t\t<param name="regex">%PKG_VERSION%</param>\n\t\t<param name="parse-version">minor</param>\n\t\t<param name="package">foobar</param>\n\t</service>\n</services>\n'})}),"\n",(0,r.jsx)(n.p,{children:"You now have to tell OBS about the name and tag of your image:"}),"\n",(0,r.jsxs)(i.Z,{groupId:"buildtype",children:[(0,r.jsxs)(o.Z,{value:"docker",label:"Dockerfile",children:[(0,r.jsxs)(n.p,{children:["You can use one or multiple ",(0,r.jsx)(n.code,{children:"BuildTag"})," as comments in your ",(0,r.jsx)(n.code,{children:"Dockerfile"}),"\nlike this:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"#!BuildTag: foo/bar:latest foo/bar:%PKG_VERSION%.%RELEASE%\n#!BuildTag: foo/bar:tag foo/bar:anothertag\n"})})]}),(0,r.jsxs)(o.Z,{value:"kiwi",label:"Kiwi",children:[(0,r.jsxs)(n.p,{children:["In the kiwi configuration to specify the tags of your image you use the ",(0,r.jsx)(n.code,{children:"containerconfig"})," element, like this:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<preferences>\n    <type image="docker">\n       <containerconfig\n            name="foo/bar"\n            tag="latest"\n            additionaltags="atag,anothertag,%PKG_VERSION%.%RELEASE">\n            ...\n'})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>o});a(7294);var r=a(6010);const t={tabItem:"tabItem_Ymn6"};var i=a(5893);function o(e){let{children:n,hidden:a,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,o),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>k});var r=a(7294),t=a(6010),i=a(2466),o=a(6550),s=a(469),c=a(1980),l=a(7392),d=a(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:a,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),b=(()=>{const e=l??g;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(5893);function v(e){let{className:n,block:a,selectedValue:r,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),t=s[a].value;t!==r&&(l(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>o});var r=a(7294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);