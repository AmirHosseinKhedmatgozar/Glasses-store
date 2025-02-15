import { useState } from "react";

export function useWhishToggle() {
  const [isWishIconClicked, setIsWishIconClicked] = useState(false);

  return { isWishIconClicked, setIsWishIconClicked };
}
