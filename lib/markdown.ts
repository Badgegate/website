import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false }) // Be careful with sanitization if content is user-generated
    .use(gfm)
    .process(markdown);
  return result.toString();
}