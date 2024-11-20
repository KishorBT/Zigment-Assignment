import React from "react";
import { FormField } from "../interfaces/formSchema";

interface FieldRendererProps {
  field: FormField;
  register: any;
  errors: any;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field, register, errors }) => {
  // Similar logic to renderField in FormPreview
  return <div>{/* Render field logic here */}</div>;
};

export default FieldRenderer;
