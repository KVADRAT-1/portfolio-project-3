import './CompressionForm.css'

function CompressionForm({
  addItemLink,
  textInput,
  setTextInput,
  errorInput,
  dirty,
  setDirty,
}) {
  return (
    <form className="CompressionForm" onSubmit={addItemLink}>
      <div className="CompressionForm__input-box">
        <input
          className="CompressionForm__input"
          placeholder="Shorten a link here..."
          type="text"
          value={textInput}
          onBlur={() => {
            setDirty(true)
          }}
          onChange={e => {
            setTextInput(e.target.value)
          }}
        ></input>
        {dirty && errorInput && (
          <span className="CompressionForm__error">Please add a link</span>
        )}
      </div>
      <button className="CompressionForm__button">Shorten It!</button>
    </form>
  )
}

export default CompressionForm
