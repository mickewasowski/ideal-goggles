

function DetailsAndBtns(){

    return(
        <section class="details-and-buttons-container">
          <div class="details">
            <div class="headings">
              <h3 id="sneaker-h3">Sneaker Company</h3>
              <h1 id="limited-h1">Fall Limited Edition Sneakers</h1>
            </div>
            <div class="description">
              <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
              </p>
            </div>
            <div class="price">
              <div class="current-price">
                <p>$125.00</p>
                <p>50%</p>
              </div>
              <div class="original-price">
                <p>$250.00</p>
              </div>
            </div>
          </div>
          <div class="cart-buttons">
            <div class="quantity-buttons">
              <span id="decrement" onclick="decrement()">
                <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a" />
                  </defs>
                  <use fill="#FF7E1B" fill-rule="nonzero" />
                </svg>
              </span>
              <input id="quantity" value="0" type="number" min="0"></input>
              <span id="increment" onclick="increment()">
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      id="b" />
                  </defs>
                  <use fill="#FF7E1B" fill-rule="nonzero" />
                </svg>
              </span>
            </div>
            <div class="add-to-cart-btn">
              <img src="./images/icon-cart.svg" />
              <button onclick="addToCart()">
                Add to cart
              </button>
            </div>
          </div>
        </section>
    )
}

export default DetailsAndBtns;