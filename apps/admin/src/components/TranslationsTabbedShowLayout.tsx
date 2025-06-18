import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { RecordContextProvider, ReferenceFieldProps, SimpleShowLayout, useGetList, useRecordContext } from "react-admin";

export const TranslationsTabbedShowLayout = ({ source, reference, children }: ReferenceFieldProps) => {
    const record = useRecordContext();
    const { data: languages, isLoading: loadingLanguages } = useGetList('languages');
    const [tabIndex, setTabIndex] = useState(0);

    // Get all translations for this post
    const { data: translations, isLoading: loadingTranslations } = useGetList(reference, {
        filter: { [source]: record?.id },
    });

    if (loadingLanguages || loadingTranslations || !languages || !record) return null;

    const selectedLanguage = languages[tabIndex];
    const selectedTranslation = translations?.find(t => t.language_id === selectedLanguage?.id);

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
                        <SimpleShowLayout>
                            {children}
                        </SimpleShowLayout>
                    </RecordContextProvider>
                ) : (
                    <div>No translation found for this language.</div>
                )}
            </Box>
        </Box>
    );
};