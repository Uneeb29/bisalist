import { prisma } from "../../../lib/prisma-client";
import * as bcrypt from "bcrypt";

export async function POST(request) {
  console.log("Hit api endpoint");

  const body = await request;

  try {
    const user = await prisma[body.role].findUnique({
      where: {
        email: body.email,
      },
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
      console.log("User found");

      // remove the password from the user object before returning it
      const { password, ...userWithoutPass } = user;

      return new Response(JSON.stringify(userWithoutPass));
    } else {
      return new Response(JSON.stringify(null));
    }
  } catch (err) {
    console.log('login1',err);
  }
}
