(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{428:function(t,a,e){"use strict";e.r(a);var s=e(56),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"using-micronaut-with-nubesgen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-micronaut-with-nubesgen"}},[t._v("#")]),t._v(" Using Micronaut with NubesGen")]),t._v(" "),e("p",[t._v("This documentation is for running Micronaut applications with NubesGen. There are two other options that might interest you:")]),t._v(" "),e("ul",[e("li",[t._v("You can also use "),e("RouterLink",{attrs:{to:"/runtimes/java/"}},[t._v("Java with NubesGen")]),t._v(", which is similar, but does not use the specific Micronaut Framework application properties.")],1),t._v(" "),e("li",[t._v("As Micronaut Framework applications can be packaged with Docker, you can also run them as "),e("RouterLink",{attrs:{to:"/runtimes/docker/"}},[t._v("Docker applications with NubesGen")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"tutorial-running-a-micronaut-launch-project-with-nubesgen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-running-a-micronaut-launch-project-with-nubesgen"}},[t._v("#")]),t._v(" Tutorial: running a Micronaut Launch project with NubesGen")]),t._v(" "),e("p",[t._v("This tutorial is similar to the "),e("RouterLink",{attrs:{to:"/runtimes/java/"}},[t._v("Java on NubesGen")]),t._v(" tutorial, as this simple Micronaut application is also a Java application.")],1),t._v(" "),e("p",[e("strong",[t._v("Prerequisites:")])]),t._v(" "),e("p",[e("em",[t._v("Tip: You can go to "),e("a",{attrs:{href:"https://aka.ms/nubesgen-azure-shell",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://aka.ms/nubesgen-azure-shell"),e("OutboundLink")],1),t._v(" to have those prerequisites installed, and run the script from a Web browser.")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Bourne-Again_shell",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bash"),e("OutboundLink")],1),t._v(", which is installed by default on most Linux distributions and on Mac OS X. If you're using Windows, one solution is to use "),e("a",{attrs:{href:"https://aka.ms/nubesgen-install-wsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://aka.ms/nubesgen-install-az-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure CLI"),e("OutboundLink")],1),t._v(". To login, use "),e("code",[t._v("az login")]),t._v(".")]),t._v(" "),e("li",[t._v("(optional) "),e("a",{attrs:{href:"https://cli.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub CLI"),e("OutboundLink")],1),t._v(". To login, use "),e("code",[t._v("gh auth login")]),t._v(".")])]),t._v(" "),e("p",[e("strong",[t._v("Steps:")])]),t._v(" "),e("ol",[e("li",[t._v("Create a sample Java Web application using "),e("a",{attrs:{href:"https://launch.micronaut.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://launch.micronaut.io/"),e("OutboundLink")],1),t._v(". Here we are requesting a Gradle build."),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request GET "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://launch.micronaut.io/create/default/com.example.micronaut-sample-app?lang=JAVA&build=GRADLE&test=JUNIT&javaVersion=JDK_11'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf -\n")])])])]),t._v(" "),e("li",[t._v("Create a project on GitHub called "),e("code",[t._v("micronaut-sample-app")]),t._v(", and push the generated project to that repository. Change "),e("code",[t._v("<your-github-account>")]),t._v(" by the name of your GitHub account:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" micronaut-sample-app\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first commit"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-github-account"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/micronaut-sample-app.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -M main\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin main\n")])])])]),t._v(" "),e("li",[t._v("In the cloned project ("),e("code",[t._v("cd micronaut-sample-app")]),t._v("), set up GitOps with NubesGen by running the NubesGen CLI ("),e("RouterLink",{attrs:{to:"/gitops/gitops-quick-start/"}},[t._v("more information here")]),t._v("):"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v(" ./nubesgen-cli-linux gitops\n")])])])],1),t._v(" "),e("li",[t._v("Use the command-line with NubesGen ("),e("RouterLink",{attrs:{to:"/reference/rest-api/"}},[t._v("more information here")]),t._v(") to generate a NubesGen configuration:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://nubesgen.com/demo.tgz?runtime=micronaut_gradle&application=app_service.standard&gitops=true"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf -\n")])])]),t._v("Or if you have chosen a Maven build, then use the following command:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://nubesgen.com/demo.tgz?runtime=micronaut&application=app_service.standard&gitops=true"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf -\n")])])])],1),t._v(" "),e("li",[t._v("Push the generated terraform and GitHub action to the "),e("code",[t._v("main")]),t._v(" branch of the repository:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" micronaut-sample-app\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Configure GitOps with NubesGen"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin main\n")])])])]),t._v(" "),e("li",[t._v("Create a new branch called "),e("code",[t._v("env-dev")]),t._v(", and push it to trigger a build:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b env-dev\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin env-dev\n")])])])]),t._v(" "),e("li",[t._v("Go to your GitHub project, and check that the GitHub Action is running.")]),t._v(" "),e("li",[t._v("You can go to the "),e("a",{attrs:{href:"https://aka.ms/nubesgen-portal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Portal"),e("OutboundLink")],1),t._v(" to check the created resources.")]),t._v(" "),e("li",[t._v("The application should be deployed on your App Service instance. Its URL should be in the form "),e("code",[t._v("https://app-demo-XXXX-XXXX-XXXX-XXXX-dev-001.azurewebsites.net/")]),t._v(', and you can also find it in the GitHub Action workflow (Job: "display-information", step "Display Azure infrastructure information"), or in the Azure portal.\nAs it is an empty application, you should get a 404 page with JSON describing the request.')]),t._v(" "),e("li",[t._v("Once you have finished, you should clean up your resources:\n"),e("ol",[e("li",[t._v("Delete the resource group that was created by NubesGen to host your resources, which is named "),e("code",[t._v("rg-demo-XXXX-XXXX-XXXX-XXXX-001")]),t._v(".")]),t._v(" "),e("li",[t._v("Delete the storage account used to store your Terraform state, in the "),e("code",[t._v("rg-terraform-001")]),t._v(" resource group.")])])])]),t._v(" "),e("h2",{attrs:{id:"tutorial-2-running-a-micronaut-guide-project-with-a-postgresql-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-2-running-a-micronaut-guide-project-with-a-postgresql-database"}},[t._v("#")]),t._v(" Tutorial 2: running a Micronaut Guide project with a PostgreSQL database")]),t._v(" "),e("p",[t._v("For this tutorial, we will take the Maven/Java Micronaut GraphQL guide project and deploy it to Azure using NubesGen GitOps.")]),t._v(" "),e("ol",[e("li",[t._v("Go to the Maven/Java version of the "),e("a",{attrs:{href:"https://guides.micronaut.io/latest/micronaut-graphql-todo-maven-java.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Micronaut Todos GraphQL guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Download the "),e("a",{attrs:{href:"https://guides.micronaut.io/latest/micronaut-graphql-todo-maven-java.html#solution",target:"_blank",rel:"noopener noreferrer"}},[t._v("solution"),e("OutboundLink")],1),t._v(" and extract it.")]),t._v(" "),e("li",[t._v("Create a project on GitHub called "),e("code",[t._v("micronaut-graphql-todo")]),t._v(" and push the downloaded project to that repository. Change "),e("code",[t._v("<your-github-account>")]),t._v(" by the name of your GitHub account:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" micronaut-graphql-todo\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first commit"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-github-account"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/micronaut-graphql-todo.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -M main\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin main\n")])])])]),t._v(" "),e("li",[t._v("In the same directory, set up GitOps with NubesGen by running the NubesGen CLI ("),e("RouterLink",{attrs:{to:"/gitops/gitops-quick-start/"}},[t._v("more information here")]),t._v("):"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v(" ./nubesgen-cli-linux gitops\n")])])])],1),t._v(" "),e("li",[t._v("Use the command-line with NubesGen ("),e("RouterLink",{attrs:{to:"/reference/rest-api/"}},[t._v("more information here")]),t._v(") to generate a NubesGen configuration:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://nubesgen.com/demo.tgz?database=postgresql&runtime=micronaut&application=app_service.standard&gitops=true"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf -\n")])])]),t._v("Or, if you are using a Gradle build, you will need to change runtime to "),e("code",[t._v("micronaut_gradle")]),t._v(" like so:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://nubesgen.com/demo.tgz?database=postgresql&runtime=micronaut_gradle&application=app_service.standard&gitops=true"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf -\n")])])])],1),t._v(" "),e("li",[t._v("Push the generated terraform and GitHub action to the "),e("code",[t._v("main")]),t._v(" branch of the repository:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Configure GitOps with NubesGen"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])])]),t._v(" "),e("li",[t._v("Create a new branch called "),e("code",[t._v("env-dev")]),t._v(", and push it to trigger a build:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b env-dev\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin env-dev\n")])])])]),t._v(" "),e("li",[t._v("Go to your GitHub project, and check that the GitHub Action is running.")]),t._v(" "),e("li",[t._v("You can go to the "),e("a",{attrs:{href:"https://aka.ms/nubesgen-portal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Portal"),e("OutboundLink")],1),t._v(" to check the created resources.")]),t._v(" "),e("li",[t._v("Once deployed, you can access the application at "),e("code",[t._v("https://app-demo-XXXX-XXXX-XXXX-XXXX-dev-001.azurewebsites.net/")]),t._v(".\nAdd a TODO to the database:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://app-demo-XXXX-XXXX-XXXX-XXXX-dev-001.azurewebsites.net/graphql'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n       -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n       --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"query":"mutation { createToDo(title:\\"Create GraphQL Guide\\", author:\\"Tim Yates\\") { id } }"}\'')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createToDo"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("List the current TODOs:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://app-demo-XXXX-XXXX-XXXX-XXXX-dev-001.azurewebsites.net/graphql'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n       -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n       --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"query":"{ toDos { title, completed, author { username } } }"}\'')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toDos"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Create GraphQL Guide"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),t._v(":false,"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"author"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tim Yates"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"10"}},[e("li",[t._v("Once you have finished, you should clean up your resources:")]),t._v(" "),e("li",[t._v("Delete the resource group that was created by NubesGen to host your resources, which is named "),e("code",[t._v("rg-demo-XXXX-XXXX-XXXX-XXXX-001")]),t._v(".")]),t._v(" "),e("li",[t._v("Delete the storage account used to store your Terraform state, in the "),e("code",[t._v("rg-terraform-001")]),t._v(" resource group.")])]),t._v(" "),e("h2",{attrs:{id:"which-azure-resources-will-be-created"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#which-azure-resources-will-be-created"}},[t._v("#")]),t._v(" Which Azure resources will be created")]),t._v(" "),e("p",[t._v("If you deploy your Micronaut application to an Azure App Service instance, NubesGen will generate:")]),t._v(" "),e("ul",[e("li",[t._v("An "),e("a",{attrs:{href:"https://aka.ms/nubesgen-app-service-plans",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure App Service plan"),e("OutboundLink")],1),t._v(" to define the type of App Service instance you will use.")]),t._v(" "),e("li",[t._v("An "),e("a",{attrs:{href:"https://aka.ms/nubesgen-app-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure App Service instance"),e("OutboundLink")],1),t._v(", configured to run Java code natively.")])]),t._v(" "),e("p",[t._v("If you deploy your Micronaut application to an Azure Function, NubesGen will generate:")]),t._v(" "),e("ul",[e("li",[t._v("An "),e("a",{attrs:{href:"https://aka.ms/nubesgen-app-service-plans",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure App Service plan"),e("OutboundLink")],1),t._v(" to define the type of Azure Functions instance you will use.")]),t._v(" "),e("li",[t._v("An "),e("a",{attrs:{href:"https://aka.ms/nubesgen-functions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Functions instance"),e("OutboundLink")],1),t._v(", configured to run Java code natively.")]),t._v(" "),e("li",[t._v("An "),e("a",{attrs:{href:"https://aka.ms/nubesgen-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Storage Account"),e("OutboundLink")],1),t._v(", to store your Java application.")])]),t._v(" "),e("h2",{attrs:{id:"maven-vs-gradle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-vs-gradle"}},[t._v("#")]),t._v(" Maven vs Gradle")]),t._v(" "),e("p",[t._v("NubesGen supports both Maven and Gradle, so you can use the build system you prefer.\nFor Maven, change "),e("code",[t._v("runtime=micronaut_gradle")]),t._v(" to "),e("code",[t._v("runtime=micronaut")]),t._v(" in Step 5 above.")]),t._v(" "),e("h2",{attrs:{id:"configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration options")]),t._v(" "),e("p",[t._v("In the generated "),e("code",[t._v("terraform/modules/app-service/main.tf")]),t._v(" file, NubesGen will configure some environment variables for your application.\nThose are standard Micronaut properties, so your Micronaut application should be automatically configured (for example: your database connection should be working out-of-the-box).")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("DATASOURCES_DEFAULT_URL")]),t._v(": the JDBC URL to your database")]),t._v(" "),e("li",[e("code",[t._v("DATASOURCES_DEFAULT_USERNAME")]),t._v(": the database user name")]),t._v(" "),e("li",[e("code",[t._v("DATASOURCES_DEFAULT_PASSWORD")]),t._v(": the database password")]),t._v(" "),e("li",[e("code",[t._v("REDIS_HOST")]),t._v(": the Redis host name")]),t._v(" "),e("li",[e("code",[t._v("REDIS_PASSWORD")]),t._v(": the Redis password")]),t._v(" "),e("li",[e("code",[t._v("REDIS_PORT")]),t._v(": the Redis port (by default "),e("code",[t._v("6380")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v("REDIS_SSL")]),t._v(": if Redis uses SSL (by default "),e("code",[t._v("true")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v("MONGODB_URI")]),t._v(": the MongoDB database URL")])])])}),[],!1,null,null,null);a.default=n.exports}}]);