import { notFound } from "next/navigation";

interface Props {
  params: {
    name: string;
  };
}

export default async function ExamplePage({ params }: Props) {
  try {
    const [key] = params.name.split(".");

    const { Component } = await import(`~/examples/${key}/${params.name}`);

    return Component ? <Component /> : notFound();
  } catch (e) {
    notFound();
  }
}
