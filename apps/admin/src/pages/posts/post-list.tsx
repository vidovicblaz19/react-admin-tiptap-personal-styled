import { Datagrid, DateField, DateInput, List, ReferenceField, TextField, TextInput } from 'react-admin';

const filters = [
    <TextInput source="id" />,
    <DateInput source="created_at" />,
    <TextInput source="content" />
];

export const PostList = () => (
    <List filters={filters}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <TextField source="title" />
            <ReferenceField source="tags" reference="categories" />
        </Datagrid>
    </List>
);