import React from 'react'

const Main = () => {
  return (
    <>
      <main>
        <h1>Rick and morty</h1>
        <hr/>
        <input type="text" name="" id="txt-character" placeholder="Type your character" class="finder-character"/>
        <div id="containerCards" class="container-cards"></div>
        <div class="cart-character">
            <img src="image.png" alt="img-card"/>
         
            <div class="description-card">
                <h2>Rick And Morty</h2>
                <p>Gender: Male</p>
            </div>
        </div>
    </main>
    </>
  )
}

export default Main
