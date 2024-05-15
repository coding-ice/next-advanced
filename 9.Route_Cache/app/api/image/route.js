export async function GET() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  console.log(data);

  return Response.json(data);
}
