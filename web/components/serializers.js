import EmbedHTML from './EmbedHTML'
import Figure from './Figure'
import BlockRenderer from './BlockRenderer'

const serializers = {
  types: {
    embedHTML: EmbedHTML,
    figure: Figure,
    block: BlockRenderer
  }
}

export default serializers
