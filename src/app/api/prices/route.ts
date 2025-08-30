
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const prices = await stripe.prices.list({
      active: true,
      expand: ["data.product"], 
    });

    const url = new URL(request.url);
    const tipo = url.searchParams.get("tipo");

    // Filtrar por tipo y solo productos activos
    const filtrados = prices.data.filter(price => {
      const product = price.product as Stripe.Product;
      if (!product || !product.active) return false; 
      if (tipo === "completa") return product.name.toLowerCase().startsWith("asesoría completa");
      if (tipo === "media") return product.name.toLowerCase().startsWith("asesoría media");
      return false;
    });

    return NextResponse.json(filtrados);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error}, { status: 500 });
  }
}
