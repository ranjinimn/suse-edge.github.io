"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[9611],{3597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const o={sidebar_position:8,title:"NVIDIA GPU's on SLE Micro"},a="Intro",r={id:"quickstart/nvidia-slemicro",title:"NVIDIA GPU's on SLE Micro",description:"In this guide, we'll show you how to implement host-level NVIDIA GPU support via the pre-built open-source drivers on SLE Micro 5.3+. In other words, drivers that are baked into the operating system rather than dynamically loaded by NVIDIA's GPU Operator. This configuration is highly desirable for customers that want to pre-bake all artefacts required for deployment into the image, and where the dynamic selection of the driver version is not a requirement. This guide shows how to deploy the additional components onto a pre-installed system, but the steps could also be used to create a deployment image with the software pre-baked.",source:"@site/docs/quickstart/nvidia-slemicro.md",sourceDirName:"quickstart",slug:"/quickstart/nvidia-slemicro",permalink:"/docs/quickstart/nvidia-slemicro",draft:!1,unlisted:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/quickstart/nvidia-slemicro.md",tags:[],version:"current",lastUpdatedBy:"Rhys Oxenham",lastUpdatedAt:1700122013,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"NVIDIA GPU's on SLE Micro"},sidebar:"docs",previous:{title:"RKE2 cluster with SELinux enabled",permalink:"/docs/quickstart/rke2-selinux"},next:{title:"SLE Micro vs SLE Micro for Rancher",permalink:"/docs/misc/slemicro-vs-slemicro-rancher"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Further Validation",id:"further-validation",level:2},{value:"Implementation with Kubernetes",id:"implementation-with-kubernetes",level:2},{value:"Resolving issues",id:"resolving-issues",level:2},{value:"nvidia-smi does not find the GPU",id:"nvidia-smi-does-not-find-the-gpu",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"intro",children:"Intro"}),"\n",(0,i.jsxs)(n.p,{children:["In this guide, we'll show you how to implement host-level NVIDIA GPU support via the pre-built ",(0,i.jsx)(n.a,{href:"https://github.com/NVIDIA/open-gpu-kernel-modules",children:"open-source drivers"})," on SLE Micro 5.3+. In other words, drivers that are baked into the operating system rather than dynamically loaded by NVIDIA's ",(0,i.jsx)(n.a,{href:"https://github.com/NVIDIA/gpu-operator",children:"GPU Operator"}),". This configuration is highly desirable for customers that want to pre-bake all artefacts required for deployment into the image, and where the dynamic selection of the driver version is not a requirement. This guide shows how to deploy the additional components onto a pre-installed system, but the steps could also be used to create a deployment image with the software pre-baked."]}),"\n",(0,i.jsxs)(n.p,{children:["However, should you want to utilise the GPU Operator for Kubernetes integration, it should still be possible to follow this guide and enable the GPU operator by telling it to utilise the ",(0,i.jsx)(n.em,{children:"pre-installed"})," drivers via the ",(0,i.jsx)(n.code,{children:"driver.enabled=false"})," flag in the NVIDIA GPU Operator Helm chart, where more comprehensive instructions are available ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/install-gpu-operator.html#chart-customization-options",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It's important to call out that the support for these drivers is provided by both SUSE and NVIDIA in tight collaboration, however if you have any concerns or questions about the combination in which you're utilising the drivers, then please ask your SUSE or NVIDIA account managers for further assistance. If you're planning on utilising ",(0,i.jsx)(n.a,{href:"https://www.nvidia.com/en-gb/data-center/products/ai-enterprise/",children:"NVIDIA AI Enterprise"})," (NVAIE) you will need to ensure that you're using an ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html#supported-nvidia-gpus-and-systems",children:"NVAIE certified GPU"}),", which ",(0,i.jsx)(n.em,{children:"may"})," require the use of proprietary NVIDIA drivers. If you're unsure, please speak with your NVIDIA representative."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"If you're following this guide, it's assumed that you've got the following already available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"At least one host with SLE Micro 5.3+ installed; this can be physical or virtual."}),"\n",(0,i.jsxs)(n.li,{children:["Your host(s) is/are attached to a subscription as this will be required for package access - an evaluation is available ",(0,i.jsx)(n.a,{href:"https://www.suse.com/download/sle-micro/",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"https://github.com/NVIDIA/open-gpu-kernel-modules#compatible-gpus",children:"compatible NVIDIA GPU"})," installed (or passed through to the virtual machine in which SLE Micro is running)."]}),"\n",(0,i.jsxs)(n.li,{children:["Access to the root user - these instructions assume you're the root user, and ",(0,i.jsx)(n.em,{children:"not"})," escalating your privileges via ",(0,i.jsx)(n.code,{children:"sudo"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"NOTE"}),": SUSE is in the process of ensuring that the NVIDIA drivers are part of the SLE Micro 5.3+ repositories. We can be sure that the drivers are in SLE Micro 5.5, but we may not have completed the tasks for 5.3 and 5.4 yet."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["In this section you're going to install the NVIDIA drivers directly onto the SLE Micro operating system as the NVIDIA open-driver is now part of the core SLE Micro package repositories, which makes it incredibly easy to install. In the example below we're specifically pulling the \"G06\" generation of driver, which supports the latest GPU's (please see ",(0,i.jsx)(n.a,{href:"https://en.opensuse.org/SDB:NVIDIA_drivers#Install",children:"here"})," for further information), so please ensure that you're selecting an appropriate GPU version."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, the example below calls for ",(0,i.jsx)(n.em,{children:"535.86.05"})," of the driver; please make sure that the driver version that you're selecting is compatible with your GPU, and in addition meets the CUDA requirements (if applicable) by checking ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/",children:"here"}),". It's also advisable to check the ",(0,i.jsx)(n.a,{href:"http://download.nvidia.com/suse/sle15sp4/x86_64/",children:"NVIDIA SLE15-SP4 repository"})," to ensure that the driver version that you've chosen has an equivalent ",(0,i.jsx)(n.code,{children:"nvidia-compute-utils-G06"})," package with the same version string; this repository is regularly refreshed by NVIDIA, but the versions need to match; there's a possibility that we have a newer driver version in the SUSE repo than NVIDIA has in theirs (or vice versa), so it's important to match the versions here."]}),"\n",(0,i.jsxs)(n.p,{children:["When you've confirmed the above, you're ready to install the packages on the host operating system, and for this we need to open up a ",(0,i.jsx)(n.code,{children:"transactional-update"})," session, which creates a new read/write snapshot of the underlying operating system so we can make changes to the immutable platform (for further instructions on ",(0,i.jsx)(n.code,{children:"transactional-update"})," see ",(0,i.jsx)(n.a,{href:"https://documentation.suse.com/sle-micro/5.4/html/SLE-Micro-all/sec-transactional-udate.html",children:"here"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"transactional-update shell\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When you're in your ",(0,i.jsx)(n.code,{children:"transactional-update"})," shell, add the additional required package repositories from NVIDIA; this will allow us to pull in additional utilities, e.g. ",(0,i.jsx)(n.code,{children:"nvidia-smi"}),", along with access to CUDA packages that you may want to utilise:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"zypper ar https://developer.download.nvidia.com/compute/cuda/repos/sles15/x86_64/ nvidia-sle15sp4-cuda\nzypper ar https://download.nvidia.com/suse/sle15sp4/ nvidia-sle15sp4-main\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can then install the driver and the ",(0,i.jsx)(n.code,{children:"nvidia-compute-utils"})," for additional utilities:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"zypper install -y nvidia-open-driver-G06-signed-kmp=535.86.05 kernel-firmware-nvidia-gspx-G06 nvidia-compute-utils-G06\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"NOTE: If this fails to install it's likely that there's a dependency mismatch between the selected driver version and what NVIDIA is shipping in their repositories - please revisit the section above to validate that your versions match. You may want to attempt to install a different driver version."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Next, if you're ",(0,i.jsx)(n.em,{children:"not"})," using a supported GPU, remembering that the list can be found ",(0,i.jsx)(n.a,{href:"https://github.com/NVIDIA/open-gpu-kernel-modules#compatible-gpus",children:"here"}),", you can see if the driver will work by enabling support at the module level, but your mileage may vary -- skip this step if you're using a ",(0,i.jsx)(n.em,{children:"supported"})," GPU:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sed -i '/NVreg_OpenRmEnableUnsupportedGpus/s/^#//g' /etc/modprobe.d/50-nvidia-default.conf\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now that you've installed these packages, it's time to exit the ",(0,i.jsx)(n.code,{children:"transactional-update"})," session:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"exit\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["NOTE: Please make sure that you've exited the ",(0,i.jsx)(n.code,{children:"transactional-update"})," session before proceeding!"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now that you've got your drivers installed, it's time to reboot, as SLE Micro is an immutable operating system it needs to reboot into the new snapshot that you created in a previous step; the drivers are only installed into this new snapshot, and hence it's not possible to load the drivers without rebooting into this new snapshot, which will happen automatically. Issue the reboot command when you're ready:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"reboot\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the system has rebooted successfully, log back in and try to use the ",(0,i.jsx)(n.code,{children:"nvidia-smi"})," tool to verify that the driver is loaded successfully and that it's able to both access and enumerate your GPU(s):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nvidia-smi\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output of this command should show you something similar to the following output, noting that in the example below we have two GPU's:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Mon Sep 18 06:58:12 2023\n+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 535.86.05              Driver Version: 535.86.05    CUDA Version: 12.2     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |\n|                                         |                      |               MIG M. |\n|=========================================+======================+======================|\n|   0  NVIDIA A100-PCIE-40GB          Off | 00000000:17:00.0 Off |                    0 |\n| N/A   29C    P0              35W / 250W |      4MiB / 40960MiB |      0%      Default |\n|                                         |                      |             Disabled |\n+-----------------------------------------+----------------------+----------------------+\n|   1  NVIDIA A100-PCIE-40GB          Off | 00000000:CA:00.0 Off |                    0 |\n| N/A   30C    P0              33W / 250W |      4MiB / 40960MiB |      0%      Default |\n|                                         |                      |             Disabled |\n+-----------------------------------------+----------------------+----------------------+\n\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n|  No running processes found                                                           |\n+---------------------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"...and that's it! You've successfully installed and verified that the NVIDIA drivers are loaded into SLE Micro."}),"\n",(0,i.jsx)(n.h2,{id:"further-validation",children:"Further Validation"}),"\n",(0,i.jsxs)(n.p,{children:["At this stage, all we've been able to verify is that at the host level the NVIDIA device can be accessed and that the drivers are loading successfully. However, if we want to be sure that it's functioning, a simple test would be to try and validate that the GPU can take instruction from a user-space application, ideally via a container, and through the CUDA library, as that's typically what a real workload would utilise. For this, we can make a further modification to the host OS by installing the ",(0,i.jsx)(n.code,{children:"nvidia-container-toolkit"}),". First, open up another ",(0,i.jsx)(n.code,{children:"transactional-update"})," shell, noting that we could have done this in a single transaction in the previous step, but to many (e.g. customers wanting to use Kubernetes) this step won't be required:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"transactional-update shell\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, install the ",(0,i.jsx)(n.code,{children:"nvidia-container-toolkit"})," package, which comes from one of the repo's that we configured in a previous step. Note that this command will initially appear to fail as it has a dependency on ",(0,i.jsx)(n.code,{children:"libseccomp"}),", whereas this package is ",(0,i.jsx)(n.code,{children:"libseccomp2"}),' in SLE Micro, so you can safely select the second option ("break dependencies") here:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"zypper in install nvidia-container-toolkit\n"})}),"\n",(0,i.jsx)(n.p,{children:"Your output should look like the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Refreshing service 'SUSE_Linux_Enterprise_Micro_5.4_x86_64'.\nRefreshing service 'SUSE_Linux_Enterprise_Micro_x86_64'.\nRefreshing service 'SUSE_Package_Hub_15_SP4_x86_64'.\nLoading repository data...\nReading installed packages...\nResolving package dependencies...\n\nProblem: nothing provides 'libseccomp' needed by the to be installed nvidia-container-toolkit-1.14.1-1.x86_64\n Solution 1: do not install nvidia-container-toolkit-1.14.1-1.x86_64\n Solution 2: break nvidia-container-toolkit-1.14.1-1.x86_64 by ignoring some of its dependencies\n\nChoose from above solutions by number or cancel [1/2/c/d/?] (c): 2\n(...)\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"NOTE: We're working on fixing this dependency issue, so this should be a lot cleaner in the coming weeks."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When you're ready, you can exit the ",(0,i.jsx)(n.code,{children:"transactional-update"})," shell:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"exit\n"})}),"\n",(0,i.jsx)(n.p,{children:"...and reboot the machine into the new snapshot:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"reboot\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["NOTE: As before, you will need to ensure that you've exited the ",(0,i.jsx)(n.code,{children:"transactional-shell"})," and rebooted the machine for your changes to be enacted."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now that the machine has rebooted, you can validate that the system is able to successfully enumerate the devices via the NVIDIA container toolkit (the output should be verbose, and it should provide a number of INFO and WARN messages, but no ERROR messages):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When ready, you can then run a podman-based container (doing this via ",(0,i.jsx)(n.code,{children:"podman"})," gives us a good way of validating access to the NVIDIA device from within a container, which should give confidence for doing the same with Kubernetes), giving it access to the labelled NVIDIA device(s) that were taken care of by the previous command, based on ",(0,i.jsx)(n.a,{href:"https://registry.suse.com/bci/bci-base-15sp5/index.html",children:"SLE BCI"})," and simply running bash:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"podman run --rm --device nvidia.com/gpu=all --security-opt=label=disable -it registry.suse.com/bci/bci-base:latest bash\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When we're in the temporary podman container we can install the required CUDA libraries, again checking the correct CUDA version for your driver ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/",children:"here"})," although the previous output of ",(0,i.jsx)(n.code,{children:"nvidia-smi"})," should show the required CUDA version. In the example below we're installing ",(0,i.jsx)(n.em,{children:"CUDA 12.1"})," and we're pulling a large number of examples, demo's, and development kits so you can fully validate the GPU:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"zypper ar http://developer.download.nvidia.com/compute/cuda/repos/sles15/x86_64/ cuda-sle15-sp4\nzypper in -y cuda-libraries-devel-12-1 cuda-minimal-build-12-1 cuda-demo-suite-12-1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once this has been installed successfully, don't exit from the container, we'll run the ",(0,i.jsx)(n.code,{children:"deviceQuery"})," CUDA example, which will comprehensively validate GPU access via CUDA, and from within the container itself:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"/usr/local/cuda-12/extras/demo_suite/deviceQuery\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If successful, you should see output that shows similar to the following, noting the ",(0,i.jsx)(n.code,{children:"Result = PASS"})," message at the end of the command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'/usr/local/cuda-12/extras/demo_suite/deviceQuery Starting...\n\n CUDA Device Query (Runtime API) version (CUDART static linking)\n\nDetected 2 CUDA Capable device(s)\n\nDevice 0: "NVIDIA A100-PCIE-40GB"\n  CUDA Driver Version / Runtime Version          12.2 / 12.1\n  CUDA Capability Major/Minor version number:    8.0\n  Total amount of global memory:                 40339 MBytes (42298834944 bytes)\n  (108) Multiprocessors, ( 64) CUDA Cores/MP:     6912 CUDA Cores\n  GPU Max Clock rate:                            1410 MHz (1.41 GHz)\n  Memory Clock rate:                             1215 Mhz\n  Memory Bus Width:                              5120-bit\n  L2 Cache Size:                                 41943040 bytes\n  Maximum Texture Dimension Size (x,y,z)         1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)\n  Maximum Layered 1D Texture Size, (num) layers  1D=(32768), 2048 layers\n  Maximum Layered 2D Texture Size, (num) layers  2D=(32768, 32768), 2048 layers\n  Total amount of constant memory:               65536 bytes\n  Total amount of shared memory per block:       49152 bytes\n  Total number of registers available per block: 65536\n  Warp size:                                     32\n  Maximum number of threads per multiprocessor:  2048\n  Maximum number of threads per block:           1024\n  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)\n  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)\n  Maximum memory pitch:                          2147483647 bytes\n  Texture alignment:                             512 bytes\n  Concurrent copy and kernel execution:          Yes with 3 copy engine(s)\n  Run time limit on kernels:                     No\n  Integrated GPU sharing Host Memory:            No\n  Support host page-locked memory mapping:       Yes\n  Alignment requirement for Surfaces:            Yes\n  Device has ECC support:                        Enabled\n  Device supports Unified Addressing (UVA):      Yes\n  Device supports Compute Preemption:            Yes\n  Supports Cooperative Kernel Launch:            Yes\n  Supports MultiDevice Co-op Kernel Launch:      Yes\n  Device PCI Domain ID / Bus ID / location ID:   0 / 23 / 0\n  Compute Mode:\n     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >\n\nDevice 1: "NVIDIA A100-PCIE-40GB"\n  CUDA Driver Version / Runtime Version          12.2 / 12.1\n  CUDA Capability Major/Minor version number:    8.0\n  Total amount of global memory:                 40339 MBytes (42298834944 bytes)\n  (108) Multiprocessors, ( 64) CUDA Cores/MP:     6912 CUDA Cores\n  GPU Max Clock rate:                            1410 MHz (1.41 GHz)\n  Memory Clock rate:                             1215 Mhz\n  Memory Bus Width:                              5120-bit\n  L2 Cache Size:                                 41943040 bytes\n  Maximum Texture Dimension Size (x,y,z)         1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)\n  Maximum Layered 1D Texture Size, (num) layers  1D=(32768), 2048 layers\n  Maximum Layered 2D Texture Size, (num) layers  2D=(32768, 32768), 2048 layers\n  Total amount of constant memory:               65536 bytes\n  Total amount of shared memory per block:       49152 bytes\n  Total number of registers available per block: 65536\n  Warp size:                                     32\n  Maximum number of threads per multiprocessor:  2048\n  Maximum number of threads per block:           1024\n  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)\n  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)\n  Maximum memory pitch:                          2147483647 bytes\n  Texture alignment:                             512 bytes\n  Concurrent copy and kernel execution:          Yes with 3 copy engine(s)\n  Run time limit on kernels:                     No\n  Integrated GPU sharing Host Memory:            No\n  Support host page-locked memory mapping:       Yes\n  Alignment requirement for Surfaces:            Yes\n  Device has ECC support:                        Enabled\n  Device supports Unified Addressing (UVA):      Yes\n  Device supports Compute Preemption:            Yes\n  Supports Cooperative Kernel Launch:            Yes\n  Supports MultiDevice Co-op Kernel Launch:      Yes\n  Device PCI Domain ID / Bus ID / location ID:   0 / 202 / 0\n  Compute Mode:\n     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >\n> Peer access from NVIDIA A100-PCIE-40GB (GPU0) -> NVIDIA A100-PCIE-40GB (GPU1) : Yes\n> Peer access from NVIDIA A100-PCIE-40GB (GPU1) -> NVIDIA A100-PCIE-40GB (GPU0) : Yes\n\ndeviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 12.2, CUDA Runtime Version = 12.1, NumDevs = 2, Device0 = NVIDIA A100-PCIE-40GB, Device1 = NVIDIA A100-PCIE-40GB\nResult = PASS\n'})}),"\n",(0,i.jsx)(n.p,{children:"From here, you can continue to run any other CUDA workload - you can utilise compilers, and any other aspect of the CUDA ecosystem to run some further tests. When you're done you can exit from the container, noting that whatever you've installed in there is ephemeral (so will be lost!), and hasn't impacted the underlying operating system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"exit\n"})}),"\n",(0,i.jsx)(n.h2,{id:"implementation-with-kubernetes",children:"Implementation with Kubernetes"}),"\n",(0,i.jsx)(n.p,{children:"(Coming soon!)"}),"\n",(0,i.jsx)(n.h2,{id:"resolving-issues",children:"Resolving issues"}),"\n",(0,i.jsx)(n.h3,{id:"nvidia-smi-does-not-find-the-gpu",children:"nvidia-smi does not find the GPU"}),"\n",(0,i.jsxs)(n.p,{children:["Check the kernel messages using ",(0,i.jsx)(n.code,{children:"dmesg"}),". In case this indicates that it fails to allocate ",(0,i.jsx)(n.code,{children:"NvKMSKapDevice"}),", then apply the unsupported GPU workaround:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"transactional-update run sed -i '/NVreg_OpenRmEnableUnsupportedGpus/s/^#//g' /etc/modprobe.d/50-nvidia-default.conf\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"NOTE"}),": You will need to reboot at this stage."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);