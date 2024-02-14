"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[1994],{4505:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=s(5893),n=s(1151);const o={sidebar_position:2,title:"Create a simple container image based on Tumbleweed using OBS (openSUSE Build Service)"},r=void 0,l={id:"misc/create-a-simple-container-image-obs",title:"Create a simple container image based on Tumbleweed using OBS (openSUSE Build Service)",description:"Create the project to host the assets",source:"@site/docs/misc/create-a-simple-container-image-obs.md",sourceDirName:"misc",slug:"/misc/create-a-simple-container-image-obs",permalink:"/docs/misc/create-a-simple-container-image-obs",draft:!1,unlisted:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/misc/create-a-simple-container-image-obs.md",tags:[],version:"current",lastUpdatedBy:"Andrew Gracey",lastUpdatedAt:1701811074,formattedLastUpdatedAt:"Dec 5, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Create a simple container image based on Tumbleweed using OBS (openSUSE Build Service)"},sidebar:"docs",previous:{title:"Using NVIDIA GPU's on SLE Micro",permalink:"/docs/integrations/nvidia-slemicro"},next:{title:"Rancher portfolio disambiguation",permalink:"/docs/misc/rancher-disambiguation"}},a={},c=[{value:"Create the project to host the assets",id:"create-the-project-to-host-the-assets",level:2},{value:"Enable container builds in the project config",id:"enable-container-builds-in-the-project-config",level:2},{value:"Add the Tumbleweed images repository",id:"add-the-tumbleweed-images-repository",level:2},{value:"Create a package for the subproject",id:"create-a-package-for-the-subproject",level:2},{value:"Create the Dockerfile",id:"create-the-dockerfile",level:2},{value:"Upload the Dockerfile",id:"upload-the-dockerfile",level:2},{value:"Build results",id:"build-results",level:2},{value:"Resulting images",id:"resulting-images",level:2},{value:"Modify the Dockerfile file via CLI",id:"modify-the-dockerfile-file-via-cli",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"create-the-project-to-host-the-assets",children:"Create the project to host the assets"}),"\n",(0,t.jsxs)(i.p,{children:["In this case it will be a ",(0,t.jsx)(i.em,{children:"subproject"}),' of the "home',":foobar",'" project']}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.a,{href:"https://build.opensuse.org/",children:"https://build.opensuse.org/"})]}),"\n",(0,t.jsx)(i.li,{children:"Log in"}),"\n",(0,t.jsx)(i.li,{children:'Select "Your Home Project" (Left Nav menu)'}),"\n",(0,t.jsx)(i.li,{children:'Select the "Subprojects" tab'}),"\n",(0,t.jsx)(i.li,{children:'Press "Create Subproject" (In Left Nav menu);'}),"\n",(0,t.jsx)(i.li,{children:"Fill in the name (e.g. containers)."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"enable-container-builds-in-the-project-config",children:"Enable container builds in the project config"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Select "Your Home Project" (Left Nav menu)'}),"\n",(0,t.jsx)(i.li,{children:'Select the "Subprojects" tab'}),"\n",(0,t.jsx)(i.li,{children:"Select the subproject you have created (e.g. containers)"}),"\n",(0,t.jsx)(i.li,{children:'Select the "Project Config" tab'}),"\n",(0,t.jsx)(i.li,{children:"Paste the following code:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'%if "%_repository" == "images"\nType: docker\nRepotype: none\nPatterntype: none\nBuildEngine: podman\n%endif\n'})}),"\n",(0,t.jsx)(i.h2,{id:"add-the-tumbleweed-images-repository",children:"Add the Tumbleweed images repository"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to the subproject home page (e.g. ",(0,t.jsx)(i.a,{href:"https://build.opensuse.org/repositories/home:foobar:containers",children:"https://build.opensuse.org/repositories/home:foobar:containers"}),")"]}),"\n",(0,t.jsx)(i.li,{children:'Select the "Repositories" tab'}),"\n",(0,t.jsx)(i.li,{children:'Press the "Add from a Project" button'}),"\n",(0,t.jsxs)(i.li,{children:['Fill in "Project" field with "',(0,t.jsx)(i.code,{children:"openSUSE:Templates:Images:Tumbleweed"}),'"']}),"\n",(0,t.jsx)(i.li,{children:'Choose "images" in Repositories dropdown'}),"\n",(0,t.jsx)(i.li,{children:'Rename it as "images" (this is important as it will be later on used in the registry path)'}),"\n",(0,t.jsx)(i.li,{children:"Unselect all the architectures you don't need"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"create-a-package-for-the-subproject",children:"Create a package for the subproject"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.a,{href:"https://build.opensuse.org/project/show/home:foobar:containers",children:"https://build.opensuse.org/project/show/home:foobar:containers"})]}),"\n",(0,t.jsx)(i.li,{children:'Press "Create Package" button'}),"\n",(0,t.jsx)(i.li,{children:"Fill in the name (e.g. mytoolbox)."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"create-the-dockerfile",children:"Create the Dockerfile"}),"\n",(0,t.jsx)(i.p,{children:"Create a simple Dockerfile locally, something like:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"# The container image tag needs to be specified as follows:\n#!BuildTag: mytoolbox:latest\n \nFROM opensuse/tumbleweed\nRUN zypper -n in traceroute iputils netcat-openbsd curl && \\\n    zypper clean -a\n"})}),"\n",(0,t.jsx)(i.h2,{id:"upload-the-dockerfile",children:"Upload the Dockerfile"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.a,{href:"https://build.opensuse.org/package/show/home:foobar:containers/mytoolbox",children:"https://build.opensuse.org/package/show/home:foobar:containers/mytoolbox"})]}),"\n",(0,t.jsx)(i.li,{children:'Press the "Add File" button'}),"\n",(0,t.jsx)(i.li,{children:"Choose the file and upload it"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"build-results",children:"Build results"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.a,{href:"https://build.opensuse.org/package/show/home:foobar:containers/mytoolbox",children:"https://build.opensuse.org/package/show/home:foobar:containers/mytoolbox"})]}),"\n",(0,t.jsx)(i.li,{children:"Images will appear in Build Results section"}),"\n",(0,t.jsx)(i.li,{children:'Press the "Refresh" button in Build Results section'}),"\n",(0,t.jsx)(i.li,{children:"Wait for build results."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"resulting-images",children:"Resulting images"}),"\n",(0,t.jsxs)(i.p,{children:["If everything went as it should, the container image will be hosted at the ",(0,t.jsx)(i.a,{href:"https://registry.opensuse.org/",children:"openSUSE registry"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.a,{href:"https://registry.opensuse.org/",children:"https://registry.opensuse.org/"})]}),"\n",(0,t.jsx)(i.li,{children:'On the search bar, type "project=^home:foobar:" and press enter'}),"\n",(0,t.jsx)(i.li,{children:"Click on the package icon or name (home/foobar/containers/images/mytoolbox)"}),"\n",(0,t.jsxs)(i.li,{children:["Expand the tag (latest) to see the Image IDs, arch, build time, etc as well as the ",(0,t.jsx)(i.code,{children:"podman pull"})," command."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"modify-the-dockerfile-file-via-cli",children:"Modify the Dockerfile file via CLI"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Install ",(0,t.jsx)(i.code,{children:"osc"})," via your favourite package manager (see ",(0,t.jsx)(i.a,{href:"https://en.opensuse.org/openSUSE:OSC",children:"https://en.opensuse.org/openSUSE:OSC"}),")"]}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"osc checkout home:foobar:containers"}),". It will ask your username/password and a method to store the password safely."]}),"\n",(0,t.jsxs)(i.li,{children:["Navigate to the downloaded project ",(0,t.jsx)(i.code,{children:"cd home\\:foobar\\:containers/mytoolbox/"})]}),"\n",(0,t.jsxs)(i.li,{children:["Edit the ",(0,t.jsx)(i.code,{children:"Dockerfile"})," as you please"]}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"osc commit"})," and put a proper commit message"]}),"\n",(0,t.jsx)(i.li,{children:"The build will be automatically triggered"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>l,a:()=>r});var t=s(7294);const n={},o=t.createContext(n);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);