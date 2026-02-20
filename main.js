// Function for Discount Button
function buttonDiscount () {
    let ogbudget = document.getElementById("budgetInput").value;
    const discountValue = 0.10;
    let discountedPrice = Number(ogbudget * discountValue);
    document.getElementById(discountResult).innerHTML ='Your discounted price is..' + discountedPrice;

    <div class=" container bg-secondary rounded mt-5">
        <h4 class=" text-white "> Reccomended Brands</h4>
        
        <button class=" btn btn-primary mt-3"> Acer</button>
        <button class=" btn btn-primary mt-3"> ASUS</button>
        <button class=" btn btn-primary mt-3"> Lenovo</button>

        <p class="text-muted"> Elligible discount: <span class="'bg-danger "></span></p>
      </div>
}