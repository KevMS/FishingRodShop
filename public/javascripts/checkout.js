
function checkout() {
    pname = document.querySelector('#Pname').textContent;
    totalCost= document.querySelector('#price').textContent;

    alert(`You purchased ${pname} of the product for a total cost of ${totalCost}.`);
    window.location = "/home"; // Redirecting to home page.
}