# Manage multiple organizations
Admins can create multiple organizations via the Asgardeo console and switch between the created organizations. Users or the applications created in one organization cannot access the other organization's resources unless they are onboarded to that organization.

The admin who creates the organization is the owner of the organization.

## Create an organization
You can create a new organization via the Asgardeo console.

1. On the Asgardeo console, click your organization name in the header.
2. Click **New Organization**.
   <img :src="$withBase('/assets/img/guides/organization/manage-organizations/create-new-organization.png')" alt="Create new organization">
3. Provide the **Organization Name**.
    ::: warning
      The organization name should be unique and you can't change the organization name once it is created. 
    :::
    <img :src="$withBase('/assets/img/guides/organization/manage-organizations/create-new-organization-form.png')" alt="Create new organization form" width="300">
4. Click **Create**.

Now a new organization is created and you can access your workspace. You can start onboarding users and applications to fulfill your organizational requirements.

## Switch between organizations

If you have multiple organizations, you can switch between them on the console.

1. On the Asgardeo console, click your organization name in the header.
2. Click **Switch Organization** to see the list of organizations you have.
   <img :src="$withBase('/assets/img/guides/organization/manage-organizations/switch-organization.png')" alt="Switch between organizations">
3. Select the required organization to make the switch.

Now you have switched to another organization on the Asgardeo console and you can access the resources available for that organization.
