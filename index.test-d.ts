import {expectType} from 'tsd';
import slash from './index.js';

expectType<string>(slash('foo\\bar'));
