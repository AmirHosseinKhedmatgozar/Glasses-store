import supabase from "./supabase";

export async function getGlasses() {
  const { data: glasses, error } = await supabase.from("glasses").select("*");

  if (error) {
    console.error(error);
    throw new Error("glasses not found");
  }

  return { glasses, error };
}

export async function getTreanding() {
  const { data, error } = await supabase
    .from("glasses")
    .select("*")
    .eq("trend", true);

  if (error) {
    console.error(error);
    throw new Error("trand not found");
  }
  return data;
}

export async function getGlassesPruducts(category, sort) {
  let query = supabase.from("glasses").select("*");
  if (category) query.eq("category", category);
  if (sort) query;
  const { data: glasses, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("pruducts not found");
  }

  return glasses;
}

export async function getSearchGlasses(character) {
  const { data: glasses, error } = await supabase
    .from("glasses")
    .select("*")
    .ilike("glassesName", `%${character}%`);

  if (error) {
    console.error(error);
    throw new Error("glasses not found");
  }

  return glasses;
}
export async function getPruduct(id) {
  const { data: glasse, error } = await supabase
    .from("glasses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("product not found");
  }

  return glasse;
}
