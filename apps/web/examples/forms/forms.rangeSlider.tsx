import { Label, RangeSlider } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Label, RangeSlider } from "flowbite-react";

export function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-1 block">
          <Label htmlFor="default-range" value="Default" />
        </div>
        <RangeSlider id="default-range" />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="disbaled-range" value="Disabled" />
        </div>
        <RangeSlider id="disabled-range" disabled />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="sm-range" value="Small" />
        </div>
        <RangeSlider id="sm-range" sizing="sm" />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="md-range" value="Medium" />
        </div>
        <RangeSlider id="md-range" sizing="md" />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="lg-range" value="Large" />
        </div>
        <RangeSlider id="lg-range" sizing="lg" />
      </div>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-1 block">
          <Label htmlFor="default-range" value="Default" />
        </div>
        <RangeSlider id="default-range" />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="disbaled-range" value="Disabled" />
        </div>
        <RangeSlider id="disabled-range" disabled />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="sm-range" value="Small" />
        </div>
        <RangeSlider id="sm-range" sizing="sm" />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="md-range" value="Medium" />
        </div>
        <RangeSlider id="md-range" sizing="md" />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="lg-range" value="Large" />
        </div>
        <RangeSlider id="lg-range" sizing="lg" />
      </div>
    </div>
  );
}

export const rangeSlider: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "forms/forms.rangeSlider.tsx",
  component: <Component />,
};
