import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";
import { FormSchema } from "./interfaces/formSchema";

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);

  return (
    <div className="h-screen flex">
      <div className="w-1/2 border-r">
        <JSONEditor onSchemaChange={setSchema} />
      </div>
      <div className="w-1/2">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
