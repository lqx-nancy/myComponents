import React, { useCallback, useEffect, useRef, useState, useContext, } from "react";
import "./Form.scss";
import '../Multiselect/mutiselect'

export interface FormRule {
  required?: boolean;
  message?: string;
  validator?: (value: any) => boolean | string;
  min?: number;
}

export interface FormRules {
  [key: string]: FormRule[];
}

export interface FormContextValue {
  model: Record<string, any>;
  rules: FormRules;
  ifError: (name: string, error: string) => void;
}

export interface FormProps {
  children: React.ReactNode;
  model: Record<string, any>;
  rules?: FormRules;
  onSubmit: (value: any) => void;
  onReset: () => void;
}

export interface FormItemProps {
  name: string;
  label?: string;
  children: React.ReactNode;
}

export const FormContext = React.createContext<FormContextValue | null>(null);

export function Form({
  children,
  model,
  rules = {},
  onSubmit,
  onReset,
}: FormProps) {
  const ifError = useCallback((name: string, error: string) => {
    // 可在这里收集表单错误
    console.log(name, error)
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(model);
  };


  return (
    <FormContext.Provider value={{ model, rules, ifError }}>
      <form className="form" onSubmit={handleSubmit} onReset={onReset}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

export function FormItem({ name, label, children }: FormItemProps) {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("FormItem must be used within a Form");
  }

  const { model, rules, ifError } = context;
  const value = model[name];
  const [error, setError] = useState("");
  const ruleList = rules[name] || [];
  const prevalue = useRef(value);

  useEffect(() => {
    if (prevalue.current === value) {
      return;
    }

    prevalue.current = value;
    let errMsg = "";

    for (const rule of ruleList) {
      if (rule.required && (value === undefined || value === "")) {
        errMsg = rule.message || "不能为空";
        break;
      }

      if (typeof value === "string") {
        if (rule.min && value.length < rule.min) {
          errMsg = rule.message || `最少${rule.min}位`;
          break;
        }
      }

      if (rule.validator) {
        const res = rule.validator(value);
        errMsg =
          typeof res === "string"
            ? res
            : res
              ? ""
              : rule.message || "格式错误";

        if (errMsg) break;
      }
    }

    setError(errMsg);
    ifError(name, errMsg);
  }, [value, ruleList, name, ifError]);

  return (
    <div className="form-item">
      {label && <label>{label}</label>}
      <div>{children}</div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default { Form, FormItem };
