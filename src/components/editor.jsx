import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

const Editor = ({ path, name, note }) => {
  const isDev = import.meta.env.DEV;
  const editor = useCreateBlockNote({
    initialContent: note ?? undefined,
  });

  // ✅ Save data on change
  const handleChange = async (data) => {
    const blocks = data.document;
    if (!blocks) return;

    try {
      const response = await fetch(
        `http://localhost:5000/save?path=${path}&name=${name}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blocks),
        }
      );

      await response.json();
    } catch (error) {
      console.error("Error saving file:", error);
    }
  };

  return (
    <BlockNoteView
      editor={editor}
      theme="light"
      editable={isDev}
      onChange={handleChange}
    />
  );
};

export default Editor;
