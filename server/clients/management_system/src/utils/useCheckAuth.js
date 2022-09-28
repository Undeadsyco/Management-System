const useCheckAuth = (onCheckAuth) => {
  const checkAuth = async () => {
    const res = await onCheckAuth();
    const isAuthorized = await res;
    return isAuthorized;
  };

  return [checkAuth];
};

export default useCheckAuth;
