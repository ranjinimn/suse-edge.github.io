"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"SLE Micro on OSX on Apple Silicon (UTM)"},r="Intro",s={unversionedId:"quickstart/slemicro-utm-aarch64",id:"quickstart/slemicro-utm-aarch64",title:"SLE Micro on OSX on Apple Silicon (UTM)",description:"OSX Virtualization",source:"@site/docs/quickstart/slemicro-utm-aarch64.md",sourceDirName:"quickstart",slug:"/quickstart/slemicro-utm-aarch64",permalink:"/docs/quickstart/slemicro-utm-aarch64",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/quickstart/slemicro-utm-aarch64.md",tags:[],version:"current",lastUpdatedBy:"Steven Hardy",lastUpdatedAt:1688630388,formattedLastUpdatedAt:"Jul 6, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SLE Micro on OSX on Apple Silicon (UTM)"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/"},next:{title:"SLE Micro on X86_64 on libvirt (virt-install)",permalink:"/docs/quickstart/slemicro-virt-install-x86_64"}},l={},c=[{value:"OSX Virtualization",id:"osx-virtualization",level:2},{value:"SLE Micro installation automation: ISO vs Image",id:"sle-micro-installation-automation-iso-vs-image",level:2},{value:"Ignition vs Butane vs Combustion",id:"ignition-vs-butane-vs-combustion",level:2},{value:"Ignition/Combustion and UTM",id:"ignitioncombustion-and-utm",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Image preparation",id:"image-preparation",level:2},{value:"Ignition &amp; Combustion files",id:"ignition--combustion-files",level:2},{value:"VM Creation",id:"vm-creation",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("h2",{id:"osx-virtualization"},"OSX Virtualization"),(0,a.kt)("p",null,"Virtualization of Linux hosts on OSX can be achieved with various tools.\nThere are commercial products such as VMWare Fusion or Parallels Desktop\nas well as open-source projects such as VirtualBox, UTM or Lima."),(0,a.kt)("p",null,"UTM is an OSX application that uses QEMU under the hood and offers a GUI\nto manage the VM lifecycle. It supports Apple silicon CPUs, and it can\nuse native OSX virtualization (Virtualization.framework) as well. It\nalso has a scripting interface via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getutm.app/scripting/scripting/"},"Apple\nScript")," to automate some\nprocesses and a proper CLI (utmctl) is on the works."),(0,a.kt)("p",null,"Lima is based on QEMU (experimental support for\nVirtualization.framework) as well and it launches Linux virtual machines\nwith automatic file sharing and port forwarding (like WSL2), and\ncontainerd. Lima is expected to be used on macOS hosts, but can be used\non Linux hosts as well. Lima has a proper CLI tool (limactl) and the\nbest part is VMs can be defined in yaml files, so you can even deploy\nK8s clusters with just a single command\n(see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lima-vm/lima/blob/master/examples/k8s.yaml"},"https://github.com/lima-vm/lima/blob/master/examples/k8s.yaml"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Rancher desktop is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/3702"},"based on Lima")),(0,a.kt)("p",null,"However, Lima doesn't support SLE Micro\n(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lima-vm/lima/issues/1456"},"yet"),") as Lima customizes\nthe VM at boot to install some packages and services and SLE Micro uses a\ndifferent approach to those things (for example as it is immutable, it\nrequires installing packages using ignition/combustion)"),(0,a.kt)("h2",{id:"sle-micro-installation-automation-iso-vs-image"},"SLE Micro installation automation: ISO vs Image"),(0,a.kt)("p",null,"SLE Micro can be installed traditionally using an ISO file that boots\nonce and using click-ops you can customize it as you wish\n(see ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#cha-install"},"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#cha-install"),")\nbut that won't be useful."),(0,a.kt)("p",null,"ISO installation can be customized using boot parameters\n(see ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-boot-parameters-list"},"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-boot-parameters-list"),")\nbut those don't cover all the options. However, ISO based installation\nsupports using AutoYaST (see ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-autoyast/"},"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-autoyast/"),")\nto automate the installation process."),(0,a.kt)("p",null,"SLE Micro can be also deployed using pre-built images. Currently, there\nare two types of images available: raw disk images and selfinstall ISOs."),(0,a.kt)("p",null,"SLE Micro raw images are delivered for the AMD64/Intel 64 architecture,\nIBM Z ZSeries and also AArch64, however the selfinstall images are\ncurrently delivered only for the AMD64/Intel 64 architecture. The\npre-built images (both selfinstall ISOs and raw disk images) are\nintended to be configured on the first boot by using either Ignition or\nCombustion."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"To summarize"),", the two ways as of today to deploy SLE Micro on Aarch64\non an automated fashion would be using the ISO + AutoYaST or raw\nimages + Ignition/Combustion."),(0,a.kt)("h2",{id:"ignition-vs-butane-vs-combustion"},"Ignition vs Butane vs Combustion"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ignition")," is a provisioning tool that enables you to configure a\nsystem according to your specification on the first boot. When the\nsystem is booted for the first time, Ignition is loaded as part of an\ninitramfs and searches for a configuration file within a specific\ndirectory (on a USB flash disk, or you can provide a URL). All changes\nare performed before the kernel switches from the temporal file system\nto the real root file system (before the switch_root command is issued).\nIgnition uses a configuration file in the JSON format. The file is\ncalled config.ign. SLE Micro supports\n",(0,a.kt)("a",{parentName:"p",href:"https://coreos.github.io/ignition/configuration-v3_3/"},"Ignition config spec 3.3.0"),"\n(see\n",(0,a.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-ignition-configuration"},"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-ignition-configuration"),"\nfor more information)."),(0,a.kt)("p",null,"Ignition files can be complex to generate manually (specially for the\nfile permissions syntax in hex or multiline things) so you can use\n",(0,a.kt)("a",{parentName:"p",href:"https://opensuse.github.io/fuel-ignition/"},"opensuse.github.io/fuel-ignition"),"\nto help you generate a basic one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Butane")," is a more human readable (and writable) configuration syntax\nbased on yaml that can be translated to Ignition easily with the ",(0,a.kt)("a",{parentName:"p",href:"https://coreos.github.io/butane/"},"butane\nCLI")," as Butane is not consumable by\nIgnition."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Combustion")," is a dracut module that enables you to configure your\nsystem on its first boot. Combustion reads a provided file called script\nand executes commands in it and thus performs changes to the file\nsystem. You can use Combustion to change the default partitions, set\nusers\\' passwords, create files, install packages, etc."),(0,a.kt)("p",null,"The Combustion dracut module is invoked after the ignition.firstboot\nargument is passed to the kernel command line. Combustion then reads the\nconfiguration from script. Combustion tries to configure the network, if\nthe network flag has been found in script. After ",(0,a.kt)("inlineCode",{parentName:"p"},"/sysroot")," is mounted,\nCombustion tries to activate all mount points in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," and then\ncall ",(0,a.kt)("inlineCode",{parentName:"p"},"transactional-update")," to apply other changes (like setting root\npassword or installing packages).\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-combustion-script"},"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-combustion-script"),"\nfor more information."),(0,a.kt)("h2",{id:"ignitioncombustion-and-utm"},"Ignition/Combustion and UTM"),(0,a.kt)("p",null,"Ignition and Combustion are intended to automate the deployment of SLE\nMicro systems. To use them with UTM there are a couple of alternatives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the QEMU ",(0,a.kt)("inlineCode",{parentName:"p"},"fw_cfg")," flag as ",(0,a.kt)("inlineCode",{parentName:"p"},"-fw_cfg name=opt/org.opensuse.combustion/script,file=/var/combustion-script"),"\nfor combustion or ",(0,a.kt)("inlineCode",{parentName:"p"},"-fw_cfg name=opt/com.coreos/config,file=PATH_TO_config.ign")," for ignition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a raw disk or ISO file to host the Ignition or Combustion (or\nboth) files."))),(0,a.kt)("p",null,"For Ignition, the configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ign")," must reside in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ignition")," subdirectory on the configuration media labeled ",(0,a.kt)("inlineCode",{parentName:"p"},"ignition"),". The\ndirectory structure must look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<root directory>\n\u2514\u2500\u2500 ignition\n    \u2514\u2500\u2500 config.ign\n")),(0,a.kt)("p",null,"For Combustion, the configuration device needs to be named ",(0,a.kt)("inlineCode",{parentName:"p"},"combustion"),", a\nspecific directory structure in that configuration medium needs to be\ncreated and include a configuration file named ",(0,a.kt)("inlineCode",{parentName:"p"},"script"),". In the root\ndirectory of the configuration medium, create a directory called\n",(0,a.kt)("inlineCode",{parentName:"p"},"combustion")," and place the ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," into this directory along with other\nfiles---SSH key, configuration files, etc. The directory structure then\nshould look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<root directory>\n\u2514\u2500\u2500 combustion\n    \u2514\u2500\u2500 script\n    \u2514\u2500\u2500 other files\n")),(0,a.kt)("p",null,"Combustion can be used along with Ignition. If you intend to do so,\nlabel your configuration medium ",(0,a.kt)("inlineCode",{parentName:"p"},"ignition")," and include the ",(0,a.kt)("inlineCode",{parentName:"p"},"ignition"),"\ndirectory with the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ign")," to your directory structure as shown\nbelow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<root directory>\n\u2514\u2500\u2500 combustion\n    \u2514\u2500\u2500 script\n    \u2514\u2500\u2500 other files\n\u2514\u2500\u2500 ignition\n    \u2514\u2500\u2500 config.ign\n")),(0,a.kt)("p",null,"In this scenario, Ignition runs before Combustion."),(0,a.kt)("h1",{id:"image-based-process-step-by-step"},"Image-based process step by step"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": There is a helper script that automates all the steps included here\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suse-edge/misc/blob/main/slemicro/create_vm.sh"},"https://github.com/suse-edge/misc/blob/main/slemicro/create_vm.sh")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SLE Micro raw image"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Download the raw image file from the SUSE website at ",(0,a.kt)("a",{parentName:"li",href:"https://www.suse.com/download/sle-micro/"},"https://www.suse.com/download/sle-micro/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select ARM architecture"),(0,a.kt)("li",{parentName:"ul"},"Look for the raw file (I.e.- ",(0,a.kt)("inlineCode",{parentName:"li"},"SLE-Micro.aarch64-5.3.0-Default-GM.raw.xz"),")")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," You need to have a valid user on the SUSE site to be able to\ndownload the file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Access to ",(0,a.kt)("a",{parentName:"p",href:"https://scc.suse.com/"},"https://scc.suse.com/")," to generate a registration code"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Search for ",(0,a.kt)("inlineCode",{parentName:"li"},"SUSE Linux Enterprise Micro")," via the ",(0,a.kt)("inlineCode",{parentName:"li"},"Products")," menu, select the arch/version then copy and manually activate the registration code"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Butane, qemu and cdrtools installed (using brew for example)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"brew install butane cdrtools qemu\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"UTM installed (using brew for example)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"brew install --cask utm\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If using the previous script, it is required to install UTM\n4.2.2 at least as it includes the proper support for the automation."),(0,a.kt)("h2",{id:"image-preparation"},"Image preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Uncompress the SLE Micro image"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"xz -d ~/Downloads/SLE-Micro.*-Default-GM.raw.xz\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Move the file to a proper location and rename it to fit the VM\nhostname"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cp ~/Downloads/SLE-Micro.*-Default-GM.raw ~/VMs/slemicro.raw\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Resize the image file. In this example, to 30G"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"qemu-img resize -f raw ~/VMs/slemicro.raw 30G > /dev/null\n")))),(0,a.kt)("h2",{id:"ignition--combustion-files"},"Ignition & Combustion files"),(0,a.kt)("p",null,"To automate the installation, we will leverage Butane, Ignition and\nCombustion as explained before:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a temporary folder to store the assets"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"TMPDIR=$(mktemp -d)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create the required folders for ignition and combustion"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"mkdir -p ${TMPDIR}/{combustion,ignition}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.fcc")," butane config file as required. See the\nfollowing example to set a ",(0,a.kt)("inlineCode",{parentName:"p"},"root"),' password for the root user, and to\nconfigure the hostname to be "slemicro"\''),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'cat << \'EOF\' > ${TMPDIR}/config.fcc \nvariant: fcos \nversion: 1.4.0 \nstorage: \n  files: \n    - path: /etc/hostname \n      mode: 0644 \n      overwrite: true \n      contents: \n        inline: "slemicro" \npasswd: \n  users: \n   - name: root \n     password_hash: "$y$j9T$/t4THH10B7esLiIVBROsE.$G1lyxfy/MoFVOrfXSnWAUq70Tf3mjfZBIe18koGOuXB" \nEOF\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a script combustion file as required. See the following\nexample to register the SLE Micro instance to SUSE's SCC (use your\nown email/regcode) and to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/issue.d/combustion")," file"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'cat << EOF > ${TMPDIR}/combustion/script  \n#!/bin/bash \n# combustion: network \n\n# Redirect output to the console \nexec > >(exec tee -a /dev/tty0) 2>&1\n\n# Set hostname at combustion phase for SUSEConnect\nhostname slemicro\n\n# Registration \nif ! which SUSEConnect > /dev/null 2>&1; then \n    zypper --non-interactive install suseconnect-ng \nfi \n\nSUSEConnect --email foobar@suse.com --url https://scc.suse.com --regcode YOURCODE \n\n# Leave a marker \necho "Configured with combustion" > /etc/issue.d/combustion \nEOF\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Convert the butane config to ignition"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"butane -p -o ${TMPDIR}/ignition/config.ign ${TMPDIR}/config.fcc\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create an ISO file. It is requried for both ignition and combustion\nto work that the ISO is labeled as ",(0,a.kt)("inlineCode",{parentName:"p"},"ignition")," (hence the -V\nparameter)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"mkisofs -full-iso9660-filenames -o ignition-and-combustion.iso -V ignition ${TMPDIR}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional:")," Remove the temporary folder"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rm -Rf ${TMPDIR}\n")))),(0,a.kt)("h2",{id:"vm-creation"},"VM Creation"),(0,a.kt)("p",null,"Now it is time to finally use UTM to boot the VM"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4842).Z,width:"902",height:"654"})),(0,a.kt)("p",null,"Create a New Virtual Machine using Virtualization"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4754).Z,width:"452",height:"513"})),(0,a.kt)("p",null,'Select "Other"'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4589).Z,width:"452",height:"513"})),(0,a.kt)("p",null,'Enable the "Skip ISO boot" option as we will use the raw disk directly'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5123).Z,width:"452",height:"513"})),(0,a.kt)("p",null,"Select the required CPU/RAM:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6445).Z,width:"452",height:"513"})),(0,a.kt)("p",null,"Accept the storage size as it is, it will be deleted before booting it"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1981).Z,width:"452",height:"513"})),(0,a.kt)("p",null,"Skip the Shared Directory"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2675).Z,width:"452",height:"513"})),(0,a.kt)("p",null,'Edit the VM name and enable the "Open VM Settings" toggle to customize\nit further:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6066).Z,width:"452",height:"513"})),(0,a.kt)("p",null,"Delete the VirtIO Drive"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9077).Z,width:"900",height:"655"})),(0,a.kt)("p",null,'Add a new Device and select "Import"'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9373).Z,width:"928",height:"654"})),(0,a.kt)("p",null,"Select the raw image file (","~","/VMs/slemicro.raw in this case)"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5290).Z,width:"802",height:"450"})),(0,a.kt)("p",null,"Repeat the last two steps to add the ignition-and-combustion.iso file"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6146).Z,width:"802",height:"450"})),(0,a.kt)("p",null,'Configure the ISO as Read Only and "CD/DVD (ISO) Image"'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2773).Z,width:"802",height:"463"})),(0,a.kt)("p",null,"Finally, boot the VM."),(0,a.kt)("p",null,"After a couple of seconds, the VM will boot up and will configure itself\nusing the ignition and combustion scripts, including registering itself\nto SCC"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5321).Z,width:"802",height:"640"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3913).Z,width:"1712",height:"483"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," In case the VM doesn't get network connectivity, try\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/utmapp/UTM/discussions/3530#discussioncomment-5072113"},"https://github.com/utmapp/UTM/discussions/3530#discussioncomment-5072113")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Once the VM is running, you can access via SSH via its IP as ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh root@<ip>")),(0,a.kt)("h1",{id:"iso-process-tbd"},"ISO Process (TBD)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ISO file"),(0,a.kt)("li",{parentName:"ul"},"Create a new VM on UTM using the ISO file"),(0,a.kt)("li",{parentName:"ul"},"Create the autoyast answer file"),(0,a.kt)("li",{parentName:"ul"},"Use the AutoYaST boot parameter to map to the answer file"),(0,a.kt)("li",{parentName:"ul"},"Boot the VM"),(0,a.kt)("li",{parentName:"ul"},"Profit!")))}u.isMDXComponent=!0},5290:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/12d3dfb41520356ee76857affe3041be04a652bc-206f55b25e5082a22dffcfe3c4b396b8.png"},6445:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1466bd582ba35bd66c26c0079802c056896e4eaa-85a9b6f5619fa6a175fc32efcf7fde67.png"},9373:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/5027d068b69ea4e908bd569ca7f907fe8e034e1d-9ceb0288822d81e78075bb1b01a3bd81.png"},2675:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/5abda93849e7fe7f76805e8a3daa3fe9d82363ed-33484903fd1d3716ea7e4792d7a5f268.png"},9077:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/5e96b95370a5c483f022d179dabc0b704351523a-e1fcece863ceca41f984a5c7ae5788c0.png"},1981:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/6641b40ab6668c993e4b4b0384d3b49f586c06ff-97218ca25f480055d19be7b8839be1cb.png"},2773:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/914cbe42425661f0b5c9973160c591df72be64f1-581fca814d98f0d9ee0335151873de02.png"},6146:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/959fd78cfe57aa2edd60784ad04f8609d6ed21fb-b2418c10c2d55f94b5386de545fbc50f.png"},4754:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/988c205e2d120f9ec168c26a6a5360c6288c5e0e-a9a83ff39aef91c4cc185d4b555c5b09.png"},5321:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/a7850c3aa119d254910375f49bc34251178c70f0-5c98e1ac416cd078010d0668551f769f.png"},4589:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/b29dc520bbf07d04e31e8b3b2649dc2ded0d6a57-dd1299c70f9ebf344be59735467d4a3a.png"},4842:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/baa5c862ccb1a301c59c47f7316a1014f529a679-9f4ce523da452455162377b7d77a845a.png"},5123:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/e2b08e7cb930ddffed32724d171a9b114d3a071a-edebed6753aa78104b172a4a1447c7e2.png"},6066:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/e93ace3490f64505a1fea7713de4e6fa603ae467-1fcd9e486afe2929dea98a70298ae05b.png"},3913:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f6f9d54d3c3989b06cc286f5e4b8b912b081d38a-5a300261547b5b04522a09b6583a2089.png"}}]);