import { createContext, useState } from 'react';

interface PublishContextState {
  currentStep: number;
  formStates: {
    [key: string]: {
      isValid: boolean;
      isSubmitting: boolean;
      error?: string;
    };
  };
}

interface PublishContextActions {
  handleNext: () => void;
  handleFormSubmit: (step: string, isValid: boolean) => void;
  handleFormError: (step: string, error: string) => void;
}

const PublishContext = createContext<
  PublishContextState & PublishContextActions
>({
  currentStep: 0,
  formStates: {},
  handleNext: () => {},
  handleFormSubmit: () => {},
  handleFormError: () => {},
});

const PublishProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formStates, setFormStates] = useState<
    PublishContextState['formStates']
  >({
    step1: { isValid: false, isSubmitting: false },
    step2: { isValid: false, isSubmitting: false },
    step3: { isValid: false, isSubmitting: false },
    // ...
  });
  const steps = [
    { id: '1', name: 'Información General' },
    { id: '2', name: 'Detalles del curso' },
    { id: '3', name: 'Módulos y lecciones' },
    { id: '4', name: 'Promociones' },
  ];
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setFormStates((prevFormStates) => ({
        ...prevFormStates,
        [`step${currentStep + 1}`]: { isValid: false, isSubmitting: false },
      }));
    }
  };

  const handleFormSubmit = (step: string, isValid: boolean) => {
    setFormStates((prevFormStates) => ({
      ...prevFormStates,
      [step]: { isValid, isSubmitting: true },
    }));
  };

  const handleFormError = (step: string, error: string) => {
    setFormStates((prevFormStates) => ({
      ...prevFormStates,
      [step]: { isValid: false, isSubmitting: false, error },
    }));
  };

  return (
    <PublishContext.Provider
      value={{
        currentStep,
        formStates,
        handleNext,
        handleFormSubmit,
        handleFormError,
      }}
    >
      {children}
    </PublishContext.Provider>
  );
};

export { PublishContext, PublishProvider };
