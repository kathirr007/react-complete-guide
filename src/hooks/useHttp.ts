async function sendHttpRequest(url: string, config?: RequestInit) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Something went wrong, failed to send request.');
  }

  return resData;
}

export function useHttp(url: string, config?: RequestInit, initialData?: any) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(async (data?: any) => {
    try {
      setIsLoading(true);
      const resData = await sendHttpRequest(url, { ...config, body: data });
      setData(resData);
    }
    catch (err: any) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data, isLoading, error, sendRequest, clearData
  };
}

export const isDevBuild = process.env.NODE_ENV === 'development';
export const isProBuild = process.env.NODE_ENV === 'production';
export const baseUrl = isDevBuild ? 'http://localhost:3010' : 'https://react-food-app-backend-le0am8bqq-kathiravan-ks-projects.vercel.app';
