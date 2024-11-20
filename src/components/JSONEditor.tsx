import React, { useState } from "react";
import { FormSchema } from "../interfaces/formSchema";
import MonacoEditor from "@monaco-editor/react";

interface JSONEditorProps {
  onSchemaChange: (schema: FormSchema) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onSchemaChange }) => {
  const [jsonValue, setJsonValue] = useState<string>("{}");
  const [error, setError] = useState<string | null>(null);

  const handleEditorChange = (value: string | undefined) => {
    setJsonValue(value || "");
    try {
      const parsedSchema = JSON.parse(value || "");
      onSchemaChange(parsedSchema);
      setError(null);
    } catch (e) {
      setError("Invalid JSON syntax");
    }
  };

  return (
    <div className="h-full p-4 bg-gray-50">
      <h2 className="text-lg font-semibold">JSON Editor</h2>
      <MonacoEditor
        height="80vh"
        language="json"
        value={jsonValue}
        onChange={handleEditorChange}
        options={{ automaticLayout: true }}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
