import { Box, MenuItem, Select } from '@mui/material';
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from '@tiptap/react'
import React from 'react'

const CodeBlockComponent: React.FC<NodeViewProps> = ({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension }) => (
    <NodeViewWrapper className="code-block">
        <Box sx={{position:'relative'}}>
            <Select
                sx={{
                    position: 'absolute',
                    right: "0.5rem",
                    top: "0.5rem"
                }}
                contentEditable={false}
                defaultValue={defaultLanguage}
                onChange={event => updateAttributes({ language: event.target.value })}
            >
                <MenuItem value="null">auto</MenuItem>
                <MenuItem disabled>-</MenuItem>
                {extension.options.lowlight.listLanguages().map((lang: string, index: number) => (
                    <MenuItem key={index} value={lang}>{lang}</MenuItem>
                ))}
            </Select>
        </Box>
        <pre>
            <NodeViewContent as="code" />
        </pre>
    </NodeViewWrapper>
)

export default CodeBlockComponent;