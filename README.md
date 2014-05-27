# Hull Facebook Components

Components that interact with Facebook APIs.

## Usage and Installation


### Pulling from the source 

You can directly use these components in your apps by adding this repo as a component source : 

```
Hull.init({
  appId: 'xxxx',
  orgUrl: 'https://zzzzz.hullapp.io',
  sources: {
    facebook: 'https://hull-components.github.io/facebook'
  }
})
```

### Building in your app


Please refer to our [grunt-hull-components](http://github.com/hull/grunt-hull-components) [grunt](http://gruntjs.com/) task for instructions to build hull components locally.


### Using it in Shopify

#### Adding the components source

In the Theme editor, edit `Snippets/hull.liquid` to [add the facebook source](#pulling-from-the-source).


## Components

### friends-selector

*Compatibility : hull.js >= 0.8.32, markup based on Bootstrap 3*

A visual friends selector to send Facebook Apprequests.


#### example

![friends-selector](/docs/friends-selector.png)


    <div data-hull-component="friends-selector@facebook"></div>


#### options

| Name        | Description                               | Values  |
| ----------- |:-----------------------------------------:| ----- |
| **columns**     | Number of columns to display in the grid  | default: 2 |
| **title**       | Title displayed on the header             | default: "Invite your friends" |
| **placeholder** | Placeholder displayed in the message box  | default: "Type your invite message here !" |
| **message**     | Default message entered in the box        | default: undefined |
| **permissions** | Additional permissions to ask on login    | default: undefined |
| **redirect-to** | Redirection URL on the App Canvas when people click on the invitation | default: undefined |




## Development


Install grunt and dependencies 

    npm install -g grunt-cli
    npm install 

Start the default grunt task

    grunt
    open http://localhost:8000

To deploy to gh-pages

    grunt dist


