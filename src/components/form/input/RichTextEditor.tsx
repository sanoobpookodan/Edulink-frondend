import "@/styles/rich-text.scss";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "../rich-text/MenuBar";

const extensions = [TextStyleKit, StarterKit];

interface Props {
  id?: string;
  name?: string;
  className?: string;
  value?: string;
  onChange?: (e: { target: { name: string; value: string } }) => void;
}

export default function RichTextEditor({
  id,
  name,
  className = "",
  value = "",
  onChange,
}: Props) {
  const editor = useEditor({
    extensions,
    immediatelyRender: false,
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange && onChange({ target: { name: name, value: html } });
    },
  });

  let inputClasses = `h-20 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${className}`;
  inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;

  return (
    <>
      <MenuBar editor={editor} />
      <div
        onClick={() => editor?.chain().focus().run()}
        className="w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500"
      >
        <EditorContent
          name={name}
          editor={editor}
          id={id}
          className="min-h-[150px] px-4 py-3 text-sm text-gray-800 dark:text-white/90 focus:outline-none"
        />
      </div>
    </>
  );
}
