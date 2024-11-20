import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormSchema, FormField } from "../interfaces/formSchema";

interface FormPreviewProps {
  schema: FormSchema | null;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "text":
      case "email":
        return (
          <input
            {...register(field.id, { required: field.required, pattern: field.validation?.pattern })}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full border rounded p-2"
          />
        );
      case "select":
        return (
          <select {...register(field.id, { required: field.required })} className="w-full border rounded p-2">
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div>
            {field.options?.map(option => (
              <label key={option.value} className="block">
                <input {...register(field.id, { required: field.required })} type="radio" value={option.value} />
                {option.label}
              </label>
            ))}
          </div>
        );
      case "textarea":
        return (
          <textarea
            {...register(field.id, { required: field.required })}
            placeholder={field.placeholder}
            className="w-full border rounded p-2"
          ></textarea>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full p-4 bg-gray-50">
      <h2 className="text-lg font-semibold">{schema?.formTitle || "Form Preview"}</h2>
      <p>{schema?.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {schema?.fields.map((field) => (
          <div key={field.id}>
            <label className="block font-medium">{field.label}</label>
            {renderField(field)}
            {errors[field.id] && <p className="text-red-500">This field is required</p>}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;
