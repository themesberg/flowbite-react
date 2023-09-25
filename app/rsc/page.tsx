import { Alert, FileInput, Flowbite } from '~/src';

export default function ServerComponent() {
  console.log('RSC powar');

  return (
    <Flowbite theme={{ theme: { alert: { rounded: 'rounded-xl' } } }}>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="textlg">Welcome to RSC, brah</h1>
        <Alert>alert 1</Alert>
        <Alert theme={{ rounded: 'rounded-sm' }}>alert 2 (custom theme)</Alert>
        <FileInput />
      </div>
    </Flowbite>
  );
}
