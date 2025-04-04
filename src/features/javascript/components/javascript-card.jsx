import useScrollToHash from "@/hooks/use-hash-location";
import Editor from "@/components/editor";
import { useEffect, useState } from "react";
import { EDITOR_CONFIG } from "../constants";
import { loadContent } from "@/action/load-content";

const JavaScriptCard = () => {
  const [note, setNote] = useState({
    loading: true,
    data: null,
  });
  useScrollToHash();

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await loadContent(
          EDITOR_CONFIG.filePath,
          EDITOR_CONFIG.fileName
        );
        if (result.data) {
          setNote({
            data: result.data,
            loading: false,
          });
        }
      } catch (error) {
        console.log("Error loading file:", error);
      } finally {
        setNote((preVal) => ({
          ...preVal,
          loading: false,
        }));
      }
    };

    loadData();
  }, []);

  if (note.loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Editor
        path={EDITOR_CONFIG.filePath}
        name={EDITOR_CONFIG.fileName}
        note={note.data}
      />
    </main>
  );
};

export default JavaScriptCard;
