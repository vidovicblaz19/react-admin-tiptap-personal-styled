import { DateField, Show, TabbedShowLayout, TextField } from 'react-admin';
import { TranslationsTabbedShowLayout } from '../../components/TranslationsTabbedShowLayout';

// TODO: maybe make the summary and translations completely separated tabs.

export const CategoryShow = () => (
    <Show>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label="summary">
                <TextField source="id" />
                <DateField source="created_at" />
                <TextField source="type" />
            </TabbedShowLayout.Tab>
            <TabbedShowLayout.Tab label="translations" path="translations">
                <TranslationsTabbedShowLayout source="category_id" reference="categories_translations">
                    <TextField source="headline" />
                </TranslationsTabbedShowLayout>
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
);