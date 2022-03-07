<script>
      const products = [
            {
                  img : "https://i.imgur.com/EHyR2nP.png",
                  title : "Product 1",
                  price : 20.00
            },
            {
                  img : "https://i.imgur.com/EHyR2nP.png",
                  title : "Product 2",
                  price : 10.00
            },
            {
                  img : "https://i.imgur.com/EHyR2nP.png",
                  title : "Product 3",
                  price : 5.00
            },
            {
                  img : "https://i.imgur.com/EHyR2nP.png",
                  title : "Product 4",
                  price : 2.99
            }

      ]
</script>
<div class="productContainer py-5">
      {#each products  as product}
            <div class="product">
                  <img src={product.img} alt="Product" class="img-fluid"/>
                  <div class="d-flex justify-content-between align-items-center">
                        <div class="description">
                              <h3>{product.title}</h3>
                              <h5>${product.price}</h5>
                        </div>
                        <form action="/create-checkout-session" method="POST">
                              <button type="submit" id="checkout-button">Checkout</button>
                        </form>
                  </div>
            </div>
      {/each}
</div>

<style>

      .productContainer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
            gap: 4rem;
            justify-content: center;
            align-items: center;
            
      }

      .product {
            width: 30%;
      }



</style>