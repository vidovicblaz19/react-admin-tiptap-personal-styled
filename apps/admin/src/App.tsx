import { CreateGuesser, defaultI18nProvider, EditGuesser, ForgotPasswordPage, ListGuesser, LoginPage, SetPasswordPage } from "ra-supabase";
import { Layout } from "./Layout";
import { Route } from "react-router";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { authProvider, dataProvider } from "./dataAuthProvider";
import { darkTheme, lightTheme } from "@vidovicblaz19/shared-ui/theme.ts"
import { CategoryShow } from "./pages/categories/category-show";

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
            <Resource name="categories" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={CategoryShow} />

            <CustomRoutes noLayout>
                <Route path={SetPasswordPage.path} element={<SetPasswordPage />} />
                <Route path={ForgotPasswordPage.path} element={<ForgotPasswordPage />} />
            </CustomRoutes>
        </Admin>
);
