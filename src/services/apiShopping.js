import supabase from "./supabase";

export async function addShopping({ user_id, item_id }) {
  const { data, error } = await supabase
    .from("shopping")
    .insert({ itemId: item_id, userId: user_id }, { onConflict: ["id"] })
    .select();
  if (error) return error;
  return data;
}

export async function checkShopping({ user_id, item_id }) {
  const { data, error } = await supabase
    .from("shopping")
    .select("*")
    .eq("userId", user_id)
    .eq("itemId", item_id)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("Error checking item existence:", error.message);
    return false;
  }
  return data ? true : false;
}

export async function getShoppingListUser(userId) {
  const { data, error } = await supabase
    .from("shopping")
    .select(
      `
      *,
      glasses(id,image,price,glassesName)
    `,
    )
    .eq("userId", userId)
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching filtered data:", error);
  }
  return data;
}

export async function deleteShopping(item) {
  const { data, error } = await supabase
    .from("shopping")
    .delete()
    .eq("itemId", item.item_id)
    .eq("userId", item.user_id);

  if (error) {
    console.error(error);
    throw new Error("dont delete shop", error.message);
  }

  return data;
}

export async function updateShopping({ user, lengthItem, itemId }) {
  const { data, error } = await supabase
    .from("shopping")
    .update({ length: lengthItem })
    .eq("userId", user)
    .eq("itemId", itemId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("dont delete shop", error.message);
  }

  return data;
}
