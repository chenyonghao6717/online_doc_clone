"use client";

import FontFamily from "@tiptap/extension-font-family";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import {
  useEditor,
  EditorContent,
  Editor as TiptapEditor,
} from "@tiptap/react";

import { useEditorStore } from "@/store/use-editor-store";
import Underline from "@tiptap/extension-underline";

export const Editor = () => {
  const { setEditor } = useEditorStore();
  const updateEditor = ({ editor }: { editor: TiptapEditor | null }) =>
    setEditor(editor);

  const editor = useEditor({
    // for the global access of the editor instance from other componenets
    onCreate: updateEditor,
    onDestroy() {
      setEditor(null);
    },
    onUpdate: updateEditor,
    onSelectionUpdate: updateEditor,
    onTransaction: updateEditor,
    onFocus: updateEditor,
    onBlur: updateEditor,
    onContentError: updateEditor,
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px",
        class:
          "focus-outline-none bg-white border print:border-0 border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pd-10 cursor-text",
      },
    },
    extensions: [
      FontFamily,
      Image,
      ImageResize,
      StarterKit,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskItem.configure({ nested: true }),
      TaskList,
      TextStyle,
      Underline,
    ],
    content: `
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th colspan="3">Description</th>
          </tr>
          <tr>
            <td>Cyndi Lauper</td>
            <td>Singer</td>
            <td>Songwriter</td>
            <td>Actress</td>
          </tr>
        </tbody>
      </table>
    `,
  });
  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
