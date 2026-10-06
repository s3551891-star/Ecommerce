import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ShopContext = createContext(null);

function getStoredData(key, fallback = []) {
  try {
    const stored = localStorage.getItem(key);

    if (!stored) {
      return fallback;
    }

    return JSON.parse(stored);
  } catch {
    return fallback;
  }
}

function getStoredUser() {
  try {
    const stored = localStorage.getItem(
      "shopsphere-user"
    );

    if (!stored) {
      return null;
    }

    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function ShopProvider({ children }) {
  /* =========================
     CART
  ========================= */

  const [cart, setCart] = useState(() =>
    getStoredData("shopsphere-cart")
  );

  /* =========================
     WISHLIST
  ========================= */

  const [wishlist, setWishlist] =
    useState(() =>
      getStoredData(
        "shopsphere-wishlist"
      )
    );

  /* =========================
     ORDERS
  ========================= */

  const [orders, setOrders] = useState(() =>
    getStoredData("shopsphere-orders")
  );

  /* =========================
     AUTH / USER
  ========================= */

  const [user, setUser] = useState(() =>
    getStoredUser()
  );

  /* =========================
     STORAGE
  ========================= */

  useEffect(() => {
    localStorage.setItem(
      "shopsphere-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(
      "shopsphere-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(
      "shopsphere-orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "shopsphere-user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(
        "shopsphere-user"
      );
    }
  }, [user]);

  /* =========================
     CART FUNCTIONS
  ========================= */

  const addToCart = (
    product,
    quantity = 1
  ) => {
    setCart((currentCart) => {
      const existingProduct =
        currentCart.find(
          (item) =>
            item.id === product.id
        );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity +
                    quantity,
                  item.stock
                ),
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: Math.min(
            quantity,
            product.stock
          ),
        },
      ];
    });
  };

  const removeFromCart = (
    productId
  ) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          item.id !== productId
      )
    );
  };

  const updateCartQuantity = (
    productId,
    quantity
  ) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(
                1,
                Math.min(
                  quantity,
                  item.stock
                )
              ),
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  /* =========================
     WISHLIST FUNCTIONS
  ========================= */

  const toggleWishlist = (
    product
  ) => {
    setWishlist(
      (currentWishlist) => {
        const exists =
          currentWishlist.some(
            (item) =>
              item.id === product.id
          );

        if (exists) {
          return currentWishlist.filter(
            (item) =>
              item.id !== product.id
          );
        }

        return [
          ...currentWishlist,
          product,
        ];
      }
    );
  };

  const removeFromWishlist = (
    productId
  ) => {
    setWishlist(
      (currentWishlist) =>
        currentWishlist.filter(
          (item) =>
            item.id !== productId
        )
    );
  };

  const isInWishlist = (
    productId
  ) => {
    return wishlist.some(
      (item) =>
        item.id === productId
    );
  };

  /* =========================
     ORDER FUNCTION
  ========================= */

  const placeOrder = (
    orderDetails
  ) => {
    const orderId =
      `SS-${Date.now()
        .toString()
        .slice(-8)}`;

    const newOrder = {
      id: orderId,

      date: new Date().toISOString(),

      status: "Processing",

      customer: {
        ...orderDetails.customer,
      },

      shippingAddress: {
        ...orderDetails.shippingAddress,
      },

      paymentMethod:
        orderDetails.paymentMethod,

      deliveryMethod:
        orderDetails.deliveryMethod ||
        "Standard Delivery",

      items: cart.map((item) => ({
        ...item,
      })),

      subtotal: cartSubtotal,

      shipping,

      total: cartTotal,
    };

    setOrders(
      (currentOrders) => [
        newOrder,
        ...currentOrders,
      ]
    );

    setCart([]);

    return newOrder;
  };

  /* =========================
     AUTH FUNCTIONS
  ========================= */

  const registerUser = ({
    firstName,
    lastName,
    email,
  }) => {
    const newUser = {
      id: `USER-${Date.now()}`,
      firstName,
      lastName,
      email,
      phone: "",
      address: "",
      city: "",
      country: "Pakistan",
      joinedDate:
        new Date().toISOString(),
    };

    setUser(newUser);

    return newUser;
  };

  const loginUser = ({
    email,
  }) => {
    const savedUser =
      getStoredUser();

    if (
      savedUser &&
      savedUser.email.toLowerCase() ===
        email.toLowerCase()
    ) {
      setUser(savedUser);

      return {
        success: true,
        user: savedUser,
      };
    }

    return {
      success: false,
      message:
        "No account found with this email.",
    };
  };

  const logoutUser = () => {
    setUser(null);
  };

  const updateUser = (
    updatedData
  ) => {
    setUser((currentUser) => {
      if (!currentUser) {
        return null;
      }

      return {
        ...currentUser,
        ...updatedData,
      };
    });
  };

  /* =========================
     CALCULATIONS
  ========================= */

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const wishlistCount =
    wishlist.length;

  const cartSubtotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        item.quantity,
    0
  );

  const shipping =
    cart.length === 0
      ? 0
      : cartSubtotal >= 100
        ? 0
        : 10;

  const cartTotal =
    cartSubtotal + shipping;

  /* =========================
     CONTEXT VALUE
  ========================= */

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      orders,
      user,

      cartCount,
      wishlistCount,

      cartSubtotal,
      shipping,
      cartTotal,

      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,

      toggleWishlist,
      removeFromWishlist,
      isInWishlist,

      placeOrder,

      registerUser,
      loginUser,
      logoutUser,
      updateUser,
    }),
    [
      cart,
      wishlist,
      orders,
      user,
      cartCount,
      wishlistCount,
      cartSubtotal,
      shipping,
      cartTotal,
    ]
  );

  return (
    <ShopContext value={value}>
      {children}
    </ShopContext>
  );
}

export function useShop() {
  const context =
    useContext(ShopContext);

  if (!context) {
    throw new Error(
      "useShop must be used inside ShopProvider"
    );
  }

  return context;
}