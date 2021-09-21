# Overview - MFA

Multi-Factor Authentication (MFA) allows you to grant access to your resources by using two (2-Factor) or more (Multi-Factor) factors to authenticate users. If one factor is compromised or broken, an attacker still has at least one more barrier to breach before successfully breaking into the resource. MFA provides an additional layer of security to the resource.

Authentication factors in MFA relies on two or more independent credentials of the three categories given below.

- **Knowledge factor**  - Something you know, such as a password or a PIN.
- **Possession factor** - Something you have, such as a FIDO key or an ATM card.
- **Inherence factor**  - Something you are, such as your fingerprint or your iris pattern.

In Asgardeo, the default authentication mechanism is **username and password**. 

<img class="borderless-img" :src="$withBase('/assets/img/guides/mfa/one-factor-auth.png')" alt="Configuring only username and password authentication">

The Asgardeo console allows configuring multi-step authentication where you can define an authentication chain containing different authenticators in each step. By adding different authenticators, you can achieve a login flow secured by multiple factors. 

<img class="borderless-img" :src="$withBase('/assets/img/guides/mfa/mfa-config.png')" alt="Configuring MFA with username and password authentication">
 
You can choose to replace the **username and password** authentication with social or enterprise logins and add a few more authenticators to build your authentication chain.

## Configure multi-factor authentication

1. On the Asgardeo console, navigate to **Develop > Applications** and select the application to which MFA needs to be added.
2. Go to **Sign-in Method**.
3. Select **Add Authentication** in the step that you want to add an additional factor of authentication.
3. Select a factor and click **Add**.
    <img :src="$withBase('/assets/img/guides/mfa/totp/add-totp-authenticator.png')" alt="Configuring TOTP authenticator in Asgardeo">
4. Click **Update**.