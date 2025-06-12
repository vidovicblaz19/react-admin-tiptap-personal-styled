import { Create, FileInput, ImageField, ImageInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { StyledRichTextInput } from '../../utils/StyledRichTextInput';
            
export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <StyledRichTextInput source="content" />
            <ReferenceInput source="tags" reference="categories" />
        </SimpleForm>
    </Create>
);