import { ReferenceField, Show, TabbedShowLayout, TextField } from 'react-admin';
// TODO: maybe make the summary and translations completely separated tabs.

export const CategoryTranslationShow = () => (
    <Show>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label="summary">
                <TextField source="id" />
                <ReferenceField source="category_id" reference="categories" />
                <ReferenceField source="language_id" reference="languages" />
                <TextField source="headline" />
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
);