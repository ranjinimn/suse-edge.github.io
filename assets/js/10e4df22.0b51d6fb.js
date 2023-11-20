"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[7562],{8255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(5893),i=n(1151);const s={sidebar_position:2,title:"Rancher portfolio disambiguation"},a="Rancher portfolio disambiguation",o={id:"misc/rancher-disambiguation",title:"Rancher portfolio disambiguation",description:"Rancher ecosystem host a few projects under its umbrella. For newcomers it may be not easy to have a clear picture on the different products and projects. This is a humble attempt to clarify it.",source:"@site/docs/misc/rancher-disambiguation.md",sourceDirName:"misc",slug:"/misc/rancher-disambiguation",permalink:"/docs/misc/rancher-disambiguation",draft:!1,unlisted:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/misc/rancher-disambiguation.md",tags:[],version:"current",lastUpdatedBy:"Alberto Morgante Medina",lastUpdatedAt:1683196370,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Rancher portfolio disambiguation"},sidebar:"docs",previous:{title:"SLE Micro vs SLE Micro for Rancher",permalink:"/docs/misc/slemicro-vs-slemicro-rancher"},next:{title:"Modify SLE Micro ISO (or any SLE ISO)",permalink:"/docs/misc/modify-sle-micro-iso"}},l={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Rancher",id:"rancher",level:3},{value:"Fleet",id:"fleet",level:3},{value:"Elemental",id:"elemental",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Kubernetes distributions",id:"kubernetes-distributions",level:3},{value:"K3Ss",id:"k3ss",level:3},{value:"RKE (or RKE1)",id:"rke-or-rke1",level:3},{value:"RKE2",id:"rke2",level:3},{value:"RKE2 using Air-gap install",id:"rke2-using-air-gap-install",level:3},{value:"Rancher vs K3s vs RKE",id:"rancher-vs-k3s-vs-rke",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rancher-portfolio-disambiguation",children:"Rancher portfolio disambiguation"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.rancher.com/",children:"Rancher"})," ecosystem host a few projects under its umbrella. For newcomers it may be not easy to have a clear picture on the different products and projects. This is a humble attempt to clarify it."]}),"\n",(0,r.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,r.jsx)(t.p,{children:"RKE1, RKE2 and K3s are flavours of Kubernetes, Rancher Manager can be used to manage and provision different deployments of Kubernetes itself with a primary focus on RKE1/RKE2, Fleet can watch Git Repositories, detect changes and tell Kubernetes what it needs to be running, Elemental considers a specific approach to provisioning Kubernetes in Edge scenarios where the provisioning can be preloaded at the OS level for Rancher Manager to control later"}),"\n",(0,r.jsx)(t.h3,{id:"rancher",children:"Rancher"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.rancher.com/products/rancher",children:"Rancher"})," (or Rancher Manager) is a multi cluster management solution for provisioning, managing and accessing multiple downstream kubernetes clusters.\nTo provision new clusters Rancher can interact with different infrastructure and virtualization tools (vSphere/AWS etc) as an api client, request VMs and networks and setup a kubernetes cluster inside of those, it also works with bare metal machines by generating an join command you an run each time."]}),"\n",(0,r.jsx)(t.h3,{id:"fleet",children:"Fleet"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://fleet.rancher.io/",children:"Fleet"})," is usually a component of ",(0,r.jsx)(t.a,{href:"https://www.rancher.com/products/rancher",children:"Rancher"})," (although it can be used independently) that allows you to use a GitOps workflow for multi-cluster (i.e it allows you to define your git repositories and the clusters they should apply to at the management cluster level)."]}),"\n",(0,r.jsx)(t.h3,{id:"elemental",children:"Elemental"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://elemental.docs.rancher.com/",children:"Elemental"})," is a way to automatically deploy/register new clusters and manage the OS of their node, you can define clusters and their nodes on the management cluster then generate an OS installer image, when booting your node from that image it will install the node, register it to the manager and configure it for its role in the local cluster. This is the SUSE/Rancher way of doing zero touch provisioning.\nElemental takes a different view of cluster provisioning focused on Edge deployments, typically Rancher services datacentre deployments of Kubernetes with enterprise servers etc; in an Edge scenario e.g. factory or cruise ship theres no guarantee of access for Rancher to contact and provision a cluster directly (i.e. limited bandwidth, firewalls etc) - Elemental instead is used to preload an operating system with all the information needed to set the cluster up, you can install that into the servers that you want to cluster and then it will reach back to Rancher to be under management at that point"]}),"\n",(0,r.jsx)(t.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://kubernetes.io/",children:"Kubernetes"})," as a standard and core technology is really a cross industry effort like Linux and has become core to DevOps as a cultural movement - as it enables defining and deploying your infrastructure as code and with lots of automation for extensive business continuity and high availability"]}),"\n",(0,r.jsx)(t.p,{children:"Kubernetes is a receptacle though - it runs what you tell it to run, usually people use automation to tell it what to do and this requires some kind of application to detect application configuration and apply it to Kubernetes - usually this is fulfilled through developer pipelines (CI/CD) where things are deployed as they are developed"}),"\n",(0,r.jsx)(t.h3,{id:"kubernetes-distributions",children:"Kubernetes distributions"}),"\n",(0,r.jsx)(t.p,{children:"Kubernetes Distributions, like Linux OSes, come in different flavours, RKE and RKE2 are two different flavours of Kubernetes in this manner; but like Ubuntu vs SUSE do for an OS they are ultimately just packaging an implementation of Kubernetes. Other examples include EKS,AKS and GKE which are flavours produced by AWS, Azure and GCP respectively. When we say a kubernetes cluster we mean a specific instance of a distribution installed on servers that are managed as a group (each server being a node in the cluster)"}),"\n",(0,r.jsx)(t.h3,{id:"k3ss",children:"K3Ss"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://docs.k3s.io/",children:"K3s"})," is a fully compliant and lightweight Kubernetes distribution focused on Edge, IoT, ARM or just for situations where a PhD in K8s clusterology is infeasible"]}),"\n",(0,r.jsx)(t.h3,{id:"rke-or-rke1",children:"RKE (or RKE1)"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.rancher.com/products/rke",children:"Rancher Kubernetes Engine"})," is a Kubernetes distribution that uses an older architecture and relies on Docker Engine to run containers"]}),"\n",(0,r.jsx)(t.h3,{id:"rke2",children:"RKE2"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://docs.rke2.io/",children:"RKE2"})," also known as RKE Government, is Rancher's next-generation Kubernetes distribution that uses a newer architecture based on ContainerD.\nRKE2 combines the best-of-both-worlds from the 1.x version of RKE (hereafter referred to as RKE1) and K3s.\nFrom K3s, it inherits the usability, ease-of-operations, and deployment model.\nFrom RKE1, it inherits close alignment with upstream Kubernetes. In places K3s has diverged from upstream Kubernetes in order to optimize for edge deployments, but RKE1 and RKE2 can stay closely aligned with upstream."]}),"\n",(0,r.jsx)(t.h3,{id:"rke2-using-air-gap-install",children:"RKE2 using Air-gap install"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://docs.rke2.io/install/airgap",children:"air-gap install"})," is an RKE2 Installation where all package dependencies are installed using two different methods. Using the tarball release 'rke2-airgap-images' or by using a private registry and passing the parameter 'system-default-registry' during the installation to point directly to the private registry where images are located (as a mirror for docker.io)"]}),"\n",(0,r.jsx)(t.h3,{id:"rancher-vs-k3s-vs-rke",children:"Rancher vs K3s vs RKE"}),"\n",(0,r.jsx)(t.p,{children:"You don\u2019t need Rancher to set up K3s or RKE1 or RKE2 on their own it just makes the whole process easier.\nRancher runs as a Management Interface that can interact with running clusters and also provision new clusters - as well as manage authentication to the downstream clusters, and it can also do other things like interact with applications that kubernetes is orchestrating and provides monitoring tools"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(7294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);