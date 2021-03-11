# Single Page Application: Angular

A single page application is a web application that runs most of the application logic on the web browser. The browser does not need to reload the entire page when the user interacts with the application. This means that most components on the web page remain the same while a few elements change. 


## Register an application

1. On the Asgardeo console, click **Develop > Applications**. 

2. Click **New Application**.

3. Select **Single Page Application**. 

    > At this point, you can decide whether to integrate your own Angular application or download an Angular Asgardeo sample application and try out the flow. 

4. Fill in the following details. 

    - Name: A unique name to identify your application.
    E.g., MyApp

    - Authorized Redirect URLs: The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated, and where the user is redirected to once the logout is complete.
    E.g., https://myapp.io/login

    ::: tip
    If you want to use a sample application to try out the Angular SPA flow, click **Add Now** to use the authorized redirect URL for the sample app. 
    :::

5. Click **Register**. 

6. On the **Quick Start** tab, click **Angular**.

7. Select the path you want to follow and follow the steps given on the console to get started. 
    - **Integrate your application**: If you have an existing Angular application that you want to integrate with Asgardeo, select this option. 
    - **Try out a sample**: If you want to try out the flow and see how it works with a sample Angular application, select this option. 

You have successfully set up a single page angular application with basic configurations! 


## What's next?

See [configure a single page application](../configure-spa) to configure more settings for your application. 