export default async function getProducts() {
  const res = await fetch("", {
    next: {revalidate: 86400},
  });
  const data = await res.json();
  return data;
}

export async function getBlogs() {
  const res = await fetch("");
  const data = await res.json();
  return data;
}

export async function getUsers() {
  const res = await fetch("");
  const data = await res.json();
  return data;
}
