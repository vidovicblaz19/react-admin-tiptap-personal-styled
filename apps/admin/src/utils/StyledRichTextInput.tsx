import {
    DefaultEditorOptions,
    RichTextInput,
    RichTextInputToolbar,
    LevelSelect,
    FormatButtons,
    AlignmentButtons,
    ListButtons,
    LinkButtons,
    QuoteButtons,
    ClearButtons,
    ImageButtons,
    useTiptapEditor,
    RichTextInputProps,
    RichTextInputToolbarProps,
} from 'ra-input-rich-text';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import CodeBlock from '@tiptap/extension-code-block-lowlight'
import Remove from '@mui/icons-material/Remove';
import TableChart from '@mui/icons-material/TableChart';
import Code from '@mui/icons-material/Code';

import { SxProps, Theme, ToggleButton } from '@mui/material';
import { StyledRichText } from '@vidovicblaz19/shared-ui';
import { ReactNodeViewRenderer } from '@tiptap/react';
import CodeBlockComponent from './CodeBlockComponent';
import { lowlight } from './highlight';

// THERE is in DOCS how to LazyLoad the editor.
// Maybe lazyload also the highlightjs.

const MyRichTextInputToolbar = ({ size, ...props }: RichTextInputToolbarProps) => {
    const editor = useTiptapEditor();

    return (
        <RichTextInputToolbar {...props}>
            <LevelSelect size={size} />
            <FormatButtons size={size} />
            <AlignmentButtons size={size} />
            <ListButtons size={size} />
            <LinkButtons size={size} />
            <QuoteButtons size={size} />
            <ClearButtons size={size} />
            <ImageButtons size={size} />
            <ToggleButton
                aria-label="Add an horizontal rule"
                title="Add an horizontal rule"
                value="left"
                onClick={() =>
                    editor.chain().focus().setHorizontalRule().run()
                }
                selected={editor && editor.isActive('horizontalRule')}
            >
                <Remove fontSize="inherit" />
            </ToggleButton>
            <ToggleButton
                aria-label="Add table"
                title="Add table"
                value="left"
                onClick={() =>
                    editor.chain().focus().insertTable({ rows: 3, cols: 2, withHeaderRow: true }).run()
                }
            >
                <TableChart fontSize="inherit" />
            </ToggleButton>
            <ToggleButton
                aria-label="Add code block"
                title="Add code block"
                value="left"
                onClick={() =>
                    editor.chain().focus().toggleCodeBlock().run()
                }
                selected={editor && editor.isActive('codeBlock')}

            >
                <Code fontSize="inherit" />
            </ToggleButton>
        </RichTextInputToolbar>
    );
}

export const StyledRichTextInput = ({ ...props }: RichTextInputProps) => (
    <RichTextInput
        editorOptions={StyledEditorOptions}
        toolbar={<MyRichTextInputToolbar size="medium" />}
        sx={(theme) => StyledEditorRichText(theme)}
        {...props}
    />
);

export const StyledEditorOptions: typeof DefaultEditorOptions = {
    ...DefaultEditorOptions,
    extensions: [
        ...DefaultEditorOptions.extensions!,
        HorizontalRule,
        Table.configure({
            resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        CodeBlock
            .extend({
                addNodeView() {
                    return ReactNodeViewRenderer(CodeBlockComponent)
                },
            }).configure({
                lowlight
            }),
    ],
};

export const StyledEditorRichText = (theme: Theme) => ({
    '& .RaRichTextInput-editorContent': {
        '& .ProseMirror': {
            backgroundColor: theme.palette.background.default,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: theme.shape.borderRadius,
            padding: theme.spacing(3),
            minHeight: '400px',

            // Apply your post content styles
            ...StyledRichText(theme),

            '&:hover': {
                borderColor: theme.palette.primary.main,
            },
            '&:focus': {
                outline: 'none',
                borderColor: theme.palette.primary.main,
            },

            // Editor-specific adjustments
            '& > *:first-of-type': {
                marginTop: 0,
            },
            '& > *:last-child': {
                marginBottom: 0,
            },
        }
    },
});