import React from "react";
import { Alert } from "flowbite-react";

export function AlertExample() {
  return (
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

export function AlertDefault() {
  return (
    <>
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
    <Alert color="failure">
      <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
    </Alert>
    <Alert color="success">
      <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
    </Alert>
    <Alert color="warning">
      <span className="font-medium">Warning alert!</span> Change a few things up and try submitting again.
    </Alert>
    <Alert color="gray">
      <span className="font-medium">Dark alert!</span> Change a few things up and try submitting again.
    </Alert>
    </>
  )
}