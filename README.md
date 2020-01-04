# react-native-coffeescript-transformer

Seamlessly use Coffeescript 2.x with react-native >= 0.45

### Step 1: Install

    yarn add --dev react-native-coffeescript-transformer coffeescript

### Step 2: Configure the react native packager

#### RN >= 0.59

In your projects root, extend `metro.config.js` so it contains the `transformer.babelTransformerPath` property:

```js
module.exports = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-coffeescript-transformer'
    )
  },
  resolver: {
    sourceExts: ['js', 'coffee']
  }
}
```

#### RN >= 0.57, < 0.59

Add this to your `rn-cli.config.js` (make one if you don't have one already):

```js
module.exports = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-coffeescript-transformer'
    )
  },
  resolver: {
    sourceExts: ['js', 'coffee']
  }
}
```

#### RN < 0.57

Add this to your `rn-cli.config.js` (make one if you don't have one already):

```js
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-coffeescript-transformer')
  },
  getSourceExts() {
    return ['js', 'coffee']
  }
}
```

### Step 3: Write Coffeescript code!

Note that the platform-specific index files (index.ios.js, index.android.js, etc)
still need to be .js files, but everything else can be Coffeescript.

# Acknowledgements

[React Native Typescript Transformer](https://github.com/ds300/react-native-typescript-transformer) for showing me how this could be done, and inspiration for documentation
