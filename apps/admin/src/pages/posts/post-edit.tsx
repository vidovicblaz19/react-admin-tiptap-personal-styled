import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { StyledRichTextInput } from '../../utils/StyledRichTextInput';
            
export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <StyledRichTextInput source="content" />
            <ReferenceInput source="tags" reference="categories" />
        </SimpleForm>
    </Edit>
);