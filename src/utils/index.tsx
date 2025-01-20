import { toast } from "react-toastify";

export function displayMsg(item: CartItemType, actionType: 'inc' | 'dec') {
    toast(<UIToast />,
      {
        data: {
          ...item,
          actionType
        },
        autoClose: 1000
      }
    );
  }

  