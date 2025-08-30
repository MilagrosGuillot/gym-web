interface ButtonCheckoutProps {
  priceId: string;
}

export default function ButtonCheckout({ priceId }: ButtonCheckoutProps) {
  return (
    <button
      className="bg-red-500 px-6 py-3 rounded-md italic font-semibold text-white hover:bg-black transition hover:border-red-500 hover:border-2 mt-4"
      onClick={async () => {
        const res = await fetch('/api/checkout', {
          method: 'POST',
          body: JSON.stringify({ priceId }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        window.location.href = data.url;
      }}
    >
      COMPRAR ESTA ASESORIA 
    </button>
  );
}
