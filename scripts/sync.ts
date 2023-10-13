#!/usr/bin/env zx
import { fetch } from 'zx';

const requestUrl = 'https://npmmirror.com/sync/eslint-config-rascal';

const pkgs = ['base', 'ts', 'vue', 'vue2', 'react'];

const requestUrls = pkgs.map(item => requestUrl + (item ? `-${item}` : ''));

async function fetchData() {
  await Promise.all(requestUrls.map(url => fetch(url)));
}

fetchData();
