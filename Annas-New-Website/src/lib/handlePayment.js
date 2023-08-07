const handlePayment = async (price) => {
  try {
    const req = await fetch(
      "https://nuada.vercel.app/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([{ price, quantity: 1 }]),
      }
    );
    const res = await req.json();
    window.location.replace(res.url);
  } catch (err) {
    console.error(err);
  }
};

export default handlePayment;
