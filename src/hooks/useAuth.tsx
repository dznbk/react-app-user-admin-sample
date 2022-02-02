import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "./../types/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./../hooks/useLoginUser";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();
  const { showMessage } = useMessage();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data);
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
          showMessage({ title: "ログインできません", status: "error" });
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
