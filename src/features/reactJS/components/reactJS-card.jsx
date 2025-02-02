import Editor from "@/components/editor";
import { REACT_EDITOR_CONFIG } from "../constants";
import { useEffect, useState } from "react";
import useScrollToHash from "@/hooks/use-hash-location";
import { loadContent } from "@/action/load-content";

const ReactJSCard = () => {
  const [note, setNote] = useState({
    loading: true,
    data: null,
  });
  useScrollToHash();

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await loadContent(
          REACT_EDITOR_CONFIG.filePath,
          REACT_EDITOR_CONFIG.fileName
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
        path={REACT_EDITOR_CONFIG.filePath}
        name={REACT_EDITOR_CONFIG.fileName}
        note={note.data}
      />
    </main>
  );
};

export default ReactJSCard;
