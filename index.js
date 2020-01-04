const coffee = require('coffeescript')
const upstreamTransformer = require('metro-react-native-babel-transformer')

module.exports.transform = ({ filename, options, src, plugins }) => {
  if (filename.endsWith('.coffee')) {
    const result = coffee.compile(src, {
      filename,
      bare: true,
      inline: true
    })

    return upstreamTransformer.transform({
      src: result,
      filename,
      options
    })
  } else {
    return upstreamTransformer.transform({ filename, options, src, plugins })
  }
}
