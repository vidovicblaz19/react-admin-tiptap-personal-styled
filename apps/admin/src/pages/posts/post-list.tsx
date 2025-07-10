import { DataTable, DateField, DateInput, List, ReferenceField, TextField, TextInput } from 'react-admin';

const filters = [
    <TextInput source="id" />,
    <DateInput source="created_at" />,
    <TextInput source="content" />
];

export const PostList = () => (
    <List filters={filters}>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="created_at" />
            <DataTable.Col source="title" />
            <DataTable.Col label="Tags">
                <ReferenceField source="tags" reference="categories" />
            </DataTable.Col>
        </DataTable>
    </List>
);