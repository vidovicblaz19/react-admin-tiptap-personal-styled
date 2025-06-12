import { StyledRichText } from '@vidovicblaz19/shared-ui';
import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { HighlightedRichTextField } from '../../utils/RichTextFieldExp';

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="created_at" />
            <HighlightedRichTextField source="content" sx={(theme) => StyledRichText(theme)} />
            <ReferenceField source="tags" reference="categories" />
        </SimpleShowLayout>
    </Show>
);