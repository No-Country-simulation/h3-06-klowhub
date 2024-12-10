'use client';

import CodeBlock from '@tiptap/extension-code-block';
import { Link } from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { forwardRef, Ref } from 'react';
import Toolbar from './components/Toolbar/Toolbar';

export type TTiptapProps = {
  content: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onBlur?: () => void;
  name?: string;
};

const Tiptap = forwardRef<HTMLDivElement, TTiptapProps>(
  (
    { content, name, onBlur, onChange, placeholder },
    ref: Ref<HTMLDivElement>,
  ) => {
    const handleChange = (newContent: string) => {
      onChange(newContent);
    };

    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          codeBlock: false,
        }),
        Underline,
        CodeBlock,
        Placeholder.configure({ placeholder: placeholder }),
        Link.configure({
          openOnClick: false,
          autolink: true,
          defaultProtocol: 'https',
          protocols: ['http', 'https'],
          isAllowedUri: (url, ctx) => {
            try {
              // construct URL
              const parsedUrl = url.includes(':')
                ? new URL(url)
                : new URL(`${ctx.defaultProtocol}://${url}`);

              // use default validation
              if (!ctx.defaultValidate(parsedUrl.href)) {
                return false;
              }

              // disallowed protocols
              const disallowedProtocols = ['ftp', 'file', 'mailto'];
              const protocol = parsedUrl.protocol.replace(':', '');

              if (disallowedProtocols.includes(protocol)) {
                return false;
              }

              // only allow protocols specified in ctx.protocols
              const allowedProtocols = ctx.protocols.map((p) =>
                typeof p === 'string' ? p : p.scheme,
              );

              if (!allowedProtocols.includes(protocol)) {
                return false;
              }

              // disallowed domains
              const disallowedDomains = [
                'example-phishing.com',
                'malicious-site.net',
              ];
              const domain = parsedUrl.hostname;

              if (disallowedDomains.includes(domain)) {
                return false;
              }

              // all checks have passed
              return true;
            } catch (error) {
              return false;
            }
          },
          shouldAutoLink: (url) => {
            try {
              // construct URL
              const parsedUrl = url.includes(':')
                ? new URL(url)
                : new URL(`https://${url}`);

              // only auto-link if the domain is not in the disallowed list
              const disallowedDomains = [
                'example-no-autolink.com',
                'another-no-autolink.com',
              ];
              const domain = parsedUrl.hostname;

              return !disallowedDomains.includes(domain);
            } catch (error) {
              return false;
            }
          },
        }),
      ],
      editorProps: {
        attributes: {
          class:
            'prose max-w-none mytiptap px-4 py-3 border-b border-r border-l border-gray-700 text-gray-950 text-base bg-gray-50 rounded-b-xl pt-4 rounded-bl-xl rounded-br-xl outline-none min-h-[120px] w-full',
        },
      },
      immediatelyRender: false,
      onUpdate: ({ editor }) => handleChange(editor.getHTML()),
    });

    return (
      <div>
        <Toolbar editor={editor} content={content} />
        <EditorContent
          style={{ whiteSpace: 'pre-line' }}
          editor={editor}
          ref={ref}
        />
      </div>
    );
  },
);

export default Tiptap;
