import React from "react";
import { Alert, Button } from "flowbite-react";
import { HiInformationCircle, HiEye } from "react-icons/hi";

export default {
  example: AlertExample,
  default: AlertDefault,
  with_icon: AlertWithIcon,
  dimissing: AlertDimissing,
  border_accent: AlertBorderAccent,
  additional_content: AlertWithAdditionalContent,
}

// ------------------
// All example codes
// ------------------

function AlertExample() {
  return (
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

function AlertDefault() {
  return (
    <div className="space-y-2">
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
    </div>
  )
}

function AlertWithIcon() {
  return (
    <Alert color="info" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  )
}

function AlertDimissing() {
  return (
    <Alert color="info" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  )
}

function AlertBorderAccent() {
  return (
    <Alert color="info" icon={HiInformationCircle} onDismiss={() => alert('Alert dismissed!')}>
      <div className="ml-3 text-sm font-medium text-blue-700">
        A simple info alert with an <a href="#" className="font-semibold underline hover:text-blue-800">example link</a>. Give it a click if you like.
      </div>
    </Alert>
  ) 
}

function AlertWithAdditionalContent() {
  return (
    <Alert
      color="info"
      icon={HiInformationCircle}
      additionalContent={
        <>
          <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
            More info about this info alert goes here. This example text 
            is going to run a bit longer so that you can see how spacing 
            within an alert works with this kind of content.
          </div>
          <div className="flex gap-2">
            <Button>
              <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
              View more
            </Button>
            <Button color="failure">Dismiss</Button>
          </div>
        </>
      }
    >
      <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
        This is a info alert
      </h3>
    </Alert>
  )
}