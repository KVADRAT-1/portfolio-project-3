import './Statistics.css'
import CompressionForm from './CompressionForm/CompressionForm.js'
import ListLink from './ListLinks/ListLinks.js'

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
    </div>
  )
}

export default Statistics
