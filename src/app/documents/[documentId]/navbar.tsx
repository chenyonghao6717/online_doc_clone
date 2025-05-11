"use client";

import Image from "next/image";
import Link from "next/link";
import { DocumentInput } from "./document-input";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";

const FileMenubarMenu = () => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
        File
      </MenubarTrigger>
      {/* the print button is inside this menubar so it stays opened after print is triggered */}
      <MenubarContent className="print:hidden">
        <MenubarSub>
          <MenubarSubTrigger>
            <FileIcon className="size-4 mr-2" />
            Save
          </MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>
              <FileJsonIcon className="size-4 mr-2" />
              JSON
            </MenubarItem>
            <MenubarItem>
              <GlobeIcon className="size-4 mr-2" />
              HTML
            </MenubarItem>
            <MenubarItem>
              <BsFilePdf className="size-4 mr-2" />
              PDF
            </MenubarItem>
            <MenubarItem>
              <FileTextIcon className="size-4 mr-2" />
              Text
            </MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem>
          <FilePlusIcon className="size-4 mr-2" />
          New Document
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <FilePenIcon className="size-4 mr-2" />
          Rename
        </MenubarItem>
        <MenubarItem>
          <TrashIcon className="size-4 mr-2" />
          Remove
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem onClick={() => window.print()}>
          <PrinterIcon className="size-4 mr-2" />
          Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

const EditMenubarMenu = () => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
        Edit
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <Undo2Icon className="size-4 mr-2" />
          Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <Redo2Icon className="size-4 mr-2" />
          Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

const InsertMenubarMenu = () => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
        Insert
      </MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Table</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>1 x 1</MenubarItem>
            <MenubarItem>2 x 2</MenubarItem>
            <MenubarItem>3 x 3</MenubarItem>
            <MenubarItem>4 x 4</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
      </MenubarContent>
    </MenubarMenu>
  );
};

const FormatMenubarMenu = () => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
        Format
      </MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>
            <TextIcon className="size-4 mr-2" />
            Text
          </MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>
              <BoldIcon className="size-4 mr-2" />
              Bold <MenubarShortcut>Ctrl+B</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <ItalicIcon className="size-4 mr-2" />
              Italic <MenubarShortcut>Ctrl+I</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <UnderlineIcon className="size-4 mr-2" />
              Underline <MenubarShortcut>Ctrl+U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <StrikethroughIcon className="size-4 mr-2" />
              <span className="mr-[1em]">Strikethrough</span>{" "}
              <MenubarShortcut>Ctrl+S</MenubarShortcut>
            </MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem>
          <RemoveFormattingIcon className="size-4 mr-2" />
          Clear formatting
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logoipsum.svg" alt="Logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <FileMenubarMenu />
              <EditMenubarMenu />
              <InsertMenubarMenu />
              <FormatMenubarMenu />
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};
