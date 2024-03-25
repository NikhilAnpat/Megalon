export const ActionTypes = {
  Set_Rstros: "Set_Rstros",
  Set_MenuItems: "Set_MenuItems",
  AddToCart: "AddToCart",
  FinalCart: "FinalCart",
};

export const setRestros = (restaurants) => ({
  type: ActionTypes.Set_Rstros,
  payload: restaurants,
});

export const setMenu = (menu) => ({
  type: ActionTypes.Set_MenuItems,
  payload: menu,
});

export const addToCart = (item) => ({
  type: ActionTypes.AddToCart,
  payload: item,
});

export const checkoutCart = () => ({
  type: ActionTypes.FinalCart,
});
