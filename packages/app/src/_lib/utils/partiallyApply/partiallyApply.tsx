import { ComponentType, Ref } from "react";

export const partiallyApply = <T extends object>(
  Component: ComponentType<T>,
  partialProps: Partial<T>,
) => {
  return (props: T, ref: Ref<T>) => {
    return <Component ref={ref} {...props} {...partialProps} />;
  };
};

// Use Example:
// export const BigSuccessButton = partialApply(Button, {variant: "primary", size: "big" })
