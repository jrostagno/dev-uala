import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  error: string;
  onClick?: () => void;
}

const ErrorMessage = (props: Props) => {
  const {
    error,
    onClick = () => {
      return;
    },
  } = props;
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4 text-center">
      <h2 className="text-xl font-semibold text-red-600">Oops 😢</h2>
      <p className="mt-2 text-gray-600">{error}</p>

      <Button variant="default" className="px-4 py-2 mt-4" onClick={onClick}>
        Reintentar
      </Button>
    </div>
  );
};

export default ErrorMessage;
