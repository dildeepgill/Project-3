import Stars from "../reuseable/Stars";

function Cart({ cart, amountChanged, remove }) {
  function price(game) {
    let price = 0;
    return (price += game.amount * game.metacritic);
  }

  function totalPrice() {
    let totalPrice = 0;
    for (let price of cart) {
      totalPrice += price.amount * price.metacritic;
    }
    return totalPrice;
  }

  return (
    <>
      {cart.length === 0 ? (
        <h2 className="no-games"> No games in cart :(</h2>
      ) : null}
      <section className="cart">
        {cart.map((game, index) => {
          return (
            <>
              <div className="games-container cart-space">
                <figure className="games-size cart-img-size">
                  <img src={game.background_image} alt="" />
                </figure>
                <div className="cart-info">
                  <p className="cart-name">{game.name}</p>

                  <p className="cart-name">
                    <Stars rating={game.rating} key={game.id} />
                  </p>
                  <p className="cart-name">Price: {price(game)}</p>
                  <div
                    className="cart-remove cart-name"
                    onClick={() => remove(game.id)}
                  >
                    Remove
                  </div>
                </div>
                <input
                  onChange={(event) => amountChanged(game, event.target.value)}
                  type="number"
                  value={game.amount}
                  min="0"
                  max="50"
                  key={index}
                />
              </div>
            </>
          );
        })}
        {cart.length !== 0 && (
          <div className="cart-total">Total: {totalPrice()}</div>
        )}
      </section>
    </>
  );
}

export default Cart;
