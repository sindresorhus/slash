import {expectType} from 'tsd';
import slash = require('.');

expectType<string>(slash('foo\\bar'));
