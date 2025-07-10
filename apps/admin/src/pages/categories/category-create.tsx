import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';
            
export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <DateInput source="created_at" />
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);