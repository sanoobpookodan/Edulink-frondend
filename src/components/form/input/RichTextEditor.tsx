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
  disabled?: boolean;
  success?: boolean;
  error?: string;
  onChange?: (e: { target: { name: string; value: string } }) => void;
  onBlur?: (e: any) => void;
}

export default function RichTextEditor({
  id,
  name,
  className = "",
  value = "",
  onChange,
  disabled = false,
  success = false,
  error,
  ...props
}: Props) {
  const editor = useEditor({
    extensions,
    immediatelyRender: false,
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange && onChange({ target: { name: name, value: html } });
    },
    onBlur: props.onBlur,
  });

  let inputClasses = `h-20 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${className}`;

  // new classes added for the different states
  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (error) {
    inputClasses += ` text-error-800 border-error-500 focus:ring-3 focus:ring-error-500/10  dark:text-error-400 dark:border-error-500`;
  } else if (success) {
    inputClasses += ` text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300  dark:text-success-400 dark:border-success-500`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
  }

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
      {error && <p className={`mt-1.5 text-xs ${"text-error-500"}`}>{error}</p>}
    </>
  );
}
