import { DateField, Show, TabbedShowLayout, TextField } from 'react-admin';
import { TranslationsTabbedShowLayout } from '../../components/TranslationsTabbedShowLayout';

export const CategoryShow = () => (
    <Show>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label="summary">
                <TextField source="id" />
                <DateField source="created_at" />
                <TextField source="type" />
            </TabbedShowLayout.Tab>
            <TabbedShowLayout.Tab label="translations">
                <TranslationsTabbedShowLayout source="category_id" reference="categories_translations">
                    <TextField source="headline" />
                </TranslationsTabbedShowLayout>
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
);