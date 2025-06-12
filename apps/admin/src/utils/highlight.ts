import ts from 'highlight.js/lib/languages/typescript'
import cs from 'highlight.js/lib/languages/csharp'
import { createLowlight } from "lowlight";
import hljs from 'highlight.js';

const languages = {
  'typescript': ts,
  'csharp': cs
}

Object.entries(languages)
.forEach(([lang,langFn]) => {
  hljs.registerLanguage(lang,langFn);
});

export { hljs }
export const lowlight = createLowlight({
    "typescript": ts,
    "csharp": cs
})