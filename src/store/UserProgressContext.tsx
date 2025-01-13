import type { ReactNode } from 'react';
import { createContext } from 'react';

const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
});

export function UserProgressContextProvider({ children }: Readonly<{
  children: ReactNode;
}>) {
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }
  function showCheckout() {
    setUserProgress('checkout');
  }
  function hideCart() {
    setUserProgress('');
  }
  function hideCheckout() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  };

  return (
    <UserProgressContext value={userProgressCtx}>{children}</UserProgressContext>
  );
}

export { UserProgressContext };
