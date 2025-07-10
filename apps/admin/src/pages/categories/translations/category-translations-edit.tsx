import { Edit, ReferenceInput, SimpleForm, TextInput, useNotify, useRedirect } from "react-admin";

const CategoryTranslationEdit = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = (data) => {
        notify('ra.notification.updated');
        redirect(`/categories/${data.category_id}/translations`)
    };

    return (
        <Edit mutationOptions={{ onSuccess }} mutationMode="optimistic" >
            <SimpleForm>
                <ReferenceInput source="category_id" reference="categories" disabled />
                <ReferenceInput source="language_id" reference="languages" disabled />
                <TextInput source="headline" fullWidth />
            </SimpleForm>
        </Edit>
    );
}

export { CategoryTranslationEdit }