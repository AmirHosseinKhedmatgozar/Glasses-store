function EmptyWhishList() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/public/photo/whishList/empty-wish..gif" />
      <span className="mb-2 text-3xl font-extrabold text-gray-600">
        NOTHING TO SHOW
      </span>
      <p className="text-xl font-semibold">
        Unlock Your Shopping Desires: Fill Your Empty Wishlist
      </p>
    </div>
  );
}

export default EmptyWhishList;
