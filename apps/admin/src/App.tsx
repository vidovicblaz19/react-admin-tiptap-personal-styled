import { CreateGuesser, defaultI18nProvider, EditGuesser, ForgotPasswordPage, ListGuesser, LoginPage, SetPasswordPage } from "ra-supabase";
import { Layout } from "./Layout";
import { Route } from "react-router";
import { Admin, CustomRoutes, Resource, ShowGuesser } from "react-admin";
import { authProvider, dataProvider } from "./dataAuthProvider";
import { darkTheme, lightTheme } from "@vidovicblaz19/shared-ui/theme.ts"
import { CategoryShow } from "./pages/categories/category-show";
import { CategoryEdit } from "./pages/categories/category-edit";
import { CategoryCreate } from "./pages/categories/category-create";
import { CategoryTranslationCreate } from "./pages/categories/translations/category-translations-create";
import { CategoryTranslationShow } from "./pages/categories/translations/category-translations-show";
import { CategoryTranslationEdit } from "./pages/categories/translations/category-translations-edit";

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
            <Resource name="categories" recordRepresentation="type" list={ListGuesser} edit={CategoryEdit} create={CategoryCreate} show={CategoryShow} />
            <Resource name="categories_translations" recordRepresentation="headline" list={ListGuesser} edit={CategoryTranslationEdit} create={CategoryTranslationCreate} show={CategoryTranslationShow} />
            <Resource name="languages" recordRepresentation="headline" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />

            <CustomRoutes noLayout>
                <Route path={SetPasswordPage.path} element={<SetPasswordPage />} />
                <Route path={ForgotPasswordPage.path} element={<ForgotPasswordPage />} />
            </CustomRoutes>
        </Admin>
);
