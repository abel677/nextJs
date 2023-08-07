import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Notify } from "@/app/utils/notify";
import { doLogout } from "@/redux/slices/auth";
import { getCurrentTimestamp, timestampToDate } from "@/app/utils/dates";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const { isLogged, expiresIn } = useAppSelector((state) => state.authState);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const expirationDate = timestampToDate(expiresIn || 0);
  const currentDate = timestampToDate(getCurrentTimestamp());


  if (expiresIn && currentDate > expirationDate) {
    dispatch(doLogout());
  }

  useEffect(() => {
    const baseUrl = pathname.split("/")[1];

    console.log(baseUrl)
    if (!isLogged && baseUrl !== "auth") {
      console.log('ssss')
      router.push("/auth/login");
    } else {
      router.push("/dashboard/home");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return <>{children}</>;
};

export default AuthProvider;
