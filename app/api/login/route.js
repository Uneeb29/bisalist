import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";

export async function POST(request) {
  console.log("Hit api endpoint");

  const body = await request;

  try {
    // check if user is in the customer table
    const customer = await prisma.customer.findUnique({
      where: {
        email: body.email,
      },
    });

    if (customer && (await bcrypt.compare(body.password, customer.password))) {
      console.log("customer found");

      // remove the password from the customer object before returning it
      const { password, ...userWithoutPass } = customer;

      userWithoutPass.role = "customer";

      return new Response(JSON.stringify(userWithoutPass));
    }

    // check if user is in the vendor table
    const vendor = await prisma.vendor.findUnique({
      where: {
        email: body.email,
      },
    });

    if (vendor && (await bcrypt.compare(body.password, vendor.password))) {
      console.log("vendor found");

      // remove the password from the vendor object before returning it
      const { password, ...userWithoutPass } = vendor;

      userWithoutPass.role = "vendor";

      return new Response(JSON.stringify(userWithoutPass));
    }

    return new Response(null);
  } catch (err) {
    console.log("login1", err);
  }
}
