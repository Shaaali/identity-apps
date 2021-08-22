# Multi-Factor Authentication

Multi-Factor Authentication (MFA) allows you to grant access to your resources by using two (2-Factor) or more (Multi-Factor) factors to authenticate users. If one factor is compromised or broken, an attacker still has at least one more barrier to breach before successfully breaking into the resource. Hence, MFA provides an additional layer of security to the resource.

Authentication factors in MFA relies on two or more independent credentials of the below three categories.

- **Knowledge factor**  - Something you know, such as passwords or PIN.
- **Possession factor** - Something you have, such as a FIDO key or an ATM card.
- **Inherence factor**  - Something you are, such as a fingerprint or iris pattern.

In Asgardeo, the default authentication mechanism is **username and password**. 
  <img class="borderless-img" :src="$withBase('/assets/img/guides/mfa/one-factor-auth.png')" alt="Configuring only username and password authentication">

The Asgardeo Console allows configuring multi-step authentication where you can define an authentication chain containing different authenticators in each steps. By adding different authenticators, you can achieve a MFA login flow. 
 <img class="borderless-img" :src="$withBase('/assets/img/guides/mfa/mfa-config.png')" alt="Configuring MFA with username and password authentication">
 
You can replace **username and password** authentication with some social or enterprise logins and add some multi-factor authenticators to build your authentication chain.

## Configure multi-factor authentication

1. In the Asgardeo Console, navigate to **Develop > Applications** and select the application to add MFA.
2. Go to **Sign-in Method** and select the **step** to add the multi-factor authenticators.
3. Select an MFA.
    <img :src="$withBase('/assets/img/guides/mfa/totp/add-totp-authenticator.png')" alt="Configuring TOTP authenticator in Asgardeo">
4. Click **Update**.
