import { Create, getRecordFromLocation, ReferenceInput, SimpleForm, TextInput, useNotify, useRedirect } from "react-admin";
import { useLocation } from "react-router";

const CategoryTranslationCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const location = useLocation();

    const onSuccess = () => {
        // display a notification to confirm the creation
        notify('ra.notification.created');
        // get the initial values we set in the state earlier to know whether a product_id was provided
        const record = getRecordFromLocation(location);
        if (record && record.category_id) {
            // the record was created from the edit view of the product, redirect to it
            redirect(`/categories/${record.category_id}/translations`);
        } else {
            // redirect to the list of reviews
            redirect(`/categories_translations`);
        }
    };

    return (
        <Create mutationOptions={{ onSuccess }}>
            <SimpleForm>
                <ReferenceInput source="category_id" reference="categories" />
                <ReferenceInput source="language_id" reference="languages" />
                <TextInput source="headline" />
            </SimpleForm>
        </Create>
    );
}

export { CategoryTranslationCreate }