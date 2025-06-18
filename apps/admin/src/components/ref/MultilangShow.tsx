import {
    TabbedShowLayout,
    TextField,
    useGetList,
    useRecordContext,
} from 'react-admin';

const MultilangShow = () => {
    const { data: languages, isLoading } = useGetList('languages');
    const record = useRecordContext();

    if (isLoading || !languages) return null;

    return (
        <TabbedShowLayout>
            {languages.map((language) => (
                <TabbedShowLayout.Tab
                    key={language.id}
                    label={language.code}
                >
                    <TextField source={`content.${language.code}`} />
                </TabbedShowLayout.Tab>
            ))}
        </TabbedShowLayout>
    );
};

export default MultilangShow;