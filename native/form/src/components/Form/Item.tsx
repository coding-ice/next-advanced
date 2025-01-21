import React, { useContext, useEffect } from 'react';

import { FormContext } from './FormContext';

interface FormItemProps {
  label?: string | null;
  name?: string;
  children: any;
}

const FormItem: React.FC<FormItemProps> = ({ label, name, children }) => {
  const { fields, setFields } = useContext(FormContext);

  useEffect(() => {
    if (name && !fields[name]) {
      setFields((prev: Record<string, any>) => ({ ...prev, [name]: '' }));
    }
  }, []);

  const getFieldValue = (name?: string) => {
    if (!name) return;
    return fields[name];
  };

  const cloneChildren = React.cloneElement(children, {
    value: getFieldValue(name),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (name) {
        setFields((prev: Record<string, any>) => ({ ...prev, [name]: e.target.value }));
      }
    },
  });

  return <div className="form-item">{cloneChildren}</div>;
};

export default FormItem;
