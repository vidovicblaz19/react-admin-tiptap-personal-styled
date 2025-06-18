import { Stack } from "@mui/material"
import { WithRecord } from "react-admin"

export const ReferenceRecordKey = ({ recordKey }: { recordKey: string }) => (
    <Stack direction="row" alignItems="center" gap={0.5}>
        <WithRecord
            render={record => record && `${record[recordKey]}`}
        />
    </Stack>
)