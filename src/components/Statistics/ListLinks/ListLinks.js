import './ListLinks.css'
import ItemLink from './ItemLink/ItemLink.js'

function ListLinks({ links }) {
  return (
    <ul className="ListLinks">
      {links.map((link, i) => {
        return <ItemLink link={link} key={i} i={i} />
      })}
    </ul>
  )
}

export default ListLinks
