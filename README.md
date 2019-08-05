# browser-fingerprint

The library generates and returns a unique identifier and other data of a browser without using cookies or any information that can be easily reset by a malicious user. 
browser-fingerprint returns a client object to find out as much useful information as you can about what devices are connecting to your site and your product. There are specific informations like, “does the user have an iOS or Android device?” or better yet, “is the user's device an iPad?”

Browser-fingerprint attempts to solve the problem of making client data more easily available. Good data is necessary for good analytics that help you make better business and tech choices. Do you have good informative data about how your users connect to your site? Do you know their average screen size? BF can help you collect data and make good decisions for your application and business.

## Project setup
  ```
  npm install
  ```
## Compiles and hot-reloads for development
  ```
  npm run serve
  ```
## Compiles and minifies for production
  ```
  npm run build
  ```
## Usage
```
import Fingerprint from '../node_modules/@hajnalandor/browser-fingerprint/dist/fingerprint' 
...
...
console.log(Fingerprint.create());
```
