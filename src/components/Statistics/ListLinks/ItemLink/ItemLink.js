import './ItemLink.css'

function ItemLink({ link, i }) {
  function cutLink() {
    if (link.length < 25) {
      return link
    } else {
      const text = link.slice(0, 30)
      return `${text}...`
    }
  }

  function cutShortLink() {
    if (link.length < 25) {
      return link
    } else {
      const text = link.slice(0, 30)
      return `${text}...`
    }
  }

  return (
    <li className="ItemLink__item">
      <p className="ItemLink__text-link ItemLink__text">{cutLink()}</p>
      <p className="ItemLink__text-short-link ItemLink__text">
        {cutShortLink()}
      </p>
      <button className="ItemLink__button">Copy</button>
    </li>
  )
}

export default ItemLink
