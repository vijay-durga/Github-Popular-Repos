import './index.css'

const LanguageFilterItem = props => {
  const {each, onClicking} = props
  const {id, language} = each

  const onClickingLanguage = () => {
    onClicking(id)
  }

  return (
    <li className="language-list-Container">
      <button type="button" className="button" onClick={onClickingLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
