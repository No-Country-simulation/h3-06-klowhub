import { fn } from '@storybook/test';
import * as actual from '../../src/_lib/actions/session';

export * from '../../src/_lib/actions/session';
export const getSession = fn(actual.getSession).mockName('getSession');
