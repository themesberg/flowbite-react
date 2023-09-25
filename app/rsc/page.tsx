import { Flowbite } from '~/src';
import { Alert } from '~/src/components/Alert';
import { FileInput } from '~/src/components/FileInput';

export default function ServerComponent() {
  console.log('RSC powar');

  return (
    <Flowbite theme={{ theme: { alert: { rounded: '4xl' } } }}>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="textlg">Welcome to RSC, brah</h1>
        <Alert>alert</Alert>
        <FileInput />
      </div>
    </Flowbite>
  );
}
