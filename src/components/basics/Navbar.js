import React from 'react'
const Navbar = ({filterItem,menuList}) => {
  return (
    <>
        <div className='main-logo'>
            <img src='./restlogo.jpg'alt='logo'/>
        </div>
        <nav className="navbar">
          <div className="btn-group">
            {
              menuList.map((curElm)=>{
                return(
                  <button className="btn-group_item" onClick={() => filterItem (curElm)}> {curElm} </button>
                )
              })
            }
          </div>
        </nav>
    </>
  )
}

export default Navbar;