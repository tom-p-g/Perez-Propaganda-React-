import CartWidget from "./CartWidget.jsx"

const NavBar = () => {
  return (
    <div id="navBar">
        <div>Logo</div>
        <div>
            <h1>PEREZ PROPAGANDA</h1>
        </div>
        <div>
        <CartWidget />
        </div>
    </div>
  )
}

export default NavBar