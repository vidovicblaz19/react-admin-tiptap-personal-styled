// import { RichTextField, RichTextFieldProps } from "react-admin";
// hljs.initHighlighting()

import { useEffect } from "react"
import { RichTextField, RichTextFieldProps } from "react-admin"
import { hljs } from "./highlight"


function HighlightedRichTextField(props: RichTextFieldProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
        hljs.highlightAll()
    }, 0)
    
    return () => clearTimeout(timer)
  }, [props.record, props.source])

  return <RichTextField {...props} />
}

export { HighlightedRichTextField }