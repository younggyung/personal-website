import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';
import { run } from '@mdx-js/mdx';

const getMDX = (slug: string) => {
  const filePath = path.join(process.cwd(), 'src/contents', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    frontmatter: data,
    content,
  };
};

export default getMDX;
