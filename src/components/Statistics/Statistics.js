import './Statistics.css'
import CompressionForm from './CompressionForm/CompressionForm.js'
import ListLink from './ListLinks/ListLinks.js'
import BlockText from './BlockText/BlockText.js'
import BlockBoxs from './BlockBoxs/BlockBoxs.js'

function Statistics({
  links,
  addItemLink,
  textInput,
  setTextInput,
  errorInput,
  dirty,
  setDirty,
}) {
  return (
    <div className="Statistics">
      <CompressionForm
        addItemLink={addItemLink}
        textInput={textInput}
        setTextInput={setTextInput}
        errorInput={errorInput}
        dirty={dirty}
        setDirty={setDirty}
      />
      <ListLink links={links} />
      <BlockText />
      <BlockBoxs />
    </div>
  )
}

export default Statistics
