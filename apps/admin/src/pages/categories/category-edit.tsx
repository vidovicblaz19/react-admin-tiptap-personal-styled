import { CreateButton, DataTable, Edit, ReferenceField, ReferenceManyField, TabbedForm, TextField, TextInput, useRecordContext } from 'react-admin';

const CreateTranslationButton = () => {
    const record = useRecordContext();
    return (
        <CreateButton
            resource='categories_translations'
            state={{ record: { category_id: record?.id } }}
        />
    );
};

export const CategoryEdit = () => (
    <Edit>
        <TabbedForm>
            <TabbedForm.Tab label="summary">
                <TextInput source="type" fullWidth />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="translations" path="translations">
                <ReferenceManyField
                    reference="categories_translations"
                    target="category_id"
                >
                    <DataTable rowClick="edit">
                        <DataTable.Col label="language">
                            <ReferenceField reference="languages" source="language_id">
                                <TextField source="headline" />
                            </ReferenceField>
                        </DataTable.Col>
                        <DataTable.Col source="headline" />
                    </DataTable>
                </ReferenceManyField>
                <CreateTranslationButton />
            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);