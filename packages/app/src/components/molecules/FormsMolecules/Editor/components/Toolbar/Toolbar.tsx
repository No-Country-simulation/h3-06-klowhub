import { type Editor } from '@tiptap/react';
import { FC, useCallback } from 'react';
import {
  LuBold,
  LuCode,
  LuHeading2,
  LuItalic,
  LuLink,
  LuList,
  LuListOrdered,
  LuQuote,
  LuRedo,
  LuStrikethrough,
  LuUnderline,
  LuUndo,
} from 'react-icons/lu';
import ToolbarButton from '../ToolbarButton/ToolbarButton';

export type TToolbarProps = {
  editor: Editor | null;
  content?: string;
};

const Toolbar: FC<TToolbarProps> = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex-row px-1 py-1 rounded-tl-xl rounded-tr-xl flex justify-between items-start gap-4 w-full flex-wrap border border-gray-800 bg-gray-50  min-w-[320px]">
      <div className="flex justify-start items-center gap-2 w-full  lg:w-10/12 flex-wrap">
        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          activeKey={editor.isActive('bold')}
        >
          <LuBold className="w-5 h-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          activeKey={editor.isActive('italic')}
        >
          <LuItalic className="w-5 h-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          activeKey={editor.isActive('underline')}
        >
          <LuUnderline className="w-5 h-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          activeKey={editor.isActive('strike')}
        >
          <LuStrikethrough className="w-5 h-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          activeKey={editor.isActive('heading', { level: 2 })}
        >
          <LuHeading2 className="w-5 h-5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          activeKey={editor.isActive('blockquote')}
        >
          <LuQuote className="w-5 h-5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          activeKey={editor.isActive('bulletList')}
        >
          <LuList className="w-5 h-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          activeKey={editor.isActive('orderedList')}
        >
          <LuListOrdered className="w-5 h-5" />
        </ToolbarButton>

        <div>
          {editor.isActive('link') ? (
            <ToolbarButton
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().unsetLink().run();
              }}
              activeKey={editor.isActive('link')}
            >
              <LuLink className="w-5 h-5" />
            </ToolbarButton>
          ) : (
            <ToolbarButton
              onClick={(e) => {
                e.preventDefault();
                if (setLink) {
                  setLink();
                }
              }}
              disabled={!editor.isActive('link')}
            >
              <LuLink className="w-5 h-5" />
            </ToolbarButton>
          )}
        </div>

        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCodeBlock().run();
          }}
          activeKey={editor.isActive('codeBlock')}
        >
          <LuCode className="w-5 h-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          activeKey={editor.isActive('undo')}
        >
          <LuUndo className="w-5 h-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          activeKey={editor.isActive('redo')}
        >
          <LuRedo className="w-5 h-5" />
        </ToolbarButton>
      </div>
    </div>
  );
};

export default Toolbar;
