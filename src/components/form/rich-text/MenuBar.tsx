"use client";

import type { Editor } from "@tiptap/core";
import { useEditorState } from "@tiptap/react";
import { menuBarStateSelector } from "./menuBarState";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const editorState = useEditorState({
    editor,
    selector: menuBarStateSelector,
  });

  if (!editor) return null;

  const baseBtn =
    "px-3 py-1.5 text-sm border rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed";

  const active = "bg-blue-600 text-white border-blue-600";

  const inactive =
    "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700";

  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editorState.canBold}
        className={`${baseBtn} ${editorState.isBold ? active : inactive}`}
      >
        Bold
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editorState.canItalic}
        className={`${baseBtn} ${editorState.isItalic ? active : inactive}`}
      >
        Italic
      </button>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editorState.canStrike}
        className={`${baseBtn} ${editorState.isStrike ? active : inactive}`}
      >
        Strike
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editorState.canCode}
        className={`${baseBtn} ${editorState.isCode ? active : inactive}`}
      >
        Code
      </button>

      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={`${baseBtn} ${inactive}`}
      >
        Clear marks
      </button>

      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={`${baseBtn} ${inactive}`}
      >
        Clear nodes
      </button>

      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${baseBtn} ${editorState.isParagraph ? active : inactive}`}
      >
        Paragraph
      </button>

      {[1, 2, 3, 4, 5, 6].map((level) => (
        <button
          key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          className={`${baseBtn} ${
            editorState[`isHeading${level}` as keyof typeof editorState]
              ? active
              : inactive
          }`}
        >
          H{level}
        </button>
      ))}

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${baseBtn} ${editorState.isBulletList ? active : inactive}`}
      >
        Bullet
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${baseBtn} ${editorState.isOrderedList ? active : inactive}`}
      >
        Ordered
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${baseBtn} ${editorState.isCodeBlock ? active : inactive}`}
      >
        Code block
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${baseBtn} ${editorState.isBlockquote ? active : inactive}`}
      >
        Quote
      </button>

      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={`${baseBtn} ${inactive}`}
      >
        HR
      </button>

      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={`${baseBtn} ${inactive}`}
      >
        Break
      </button>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editorState.canUndo}
        className={`${baseBtn} ${inactive}`}
      >
        Undo
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editorState.canRedo}
        className={`${baseBtn} ${inactive}`}
      >
        Redo
      </button>
    </div>
  );
};
