const useAuth = (user) => {
  const isAuth = user && user?.Is_Clocked_In === 1;

  return isAuth;
};

export default useAuth;
