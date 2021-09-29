import './Header.css'
import { useState, useEffect } from 'react'
import icon from '../../images/header/Shortly.svg'
import iconMenu from '../../images/header/menu.svg'

function Header() {
  const [openMain, setOpenMain] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)

  function menuView() {
    let screenWidth = document.documentElement.clientWidth
    if (screenWidth < 1440) {
      setOpenMain(false)
      setOpenMenu(true)
    } else if (screenWidth >= 1440) {
      setOpenMain(true)
      setOpenMenu(false)
    }
  }

  function discloseMenu() {
    setOpenMain(!openMain)
  }

  window.addEventListener('resize', () => {
    menuView()
  })

  useEffect(() => {
    menuView()
  }, [])

  return (
    <div className="header">
      <img className="header__logo" src={icon} alt="icon" />
      {openMain && (
        <div className="header__main">
          <ul className="header__list">
            <li className="header__item">
              <a
                className="header__link"
                href="https://www.google.com/"
                target="blank"
              >
                Features
              </a>
            </li>
            <li className="header__item">
              <a
                className="header__link"
                href="https://www.google.com/"
                target="blank"
              >
                Pricing
              </a>
            </li>
            <li className="header__item">
              <a
                className="header__link"
                href="https://www.google.com/"
                target="blank"
              >
                Resources
              </a>
            </li>
          </ul>
          <div className="header__authorization">
            <a
              className="header__sign-in"
              href="https://www.google.com/"
              target="blank"
            >
              Login
            </a>
            <a
              className="header__sign-up"
              href="https://www.google.com/"
              target="blank"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
      {openMenu && (
        <img
          className="header__menu"
          src={iconMenu}
          alt="menu"
          onClick={discloseMenu}
        />
      )}
    </div>
  )
}

export default Header
