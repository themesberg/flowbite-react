import type { FC } from 'react';
import { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { Button, Checkbox, FileInput, Label, Radio, Select, Textarea, TextInput, ToggleSwitch } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

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
              I agree with the{' '}
              <a href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </a>
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
                We’ll never share your details. Read our{' '}
                <a href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Privacy Policy
                </a>
                .
              </>
            }
          />
        </div>
      ),
    },
    {
      title: 'Input element with icon',
      code: (
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput id="email4" type="email" placeholder="name@flowbite.com" required icon={HiMail} />
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
              <Label htmlFor="username3" color="green" value="Your name" />
            </div>
            <TextInput
              id="username"
              placeholder="Bonnie Green"
              required
              color="green"
              helperText={
                <>
                  <span className="font-medium">Alright!</span> Username available!
                </>
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username4" color="red" value="Your name" />
            </div>
            <TextInput
              id="username4"
              placeholder="Bonnie Green"
              required
              color="red"
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
              I agree to the{' '}
              <a href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </a>
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
                  For orders shipped from Flowbite from <span className="font-medium">€ 25</span> in books or{' '}
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
  ];

  return <DemoPage examples={examples} />;
};

export default FormsPage;
