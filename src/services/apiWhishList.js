import supabase from "./supabase";

export async function getWhishList(userId) {
  if (!userId) return;
  const { data, error } = await supabase
    .from("whishList")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error(error);
    throw new Error("WhishList not found");
  }
  return data;
}

export async function addWhishItem({ user_id, item_id }) {
  const { data, error } = await supabase
    .from("whishList")
    .insert({ itemId: item_id, userId: user_id }, { onConflict: ["itemId"] })
    .select();
  if (error) return error;

  return data;
}

export async function checkWashList(user_id, item_id) {
  const { data, error } = await supabase
    .from("whishList")
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

export async function deleteWhishItem(item) {
  const { data, error } = await supabase
    .from("whishList")
    .delete()
    .eq("itemId", item.item_id)
    .eq("userId", item.user_id);

  if (error) {
    console.error(error);
    throw new Error("dont delete whishItem", error.message);
  }
  return data;
}

export async function getWhishListUser(userId) {
  const { data, error } = await supabase
    .from("whishList")
    .select(
      `
    *,
    glasses(*)
  `,
    )
    .eq("userId", userId);
  if (error) {
    console.error("Error fetching filtered data whishList:", error);
  }
  return data;
}
