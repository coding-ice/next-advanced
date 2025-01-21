import { PropsWithChildren, useState } from 'react';

import { FormContext } from './FormContext';
import FormItem from './Item';

interface ComputedComponent {
  Item: typeof FormItem;
}

interface FormProps extends PropsWithChildren {
  initialValues?: Record<string, any>;
  onFinish: (values: Record<string, any>) => void;
}

const Form: React.FC<FormProps> & ComputedComponent = ({ onFinish, children, initialValues = {} }) => {
  const [fields, setFields] = useState<Record<string, any>>(initialValues);

  return (
    <FormContext.Provider value={{ fields, setFields }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          onFinish(fields);
        }}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

Form.Item = FormItem;

export default Form;
