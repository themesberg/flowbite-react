import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import ResizeObserver from 'resize-observer-polyfill';
import { afterEach } from 'vitest';

afterEach(() => cleanup());

// eslint-disable-next-line no-undef
global.ResizeObserver = ResizeObserver;
