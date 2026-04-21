function calculateTotal(){
  const packagePrice = document.getElementById('package').value;
  const pallets = document.getElementById('pallets').value;

  if(packagePrice && pallets){
    const total = packagePrice * pallets;
    document.getElementById('totalPrice').textContent = "Total: R" + total;
  } else {
    document.getElementById('totalPrice').textContent = "Total: R0";
  }
}
