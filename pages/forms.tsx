import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from '../src';
import type { CodeExample } from './demo';
import DemoPage from './demo';

const FormsPage: FC = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  const examples: CodeExample[] = [
    {
      title: 'Form example',
      code: (
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      ),
    },
    {
      title: 'Input Sizing',
      code: (
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Small input" />
            </div>
            <TextInput id="small" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Base input" />
            </div>
            <TextInput id="base" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Large input" />
            </div>
            <TextInput id="large" type="text" sizing="lg" />
          </div>
        </div>
      ),
    },
    {
      title: 'Disabled inputs',
      code: (
        <div className="flex flex-col gap-4">
          <Label htmlFor="disabledInput1">API token</Label>
          <TextInput type="text" id="disabledInput1" placeholder="Disabled input" disabled />
          <Label htmlFor="disabledInput2">Personal access token</Label>
          <TextInput type="text" id="disabledInput2" placeholder="Disabled readonly input" disabled readOnly />
        </div>
      ),
    },
    {
      title: 'Shadow inputs',
      code: (
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the&nbsp;
              <Link href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      ),
    },
    {
      title: 'Helper text',
      code: (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email3" value="Your email" />
          </div>
          <TextInput
            id="email3"
            type="email"
            placeholder="name@flowbite.com"
            required
            helperText={
              <>
                We’ll never share your details. Read our
                <Link href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Privacy Policy
                </Link>
                .
              </>
            }
          />
        </div>
      ),
    },
    {
      title: 'Input element with icon on the left side',
      code: (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
        </div>
      ),
    },
    {
      title: 'Input element with icon on the right side',
      code: (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="name@flowbite.com" required />
        </div>
      ),
    },
    {
      title: 'Input element with icon on both sides',
      code: (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput
            id="email4"
            type="email"
            icon={HiMail}
            rightIcon={HiMail}
            placeholder="name@flowbite.com"
            required
          />
        </div>
      ),
    },
    {
      title: 'Input element with addon',
      code: (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput id="username3" placeholder="Bonnie Green" required addon="@" />
        </div>
      ),
    },
    {
      title: 'Success and error validation',
      code: (
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username3" color="success" value="Your name" />
            </div>
            <TextInput
              id="username"
              placeholder="Bonnie Green"
              required
              color="success"
              helperText={
                <>
                  <span className="font-medium">Alright!</span> Username available!
                </>
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username4" color="failure" value="Your name" />
            </div>
            <TextInput
              id="username4"
              placeholder="Bonnie Green"
              required
              color="failure"
              helperText={
                <>
                  <span className="font-medium">Oops!</span> Username already taken!
                </>
              }
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Input colors',
      code: (
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Gray" />
            </div>
            <TextInput id="input-gray" placeholder="Input Gray" required color="gray" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-info" color="info" value="Info" />
            </div>
            <TextInput id="input-info" placeholder="Input Info" required color="info" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-success" color="success" value="Success" />
            </div>
            <TextInput id="input-success" placeholder="Input Success" required color="success" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-failure" color="failure" value="Failure" />
            </div>
            <TextInput id="input-failure" placeholder="Input Failure" required color="failure" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-warning" color="warning" value="Warning" />
            </div>
            <TextInput id="input-warning" placeholder="Input Warning" required color="warning" />
          </div>
        </div>
      ),
    },
    {
      title: 'Textarea',
      code: (
        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>
      ),
    },
    {
      title: 'Select input',
      code: (
        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your country" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
      ),
    },
    {
      title: 'Checkbox',
      code: (
        <div className="flex flex-col gap-4" id="checkbox">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" defaultChecked />
            <Label htmlFor="accept">
              I agree to the&nbsp;
              <Link href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </Link>
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="promotion" />
            <Label htmlFor="promotion">I want to get promotional offers</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="age" />
            <Label htmlFor="age">I am 18 years or older</Label>
          </div>
          <div className="flex gap-2">
            <div className="flex h-5 items-center">
              <Checkbox id="shipping" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="shipping">Free shipping via Flowbite</Label>
              <div className="text-gray-500 dark:text-gray-300">
                <span className="text-xs font-normal">
                  For orders shipped from Flowbite from <span className="font-medium">€ 25</span> in books or&nbsp;
                  <span>€ 29</span> on other categories
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" disabled>
              Eligible for international shipping (disabled)
            </Label>
          </div>
        </div>
      ),
    },
    {
      title: 'Radio',
      code: (
        <fieldset className="flex flex-col gap-4" id="radio">
          <legend>Choose your favorite country</legend>
          <div className="flex items-center gap-2">
            <Radio id="united-state" name="countries" value="USA" defaultChecked />
            <Label htmlFor="united-state">United States</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="germany">Germany</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="spain" name="countries" value="Spain" />
            <Label htmlFor="spain">Spain</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="uk" name="countries" value="United Kingdom" />
            <Label htmlFor="uk">United Kingdom</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="china" name="countries" value="China" disabled />
            <Label htmlFor="china" disabled>
              China (disabled)
            </Label>
          </div>
        </fieldset>
      ),
    },
    {
      title: 'File upload',
      code: (
        <div id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload file" />
          </div>
          <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
        </div>
      ),
    },
    {
      title: 'Toggle Switch',
      code: (
        <div className="flex flex-col gap-4" id="toggle">
          <ToggleSwitch checked={switch1} label="Toggle me" onChange={setSwitch1} />
          <ToggleSwitch checked={switch2} label="Toggle me (checked)" onChange={setSwitch2} />
          <ToggleSwitch checked={false} disabled label="Toggle me (disabled)" onChange={() => undefined} />
        </div>
      ),
    },
    {
      title: 'Range Slider',
      code: (
        <div className="flex flex-col gap-4">
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
            <RangeSlider id="disabled-range" disabled={true} />
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
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default FormsPage;
