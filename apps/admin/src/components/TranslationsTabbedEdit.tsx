import { Box, Tab, Tabs, Toolbar } from "@mui/material";
import { useState } from "react";
import {
    RecordContextProvider,
    ReferenceFieldProps,
    SimpleForm,
    useGetList,
    useRecordContext,
    useUpdate,
    useNotify,
    SaveButton,
} from "react-admin";

export const TranslationsTabbedEdit = ({ source, reference, children }: ReferenceFieldProps) => {
    const record = useRecordContext();
    const { data: languages, isLoading: loadingLanguages } = useGetList('languages');
    const [tabIndex, setTabIndex] = useState(0);
    const notify = useNotify();

    // Get all translations for this post
    const { data: translations, isLoading: loadingTranslations, refetch } = useGetList(reference, {
        filter: { [source]: record?.id },
    });

    const [update] = useUpdate();

    if (loadingLanguages || loadingTranslations || !languages || !record) return null;

    const selectedLanguage = languages[tabIndex];
    const selectedTranslation = translations?.find(
        (t) => t.language_id === selectedLanguage.id
    );

    const handleSave = async (values: any) => {
        try {
            await update(reference, { id: values.id, data: values });
            notify('Translation updated', { type: 'info' });
            refetch();
        } catch (error) {
            notify('Error updating translation', { type: 'warning' });
        }
    };

    return (
        <Box>
            <Tabs value={tabIndex} onChange={(_, newIndex) => setTabIndex(newIndex)}>
                {languages.map((lang) => (
                    <Tab label={lang.code} key={lang.id} />
                ))}
            </Tabs>

            <Box p={2}>
                {selectedTranslation ? (
                    <RecordContextProvider value={selectedTranslation}>
                        <SimpleForm record={selectedTranslation} onSubmit={handleSave} toolbar={<Toolbar><SaveButton /></Toolbar>}>
                            {children}
                        </SimpleForm>
                    </RecordContextProvider>
                ) : (
                    <div>No translation found for this language.</div>
                )}
            </Box>
        </Box>
    );
};