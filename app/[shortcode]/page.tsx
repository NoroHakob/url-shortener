import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

type Props = {
  params: { shortcode: string };
};

export default async function RedirectPage({ params }: Props) {
  const { shortcode } = params;

  const url = await prisma.url.findUnique({
    where: { shortCode: shortcode },
  });

  if (!url) {
    notFound(); // Uses Next.js 404 page
  }

  await prisma.url.update({
    where: { id: url.id },
    data: { visits: { increment: 1 } },
  });

  redirect(url.originalUrl);
}
