import { CreateGuesser, defaultI18nProvider, EditGuesser, ForgotPasswordPage, ListGuesser, LoginPage, SetPasswordPage, ShowGuesser } from "ra-supabase";
import { Layout } from "./Layout";
import { Route } from "react-router";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { authProvider, dataProvider } from "./dataAuthProvider";
import { PostList } from "./pages/posts/post-list";
import { PostShow } from "./pages/posts/post-show";
import { PostEdit } from "./pages/posts/post-edit";
import { PostCreate } from "./pages/posts/post-create";
import { darkTheme, lightTheme } from "@vidovicblaz19/shared-ui/theme.ts"

export const App = () => (
    // BrowserRouter
        <Admin
            theme={ lightTheme }
            darkTheme={ darkTheme }
            requireAuth
            disableTelemetry
            layout={ Layout }
            // dashboard
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={defaultI18nProvider}
            loginPage={LoginPage}
        >
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
            <Resource name="categories" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />

            <CustomRoutes noLayout>
                <Route path={SetPasswordPage.path} element={<SetPasswordPage />} />
                <Route path={ForgotPasswordPage.path} element={<ForgotPasswordPage />} />
            </CustomRoutes>
        </Admin>
);
