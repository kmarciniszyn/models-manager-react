import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { loginUser, logoutUser, selectIsUserLogin } from "./features/models/modelsSlice";
import { toLogin } from "./routes";

export const useFakeAuth = () => {
    const isUserLogin = useSelector(selectIsUserLogin);
    const dispatch = useDispatch();

    // login and logout functions should be asynchronous; should connect with auth service

    const login = async (id, password) => {        
        if (id && password) {
                dispatch(loginUser());
                return { isLogin: true };
        } else {
            return { isLogin: false };
        }
    };

    const logout = async () => {
        dispatch(logoutUser());
    };

    return {
        isUserLogin,
        login,
        logout
    };
};

// source: https://v5.reactrouter.com/web/example/auth-workflow
export const PrivateRoute = ({ children, ...rest }) => {
    const { isUserLogin } = useFakeAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isUserLogin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: toLogin(),
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}