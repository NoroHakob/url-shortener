import prisma from "@/lib/db";
import { redirect, notFound } from "next/navigation";

export default async function RedirectPage({
  params,
}: {
  params: { shortcode: string };
}) {
  const { shortcode } = params;

  const url = await prisma.url.findUnique({
    where: { shortCode: shortcode },
  });

  if (!url) {
    notFound();
  }

  await prisma.url.update({
    where: { id: url.id },
    data: { visits: { increment: 1 } },
  });

  redirect(url.originalUrl);
}
