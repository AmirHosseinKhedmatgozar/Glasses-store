import supabase from "./supabase";

export async function getAddresses(userId) {
  const { data: addresses, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("addresses not found");
  }

  return addresses;
}

export async function addAddress(newAdddress) {
  const { data, error } = await supabase
    .from("addresses")
    .insert(newAdddress, { onConflict: ["postal_code"] })
    .select();

  if (error) {
    console.error(error);
    throw new Error("addresses don add");
  }

  return data;
}
export async function editAddress(updateAddress) {
  const { data, error } = await supabase
    .from("addresses")
    .update({
      ...updateAddress,
      postal_code: Number(updateAddress.postal_code),
    })
    .eq("user_id", updateAddress.user_id)
    .eq("postal_code", Number(updateAddress.postal_code))
    .select();

  if (error) {
    console.error(error);
    throw new Error("dont edit address ", error.message);
  }

  return data;
}
export async function deleteAddress(address) {
  const { data, error } = await supabase
    .from("addresses")
    .delete()
    .eq("postal_code", address.postal_code)
    .eq("user_id", address.user_id);

  if (error) {
    console.error(error);
    throw new Error("dont delete shop", error.message);
  }

  return data;
}
