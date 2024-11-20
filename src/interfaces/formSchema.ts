export interface FormField {
    id: string;
    type: "text" | "email" | "select" | "radio" | "textarea";
    label: string;
    placeholder?: string;
    required?: boolean;
    validation?: {
      pattern?: RegExp; // Ensure this is a RegExp
    };
    options?: { value: string; label: string }[]; // For select and radio
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription?: string;
    fields: FormField[];
  }
  
  